import React from 'react';
import { plansArray } from '../lib/plansConfig'; // Importa a configuração dos planos

// O plansData anterior foi movido para plansConfig.js
const plansData = plansArray; // Usa os dados importados de plansConfig.js

// Dados para Histórias de Sucesso
const successStoriesData = [
  {
    name: "A Família Silva",
    origin: "Brasil",
    goal: "Reunião Familiar e Educação dos Filhos",
    story: "Com o Plano Família, conseguimos organizar a documentação para todos e encontrar as melhores escolas para nossos filhos em Orlando. A consultoria inicial foi crucial!",
    imageUrl: "/images/avatars/family1.webp" // Usar placeholders ou criar essas imagens
  },
  {
    name: "Mariana Costa",
    origin: "Portugal",
    goal: "Oportunidade de Carreira em TI",
    story: "O Plano Premium me deu acesso a guias detalhados sobre vistos de trabalho e o simulador VisaMatch me ajudou a entender minhas opções. Consegui meu H1-B!",
    imageUrl: "/images/avatars/woman1.webp"
  },
  {
    name: "Carlos Rodriguez",
    origin: "Argentina",
    goal: "Empreender e Abrir um Restaurante",
    story: "Os recursos sobre como abrir uma empresa nos EUA foram muito úteis. O LifeWayUSA simplificou um processo que parecia impossível.",
    imageUrl: "/images/avatars/man1.webp"
  },
  {
    name: "Jovens Estudantes",
    origin: "Colômbia",
    goal: "Intercâmbio e Estudos Universitários",
    story: "Utilizamos o Plano Essencial para entender os primeiros passos e, com o Premium, acessamos informações valiosas sobre universidades e vida de estudante na Califórnia.",
    imageUrl: "/images/avatars/students1.webp"
  },
  {
    name: "Ana Pereira",
    origin: "Angola",
    goal: "Investimento e Visto EB-5",
    story: "A plataforma ofereceu clareza sobre o complexo processo do visto de investidor. Os artigos premium foram fundamentais para minha decisão.",
    imageUrl: "/images/avatars/woman2.webp"
  },
  {
    name: "The Chen Family",
    origin: "China",
    goal: "Qualidade de Vida e Novas Oportunidades",
    story: "Buscávamos um lugar seguro e com boas perspectivas para nossos filhos. O LifeWayUSA nos ajudou a planejar cada detalhe da nossa mudança para o Texas.",
    imageUrl: "/images/avatars/family2.webp"
  }
];

// Ícones (simplificados para este exemplo, idealmente usaríamos react-icons ou SVGs importados)
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Seção de Planos Detalhados */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-libre font-bold text-hunter-green mb-6">Nossos Planos Detalhados</h1>
          <p className="mb-16 text-lg text-gray-700 font-figtree max-w-3xl mx-auto">
            Escolha o plano que melhor se adapta à sua jornada de imigração. Cada um foi cuidadosamente elaborado para oferecer o suporte que você precisa em cada etapa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {plansData.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-xl shadow-lg p-8 flex flex-col ${plan.highlight ? 'bg-hunter-green text-white scale-105 z-10' : 'bg-white text-gray-800 border'}`}
              >
                <h3 className={`text-2xl font-libre font-bold mb-2 ${plan.highlight ? 'text-tiffany-blue' : 'text-hunter-green'}`}>{plan.name}</h3>
                <div className={`text-4xl font-libre font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-hunter-green'}`}>{plan.price}</div>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{plan.priceDetails}</p>
                
                <ul className="space-y-4 mb-8 text-left flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckIcon />
                      <span className={`${plan.highlight ? 'text-gray-200' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={plan.link} 
                  className={`w-full mt-auto block text-center rounded-lg px-8 py-3 font-semibold shadow-md transition-transform transform hover:scale-105 ${plan.highlight ? 'bg-tiffany-blue text-white hover:bg-tiffany-blue-dark' : 'bg-hunter-green text-white hover:bg-hunter-green-dark'}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Histórias de Sucesso (Placeholder) */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-libre font-bold text-hunter-green mb-6">Histórias de Sucesso</h2>
          <p className="mb-16 text-lg text-gray-700 font-figtree max-w-3xl mx-auto">
            Veja como o planejamento correto pode fazer toda a diferença em sua vida.
          </p>
          {/* Cards de Histórias de Sucesso */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStoriesData.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border border-gray-200">
                <img src={story.imageUrl} alt={story.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
                <h4 className="text-xl font-libre font-semibold text-hunter-green mb-1">{story.name}</h4>
                <p className="text-sm text-gray-500 mb-1">{story.origin} | {story.goal}</p>
                <p className="text-gray-700 font-figtree text-sm leading-relaxed">
                  {story.story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
