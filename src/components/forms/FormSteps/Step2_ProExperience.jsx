import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '../../ui/Input';
import Textarea from '../../ui/Textarea';
import Select from '../../ui/Select';

const Step2_ProExperience = () => {
  const { register, formState: { errors } } = useFormContext();

  const nivelInglesOptions = [
    { value: 'Nenhum', label: 'Nenhum - Não falo nada' },
    { value: 'Basico', label: 'Básico - Entendo e falo frases simples' },
    { value: 'Intermediario', label: 'Intermediário - Consigo manter uma conversa' },
    { value: 'Avancado', label: 'Avançado - Falo fluentemente, quase como um nativo' },
    { value: 'Fluente', label: 'Fluente/Nativo - Total domínio do idioma' },
  ];


  const anosExperienciaOptions = [
    { value: '0', label: 'Menos de 1 ano / Sem experiência formal' },
    { value: '1', label: '1 a 2 anos' },
    { value: '3', label: '3 a 5 anos' },
    { value: '6', label: '6 a 10 anos' },
    { value: '11', label: 'Mais de 10 anos' }, // Usando 11 para representar '10+'
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-libre font-semibold text-hunter-green">Sua Jornada Profissional</h2>
      <p className="text-gray-600 font-figtree mb-6">
        Quais experiências e talentos você traz na bagagem? Isso nos ajudará a sonhar com oportunidades incríveis nos EUA.
      </p>

      <Input
        id="profissao"
        name="profissao"
        label="Profissão / Cargo Atual Principal"
        register={register}
        error={errors.profissao?.message}
        placeholder="Ex: Engenheiro de Software, Professor, Médico"
      />

      <Input
        id="area_atuacao"
        name="area_atuacao"
        label="Área de Atuação Principal"
        register={register}
        error={errors.area_atuacao?.message}
        placeholder="Ex: Tecnologia da Informação, Educação, Saúde, Construção Civil"
      />
      
      <Select
        id="anos_experiencia"
        name="anos_experiencia"
        label="Anos de Experiência na Área Principal"
        register={register}
        options={anosExperienciaOptions}
        error={errors.anos_experiencia?.message}
        placeholder="Selecione o tempo de experiência"
      />

      <Input
        id="formacao_academica"
        name="formacao_academica"
        label="Formação Acadêmica Principal (Curso e Instituição)"
        register={register}
        error={errors.formacao_academica?.message}
        placeholder="Ex: Bacharel em Ciência da Computação - USP"
      />

      <Textarea
        id="habilidades"
        name="habilidades"
        label="Principais Habilidades e Competências"
        register={register}
        error={errors.habilidades?.message}
        placeholder="Liste suas habilidades chave, certificações, etc. (Ex: Liderança de equipes, Fluência em Espanhol, Certificação PMP)"
        rows={4}
      />

      <Select
        id="nivel_ingles"
        name="nivel_ingles"
        label="Nível de Inglês"
        register={register}
        options={nivelInglesOptions}
        error={errors.nivel_ingles?.message}
        placeholder="Selecione seu nível de inglês"
      />

      {/* Campos adicionais conforme schema, se necessário */}
      <Input
        id="ocupacao_atual"
        name="ocupacao_atual" // Este campo está no schema, mas pode ser redundante com 'profissao'
        label="Ocupação Atual (se diferente da profissão principal ou para detalhar)"
        register={register}
        error={errors.ocupacao_atual?.message}
        placeholder="Ex: Freelancer, Estudante, Empresário"
      />

    </div>
  );
};

export default Step2_ProExperience;
