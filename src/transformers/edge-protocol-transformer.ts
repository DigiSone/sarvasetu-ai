/**
 * Edge Protocol Transformer for Sarvasetu Engine
 * Runtime: Cloudflare Workers (V8 JavaScript Engine)
 * Constraints: Max 128MB Memory per execution, zero-copy streaming, sub-10ms processing latency.
 */

export interface Env {
  UP_SDC_SOAP_GATEWAY_URL: string;
  LEGACY_NIC_SOAP_GATEWAY_URL: string;
  EDGE_SHARED_SECRET: string;
  ENVIRONMENT: 'production' | 'staging';
}

interface FlattenedRecord {
  [key: string]: string | number | boolean | null | Array<string | number | boolean | null | Record<string, unknown>>;
}

interface TransformationResult {
  status: 'SUCCESS' | 'TRANSFORMATION_ERROR' | 'UPSTREAM_FAULT';
  statusCode: number;
  data?: FlattenedRecord | FlattenedRecord[];
  error?: {
    code: string;
    message: string;
    upstreamFaultString?: string;
  };
  metrics: {
    ingressXmlBytes: number;
    egressJsonBytes: number;
    processingTimeMs: number;
  };
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const startTime = performance.now();

    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'METHOD_NOT_ALLOWED', message: 'Only POST transactions supported.' }),
        { status: 405, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const clientAuth = request.headers.get('X-Sarvasetu-Edge-Token');
    if (!clientAuth || clientAuth !== env.EDGE_SHARED_SECRET) {
      return new Response(
        JSON.stringify({ error: 'UNAUTHORIZED_EDGE_ACCESS', message: 'Invalid or missing edge credential.' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const routeTarget = request.headers.get('X-Target-Department-Route');
    let targetEndpoint: string;

    switch (routeTarget) {
      case 'UP_REVENUE_BHULEKH':
        targetEndpoint = env.UP_SDC_SOAP_GATEWAY_URL;
        break;
      case 'EPFO_CENTRAL_CORE':
        targetEndpoint = env.LEGACY_NIC_SOAP_GATEWAY_URL;
        break;
      default:
        return new Response(
          JSON.stringify({ error: 'INVALID_ROUTING_TARGET', message: `Unknown destination target: ${routeTarget}` }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    try {
      const requestPayload = await request.json() as Record<string, unknown>;
      const soapAction = String(request.headers.get('X-Legacy-SOAP-Action') || '');
      const legacySoapEnvelope = constructSoapEnvelope(soapAction, requestPayload);

      const legacyResponse = await fetch(targetEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',
          'SOAPAction': `"${soapAction}"`,
          'User-Agent': 'Sarvasetu-Edge-Transformer/3.0.0 (India; Cloudflare Workers)',
          'Connection': 'keep-alive',
        },
        body: legacySoapEnvelope,
      });

      const rawXmlResponse = await legacyResponse.text();
      const ingressBytes = new TextEncoder().encode(rawXmlResponse).length;

      const transformResult = parseAndFlattenSoapXml(rawXmlResponse, ingressBytes, startTime);
      const egressBody = JSON.stringify(transformResult);
      const egressBytes = new TextEncoder().encode(egressBody).length;

      transformResult.metrics.egressJsonBytes = egressBytes;
      cleanLocalScopeVariables(rawXmlResponse, legacySoapEnvelope);

      return new Response(egressBody, {
        status: transformResult.statusCode,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
          'X-Execution-Latency-Ms': transformResult.metrics.processingTimeMs.toFixed(2),
          'X-Payload-Compression-Ratio': (ingressBytes / (egressBytes || 1)).toFixed(2),
        },
      });
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown Edge Transformation Exception';
      const executionTime = performance.now() - startTime;

      return new Response(
        JSON.stringify({
          status: 'TRANSFORMATION_ERROR',
          statusCode: 500,
          error: { code: 'EDGE_INTERNAL_FAILURE', message: errorMsg },
          metrics: { ingressXmlBytes: 0, egressJsonBytes: 0, processingTimeMs: executionTime },
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  },
};

function constructSoapEnvelope(action: string, payload: Record<string, unknown>): string {
  const paramsXml = Object.entries(payload)
    .map(([key, value]) => `<${key}>${sanitizeXmlEntities(String(value))}</${key}>`)
    .join('');

  return `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
               xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header>
    <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <wsse:Timestamp Id="Timestamp-${Date.now()}">
        <wsu:Created xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">${new Date().toISOString()}</wsu:Created>
      </wsse:Timestamp>
    </wsse:Security>
  </soap:Header>
  <soap:Body>
    <${action} xmlns="http://gateway.sarvasetu.gov.in/legacy/services">
      ${paramsXml}
    </${action}>
  </soap:Body>
</soap:Envelope>`.trim();
}

function parseAndFlattenSoapXml(xml: string, ingressBytes: number, startTime: number): TransformationResult {
  if (xml.includes(':Fault>') || xml.includes('<Fault>')) {
    const faultMatch = xml.match(/<faultstring>(.*?)<\/faultstring>/s) ||
                       xml.match(/<soap:Text[^>]*>(.*?)<\/soap:Text>/s);
    const faultReason = faultMatch ? faultMatch[1].trim() : 'Unspecified Upstream Legacy SDC Fault';

    return {
      status: 'UPSTREAM_FAULT',
      statusCode: 502,
      error: {
        code: 'SOAP_FAULT_RETURNED',
        message: 'Legacy State Data Center rejected the request or threw an unhandled fault.',
        upstreamFaultString: faultReason,
      },
      metrics: {
        ingressXmlBytes: ingressBytes,
        egressJsonBytes: 0,
        processingTimeMs: performance.now() - startTime,
      },
    };
  }

  const bodyStartIdx = xml.indexOf(':Body>');
  const bodyEndIdx = xml.lastIndexOf(':Body>');
  let coreDataBlock = xml;

  if (bodyStartIdx !== -1 && bodyEndIdx !== -1) {
    const rawInner = xml.substring(bodyStartIdx + 6, bodyEndIdx - 2);
    coreDataBlock = rawInner.substring(rawInner.indexOf('>') + 1);
  }

  const cleanTokens = coreDataBlock
    .replace(/<\?xml[^>]*\?>/gi, '')
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1')
    .replace(/<(\/|\s*)([a-zA-Z0-9_\-]+):/g, '<$1')
    .replace(/\s+xmlns(:[a-zA-Z0-9_\-]+)?="[^"]*"/gi, '')
    .trim();

  const intermediateObject = tokenizeAndParse(cleanTokens);
  const normalizedData = flattenObjectTree(intermediateObject);

  return {
    status: 'SUCCESS',
    statusCode: 200,
    data: normalizedData,
    metrics: {
      ingressXmlBytes: ingressBytes,
      egressJsonBytes: 0,
      processingTimeMs: performance.now() - startTime,
    },
  };
}

function tokenizeAndParse(xmlText: string): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  const tagRegex = /<([a-zA-Z0-9_\-]+)([^>]*)>([^<]*)<\/\1>|<([a-zA-Z0-9_\-]+)([^>]*)\/>/g;
  let match: RegExpExecArray | null;

  while ((match = tagRegex.exec(xmlText)) !== null) {
    const tagName = match[1] || match[4];
    const tagContent = match[3] ? match[3].trim() : null;

    if (!tagName) continue;

    const parsedValue = tagContent !== null ? castPrimitiveTypes(tagContent) : null;

    if (result[tagName] !== undefined) {
      if (Array.isArray(result[tagName])) {
        (result[tagName] as unknown[]).push(parsedValue);
      } else {
        result[tagName] = [result[tagName], parsedValue];
      }
    } else {
      result[tagName] = parsedValue;
    }
  }

  if (Object.keys(result).length === 0 && xmlText.includes('<')) {
    const nestedMatcher = /<([a-zA-Z0-9_\-]+)>([\s\S]*?)<\/\1>/g;
    let subMatch: RegExpExecArray | null;

    while ((subMatch = nestedMatcher.exec(xmlText)) !== null) {
      const parentTag = subMatch[1];
      const innerXml = subMatch[2];
      const parsedChildren = tokenizeAndParse(innerXml);

      if (result[parentTag] !== undefined) {
        if (Array.isArray(result[parentTag])) {
          (result[parentTag] as unknown[]).push(parsedChildren);
        } else {
          result[parentTag] = [result[parentTag], parsedChildren];
        }
      } else {
        result[parentTag] = parsedChildren;
      }
    }
  }

  return result;
}

function flattenObjectTree(node: unknown): any {
  if (node === null || typeof node !== 'object') {
    return node;
  }

  if (Array.isArray(node)) {
    return node.map((item) => flattenObjectTree(item));
  }

  const keys = Object.keys(node);
  if (keys.length === 1) {
    const singleKey = keys[0];
    const childNode = (node as Record<string, unknown>)[singleKey];
    if (typeof childNode === 'object' && childNode !== null) {
      return flattenObjectTree(childNode);
    }
  }

  const flattened: Record<string, unknown> = {};
  for (const key of keys) {
    const val = (node as Record<string, unknown>)[key];
    flattened[key] = flattenObjectTree(val);
  }

  return flattened;
}

function castPrimitiveTypes(raw: string): string | number | boolean | null {
  if (raw === '' || raw === 'null' || raw === 'nil') return null;
  if (raw.toLowerCase() === 'true') return true;
  if (raw.toLowerCase() === 'false') return false;

  if (!isNaN(Number(raw)) && !raw.startsWith('0') && !raw.includes(' ') && raw.length < 16) {
    return Number(raw);
  }

  return raw;
}

function sanitizeXmlEntities(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function cleanLocalScopeVariables(...targets: unknown[]): void {
  for (let i = 0; i < targets.length; i++) {
    targets[i] = null;
  }
}
