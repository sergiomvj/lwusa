import React from 'react';

const CheckIcon = ({ className = "text-green-500" }) => (
  <svg className={`w-5 h-5 ${className} mr-2 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const freePlanFeatures = [
  "Acesso ilimitado ao \"Criador de Sonhos\" (funil de entrada)",
  "Acesso a artigos básicos do Blog",
  "Acesso ao ServiceWay (listagem básica de parceiros)",
  "Simulador de Entrevista (modo teste)",
  "Acesso completo as ferramentas (FamilyPlanner, VisaMatch, GetOpportunity) com até 2 análises"
];

const proPlanFeatures = [
  ...freePlanFeatures,
  "Acesso completo a todas as ferramentas (FamilyPlanner, VisaMatch, GetOpportunity) com análises ilimitadas/mais detalhadas",
  "Acesso básico ao \"ProjectUSA\" (timeline simples, checklist limitado)",
  "Acesso a todos os artigos do Blog",
  "Prioridade na listagem de parceiros no ServiceWay (para parceiros Pro)",
  "Simulador de Entrevista (ex: 5 simulações por mês)"
];

const premiumPlanFeatures = [
  ...proPlanFeatures,
  "Acesso total e ilimitado a todas as ferramentas",
  "Funcionalidades avançadas do \"ProjectUSA\" (integração com calendários, alertas personalizados, colaboração)",
  "Simulador de Entrevista ilimitado",
  "Suporte prioritário",
  "Acesso a funcionalidades exclusivas (ex: Análise de currículo/LinkedIn para GetOpportunity)",
  "Parceiros Premium no ServiceWay com destaque máximo"
];

const plansDataForSection4b = [
  {
    name: "Plano Free",
    price: "Gratuito",
    priceDetails: "Comece sem custos",
    features: freePlanFeatures,
    highlight: false,
    cta: "Ver Detalhes",
    link: "/plans#free"
  },
  {
    name: "Plano PRO",
    price: "US$ 9.99",
    priceDetails: "por mês (ou US$ 99/ano)",
    features: proPlanFeatures,
    highlight: true,
    badgeText: "Escolha da maioria",
    cta: "Ver Detalhes",
    link: "/plans#pro"
  },
  {
    name: "Plano Premium",
    price: "US$ 19.99",
    priceDetails: "por mês (ou US$ 199/ano)",
    features: premiumPlanFeatures,
    highlight: false,
    cta: "Ver Detalhes",
    link: "/plans#premium"
  }
];

export default function Section4b() {
  return (
    <section id="section4" className="w-full py-12 md:py-20 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-libre font-bold tracking-tight text-hunter-green sm:text-4xl md:text-5xl">
            Conheça Nossos Planos
          </h2>
          <p className="mt-3 text-lg text-gray-700 font-figtree md:text-xl max-w-2xl mx-auto">
            Soluções personalizadas para cada etapa da sua jornada de imigração para os EUA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plansDataForSection4b.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl shadow-lg p-8 flex flex-col ${plan.highlight ? 'bg-blue-800 text-white scale-105 z-10' : 'bg-white text-gray-800 border'}`}
            >
              {plan.badgeText && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-block bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    {plan.badgeText}
                  </span>
                </div>
              )}
              <h3 className={`text-2xl font-libre font-bold mb-2 pt-2 ${plan.highlight ? 'text-tiffany-blue' : 'text-hunter-green'}`}>{plan.name}</h3>
              <div className={`text-4xl font-libre font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-hunter-green'}`}>{plan.price}</div>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{plan.priceDetails}</p>
              
              <ul className="space-y-3 mb-8 text-left flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <CheckIcon className={plan.highlight ? 'text-yellow-400' : 'text-green-500'} />
                    <span className={`text-sm ${plan.highlight ? 'text-gray-200' : 'text-gray-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={plan.link} 
                className={`w-full mt-auto block text-center rounded-lg px-8 py-3 font-semibold shadow-md transition-transform transform hover:scale-105 ${plan.highlight ? 'bg-orange-500 text-black hover:bg-orange-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
