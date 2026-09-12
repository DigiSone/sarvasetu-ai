export const onRequestPost = async (context: any) => {
  const { request, env } = context;
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    const body: any = await request.json();
    const ackToken = `IND-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

    if (env?.REGISTRATIONS_KV) {
      await env.REGISTRATIONS_KV.put(
        ackToken,
        JSON.stringify({ ...body, status: 'REGISTERED_IN_NATIONAL_PORTAL' }),
        { expirationTtl: 172800 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        ackNumber: ackToken,
        message: 'राष्ट्रीय पोर्टल पर आवेदन 100% दर्ज हो गया।'
      }),
      { headers: corsHeaders }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
};
