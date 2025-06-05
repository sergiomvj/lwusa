import React from "react";

export default function CitiesPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#367588]">Explore Cidades nos EUA</h1>
      <p className="mb-8 text-lg text-gray-700">Encontre o seu destino ideal! Em breve, você poderá navegar por uma lista de cidades, aplicar filtros e ver informações detalhadas sobre custo de vida, oportunidades, comunidade e muito mais.</p>
      
      {/* Placeholder para futuros cards de cidades ou filtros */}
      <div className="mt-12 p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Em Construção</h2>
        <p className="text-gray-600">Estamos trabalhando para trazer a você a melhor experiência na exploração de cidades. Volte em breve!</p>
      </div>
    </div>
  );
}
