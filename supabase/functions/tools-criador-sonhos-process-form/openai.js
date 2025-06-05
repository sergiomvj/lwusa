// openai.js - Função utilitária para chamada à API OpenAI
const fetch = require('node-fetch');

async function getDreamSummary(prompt, apiKey) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Você é um assistente especializado em imigração para os EUA.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 300,
      temperature: 0.7,
    }),
  });
  if (!response.ok) {
    throw new Error(`Erro OpenAI: ${response.statusText}`);
  }
  const data = await response.json();
  return data.choices[0].message.content.trim();
}

module.exports = { getDreamSummary };
