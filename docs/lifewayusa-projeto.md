# LifeWayUSA — Projeto Vite + React

## Objetivo
Desenvolver a plataforma LifeWayUSA com foco em orientação para imigração, utilizando uma stack moderna, robusta, fácil de manter e rápida para evoluir: **Vite + React + Tailwind CSS**.

---

## Stack e Tecnologias
- **Vite** — Build tool rápido para React.
- **React** — Framework de UI moderno e flexível.
- **Tailwind CSS** — Utilitários para estilização rápida e responsiva.
- **Google Fonts** — Libre Baskerville (títulos/logo) e Figtree (textos/subtítulos).

---

## Estrutura do Projeto
```
C:\Users\lenovo\codigos WS\lwusa\pt\
├── docs\
│   └── lifewayusa-projeto.md
├── src\
│   ├── components\
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Plans.jsx
│   │   └── ...
│   ├── pages\ (ou rotas SPA)
│   ├── App.jsx
│   └── index.css
├── public\
│   └── ...
├── index.html
├── tailwind.config.js
├── package.json
└── README.md
```

---

## Setup Inicial
1. **Criar o projeto:**
   ```sh
   npm create vite@latest pt -- --template react
   cd pt
   npm install
   ```
2. **Instalar Tailwind CSS:**
   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
3. **Configurar Tailwind:**
   - Em `tailwind.config.js`:
     ```js
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         fontFamily: {
           libre: ['"Libre Baskerville"', 'serif'],
           figtree: ['Figtree', 'sans-serif'],
         },
         colors: {
           'tiffany-blue': '#77cbb9',
           'moonstone': '#75b8c8',
           'feldgrau': '#506c64',
           'silver': '#cdd3d5',
           'licorice': '#1a1a1a',
         },
       },
     },
     ```
4. **Importar Google Fonts:**
   - No `index.html`:
     ```html
     <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">
     ```
5. **Importar Tailwind no CSS:**
   - Em `src/index.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

---

## Layout Base (inspirado no FinWise)
- **Header fixo:** Logo (Libre Baskerville), navegação principal.
- **Hero Section:** Mensagem institucional, CTA.
- **Cards de Planos:** Planos Free, Pro, Premium.
- **Footer:** Institucional, navegação, social.
- **Cores:** Tiffany Blue, Moonstone, Feldgrau, Silver, Licorice.
- **Fonts:** Libre Baskerville (logo/títulos), Figtree (textos/botões).

---

## Instruções para Desenvolvimento
1. **Rodar o projeto localmente:**
   ```sh
   npm run dev
   ```
2. **Adicionar novos componentes:**
   - Crie arquivos em `src/components/`.
   - Use as classes de fonte e cor já configuradas.
3. **Customizar páginas:**
   - Estruture como SPA, adicionando rotas se desejar (ex: usando React Router).
4. **Deploy:**
   - Pode ser feito facilmente no Vercel, Netlify, etc.

---

## Observações
- Stack escolhida para máxima produtividade, robustez e facilidade de manutenção.
- Evita problemas de SSR/hydration típicos do Next.js.
- Layout e branding alinhados ao FinWise, mas com liberdade total para evoluir.

---

## Contato e Suporte
Dúvidas ou sugestões? Fale com a equipe LifeWayUSA.


## Nome
LifeWayUSA

## Objetivo
Criar uma plataforma digital que oriente famílias no processo de imigração para os EUA, com planos personalizados, ferramentas tecnológicas exclusivas e serviços integrados.

## Escopo Inicial
- **Frontend:** Versão web (mobile-first) desenvolvida em Next.js.
- **Backend:** Supabase para autenticação, banco de dados relacional e funções de backend (Edge Functions ou API Routes de Next.js).
- **APIs:** Integração com OpenAI para inteligência artificial e outras APIs externas (ex: LinkedIn).
- **Notificações:** E-mail e WhatsApp via N8N.
- **Conteúdo Estático:** Textos institucionais e blog em arquivos Markdown/MDX.
- **Idioma:** Português.
- **Base Gráfica:** Template Finwise - Next.js + Tailwind Landing Page Template.

## Estrutura do Banco de Dados (Supabase)
### Tabelas Principais
- **public.prospects:** Hub central de dados e análises do usuário/família (dados demográficos, financeiros, educacionais, profissionais, familiares, outputs de IA, etc.).
- **public.cities:** Dados detalhados sobre cidades americanas.
- **public.universities:** Informações sobre universidades.
- **public.schools:** Informações sobre escolas.
- **public.professional_courses:** Cursos profissionais.
- **public.cursos_de_ingles:** Cursos de inglês.
- **public.profiles:** Perfis de usuários (complementa Supabase Auth).

### Principais Comandos SQL (Supabase)
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
ALTER TABLE public.prospects ADD COLUMN IF NOT EXISTS analise_familyplanner TEXT NULL;
ALTER TABLE public.prospects ADD COLUMN IF NOT EXISTS analise_visamatch TEXT NULL;
ALTER TABLE public.prospects ADD COLUMN IF NOT EXISTS analise_getopportunity TEXT NULL;
ALTER TABLE public.prospects ADD COLUMN IF NOT EXISTS plano_projectusa_output TEXT NULL;
ALTER TABLE public.prospects ADD COLUMN IF NOT EXISTS simulador_entrevista_output TEXT NULL;
ALTER TABLE public.prospects ADD COLUMN IF NOT EXISTS user_id UUID NULL;
ALTER TABLE public.prospects ADD CONSTRAINT fk_prospects_user_id FOREIGN KEY (user_id) REFERENCES auth.users (id) ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS idx_prospects_user_id ON public.prospects (user_id);
ALTER TABLE public.profiles ADD CONSTRAINT fk_profiles_user_auth_id FOREIGN KEY (id) REFERENCES auth.users (id) ON DELETE CASCADE;
ALTER TABLE public.universities ADD COLUMN IF NOT EXISTS url TEXT NULL;
```

