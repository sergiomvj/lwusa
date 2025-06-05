import React from "react";
import BlogPostCard from "../blog/BlogPostCard"; // Ajuste o caminho se necessário

// Dados de exemplo - no futuro, isso viria de um CMS, API ou arquivos Markdown
const samplePostsData = [
  {
    id: 1,
    title: 'Primeiros Passos para Brasileiros nos EUA',
    imageUrl: '/images/cities/default-city.jpg', // Crie esta imagem ou use um placeholder
    summary: 'Chegar aos Estados Unidos é um sonho para muitos, mas o processo de adaptação pode ser desafiador. Este guia explora os primeiros passos essenciais.',
    date: '15 de Maio de 2025',
    category: 'Adaptação',
    slug: 'primeiros-passos-eua' // Usado para a URL do post
  },
  {
    id: 2,
    title: 'Guia Completo de Vistos Americanos para Brasileiros',
    imageUrl: '/images/cities/default-city.jpg', // Crie esta imagem ou use um placeholder
    summary: 'Entender a complexa teia de vistos americanos é o primeiro passo para uma imigração bem-sucedida. Conheça os principais tipos e requisitos.',
    date: '22 de Abril de 2025',
    category: 'Vistos',
    slug: 'guia-de-vistos'
  },
  {
    id: 3,
    title: 'Custo de Vida nas Principais Cidades Americanas',
    imageUrl: '/images/cities/default-city.jpg', // Crie esta imagem ou use um placeholder
    summary: 'Planejando sua mudança? Saiba como é o custo de vida em cidades como Nova York, Miami, Los Angeles e outras, e prepare seu orçamento.',
    date: '10 de Abril de 2025',
    category: 'Finanças',
    slug: 'custo-de-vida-cidades'
  }
];

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto pt-5 pb-16 px-4">
      <div className="text-center mb-12">
        {/* Você pode manter ou remover a imagem e título originais se preferir */}
        {/* <img src="/images/basic/blog.webp" alt="Blog" className="mx-auto mb-8 w-48 h-48 object-contain rounded-lg shadow" /> */}
        <h1 className="text-4xl md:text-5xl font-libre font-bold mb-4 text-hunter-green">Imigração para os EUA, descomplique.</h1>
        <p className="text-lg text-gray-700 font-figtree max-w-2xl mx-auto">Conteúdo sobre imigração, dicas e novidades para brasileiros que sonham em viver, estudar ou trabalhar nos EUA.</p>
      </div>

      {samplePostsData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePostsData.map((post) => (
            <BlogPostCard 
              key={post.id}
              id={post.id}
              title={post.title}
              imageUrl={post.imageUrl}
              summary={post.summary}
              date={post.date}
              category={post.category}
              slug={post.slug}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">Nenhum post disponível no momento. Volte em breve!</p>
      )}
    </div>
  );
}

