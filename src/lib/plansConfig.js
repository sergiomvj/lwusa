// src/lib/plansConfig.js

export const plansConfig = {
  free: {
    name: "Plano Free",
    price: "USD $0",
    priceDetails: "Totalmente gratuito",
    features: [
      "Criador de Sonhos (versão básica)",
      "Acesso ao Blog com artigos públicos",
      "Newsletter com novidades e dicas gerais",
      "Calculadora de Custo de Vida (simplificada)",
      "Simulador de Entrevista (modo teste)",
      "Acesso completo as ferramentas (FamilyPlanner, VisaMatch, GetOpportunity) com até 2 análises"
    ],
    highlight: false,
    cta: "Comece Grátis",
    link: "/register?plan=free"
  },
  pro: {
    name: "Plano Pro",
    price: "USD $7.90",
    priceDetails: "por mês",
    features: [
      "Todos os recursos do Plano Free",
      "Criador de Sonhos (versão completa com mais opções)",
      "VisaMatch (simulador básico de elegibilidade de visto)",
      "Guias Detalhados (temas específicos de imigração)",
      "Checklists Interativos para organização pessoal",
      "Acesso à Comunidade (fórum básico)"
    ],
    highlight: true,
    cta: "Assine o Pro",
    link: "/register?plan=pro"
  },
  premium: {
    name: "Plano Premium",
    price: "USD $14.90",
    priceDetails: "por mês",
    features: [
      "Todos os recursos do Plano Pro",
      "VisaMatch Pro (análise mais aprofundada e recomendações)",
      "Consultoria Inicial (sessão de 30 min com especialista)",
      "Conteúdo Exclusivo (webinars, e-books avançados)",
      "Suporte Prioritário por e-mail",
      "Descontos em Serviços de Parceiros",
      "Gerenciamento de até 3 perfis familiares (simplificado)"
    ],
    highlight: false,
    cta: "Seja Premium",
    link: "/register?plan=premium"
  }
};

// Para facilitar a iteração na página de planos, podemos converter para array
export const plansArray = Object.values(plansConfig);