## Estrutura do Projeto Next.js
- **Criação:**
  - `npx create-next-app@latest lifewayusa-app`
  - Opções: TypeScript, ESLint, Tailwind CSS, src/, App Router: Sim

- **Dependências Essenciais:**
  - `@supabase/supabase-js`, `openai`, `react-hook-form`, `@hookform/resolvers`, `zod`, `@next/mdx`, `@mdx-js/react`

- **Variáveis de Ambiente:**
  - `.env.local` (não versionar)
  - Exemplo:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    OPENAI_API_KEY=YOUR_OPENAI_API_KEY
    N8N_WEBHOOK_URL_EMAIL=YOUR_N8N_EMAIL_WEBHOOK_URL
    N8N_WEBHOOK_URL_WHATSAPP=YOUR_N8N_WHATSAPP_WEBHOOK_URL
    ```

- **Estrutura de Pastas (base src/):**
  - app/(auth), app/(marketing), app/(app), app/api, components/ui, components/layout, components/forms, components/tools, components/blog, components/destinations, components/shared, lib, types, styles

- **Tailwind:**
  - Paleta personalizada (licorice, feldgrau, tiffany-blue, moonstone, silver)
  - Exemplo de configuração:
    ```ts
    // tailwind.config.ts
    import type { Config } from 'tailwindcss';
    const config: Config = {
      content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
      theme: {
        extend: {
          colors: {
            'licorice': '#220c10',
            'feldgrau': '#506c64',
            'tiffany-blue': '#77cbb9',
            'moonstone': '#75b8c8',
            'silver': '#cdd3d5',
          },
        },
      },
      plugins: [],
    };
    export default config;
    ```

- **Template Finwise:**
  - Analisar e adaptar padrões de design, tipografia, espaçamento e componentes para Tailwind.

## Autenticação com Supabase Auth
- Registro, login/logout, recuperação de senha, proteção de rotas.
- user_id em prospects vinculado a auth.users.id.
- Políticas RLS para proteger dados por usuário.

## Notificações (N8N)
- Webhooks para e-mail e WhatsApp.
- API Routes Next.js para disparar notificações via N8N.

## Conteúdo Estático
- Blog e páginas institucionais em arquivos MDX.
- Sugestão de categorias: Vistos, Cultura, Trabalho, Educação, Destinos, Finanças, Negócios, Histórias, Notícias, Dicas.

## Ferramentas da Plataforma
- **Criador de Sonhos:** Formulário multistep, output inicial de IA.
- **VisaMatch:** Sugestão de vistos via IA.
- **GetOpportunity:** Sugestões profissionais/empreendedoras via IA.
- **FamilyPlanner:** Roteiro personalizado de viagem/prospecção via IA.
- **ProjectUSA:** Plano avançado de mudança (timeline, checklist, integração outputs IA).
- **Simulador de Entrevista:** Simulação de entrevista consular via IA.
- **ServiceWay:** Marketplace de serviços (imobiliária, contabilidade, etc.).

## Planos e Recursos
- **Free:** Criador de Sonhos ilimitado, visualização básica das ferramentas, blog básico, ServiceWay simples.
- **Pro:** Tudo do Free + ferramentas completas, ProjectUSA básico, blog completo, ServiceWay Pro, simulador limitado.
- **Premium:** Tudo do Pro + ProjectUSA avançado, simulador ilimitado, recursos exclusivos, ServiceWay Premium.

## Checklist de Implementação
1. Configuração inicial do projeto Next.js e dependências.
2. Execução dos comandos SQL no Supabase.
3. Estruturação de pastas e utilitários.
4. Adaptação do template Finwise.
5. Implementação de autenticação e perfil.
6. Criação do formulário multistep (Criador de Sonhos).
7. Implementação iterativa das ferramentas (backend + frontend).
8. Páginas de destinos e comparadores.
9. Integração e testes de notificações N8N.
10. Adição de conteúdo estático inicial.

---

Esta documentação é a base para o desenvolvimento do LifeWayUSA seguindo as melhores práticas e requisitos detalhados.
