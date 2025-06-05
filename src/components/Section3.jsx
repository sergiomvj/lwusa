import React, { useMemo } from "react";

const images = [
  "city1.webp", // Existe
  "atlanta.jpg", // Substitui city2.webp
  "austin.jpg",  // Substitui city3.webp
  "chicago.jpg", // Substitui city4.webp
  "boston.jpg"   // Substitui city5.webp
];

const reasons = [
  {
    title: "Segurança",
    img: "/images/basic/security.webp",
    desc: "Viva em um país com baixos índices de criminalidade e excelente estrutura policial."
  },
  {
    title: "Educação",
    img: "/images/basic/education.webp",
    desc: "Acesso a escolas e universidades de padrão internacional para toda a família."
  },
  {
    title: "Oportunidades",
    img: "/images/basic/opportunity.webp",
    desc: "Mercado de trabalho amplo, empreendedorismo e crescimento profissional."
  },
  {
    title: "Qualidade de vida",
    img: "/images/basic/quality.webp",
    desc: "Infraestrutura, lazer, saúde e bem-estar em todas as fases da vida."
  }
];

export default function Section3() {
  const randomImage = useMemo(() => {
    const idx = Math.floor(Math.random() * images.length);
    return `/images/cities/${images[idx]}`;
  }, []);

  return (
    <section
      className="w-full relative flex flex-col items-center justify-center text-center py-16 px-6 sm:py-20 sm:px-8"
      style={{ backgroundImage: `url('${randomImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0" style={{backgroundColor:'#367588', opacity:0.85}}></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white drop-shadow">Porque se mudar para os EUA pode mudar sua vida</h2>
        <p className="text-lg mb-8 text-white drop-shadow">A maior nação do planeta tem infraestrutura, cultura e ambiente seguro para você e sua família.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white/90 rounded-lg shadow-lg p-6 flex flex-col items-center text-center sm:text-left">
              <img className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg" src={reason.img} alt={reason.title} />
              <h3 className="text-lg font-bold text-[#367588] mb-2">{reason.title}</h3>
              <p className="text-sm text-[#367588]">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
