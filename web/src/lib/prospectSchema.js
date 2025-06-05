import { z } from 'zod';

// Zod Schema para informações de um filho
export const childSchema = z.object({
  id: z.string().uuid().optional(), // ID pode ser gerado no frontend ou backend
  prospect_id: z.number().optional(), // Chave estrangeira para o prospecto pai
  nome: z.string().min(1, "Nome do filho é obrigatório."),
  idade: z.coerce.number().min(0, "Idade deve ser um número positivo.").optional(),
  escolaridade: z.string().optional(), // Corresponde a 'serie_escolar_filho' no formulário
  necessidades_especiais_filho: z.string().optional(), // Campo para necessidades especiais
});

// Zod Schema para o Prospect (todos os campos da sua tabela prospects)
export const prospectSchema = z.object({
  id: z.number().optional(), // ID é gerado pelo banco, opcional no form
  nome: z.string().min(1, "Seu nome é obrigatório."),
  email: z.string().email("E-mail inválido.").optional(), // Tornando opcional se o login for separado
  idade: z.coerce.number().min(18, "Você deve ter pelo menos 18 anos.").optional(),
  nacionalidade: z.string().min(1, "Nacionalidade é obrigatória."),
  nacionalidade_secundaria: z.string().optional(),
  estado_civil: z.string().optional(),
  profissao: z.string().optional(),
  anos_experiencia: z.coerce.number().optional(),
  area_atuacao: z.string().optional(),
  formacao_academica: z.string().optional(),
  nivel_ingles: z.string().optional(),
  renda_mensal_brl: z.coerce.number().optional(),
  patrimonio_total_usd: z.coerce.number().optional(),
  objetivo_principal_eua: z.string().optional(),
  cidades_preferencia_eua: z.string().optional(), // Pode ser um array de strings se preferir
  possui_familiares_eua: z.boolean().optional(),
  tipo_visto_interesse: z.string().optional(),
  data_planejada_mudanca: z.string().optional(), // Ou z.date() se for objeto Date
  
  // Campos do cônjuge (condicionais pela UI)
  sem_conjuge: z.boolean().optional(),
  nome_conjuge: z.string().optional(),
  idade_conjuge: z.coerce.number().optional(),
  nacionalidade_conjuge: z.string().optional(),
  nacionalidade_secundaria_conjuge: z.string().optional(),
  profissao_conjuge: z.string().optional(),
  formacao_conjuge: z.string().optional(),
  exp_conjuge: z.string().optional(), // Anos de experiência do cônjuge
  hab_conjuge: z.boolean().optional(), // Habilitação do cônjuge
  pretendetrab_conjuge: z.boolean().optional(),
  pretendeest_conjuge: z.boolean().optional(),

  // Filhos (array de childSchema)
  filhos: z.array(childSchema).optional(),
  filhos_texto_livre: z.string().optional(), // Campo para informações adicionais sobre filhos
  filhos_escola: z.boolean().optional(), // Filhos em idade escolar pretendem estudar nos EUA?

  // Outros membros da família
  outros_membros_familia_eua: z.string().optional(), // Descrição de outros membros
  adulto_naofamilia: z.string().optional(), // Adulto que não é da família imediata
  adulto_universidade: z.boolean().optional(),
  adulto_inglescourse: z.boolean().optional(),
  adulto_cursos: z.boolean().optional(),

  // Informações adicionais e de sistema
  informacoes_adicionais: z.string().optional(),
  como_conheceu: z.string().optional(),
  termos_aceitos: z.boolean().refine(val => val === true, {
    message: "Você deve aceitar os termos e condições."
  }).optional(), // Tornar opcional aqui e validar no último passo
  
  user_id: z.string().uuid().optional(), // Se o usuário estiver logado
  created_at: z.string().optional(), // Gerado pelo DB
  updated_at: z.string().optional(), // Gerado pelo DB

  // Campos de análise (geralmente preenchidos pelo backend)
  analise_visamatch: z.string().optional(),
  analise_familyplanner: z.string().optional(),
  analise_getopportunity: z.string().optional(),
  plano_projectusa: z.string().optional(),
  plano_pdf_url: z.string().optional(),
  plano_gerado_em: z.string().optional(),
  
  // Campos de contato e endereço
  endereco: z.string().optional(),
  cidade: z.string().optional(),
  estado: z.string().optional(),
  cep: z.string().optional(),
  telefone: z.string().optional(), // Adicionando telefone que estava no ProspectFormSteps.jsx
  whatsapp: z.string().optional(),

  // Outros campos mencionados no schema final do MD
  contatos_eua: z.string().optional(),
  recebeu_proposta: z.boolean().optional(),
  carreira_us_needed: z.boolean().optional(),
  descricao_usneeded: z.string().optional(),
  getopportunity_output: z.any().optional(),
  ocupacao_atual: z.string().optional(),
  ja_teve_visto_negad: z.boolean().optional(),
  quando_visto_negado: z.string().optional(),
  habilidades: z.string().optional(),
  senha: z.string().optional(), // Apenas para formulário de cadastro, não salvar em prospects
  conta: z.string().optional(), // Tipo de conta (Free, PRO, Premium)
  is_test: z.boolean().optional().default(false),
});

// Exporta o tipo inferido para uso em componentes
// export type ProspectFormData = z.infer<typeof prospectSchema>; 
// Comentado pois em JS não se exporta type assim diretamente. Usar JSDoc se necessário.
