import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Checkbox from '../../ui/Checkbox';

const Step4_FamilyInfo = () => {
  const { register, control, watch, formState: { errors } } = useFormContext();

  const semConjuge = watch('sem_conjuge');
  // ...

  const anosExperienciaOptions = [
    { value: '0', label: 'Menos de 1 ano / Sem experiência' },
    { value: '1-2', label: '1 a 2 anos' },
    { value: '3-5', label: '3 a 5 anos' },
    { value: '6-10', label: '6 a 10 anos' },
    { value: '10+', label: 'Mais de 10 anos' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-libre font-semibold text-hunter-green">Seu Mundo Familiar</h2>
      <p className="text-gray-600 font-figtree mb-6">
        Quem faz parte do seu núcleo de sonhos? Compartilhe sobre sua família para que possamos imaginar juntos uma nova vida para todos.
      </p>

      <Checkbox
        id="sem_conjuge"
        name="sem_conjuge"
        label="Não possuo cônjuge ou companheiro(a)"
        register={register} // react-hook-form v7+ não precisa mais de Controller para checkbox simples
        error={errors.sem_conjuge?.message}
      />

      {!semConjuge && (
        <>
          <h3 className="text-lg font-libre font-medium text-gray-800 pt-4 border-t border-gray-200">Informações do Cônjuge/Companheiro(a)</h3>
          <Input
            id="nome_conjuge"
            name="nome_conjuge"
            label="Nome Completo do Cônjuge/Companheiro(a)"
            register={register}
            error={errors.nome_conjuge?.message}
            placeholder="Nome completo"
          />
          <Input
            id="idade_conjuge"
            name="idade_conjuge"
            type="number"
            label="Idade do Cônjuge/Companheiro(a)"
            register={register}
            error={errors.idade_conjuge?.message}
            placeholder="Idade"
          />
          <Input
            id="nacionalidade_conjuge"
            name="nacionalidade_conjuge"
            label="Nacionalidade do Cônjuge/Companheiro(a)"
            register={register}
            error={errors.nacionalidade_conjuge?.message}
            placeholder="Nacionalidade"
          />
          <Input
            id="nacionalidade_secundaria_conjuge"
            name="nacionalidade_secundaria_conjuge"
            label="Nacionalidade Secundária do Cônjuge (Opcional)"
            register={register}
            error={errors.nacionalidade_secundaria_conjuge?.message}
            placeholder="Nacionalidade secundária, se houver"
          />
          <Input
            id="profissao_conjuge"
            name="profissao_conjuge"
            label="Profissão do Cônjuge/Companheiro(a)"
            register={register}
            error={errors.profissao_conjuge?.message}
            placeholder="Profissão"
          />
          <Input
            id="formacao_conjuge"
            name="formacao_conjuge"
            label="Formação Acadêmica do Cônjuge/Companheiro(a)"
            register={register}
            error={errors.formacao_conjuge?.message}
            placeholder="Ex: Bacharel em Direito - UFRJ"
          />
          <Select
            id="exp_conjuge"
            name="exp_conjuge"
            label="Anos de Experiência Profissional do Cônjuge/Companheiro(a)"
            register={register}
            options={anosExperienciaOptions}
            error={errors.exp_conjuge?.message}
            placeholder="Selecione o tempo de experiência"
          />
          <Checkbox
            id="hab_conjuge"
            name="hab_conjuge"
            label="Cônjuge/Companheiro(a) possui habilitação (carteira de motorista)?"
            register={register}
            error={errors.hab_conjuge?.message}
          />
          <Checkbox
            id="pretendetrab_conjuge"
            name="pretendetrab_conjuge"
            label="Cônjuge/Companheiro(a) pretende trabalhar nos EUA?"
            register={register}
            error={errors.pretendetrab_conjuge?.message}
          />
          <Checkbox
            id="pretendeest_conjuge"
            name="pretendeest_conjuge"
            label="Cônjuge/Companheiro(a) pretende estudar nos EUA?"
            register={register}
            error={errors.pretendeest_conjuge?.message}
          />
        </>
      )}

      <Checkbox // Este campo estava no schema, mas talvez faça mais sentido no Step 5
        id="filhos_escola"
        name="filhos_escola"
        label="Possui filhos em idade escolar que pretendem estudar nos EUA?"
        register={register}
        error={errors.filhos_escola?.message}
        className="pt-4 border-t border-gray-200"
      />

      <Checkbox
        id="possui_familiares_eua"
        name="possui_familiares_eua"
        label="Você possui familiares que já residem legalmente nos EUA?"
        register={register}
        error={errors.possui_familiares_eua?.message}
      />

    </div>
  );
};

export default Step4_FamilyInfo;
