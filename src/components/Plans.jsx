import React from "react";

export default function Section4() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-libre font-bold text-tiffany-blue mb-8 text-center">Nossos Planos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Plano Free */}
          <div className="rounded-xl bg-silver p-6 shadow text-center flex flex-col items-center">
            <div className="font-libre text-lg font-bold text-licorice mb-2">Free</div>
            <div className="font-figtree text-feldgrau mb-4">Acesso básico às ferramentas e conteúdos institucionais.</div>
            <div className="font-libre text-2xl text-tiffany-blue mb-2">R$0</div>
            <a href="/register" className="rounded bg-tiffany-blue text-white px-6 py-2 font-figtree font-bold hover:bg-moonstone transition">Começar grátis</a>
          </div>
          {/* Plano Pro */}
          <div className="rounded-xl bg-silver p-6 shadow text-center flex flex-col items-center">
            <div className="font-libre text-lg font-bold text-licorice mb-2">Pro</div>
            <div className="font-figtree text-feldgrau mb-4">Ferramentas avançadas, simuladores e conteúdos exclusivos.</div>
            <div className="font-libre text-2xl text-tiffany-blue mb-2">R$49/mês</div>
            <a href="/register" className="rounded bg-tiffany-blue text-white px-6 py-2 font-figtree font-bold hover:bg-moonstone transition">Assinar Pro</a>
          </div>
          {/* Plano Premium */}
          <div className="rounded-xl bg-silver p-6 shadow text-center flex flex-col items-center">
            <div className="font-libre text-lg font-bold text-licorice mb-2">Premium</div>
            <div className="font-figtree text-feldgrau mb-4">Consultoria personalizada, suporte prioritário e todos os recursos do Pro.</div>
            <div className="font-libre text-2xl text-tiffany-blue mb-2">R$99/mês</div>
            <a href="/register" className="rounded bg-tiffany-blue text-white px-6 py-2 font-figtree font-bold hover:bg-moonstone transition">Assinar Premium</a>
          </div>
        </div>
      </div>
    </section>
  );
}
