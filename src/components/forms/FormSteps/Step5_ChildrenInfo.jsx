import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Button from '../../ui/Button';
import Checkbox from '../../ui/Checkbox';

const Step5_ChildrenInfo = () => {
  const { control, register, watch, setValue, formState: { errors } } = useFormContext();
  const semFilhos = watch('sem_filhos');
  const { fields, append, remove, replace } = useFieldArray({
    name: 'filhos',
    control,
  });

  // Garante que sempre há pelo menos 1 filho se não for 'semFilhos'
  React.useEffect(() => {
    if (!semFilhos && fields.length === 0) {
      append({ nome: '', idade: undefined, escolaridade: '', necessidades_especiais_filho: '' });
    }
    // Se marcar 'semFilhos', limpa todos os filhos
    if (semFilhos && fields.length > 0) {
      replace([]);
    }
  }, [semFilhos]);

  const serieEscolarOptions = [
    { value: 'N/A', label: 'Não se aplica / Não está em idade escolar' },
    { value: 'Pre-K', label: 'Pre-Kindergarten (Pré-escola)' },
    { value: 'Kindergarten', label: 'Kindergarten (Jardim de Infância)' },
    { value: '1st Grade', label: '1st Grade (1º Ano Fundamental)' },
    { value: '2nd Grade', label: '2nd Grade (2º Ano Fundamental)' },
    { value: '3rd Grade', label: '3rd Grade (3º Ano Fundamental)' },
    { value: '4th Grade', label: '4th Grade (4º Ano Fundamental)' },
    { value: '5th Grade', label: '5th Grade (5º Ano Fundamental)' },
    { value: '6th Grade', label: '6th Grade (6º Ano Fundamental)' },
    { value: '7th Grade', label: '7th Grade (7º Ano Fundamental)' },
    { value: '8th Grade', label: '8th Grade (8º Ano Fundamental)' },
    { value: '9th Grade', label: '9th Grade (9º Ano Fundamental / High School)' },
    { value: '10th Grade', label: '10th Grade (High School)' },
    { value: '11th Grade', label: '11th Grade (High School)' },
    { value: '12th Grade', label: '12th Grade (High School)' },
    { value: 'College', label: 'College / University (Ensino Superior)' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-libre font-semibold text-hunter-green">A Próxima Geração</h2>
      <p className="text-gray-600 font-figtree mb-6">
        Se você tem filhos, conte-nos sobre eles. Vamos sonhar juntos com as possibilidades para o futuro deles.
      </p>

      <Checkbox
        id="sem_filhos" // Adicionando uma opção para quem não tem filhos
        name="sem_filhos"
        label="Não possuo filhos ou não desejo informar no momento."
        register={register}
        error={errors.sem_filhos?.message}
        className="mb-4"
      />

      {!semFilhos && fields.map((item, index) => (
        <div key={item.id} className="p-4 border border-gray-300 rounded-md space-y-4 relative">
          <h3 className="text-lg font-libre font-medium text-gray-700">Filho(a) {index + 1}</h3>
          <Input
            id={`filhos[${index}].nome`}
            name={`filhos[${index}].nome`}
            label="Nome Completo do Filho(a)"
            register={register}
            error={errors.filhos?.[index]?.nome?.message}
            placeholder="Nome completo do filho(a)"
          />
          <Input
            id={`filhos[${index}].idade`}
            name={`filhos[${index}].idade`}
            type="number"
            label="Idade do Filho(a)"
            register={register}
            error={errors.filhos?.[index]?.idade?.message}
            placeholder="Idade"
          />
          <Select
            id={`filhos[${index}].escolaridade`}
            name={`filhos[${index}].escolaridade`}
            label="Série Escolar Atual/Pretendida nos EUA"
            register={register}
            options={serieEscolarOptions}
            error={errors.filhos?.[index]?.escolaridade?.message}
            placeholder="Selecione a série escolar"
          />
          <Input
            id={`filhos[${index}].necessidades_especiais_filho`}
            name={`filhos[${index}].necessidades_especiais_filho`}
            label="Necessidades Educacionais Especiais (se houver)"
            register={register}
            error={errors.filhos?.[index]?.necessidades_especiais_filho?.message}
            placeholder="Ex: TDAH, Autismo, Dislexia (opcional)"
          />
          <Button
            type="button"
            variant="danger"
            size="sm"
            onClick={() => remove(index)}
            className="absolute top-2 right-2"
          >
            Remover Filho(a)
          </Button>
        </div>
      ))}

      {!semFilhos && (
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            console.log('Botão Adicionar Filho(a) clicado');
            console.log('Estado de fields ANTES de append:', fields);
            append({ 
              nome: '', 
              idade: undefined, 
              escolaridade: '', 
              necessidades_especiais_filho: '' 
            });
            console.log('append() chamado. Verificar o próximo render para fields atualizado.');
          }}
        >
          Adicionar Filho(a)
        </Button>
      )}

      {/* O campo 'filhos_escola' foi movido para Step4, mas pode ser referenciado aqui se necessário */}
    </div>
  );
};

export default Step5_ChildrenInfo;
