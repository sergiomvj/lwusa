// src/DreamCreatorTest/mockBackend.js
// Backend alternativo procedural para testes do Dream Creator
// Basta trocar 1 import no frontend para usar Supabase real depois

// Objeto em memória para simular o "banco"
const prospectTest = {
  sonhos: []
};

// Função para simular chamada à OpenAI (mock)
async function enviarParaOpenAI(prompt) {
  // Aqui você pode integrar com a API real se quiser
  // Por enquanto, simula resposta
  await new Promise(res => setTimeout(res, 1000));
  return `Resumo IA: ${prompt.slice(0, 60)}... (resposta simulada)`;
}

// Função para salvar um novo sonho
export async function salvarSonho(data) {
  // Monta prompt para OpenAI (pode ser mais elaborado)
  const prompt = `Usuário: ${data.nome || 'usuário'} deseja imigrar para os EUA. Dados: ${JSON.stringify(data)}`;
  const dreamSummary = await enviarParaOpenAI(prompt);
  const sonho = { ...data, id: Date.now(), dreamSummary };
  prospectTest.sonhos.push(sonho);
  return sonho;
}

// Função para listar todos os "sonhos" cadastrados
export function listarSonhos() {
  return prospectTest.sonhos;
}

// Função para buscar um sonho por ID
export function buscarSonho(id) {
  return prospectTest.sonhos.find(s => s.id === id);
}

// Exporta o objeto para debug/facilitar testes
export { prospectTest };
