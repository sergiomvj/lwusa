// Supabase Edge Function Template (Deno)
// Copie este arquivo para qualquer nova função!

export default async (req) => {
  // Log para debug (aparece no painel Supabase)
  console.log("[Edge] Function chamada!", req.method);

  // Exemplo de verificação de método
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método não permitido' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Exemplo de leitura do corpo JSON
  let data = {};
  try {
    data = await req.json();
  } catch (_e) {
    return new Response(JSON.stringify({ error: 'JSON inválido no corpo da requisição.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Exemplo de acesso a variáveis de ambiente
  const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
  const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

  // TODO: Adicione sua lógica aqui
  // Por exemplo, chamada a um endpoint, manipulação de dados, etc.

  // Exemplo de resposta
  return new Response(
    JSON.stringify({ status: "ok", recebido: data }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
