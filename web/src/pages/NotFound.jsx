import React from "react";

export default function NotFound() {
  return (
    <section className="pt-32 px-4 text-center">
      <h1 className="text-5xl font-libre text-tiffany-blue mb-4">404</h1>
      <p className="font-figtree text-feldgrau mb-6">Página não encontrada.</p>
      <a href="/" className="text-tiffany-blue underline font-figtree">Voltar para o início</a>
    </section>
  );
}
