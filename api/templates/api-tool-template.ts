/**
 * TEMPLATE BASE PARA NOVAS FERRAMENTAS API
 *
 * Como usar:
 * - Copie este arquivo para /api/<nome-da-ferramenta>.ts
 * - Ajuste os campos obrigatórios, prompt OpenAI, tabela Supabase conforme necessário
 * - Utilize funções utilitárias de /lib/api-utils.ts
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { validateBody, callOpenAI, insertSupabase } from '../lib/api-utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // 1. Validação dos dados recebidos
  const requiredFields = ['nome', 'sonho', 'email']; // Ajuste conforme necessário
  const validationError = validateBody(req.body, requiredFields);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }
  const { nome, sonho, email } = req.body;

  // 2. Chamada ao serviço externo (OpenAI)
  let respostaAI = '';
  try {
    respostaAI = await callOpenAI(`Meu sonho: ${sonho}`, process.env.OPENAI_API_KEY!);
  } catch (e: any) {
    return res.status(502).json({ error: 'Erro ao consultar OpenAI', details: e.message });
  }

  // 3. Salvar no Supabase
  try {
    await insertSupabase({
      url: process.env.SB_URL!,
      serviceRoleKey: process.env.SB_SERVICE_ROLE_KEY!,
      table: 'prospects', // Ajuste conforme necessário
      data: { nome, sonho, email, respostaAI, created_at: new Date().toISOString() }
    });
  } catch (e: any) {
    return res.status(500).json({ error: 'Erro ao salvar no Supabase', details: e.message });
  }

  // 4. Retorno padronizado
  res.status(200).json({
    ok: true,
    data: { nome, sonho, respostaAI }
  });
}