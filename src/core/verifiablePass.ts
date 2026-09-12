export interface DigitalCitizenPass {
  passId: string;
  name: string;
  maskedId: string;
  verifiedSchemes: string[];
  issuedAt: string;
  validTill: string;
  ecdsaSignature: string;
}

export class VerifiablePassGenerator {
  public static async createOfflinePass(
    name: string,
    maskedId: string,
    schemes: string[]
  ): Promise<DigitalCitizenPass> {
    const passData = {
      passId: `GOV-PASS-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name,
      maskedId,
      verifiedSchemes: schemes,
      issuedAt: new Date().toISOString().split('T')[0],
      validTill: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };

    const payloadString = JSON.stringify(passData);
    const encoder = new TextEncoder();
    const hash = await crypto.subtle.digest('SHA-256', encoder.encode(payloadString));
    const signature = Array.from(new Uint8Array(hash))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    return {
      ...passData,
      ecdsaSignature: signature
    };
  }
}
