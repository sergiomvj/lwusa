import React, { useMemo } from "react";

const images = [
  "city1.webp", // Existe
  "atlanta.jpg", // Substitui city2.webp
  "austin.jpg",  // Substitui city3.webp
  "chicago.jpg", // Substitui city4.webp
  "boston.jpg"   // Substitui city5.webp
];

export default function Section2() {
  // Seleciona uma imagem aleatória a cada renderização
  const randomImage = useMemo(() => {
    const idx = Math.floor(Math.random() * images.length);
    return `/images/cities/${images[idx]}`;
  }, []);

  return (
    <section
      className="w-full relative flex flex-col items-center justify-center text-center py-16 px-6 sm:py-20 sm:px-8"
      style={{ backgroundImage: `url('/images/cities/city1.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0" style={{backgroundColor:'#56396a', opacity:0.9}}></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-white drop-shadow">Incríveis ferramentas para você sonhar, planejar e executar</h2>
        <p className="text-lg mb-6 text-white drop-shadow">O plano que trará a maior mudança de qualidade da sua vida e de sua família.</p>
        <a href="/tools" className="inline-block rounded-full bg-white text-[#367588] font-semibold px-8 py-3 shadow-lg transition hover:bg-[#367588] hover:text-white">Conheça nossas ferramentas exclusivas</a>
      </div>
    </section>
  );
}
