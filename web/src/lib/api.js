// src/lib/api.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'; // '/api' como fallback para dev se não configurado

/**
 * Função utilitária para fazer chamadas para o backend/Edge Functions.
 * @param {string} endpoint - O caminho do endpoint (ex: '/tools/family-planner/analyze-family').
 * @param {RequestInit} [options] - Opções para a requisição fetch (method, body, headers, etc.).
 * @returns {Promise<any>} - A resposta JSON da API.
 * @throws {Error} - Lança um erro se a resposta da API não for ok.
 */
export async function fetchAPI(endpoint, options) {
  const url = `${API_BASE_URL}${endpoint}`;
  const defaultHeaders = {
    'Content-Type': 'application/json',
    // Adicionar token de autenticação se necessário, por exemplo, do Supabase:
    // const session = supabase.auth.session();
    // if (session) { defaultHeaders['Authorization'] = `Bearer ${session.access_token}`; }
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options?.headers),
      },
      body: options?.body ? JSON.stringify(options.body) : undefined,
    });

    const responseData = await response.json();

    if (!response.ok) {
      // Tenta extrair uma mensagem de erro da resposta, caso contrário, usa o statusText
      const errorMessage = responseData.message || responseData.error || response.statusText || 'Ocorreu um erro na API.';
      throw new Error(errorMessage);
    }

    return responseData;
  } catch (error) {
    console.error('Erro na chamada da API:', endpoint, error);
    // Re-throw para que o chamador possa tratar ou exibir uma mensagem mais amigável
    throw error;
  }
}
