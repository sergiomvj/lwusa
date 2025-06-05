import React, { useEffect, useState } from 'react';
import MultistepForm from '../../components/forms/MultistepForm';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../../lib/supabaseClient';

export default function CriadorDeSonhosPage() {
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Busca o profile pelo user_id
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('nome, whatsapp')
          .eq('user_id', user.id)
          .single();
        if (profile) {
          setInitialData({
            nome: profile.nome || '',
            whatsapp: profile.whatsapp || ''
          });
        }
      }
    }
    fetchProfile();
  }, []);

  const [dreamSummary, setDreamSummary] = useState(null);

  const handleDreamCreatorSubmit = async (data) => {
    console.log('Dados do Criador de Sonhos para enviar:', data);
    try {
      // Usar backend procedural (mock)
      const response = await import('../../DreamCreatorTest/mockBackend').then(mod => mod.salvarSonho(data));
      setDreamSummary(response.dreamSummary || 'Seu sonho foi registrado! (mock)');
    } catch (error) {
      console.error('Erro ao enviar dados do Criador de Sonhos:', error);
      alert(`Ocorreu um erro: ${error.message}`);
      throw error;
    }
  };


  return (
    <>
      <Helmet>
        <title>Criador de Sonhos - LifeWay USA</title>
        <meta name="description" content="Utilize o Criador de Sonhos para mapear seu perfil e objetivos para imigrar para os EUA. Preencha o formulário detalhado e receba uma análise personalizada." />
      </Helmet>
      <div className="container mx-auto px-4 py-8 font-figtree">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-libre font-bold text-hunter-green mb-4">
            Criador de Sonhos LifeWayUSA
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Bem-vindo ao seu laboratório de sonhos! Este formulário detalhado é o primeiro passo para transformar seu objetivo de viver nos EUA em um plano concreto. Suas respostas nos ajudarão a simular cenários e, futuramente, conectar você com nossos especialistas e IA para uma análise personalizada.
          </p>
        </header>

        <main className="max-w-4xl mx-auto bg-alabaster-50 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl mt-[50px] pt-32">
          <MultistepForm onSubmitForm={handleDreamCreatorSubmit} initialData={initialData} />
          {dreamSummary && (
            <div className="mt-10 p-6 bg-white border-l-4 border-hunter-green shadow-lg rounded-xl animate-fade-in">
              <h2 className="text-2xl font-libre font-bold text-hunter-green mb-2">Seu Sonho Possível</h2>
              <p className="text-gray-700 whitespace-pre-line">{dreamSummary}</p>
            </div>
          )}
        </main>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-libre font-semibold text-hunter-green mb-3">Próximos Passos Após o Envio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Após submeter suas informações, nossa equipe (e em breve, nossa IA) analisará seu perfil. Você poderá receber insights valiosos e recomendações personalizadas. Fique de olho no seu e-mail e em nossa plataforma!
          </p>
        </section>
      </div>
    </>
  );
}
