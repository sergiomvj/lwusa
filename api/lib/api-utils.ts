// Função utilitária para validar campos obrigatórios em um objeto
export function validateBody(body: any, requiredFields: string[]): string | null {
  for (const field of requiredFields) {
    if (!body[field]) return `Campo obrigatório ausente: ${field}`;
  }
  return null;
}

// Função utilitária para chamar OpenAI (Chat Completions)
export async function callOpenAI(prompt: string, apiKey: string): Promise<string> {
  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Você é um assistente de sonhos." },
        { role: "user", content: prompt }
      ],
      temperature: 0.8
    })
  });
  const data = await resp.json();
  return data.choices?.[0]?.message?.content || '';
}

// Função utilitária para inserir dados no Supabase REST API
type SupabaseInsertOptions = {
  url: string;
  serviceRoleKey: string;
  table: string;
  data: any;
};

export async function insertSupabase({ url, serviceRoleKey, table, data }: SupabaseInsertOptions): Promise<any> {
  const resp = await fetch(`${url}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      'apikey': serviceRoleKey,
      'Authorization': `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify([data])
  });
  if (!resp.ok) {
    throw new Error(await resp.text());
  }
  return await resp.json();
}
