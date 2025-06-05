// Supabase Edge Function (TypeScript) - Handler robusto para inserir prospect
export default async (req: Request) => {
    console.log("INICIO EDGE", new Date().toISOString());
  
    if (req.method !== 'POST') {
      console.log("Método não permitido", req.method);
      return new Response(JSON.stringify({ error: 'Método não permitido' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  
    let data = {};
    try {
      data = await req.json();
      console.log("Body recebido", data);
    } catch (e) {
      console.log("JSON inválido", e);
      return new Response(JSON.stringify({ error: 'JSON inválido no corpo da requisição.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  
    const SB_URL = Deno.env.get('SB_URL');
    const SB_SERVICE_ROLE_KEY = Deno.env.get('SB_SERVICE_ROLE_KEY');
    console.log("ENV", SB_URL, SB_SERVICE_ROLE_KEY);
  
    if (!SB_URL || !SB_SERVICE_ROLE_KEY) {
      console.log("Variáveis de ambiente ausentes");
      return new Response(JSON.stringify({ error: 'Variáveis de ambiente SB_URL ou SB_SERVICE_ROLE_KEY não definidas.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  
    const url = `${SB_URL}/rest/v1/prospects`;
    const headers = {
      'apikey': SB_SERVICE_ROLE_KEY,
      'Authorization': `Bearer ${SB_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    };
  
    console.log("Antes do fetch", url, headers);
    let result;
    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify([{ ...data, created_at: new Date().toISOString() }])
      });
      console.log("Depois do fetch", resp.status);
      if (!resp.ok) {
        const err = await resp.text();
        console.log("Erro ao inserir no prospects", err);
        return new Response(JSON.stringify({ error: 'Erro ao inserir no prospects', details: err }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      result = await resp.json();
    } catch (e) {
      console.log("Erro no fetch", e);
      return new Response(JSON.stringify({ error: 'Erro inesperado ao chamar Supabase REST', details: String(e) }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  
    console.log("Sucesso! Prospect inserido:", result);
    return new Response(
      JSON.stringify({ prospect: result && result[0] ? result[0] : null }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  };