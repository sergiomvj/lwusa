import React from "react";

export default function Section1() {
  return (
    <section
      className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-8 px-4 pb-20 text-center relative"
      style={{
        backgroundImage:
          "url('/images/hero/image.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay azul petróleo (moonstone) */}
      <div className="absolute inset-0" style={{backgroundColor:'#367588', opacity:0.9}}></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl sm:text-6xl font-libre font-bold text-white mb-4 leading-tight drop-shadow-lg">
          Bem-vindo ao LifeWayUSA
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl text-white mx-auto mb-2 font-figtree drop-shadow">
          Plataforma digital para transformar o sonho americano em realidade. Orientação personalizada, ferramentas inteligentes e serviços integrados para famílias brasileiras planejando imigrar para os EUA.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center font-figtree">
          <a href="/register" className="rounded-full bg-tiffany-blue hover:bg-moonstone text-white font-semibold px-8 py-3 shadow-lg transition">
            Comece agora gratuitamente
          </a>
          <a href="/plans" className="rounded-full border-2 border-tiffany-blue text-white hover:bg-tiffany-blue/10 font-semibold px-8 py-3 transition">
            Conheça nossos planos
          </a>
        </div>
      </div>
    </section>
  );
}
