import React from "react";

export default function Section1() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center gap-8 pt-24 pb-16 px-6 sm:pt-28 sm:pb-20 sm:px-8 text-center relative m-0"
      style={{
        backgroundImage:
          "url('/images/hero/image.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay azul petróleo */}
      <div className="absolute inset-0" style={{backgroundColor:'#367588', opacity:0.9}}></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-libre font-bold text-white leading-tight drop-shadow-lg">
          Viva legalmente nos EUA
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-libre font-bold text-white mt-2 mb-4 leading-tight drop-shadow-lg">
          e mude sua vida e de sua familia
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-white mx-auto mb-2 font-figtree drop-shadow">
          Use gratuitamente os recursos da maior plataforma de recursos para imigração no mundo. Orientação personalizada, ferramentas inteligentes e serviços integrados para famílias planejando imigrar para os EUA.
        </p>
        <div className="flex flex-col gap-4 justify-center font-figtree">
          <a href="/register" className="rounded-full bg-tiffany-blue hover:bg-[#367588] text-white font-semibold px-8 py-3 shadow-lg transition">
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
