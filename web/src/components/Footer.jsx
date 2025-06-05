import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#56396a] pt-12 pb-4 mt-24 border-t border-moonstone text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 py-8 sm:grid-cols-12 md:py-12">
          {/* Marca e missão */}
          <div className="space-y-2 sm:col-span-12 md:col-span-12 lg:col-span-4 text-center lg:text-left">
            <div>
              <span className="font-libre font-bold text-2xl">LifeWayUSA</span>
            </div>
            <div className="text-sm font-figtree">
              Plataforma digital para orientar famílias no processo de imigração para os EUA, com planos personalizados, ferramentas exclusivas e serviços integrados.
            </div>
          </div> {/* End of Marca e missão div */}

          {/* Mobile-only container for Plataforma & Institucional */}
          <div className="block md:hidden sm:col-span-12 py-4 my-4 border-y border-white/20">
            <div className="grid grid-cols-2 gap-x-4 p-[10px]">
              <div className="text-center">
                <h3 className="text-sm font-libre">Plataforma</h3>
                <ul className="space-y-2 text-sm font-figtree">
                  <li><a href="/" className="hover:text-white">Início</a></li>
                  <li><a href="/plans" className="hover:text-white">Planos</a></li>
                  <li><a href="/tools" className="hover:text-white">Ferramentas</a></li>
                  <li><a href="/blog" className="hover:text-white">Blog</a></li>
                  <li><a href="/contact" className="hover:text-white">Contato</a></li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-libre">Institucional</h3>
                <ul className="space-y-2 text-sm font-figtree">
                  <li><a href="/about" className="hover:text-white">Sobre Nós</a></li>
                  <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                  <li><a href="/legal/privacy" className="hover:text-white">Privacidade</a></li>
                  <li><a href="/legal/terms" className="hover:text-white">Termos de Uso</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Plataforma (Desktop) - Hidden on mobile */}
          <div className="hidden md:block space-y-2 sm:col-span-6 md:col-span-5 lg:col-span-3 text-center md:text-left">
            <h3 className="text-sm font-libre">Plataforma</h3>
            <ul className="space-y-2 text-sm font-figtree">
              <li><a href="/" className="hover:text-white">Início</a></li>
              <li><a href="/plans" className="hover:text-white">Planos</a></li>
              <li><a href="/tools" className="hover:text-white">Ferramentas</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/contact" className="hover:text-white">Contato</a></li>
            </ul>
          </div>

          {/* Institucional (Desktop) - Hidden on mobile */}
          <div className="hidden md:block space-y-2 sm:col-span-6 md:col-span-5 lg:col-span-3 text-center md:text-left">
            <h3 className="text-sm font-libre">Institucional</h3>
            <ul className="space-y-2 text-sm font-figtree">
              <li><a href="/about" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/legal/privacy" className="hover:text-white">Privacidade</a></li>
              <li><a href="/legal/terms" className="hover:text-white">Termos de Uso</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div className="space-y-2 sm:col-span-12 md:col-span-2 lg:col-span-2 text-center">
            <h3 className="text-sm font-libre">Social</h3>
            <ul className="flex gap-2 font-figtree justify-center">
              <li>
                <a href="#" className="text-white hover:text-white" aria-label="Instagram">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.5.2.8.4 1.1.7.3.3.5.7.7 1.1.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.5-.4.8-.7 1.1-.3.3-.7.5-1.1.7-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.5-.2-.8-.4-1.1-.7-.3.3-.5-.7-.7-1.1-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.5.4-.8.7-1.1.3-.3.7-.5 1.1-.7.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 0c-1.3 0-2.2.1-2.9.2C3.4.3 2.7.5 2.2.8c-.5.3-.9.7-1.2 1.2-.3.5-.5 1.2-.6 2.1C0 5.7 0 6.1 0 12s0 6.3.1 7.9c.1.9.3 1.6.6 2.1.3.5.7.9 1.2 1.2.5.3 1.2.5 2.1.6C5.7 24 6.1 24 12 24s6.3 0 7.9-.1c.9-.1 1.6-.3 2.1-.6.5-.3.9-.7 1.2-1.2.3-.5.5-1.2.6-2.1.1-1.6.1-2 .1-7.9s0-6.3-.1-7.9c-.1-.9-.3-1.6-.6-2.1-.3-.5-.7-.9-1.2-1.2-.5-.3-1.2-.5-2.1-.6C18.3 0 17.9 0 12 0z"></path></svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white" aria-label="LinkedIn">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.7-.8-1.7-1.7 0-1 .8-1.7 1.7-1.7s1.7.8 1.7 1.7c0 .9-.7 1.7-1.7 1.7zm13.5 10.3h-3v-4.5c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4v4.6h-3v-9h2.9v1.2h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.5 1.9 3.5 4.3v5z"></path></svg>
                </a>
              </li>
            </ul>
          </div>
        </div> {/* End of main grid */}

        {/* Copyright text - moved here, below the grid */}
        <div className="text-xs font-figtree text-center pt-8 pb-4 border-t border-white/20 mt-8">
          &copy; 2025 LifeWayUSA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
