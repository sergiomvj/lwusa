import React from 'react';

/**
 * @typedef {object} FormProgressProps
 * @property {number} currentStepIndex - Índice do passo atual (base 0).
 * @property {number} totalSteps - Número total de passos.
 * @property {string[]} titles - Array com os títulos de cada passo.
 */

/**
 * Componente para exibir a barra de progresso e os títulos dos passos em um formulário multistep.
 * @param {FormProgressProps} props
 */
const FormProgress = ({ currentStepIndex, totalSteps, titles }) => {
  const progressPercentage = totalSteps > 0 ? ((currentStepIndex + 1) / totalSteps) * 100 : 0;

  return (
    <div className="w-full mb-8 px-4 mt-20">
      {/* Título do Passo Atual e Navegação de Progresso */}
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-libre font-semibold text-hunter-green">
          {titles[currentStepIndex] || `Passo ${currentStepIndex + 1}`}
        </h2>
        <p className="text-sm text-gray-500 font-figtree">
          Passo {currentStepIndex + 1} de {totalSteps}
        </p>
      </div>

      {/* Barra de Progresso Visual */}
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-tiffany-blue-light">
          <div 
            style={{ width: `${progressPercentage}%` }} 
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tiffany-blue transition-all duration-500 ease-out"
          ></div>
        </div>
      </div>

      {/* Opcional: Lista de todos os passos (pode ser muito para mobile, considere design) */}
      {/* 
      <div className="flex justify-between text-xs text-gray-500 font-figtree mt-2">
        {titles.map((title, index) => (
          <span 
            key={index} 
            className={`truncate ${index === currentStepIndex ? 'font-bold text-tiffany-blue' : ''}`}
            title={title}
          >
            {index + 1}. {title}
          </span>
        ))}
      </div>
      */}
    </div>
  );
};

export default FormProgress;
