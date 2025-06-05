import { useState, useCallback } from 'react';

/**
 * @typedef {object} UseMultistepFormHook
 * @property {number} currentStepIndex - Índice do passo atual.
 * @property {React.ReactElement} step - O componente do passo atual.
 * @property {React.ReactElement[]} steps - Array de todos os componentes de passo.
 * @property {boolean} isFirstStep - True se for o primeiro passo.
 * @property {boolean} isLastStep - True se for o último passo.
 * @property {() => void} goToNextStep - Função para ir para o próximo passo.
 * @property {() => void} goToPreviousStep - Função para ir para o passo anterior.
 * @property {(index: number) => void} goToStep - Função para ir para um passo específico pelo índice.
 */

/**
 * Hook customizado para gerenciar a lógica de um formulário multistep.
 * @param {React.ReactElement[]} steps - Array de componentes React representando cada passo.
 * @returns {UseMultistepFormHook}
 */
export function useMultistepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goToNextStep = useCallback(() => {
    setCurrentStepIndex(prevIndex => {
      if (prevIndex >= steps.length - 1) return prevIndex;
      return prevIndex + 1;
    });
  }, [steps.length]);

  const goToPreviousStep = useCallback(() => {
    setCurrentStepIndex(prevIndex => {
      if (prevIndex <= 0) return prevIndex;
      return prevIndex - 1;
    });
  }, []);

  const goToStep = useCallback((index) => {
    if (index < 0 || index >= steps.length) return; // Adiciona verificação de limites
    setCurrentStepIndex(index);
  }, [steps.length]);

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goToNextStep,
    goToPreviousStep,
    goToStep,
  };
}
