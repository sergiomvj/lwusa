import React from 'react';
import { useFormContext } from 'react-hook-form';
import Checkbox from '../../ui/Checkbox';

// Função auxiliar para renderizar os dados de forma legível
const renderDataPoint = (label, value) => {
  if (value === undefined || value === null || value === '') return null;
  if (typeof value === 'boolean') {
    return (
      <div key={label} className="mb-2">
        <span className="font-semibold text-gray-700">{label}:</span>{' '}
        <span className="text-gray-600">{value ? 'Sim' : 'Não'}</span>
      </div>
    );
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return null;
    return (
      <div key={label} className="mb-2">
        <span className="font-semibold text-gray-700">{label}:</span>
        <ul className="list-disc list-inside ml-4">
          {value.map((item, index) => (
            <li key={index} className="text-gray-600">
              {typeof item === 'object' ? JSON.stringify(item, null, 2) : item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (typeof value === 'object') {
    // Para objetos simples, não arrays
    return (
      <div key={label} className="mb-2">
        <span className="font-semibold text-gray-700">{label}:</span>
        <pre className="text-gray-600 whitespace-pre-wrap text-sm bg-gray-50 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
      </div>
    );
  }
  return (
    <div key={label} className="mb-2">
      <span className="font-semibold text-gray-700">{label}:</span>{' '}
      <span className="text-gray-600">{String(value)}</span>
    </div>
  );
};

const Step7_ReviewConfirm = () => {
  const { getValues, register, formState: { errors } } = useFormContext();
  const formData = getValues();
  // ...

  // Mapeamento de chaves para labels mais amigáveis
  const friendlyLabels = {
    // Step 1: PersonalInfo
    nome: 'Nome Completo',
    email: 'E-mail Principal',
    telefone: 'Telefone',
    idade: 'Idade',
    nacionalidade: 'Nacionalidade',
    estado_civil: 'Estado Civil',
    endereco: 'Endereço',
    cidade: 'Cidade',
    estado: 'Estado/Província',
    cep: 'CEP / Código Postal',
    // Step 2: ProExperience
    profissao: 'Profissão Principal',
    area_atuacao: 'Área de Atuação',
    anos_experiencia: 'Anos de Experiência',
    formacao_academica: 'Formação Acadêmica',
    habilidades: 'Habilidades e Competências',
    nivel_ingles: 'Nível de Inglês',
    ocupacao_atual: 'Ocupação Atual (detalhe)',
    // Step 3: FinancialGoals
    renda_mensal_brl: 'Renda Mensal Familiar (BRL)',
    patrimonio_total_usd: 'Patrimônio Total (USD)',
    objetivo_principal_eua: 'Objetivo Principal nos EUA',
    tipo_visto_interesse: 'Tipo de Visto de Interesse',
    data_planejada_mudanca: 'Data Planejada para Mudança',
    // Step 4: FamilyInfo
    sem_conjuge: 'Não Possui Cônjuge',
    nome_conjuge: 'Nome do Cônjuge',
    idade_conjuge: 'Idade do Cônjuge',
    nacionalidade_conjuge: 'Nacionalidade do Cônjuge',
    profissao_conjuge: 'Profissão do Cônjuge',
    formacao_conjuge: 'Formação do Cônjuge',
    exp_conjuge: 'Experiência Profissional do Cônjuge',
    hab_conjuge: 'Cônjuge Possui Habilitação',
    pretendetrab_conjuge: 'Cônjuge Pretende Trabalhar nos EUA',
    pretendeest_conjuge: 'Cônjuge Pretende Estudar nos EUA',
    filhos_escola: 'Filhos em Idade Escolar (pretendem estudar nos EUA)',
    possui_familiares_eua: 'Possui Familiares nos EUA',
    // Step 5: ChildrenInfo
    sem_filhos: 'Não Possui Filhos',
    filhos: 'Filhos',
    // Step 6: OtherFamily
    outros_familiares_eua: 'Outros Familiares nos EUA',
    outras_informacoes_relevantes: 'Outras Informações Relevantes',
    // Step 7: Confirmation
    termos_condicoes: 'Termos e Condições',
    politica_privacidade: 'Política de Privacidade',
  };

  const renderSection = (title, fieldsToShow) => {
    const sectionData = Object.keys(fieldsToShow)
      .map(key => renderDataPoint(friendlyLabels[key] || key, formData[key]))
      .filter(Boolean);
    
    if (sectionData.length === 0) return null;

    return (
      <div className="mb-6 p-4 border border-gray-200 rounded-lg">
        <h3 className="text-xl font-libre font-semibold text-hunter-green mb-3">{title}</h3>
        {sectionData}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-libre font-semibold text-hunter-green">Revisão do Seu Sonho</h2>
      <p className="text-gray-600 font-figtree mb-6">
        Revise suas respostas. Estamos prontos para criar juntos um cenário inspirador para sua nova vida!
      </p>

      {renderSection('Informações Pessoais', {
        nome: true, email: true, telefone: true, idade: true, nacionalidade: true, estado_civil: true, 
        endereco: true, cidade: true, estado: true, cep: true
      })}

      {renderSection('Experiência Profissional', {
        profissao: true, area_atuacao: true, anos_experiencia: true, formacao_academica: true,
        habilidades: true, nivel_ingles: true, ocupacao_atual: true
      })}

      {renderSection('Metas Financeiras e Planos', {
        renda_mensal_brl: true, patrimonio_total_usd: true, objetivo_principal_eua: true,
        tipo_visto_interesse: true, data_planejada_mudanca: true
      })}

      {renderSection('Informações Familiares (Cônjuge)', {
        sem_conjuge: true, nome_conjuge: true, idade_conjuge: true, nacionalidade_conjuge: true,
        profissao_conjuge: true, formacao_conjuge: true, exp_conjuge: true, hab_conjuge: true,
        pretendetrab_conjuge: true, pretendeest_conjuge: true
      })}
      
      {renderSection('Informações Familiares (Filhos e Outros)', {
        filhos_escola: true, possui_familiares_eua: true, sem_filhos: true, filhos: true, 
        outros_familiares_eua: true, outras_informacoes_relevantes: true
      })}

      <div className="pt-6 border-t border-gray-300">
        <Checkbox
          id="termos_condicoes"
          name="termos_condicoes"
          register={register}
          // validation={{ required: 'Você deve aceitar os Termos e Condições' }}
          error={errors.termos_condicoes?.message}
          label={<>Eu li e concordo com os <a href="/termos" target="_blank" className="text-tiffany-blue hover:underline">Termos e Condições</a>.</>}
        />

        <Checkbox
          id="politica_privacidade"
          name="politica_privacidade"
          register={register}
          // validation={{ required: 'Você deve aceitar a Política de Privacidade' }}
          error={errors.politica_privacidade?.message}
          className="mt-2"
          label={<>Eu li e concordo com a <a href="/privacidade" target="_blank" className="text-tiffany-blue hover:underline">Política de Privacidade</a>.</>}
        />
      </div>
    </div>
  );
};

export default Step7_ReviewConfirm;
