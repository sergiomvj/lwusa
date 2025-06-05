import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
// import { prospectSchema } from '../../../lib/prospectSchema'; // Para referência de campos

const Step1_PersonalInfo = () => {
  const { register, formState: { errors } } = useFormContext();

  // Opções para Select (exemplo, podem vir de um config ou API)
  const nacionalidadeOptions = [
    { value: 'Brasileira', label: 'Brasileira' },
    { value: 'Americana', label: 'Americana' },
    { value: 'Portuguesa', label: 'Portuguesa' },
    { value: 'Outra', label: 'Outra' },
  ];

  const estadoCivilOptions = [
    { value: 'Solteiro(a)', label: 'Solteiro(a)' },
    { value: 'Casado(a)', label: 'Casado(a)' },
    { value: 'União Estável', label: 'União Estável' },
    { value: 'Divorciado(a)', label: 'Divorciado(a)' },
    { value: 'Viúvo(a)', label: 'Viúvo(a)' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-libre font-semibold text-hunter-green">Sua Essência</h2>
      <p className="text-gray-600 font-figtree mb-6">
        Conte-nos um pouco sobre você. Essas informações são o ponto de partida para imaginarmos juntos novos caminhos para sua vida.
      </p>

      <Input
        id="nome"
        name="nome"
        label="Nome Completo"
        register={register}
        error={errors.nome?.message}
        placeholder="Seu nome completo"
      />

      <Input
        id="email"
        name="email"
        type="email"
        label="E-mail Principal"
        register={register}
        error={errors.email?.message}
        placeholder="seu@email.com"
      />

      <Input
        id="whatsapp"
        name="whatsapp"
        type="tel"
        label="WhatsApp (com DDD)"
        register={register}
        error={errors.whatsapp?.message}
        placeholder="(XX) XXXXX-XXXX"
      />

      <Input
        id="idade"
        name="idade"
        type="number"
        label="Idade"
        register={register}
        error={errors.idade?.message}
        placeholder="Sua idade"
      />

      <Select
        id="nacionalidade"
        name="nacionalidade"
        label="Nacionalidade"
        register={register}
        options={nacionalidadeOptions}
        error={errors.nacionalidade?.message}
        placeholder="Selecione sua nacionalidade"
      />

      <Input
        id="nacionalidade_secundaria"
        name="nacionalidade_secundaria"
        label="Nacionalidade Secundária (Opcional)"
        register={register}
        error={errors.nacionalidade_secundaria?.message}
        placeholder="Sua nacionalidade secundária, se houver"
      />

      <Select
        id="estado_civil"
        name="estado_civil"
        label="Estado Civil"
        register={register}
        options={estadoCivilOptions}
        error={errors.estado_civil?.message}
        placeholder="Selecione seu estado civil"
      />

      <Input
        id="endereco"
        name="endereco"
        label="Endereço (Rua, Número, Complemento)"
        register={register}
        error={errors.endereco?.message}
        placeholder="Ex: Rua das Palmeiras, 123, Apto 4B"
      />

      <Input
        id="cidade"
        name="cidade"
        label="Cidade"
        register={register}
        error={errors.cidade?.message}
        placeholder="Sua cidade atual"
      />

      <Input
        id="estado"
        name="estado"
        label="Estado/Província"
        register={register}
        error={errors.estado?.message}
        placeholder="Seu estado/província atual"
      />

      <Input
        id="cep"
        name="cep"
        label="CEP / Código Postal"
        register={register}
        error={errors.cep?.message}
        placeholder="XXXXX-XXX"
      />

    </div>
  );
};

export default Step1_PersonalInfo;
