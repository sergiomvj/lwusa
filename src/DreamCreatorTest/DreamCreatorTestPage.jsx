import React, { useState } from 'react';
import { salvarSonho, listarSonhos } from './mockBackend';

export default function DreamCreatorTestPage() {
  const [form, setForm] = useState({ nome: '', objetivo: '', detalhes: '' });
  const [dreamSummary, setDreamSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [sonhos, setSonhos] = useState(listarSonhos());

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const sonho = await salvarSonho(form);
    setDreamSummary(sonho.dreamSummary);
    setSonhos(listarSonhos());
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">Teste Procedural Dream Creator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="objetivo"
          placeholder="Objetivo nos EUA"
          value={form.objetivo}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <textarea
          name="detalhes"
          placeholder="Detalhes do sonho"
          value={form.detalhes}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
      {dreamSummary && (
        <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400">
          <strong>Resumo IA:</strong> {dreamSummary}
        </div>
      )}
      <h2 className="text-xl font-semibold mt-8 mb-2">Sonhos cadastrados (mock)</h2>
      <ul className="divide-y">
        {sonhos.map(s => (
          <li key={s.id} className="py-2">
            <strong>{s.nome}</strong>: {s.objetivo} <br/>
            <span className="text-xs text-gray-500">Resumo: {s.dreamSummary}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
