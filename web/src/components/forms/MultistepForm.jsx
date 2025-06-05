import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { prospectSchema } from '../../lib/prospectSchema'; // Ajuste o caminho se necessário
import { useMultistepForm } from '../../hooks/useMultistepForm';

import FormProgress from './FormProgress';
import Button from '../ui/Button';
import LoadingSpinner from '../shared/LoadingSpinner'; // Supondo que foi criado

// Importe os componentes de cada passo
import Step1_PersonalInfo from './FormSteps/Step1_PersonalInfo';
import Step2_ProExperience from './FormSteps/Step2_ProExperience';
import Step3_FinancialGoals from './FormSteps/Step3_FinancialGoals';
import Step4_FamilyInfo from './FormSteps/Step4_FamilyInfo';
import Step5_ChildrenInfo from './FormSteps/Step5_ChildrenInfo';
import Step6_OtherFamily from './FormSteps/Step6_OtherFamily';
import Step7_ReviewConfirm from './FormSteps/Step7_ReviewConfirm';

// Definição dos passos do formulário
const steps = [
  { id: 'personalInfo', title: 'Informações Pessoais', component: Step1_PersonalInfo },
  { id: 'proExperience', title: 'Experiência Profissional', component: Step2_ProExperience },
  { id: 'financialGoals', title: 'Metas Financeiras', component: Step3_FinancialGoals },
  { id: 'familyInfo', title: 'Informações Familiares', component: Step4_FamilyInfo },
  { id: 'childrenInfo', title: 'Informações dos Filhos', component: Step5_ChildrenInfo },
  { id: 'otherFamily', title: 'Outros Familiares', component: Step6_OtherFamily },
  { id: 'reviewConfirm', title: 'Revisão e Confirmação', component: Step7_ReviewConfirm },
];

const MultistepForm = ({ onSubmitForm, initialData = {} }) => {
  const methods = useForm({
    resolver: zodResolver(prospectSchema),
    defaultValues: initialData, // Para preencher o formulário com dados existentes (ex: edição)
    mode: 'onChange', // Valida ao mudar, útil para feedback em tempo real
  });

  console.log('Hook output:', useMultistepForm(steps));
  const navigate = useNavigate();
  const {
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    goToStep: goTo,
    goToNextStep: next,
    goToPreviousStep: back,
  } = useMultistepForm(steps);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  // Efeito para rolar para o topo da página ao mudar de passo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStepIndex]);

  const CurrentStepComponent = steps[currentStepIndex].component;
  const stepTitles = steps.map(s => s.title);

  const handleNext = async () => {
    // Trigger validation for the current step's fields
    // Isso pode ser otimizado para validar apenas os campos do passo atual
    // mas o Zod schema valida o objeto inteiro. Para validação por passo,
    // seriam necessários schemas parciais ou uma lógica customizada.
    const isValid = await methods.trigger();
    console.log('Validation result:', isValid, 'Errors:', methods.formState.errors); 
    if (isValid) {
      next();
    } else {
      // Focar no primeiro campo com erro, se possível
      const firstError = Object.keys(methods.formState.errors)[0];
      if (firstError) {
        methods.setFocus(firstError);
      }
    }
  };

  const onSubmit = async (data) => {
    if (!isLastStep) return handleNext(); // Se não for o último passo, apenas avança

    setIsSubmitting(true);
    setSubmissionError(null);
    try {
      // Simula uma chamada de API
      // await new Promise(resolve => setTimeout(resolve, 2000)); 
      // console.log('Form data submitted:', data);
      // throw new Error('Simulated API Error'); // Para testar erro
      
      if (onSubmitForm) {
        await onSubmitForm(data);
        navigate('/dash2'); // Redireciona para Dash2 após sucesso
      } else {
        // Fallback caso onSubmitForm não seja fornecido, o que não deveria acontecer neste fluxo.
        console.warn('onSubmitForm prop não foi fornecido ao MultistepForm.');
        alert('Configuração de submissão pendente. Formulário não pode ser finalizado.');
      }
      // Não é mais necessário resetar o formulário ou mostrar alerta aqui, pois o usuário será redirecionado.
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionError(error.message || 'Ocorreu um erro ao enviar o formulário.');
      alert(`Erro ao enviar: ${error.message || 'Erro desconhecido'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8 font-figtree">
        <FormProgress 
          currentStepIndex={currentStepIndex} 
          totalSteps={steps.length} 
          titles={stepTitles}
        />

        <div className="p-6 bg-white shadow-lg rounded-lg min-h-[300px]">
          {isSubmitting && currentStepIndex === steps.length -1 && (
            <div className="flex flex-col items-center justify-center h-full">
              <LoadingSpinner size="lg" label="Enviando seus dados..." />
            </div>
          )}
          {!isSubmitting && <CurrentStepComponent />}
        </div>

        {submissionError && isLastStep && (
          <div className="p-4 text-red-700 bg-red-100 border border-red-400 rounded-md">
            <strong>Erro na Submissão:</strong> {submissionError}
          </div>
        )}

        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          <div>
            {!isFirstStep && (
              <Button type="button" onClick={back} variant="secondary" disabled={isSubmitting}>
                Voltar
              </Button>
            )}
          </div>
          <div>
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? (
                <LoadingSpinner size="sm" color="text-white" />
              ) : isLastStep ? (
                'Enviar Sonho'
              ) : (
                'Avançar'
              )}
            </Button>
          </div>
        </div>
        
        {/* Para Debug: Mostrar dados do formulário e erros */} 
        {/* 
        <div className='mt-8 p-4 bg-gray-100 rounded'>
          <h3 className='font-bold'>Form State (Debug):</h3>
          <pre className='text-xs whitespace-pre-wrap'>{JSON.stringify(methods.watch(), null, 2)}</pre>
          <h3 className='font-bold mt-4'>Errors (Debug):</h3>
          <pre className='text-xs whitespace-pre-wrap text-red-500'>{JSON.stringify(methods.formState.errors, null, 2)}</pre>
        </div>
        */}
      </form>
    </FormProvider>
  );
};

export default MultistepForm;
