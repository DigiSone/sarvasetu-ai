export const onRequestPost = async (context: any) => {
  const { request, env } = context;
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    const payload: any = await request.json();
    const query = payload.voiceQuery || 'आयुष्मान कार्ड';

    if (env?.GEMINI_API_KEY) {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: `Citizen Request: "${query}". Respond in 2 spoken friendly sentences in Hindi for an illiterate villager.` }] }]
            })
          }
        );
        if (geminiRes.ok) {
          const data: any = await geminiRes.json();
          const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply) {
            return new Response(JSON.stringify({ source: 'GEMINI_FLASH', responseText: reply }), { headers: corsHeaders });
          }
        }
      } catch (e) {
        console.warn('Gemini edge failover');
      }
    }

    return new Response(
      JSON.stringify({
        source: 'RULE_ENGINE',
        responseText: 'आपका अनुरोध दर्ज कर लिया गया है। कृपया अपना पहचान पत्र कैमरे के आगे करें।'
      }),
      { headers: corsHeaders }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders });
  }
};
