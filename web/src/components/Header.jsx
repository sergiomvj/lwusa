import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient'; // Ajuste este caminho se necessário

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3V16a1 1 0 011-1h2a1 1 0 011 1v5h3a1 1 0 001-1V10l-7-7-7 7z" />
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getSessionAndProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setCurrentUser(session.user);
        const { data: userProfile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        if (profileError) {
          console.error('Erro ao buscar perfil:', profileError.message);
        } else {
          setProfile(userProfile);
        }
      } else {
        setCurrentUser(null);
        setProfile(null);
      }
    };

    getSessionAndProfile();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setCurrentUser(session.user);
        const { data: userProfile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        if (profileError) {
          console.error('Erro ao buscar perfil (listener):', profileError.message);
          setProfile(null);
        } else {
          setProfile(userProfile);
        }
      } else {
        setCurrentUser(null);
        setProfile(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    closeMenu();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Erro ao fazer logout:', error.message);
    } else {
      setCurrentUser(null);
      setProfile(null);
      navigate('/'); // Redireciona para a home após logout
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 shadow-md z-30">
      <div className="max-w-6xl mx-auto grid grid-cols-3 md:flex items-center justify-center md:justify-between py-4 px-6">
        <div className="md:hidden"></div> 
        <Link to="/" onClick={closeMenu} className="font-libre text-3xl md:text-2xl font-bold tracking-tight select-none col-start-2 md:col-start-auto justify-self-center md:justify-self-start" style={{color:'#19443C'}}>
          LifeWayUSA
        </Link>
        
        <nav className="hidden md:flex items-center gap-4 font-figtree">
          <Link to="/" className="p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-tiffany-blue" title="Início"><HomeIcon /></Link>
          <Link to="/#section4" className="px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-tiffany-blue">Planos</Link>
          <Link to="/tools" className="px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-tiffany-blue">Ferramentas</Link>
          <Link to="/blog" className="px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-tiffany-blue">Blog</Link>
          <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-tiffany-blue">Contato</Link>
          {profile?.is_editor && (
            <Link to="/admin/dashboard" className="px-4 py-2 bg-tiffany-blue text-white rounded-md hover:bg-tiffany-blue-darker font-semibold">
              Painel do Editor
            </Link>
          )}
          {currentUser ? (
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 font-semibold"
            >
              Sair
            </button>
          ) : (
            <Link 
              to="/login" 
              className="px-4 py-2 bg-tiffany-blue text-white rounded-md hover:bg-tiffany-blue-darker font-semibold"
            >
              Login / Cadastre-se
            </Link>
          )}
        </nav>

        <div className="md:hidden justify-self-end">
          <button
            onClick={toggleMenu}
            className="text-[#19443C] focus:outline-none p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/90 border-t border-gray-200">
          <nav className="flex flex-col items-stretch gap-1 py-3 px-4 font-figtree">
            <Link to="/" onClick={closeMenu} className="flex items-center justify-center p-3 rounded-md hover:bg-gray-100 text-gray-700 hover:text-tiffany-blue" title="Início"><HomeIcon /></Link>
            <Link to="/#section4" onClick={closeMenu} className="block text-center p-3 rounded-md hover:bg-gray-100 text-gray-700 hover:text-tiffany-blue">Planos</Link>
            <Link to="/tools" onClick={closeMenu} className="block text-center p-3 rounded-md hover:bg-gray-100 text-gray-700 hover:text-tiffany-blue">Ferramentas</Link>
            <Link to="/blog" onClick={closeMenu} className="block text-center p-3 rounded-md hover:bg-gray-100 text-gray-700 hover:text-tiffany-blue">Blog</Link>
            <Link to="/contact" onClick={closeMenu} className="block text-center p-3 rounded-md hover:bg-gray-100 text-gray-700 hover:text-tiffany-blue">Contato</Link>
            {profile?.is_editor && (
              <Link to="/admin/dashboard" onClick={closeMenu} className="block text-center p-3 mt-2 rounded-md font-semibold bg-tiffany-blue/10 text-tiffany-blue-darker hover:bg-tiffany-blue/20">
                Painel do Editor
              </Link>
            )}
            <div className="mt-4 pt-2 border-t border-gray-200">
              {currentUser ? (
                <button 
                  onClick={handleLogout}
                  className="w-full px-4 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 font-semibold"
                >
                  Sair
                </button>
              ) : (
                <Link 
                  to="/login" 
                  onClick={closeMenu}
                  className="block w-full text-center px-4 py-3 bg-tiffany-blue text-white rounded-md hover:bg-tiffany-blue-darker font-semibold"
                >
                  Login / Cadastre-se
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
