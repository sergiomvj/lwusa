import React from 'react';
import { Link } from 'react-router-dom';

// Ícones de exemplo (idealmente, use react-icons ou SVGs importados)
const PlusCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

export default function EditorDashboard() {
  // No futuro, aqui você pode buscar estatísticas, posts recentes para edição, etc.

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 font-figtree">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-libre font-bold text-hunter-green">Painel do Editor</h1>
        <p className="text-lg text-gray-700 mt-2">Gerencie os posts do blog LifeWayUSA.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card para Criar Novo Post */}
        <Link 
          to="/admin/posts/create" // Rota para criar post (a ser criada)
          className="block p-6 bg-tiffany-blue hover:bg-tiffany-blue-darker text-white rounded-lg shadow-md transition-colors duration-300 ease-in-out transform hover:scale-105"
        >
          <div className="flex items-center mb-3">
            <PlusCircleIcon />
            <h2 className="text-2xl font-semibold">Criar Novo Post</h2>
          </div>
          <p>Escreva e publique um novo artigo para o blog.</p>
        </Link>

        {/* Card para Gerenciar Posts Existentes */}
        <Link 
          to="/admin/posts" // Rota para listar/gerenciar posts (a ser criada)
          className="block p-6 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg shadow-md transition-colors duration-300 ease-in-out transform hover:scale-105"
        >
          <div className="flex items-center mb-3 text-hunter-green">
            <ListIcon />
            <h2 className="text-2xl font-semibold">Gerenciar Posts</h2>
          </div>
          <p className="text-gray-700">Edite, exclua ou veja o status dos posts existentes.</p>
        </Link>
      </div>

      {/* Adicionar mais funcionalidades ao dashboard conforme necessário */}
      {/* Ex: Estatísticas, comentários pendentes, etc. */}
    </div>
  );
}
