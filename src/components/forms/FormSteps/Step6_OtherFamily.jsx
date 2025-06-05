import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Button from '../../ui/Button';
import Textarea from '../../ui/Textarea';
import Checkbox from '../../ui/Checkbox';

const Step6_OtherFamily = () => {
  const { control, register, watch, formState: { errors } } = useFormContext();

  const outrosFamiliares = useFieldArray({
    name: 'outros_familiares',
    control,
  });

  const outrosFamiliaresEua = useFieldArray({
    name: 'outros_familiares_eua',
    control,
  });
  // ...

  const possuiFamiliaresEUA = watch('possui_familiares_eua'); // Do Step4

  const parentescoOptions = [
    { value: 'Pais', label: 'Pais' },
    { value: 'Irmao(a)', label: 'Irmão(ã)' },
    { value: 'Filho(a) Maior de 21 anos', label: 'Filho(a) Maior de 21 anos' },
    { value: 'Tio(a)', label: 'Tio(a)' },
    { value: 'Primo(a)', label: 'Primo(a)' },
    { value: 'Avos', label: 'Avós' },
    { value: 'Outro', label: 'Outro' },
  ];

  const statusImigratorioOptions = [
    { value: 'Cidadao Americano', label: 'Cidadão Americano' },
    { value: 'Residente Permanente (Green Card)', label: 'Residente Permanente (Green Card)' },
    { value: 'Visto de Trabalho (H1B, L1, etc)', label: 'Visto de Trabalho (H1B, L1, etc)' },
    { value: 'Visto de Estudante (F1)', label: 'Visto de Estudante (F1)' },
    { value: 'Outro', label: 'Outro' },
    { value: 'Nao sei', label: 'Não sei informar' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-libre font-semibold text-hunter-green">Laços Familiares nos EUA</h2>
      <p className="text-gray-600 font-figtree mb-6">
        Você já tem familiares nos EUA? Isso pode abrir ainda mais caminhos para sua jornada dos sonhos.
      </p>

      {/* Reafirmando a pergunta do Step4 para contextualizar este passo */}
      <Checkbox
        id="possui_familiares_eua_confirm" // ID diferente para não conflitar com o do Step4, apenas visual
        name="possui_familiares_eua" // Mesmo nome para manter o estado
        label="Você possui familiares que já residem legalmente nos EUA? (Confirmação)"
        register={register}
        error={errors.possui_familiares_eua?.message}
        className="mb-4"
        // disabled // Pode ser desabilitado se a ideia é só mostrar o que foi marcado antes
      />

      {possuiFamiliaresEUA && fields.map((item, index) => (
        <div key={item.id} className="p-4 border border-gray-300 rounded-md space-y-4 relative">
          <h3 className="text-lg font-libre font-medium text-gray-700">Familiar nos EUA #{index + 1}</h3>
          <Input
            id={`outros_familiares_eua[${index}].nome_familiar_eua`}
            name={`outros_familiares_eua[${index}].nome_familiar_eua`}
            label="Nome do Familiar"
            register={register}
            error={errors.outros_familiares_eua?.[index]?.nome_familiar_eua?.message}
            placeholder="Nome completo do familiar"
          />
          <Select
            id={`outros_familiares_eua[${index}].parentesco_familiar_eua`}
            name={`outros_familiares_eua[${index}].parentesco_familiar_eua`}
            label="Grau de Parentesco"
            register={register}
            options={parentescoOptions}
            error={errors.outros_familiares_eua?.[index]?.parentesco_familiar_eua?.message}
            placeholder="Selecione o parentesco"
          />
          <Input
            id={`outros_familiares_eua[${index}].cidade_familiar_eua`}
            name={`outros_familiares_eua[${index}].cidade_familiar_eua`}
            label="Cidade/Estado onde Reside nos EUA"
            register={register}
            error={errors.outros_familiares_eua?.[index]?.cidade_familiar_eua?.message}
            placeholder="Ex: Miami, FL"
          />
          <Select
            id={`outros_familiares_eua[${index}].status_imigratorio_familiar_eua`}
            name={`outros_familiares_eua[${index}].status_imigratorio_familiar_eua`}
            label="Status Imigratório do Familiar (se souber)"
            register={register}
            options={statusImigratorioOptions}
            error={errors.outros_familiares_eua?.[index]?.status_imigratorio_familiar_eua?.message}
            placeholder="Selecione o status"
          />
          <Button
            type="button"
            variant="danger"
            size="sm"
            onClick={() => remove(index)}
            className="absolute top-2 right-2"
          >
            Remover Familiar
          </Button>
        </div>
      ))}

      {possuiFamiliaresEUA && (
        <Button
          type="button"
          onClick={() => append({ nome_familiar_eua: '', parentesco_familiar_eua: '', cidade_familiar_eua: '', status_imigratorio_familiar_eua: '' })}
          variant="secondary"
        >
          Adicionar Familiar nos EUA
        </Button>
      )}
      {!possuiFamiliaresEUA && (
        <p className="text-gray-500 font-figtree">
          Se você não possui familiares nos EUA , pode pular esta seção ou adicionar informações caso mude de ideia.
        </p>
      )}

      <Textarea
        id="outras_informacoes_relevantes"
        name="outras_informacoes_relevantes"
        label="Outras Informações Relevantes"
        register={register}
        error={errors.outras_informacoes_relevantes?.message}
        placeholder="Algum outro detalhe importante sobre sua situação familiar, planos, ou conexões que gostaria de compartilhar?"
        rows={4}
        className="pt-4 border-t border-gray-200 mt-6"
      />

    </div>
  );
};

export default Step6_OtherFamily;
