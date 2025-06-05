import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Dados de exemplo - no futuro, isso viria de um CMS, API ou arquivos Markdown
const samplePosts = {
  'primeiros-passos-eua': {
    title: 'Primeiros Passos para Brasileiros nos EUA',
    author: 'Equipe LifeWayUSA',
    date: '15 de Maio de 2025',
    category: 'Adaptação',
    imageUrl: '/images/cities/default-city.jpg', // Exemplo de caminho
    content: `
      <p class="mb-4 text-lg text-gray-700 leading-relaxed">Chegar aos Estados Unidos é um sonho para muitos brasileiros, mas o processo de adaptação pode ser desafiador. Este guia explora os primeiros passos essenciais para facilitar sua transição.</p>
      <h2 class="text-2xl font-libre font-semibold mt-6 mb-3 text-hunter-green">1. Documentação e Vistos</h2>
      <p class="mb-4 text-gray-700 leading-relaxed">Certifique-se de que toda a sua documentação está em ordem. Dependendo do seu objetivo (estudo, trabalho, turismo), o tipo de visto necessário varia. Consulte o site oficial do consulado americano para informações precisas.</p>
      <img src="/images/cities/default-city.jpg" alt="Documentos para EUA - Placeholder" class="my-4 rounded-lg shadow-md w-full max-w-md mx-auto" />
      <h2 class="text-2xl font-libre font-semibold mt-6 mb-3 text-hunter-green">2. Moradia</h2>
      <p class="mb-4 text-gray-700 leading-relaxed">Pesquise sobre as opções de moradia na cidade de destino. Sites como Zillow, Apartments.com e Craigslist podem ser úteis. Considere fatores como custo, segurança e proximidade do trabalho ou local de estudo.</p>
      <h2 class="text-2xl font-libre font-semibold mt-6 mb-3 text-hunter-green">3. Sistema Financeiro</h2>
      <p class="mb-4 text-gray-700 leading-relaxed">Abrir uma conta bancária nos EUA é fundamental. Pesquise os bancos disponíveis e os documentos necessários. Entender o sistema de crédito americano (credit score) também é crucial para o futuro.</p>
      <h2 class="text-2xl font-libre font-semibold mt-6 mb-3 text-hunter-green">4. Cultura e Idioma</h2>
      <p class="mb-4 text-gray-700 leading-relaxed">Embora muitos americanos sejam receptivos, conhecer os costumes locais e aprimorar o inglês facilitará muito sua integração. Considere cursos de inglês ou grupos de conversação.</p>
      <p class="mt-6 text-gray-700 leading-relaxed">Estes são apenas alguns dos primeiros passos. A jornada de adaptação é contínua e cheia de aprendizados. Boa sorte!</p>
    `
  },
  'guia-de-vistos': {
    title: 'Guia Completo de Vistos Americanos para Brasileiros',
    author: 'Ana Silva, Especialista em Imigração',
    date: '22 de Abril de 2025',
    category: 'Vistos',
    imageUrl: '/images/cities/default-city.jpg',
    content: '<p class="mb-4 text-lg text-gray-700 leading-relaxed">Entender a complexa teia de vistos americanos é o primeiro passo para uma imigração bem-sucedida...</p> <p>...</p>'
  }
  // Adicione mais posts de exemplo aqui
};

export default function ArticlePage() {
  const { slug } = useParams(); // Pega o 'slug' da URL
  const post = samplePosts[slug];

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 text-red-600">Post Não Encontrado</h1>
        <p className="mb-8 text-lg text-gray-700">Desculpe, o artigo que você está procurando não existe ou foi movido.</p>
        <Link to="/blog" className="text-tiffany-blue hover:underline">
          Voltar para o Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 font-figtree">
      <article>
        <header className="mb-8">
          {post.category && (
            <span className="inline-block bg-tiffany-blue/20 text-tiffany-blue-darker text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
              {post.category}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-libre font-bold mb-3 text-hunter-green leading-tight">{post.title}</h1>
          <p className="text-sm text-gray-600">
            Por <span className="font-semibold text-gray-800">{post.author}</span> | Publicado em {post.date}
          </p>
        </header>

        {post.imageUrl && (
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8"
          />
        )}

        {/* O conteúdo do post virá aqui. Usando dangerouslySetInnerHTML para HTML de exemplo */}
        {/* Em uma aplicação real, sanitize o HTML ou use um parser de Markdown */}
        <div 
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed" 
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className="my-12" />

        <div className="text-center">
          <Link to="/blog" className="inline-block bg-tiffany-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-tiffany-blue-darker transition-colors duration-300">
            &larr; Voltar para todos os posts
          </Link>
        </div>
      </article>
    </div>
  );
}
