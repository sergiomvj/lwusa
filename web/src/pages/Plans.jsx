import React from "react";
import Plans from "../components/Plans";

export default function PlansPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-center">
      <img src="/images/basic/plans.webp" alt="Planos" className="mx-auto mb-8 w-48 h-48 object-contain rounded-lg shadow" />
      <h1 className="text-3xl font-bold mb-4 text-[#367588]">Nossos Planos</h1>
      <p className="mb-8 text-lg">Escolha o plano ideal para sua jornada de imigração para os EUA. Opções para todos os perfis!</p>
      <Plans />
    </div>
  );
}
