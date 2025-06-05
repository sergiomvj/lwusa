import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '../../ui/Input';
import Textarea from '../../ui/Textarea';
import Select from '../../ui/Select'; // Caso precise de selects para moedas ou tipos de investimento

const Step3_FinancialGoals = () => {
  const { register, formState: { errors } } = useFormContext();

  // Poderia ter opções para tipo de visto se relacionado a investimento
  // ...

  // const tipoVistoInteresseOptions = [
  //   { value: 'EB5', label: 'EB-5 (Investidor)' },
  //   { value: 'E2', label: 'E-2 (Investidor de Tratado)' },
  //   { value: 'Outro', label: 'Outro / Não sei' },
  // ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-libre font-semibold text-hunter-green">Seus Horizontes Financeiros</h2>
      <p className="text-gray-600 font-figtree mb-6">
        Quais são seus sonhos de prosperidade? Vamos imaginar juntos como sua vida financeira pode florescer em um novo país.
      </p>

      <Input
        id="renda_mensal_brl"
        name="renda_mensal_brl"
        type="number"
        label="Renda Mensal Familiar (em Reais - BRL)"
        register={register}
        error={errors.renda_mensal_brl?.message}
        placeholder="Ex: 15000"
        inputClassName="appearance-none"
      />

      <Input
        id="patrimonio_total_usd"
        name="patrimonio_total_usd"
        type="number"
        label="Patrimônio Total Líquido (em Dólares - USD)"
        register={register}
        error={errors.patrimonio_total_usd?.message}
        placeholder="Ex: 100000 (incluindo imóveis, investimentos, etc.)"
        inputClassName="appearance-none"
      />

      <Textarea
        id="objetivo_principal_eua"
        name="objetivo_principal_eua"
        label="Principal Objetivo Financeiro/Profissional nos EUA"
        register={register}
        error={errors.objetivo_principal_eua?.message}
        placeholder="Ex: Conseguir um emprego na minha área com salário X, Abrir meu próprio negócio, Investir em imóveis, Aposentadoria tranquila"
        rows={4}
      />

      {/* O campo tipo_visto_interesse pode ser um Select se tiver opções predefinidas */}
      <Input
        id="tipo_visto_interesse"
        name="tipo_visto_interesse"
        label="Tipo de Visto de Interesse (se souber)"
        register={register}
        error={errors.tipo_visto_interesse?.message}
        placeholder="Ex: H-1B, EB-2 NIW, L1, F1, EB-5"
      />

      <Input
        id="data_planejada_mudanca"
        name="data_planejada_mudanca"
        type="text" // Pode ser 'month' ou um date picker customizado
        label="Data Planejada para Mudança (aproximada)"
        register={register}
        error={errors.data_planejada_mudanca?.message}
        placeholder="Ex: Segundo semestre de 2025, Em até 1 ano"
      />

    </div>
  );
};

export default Step3_FinancialGoals;
