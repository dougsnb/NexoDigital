import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// @ts-ignore
import logoHeader from '../src/assets/logo-header.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Floating Island Header - Ocean Blue Glass */}
      <div className="fixed top-0 left-0 w-full z-[250] flex justify-center pointer-events-none">
        <header
          className={`mt-4 md:mt-6 transition-all duration-700 pointer-events-auto flex items-center justify-between px-6 md:px-10 py-3 md:py-4 rounded-full border shadow-2xl h-[72px] md:h-20 ${scrolled
            ? 'bg-blue-700/95 backdrop-blur-xl border-blue-400/30 w-[95%] max-w-6xl scale-95 md:scale-100 shadow-blue-900/40'
            : 'bg-blue-800/90 backdrop-blur-lg border-white/20 w-[98%] max-w-7xl shadow-blue-900/20'
            }`}
        >
          {/* Logo Oficial - Agência Nexo Digital */}
          <Link to="/" className="flex items-center focus:outline-none group relative z-[260] -translate-x-4 md:-translate-x-8">
            <img
              src={logoHeader}
              alt="Agência Nexo Digital"
              className="w-56 h-24 md:w-[400px] md:h-24 object-contain brightness-110 group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-black text-xl tracking-tighter uppercase font-display">NEXO<span class="font-light text-blue-100 ml-1">DIGITAL</span></span>';
              }}
            />
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-all hover:text-white relative group/link ${isActive(link.path) ? 'text-white' : 'text-blue-50'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-white transition-all duration-500 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
              </Link>
            ))}
            <Link
              to="/contato"
              className="bg-white text-blue-800 px-7 py-3 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg active:scale-95"
            >
              Consultoria
            </Link>
          </nav>

          {/* Minimalist Mobile Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all group"
          >
            <div className="w-5 h-3.5 relative">
              <span className={`absolute left-0 block w-full h-[1.5px] bg-white transition-all duration-500 ${isOpen ? 'top-1.5 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 top-1.5 block w-3 h-[1.5px] bg-white transition-all duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 block w-full h-[1.5px] bg-white transition-all duration-500 ${isOpen ? 'top-1.5 -rotate-45' : 'top-3'}`}></span>
            </div>
          </button>
        </header>
      </div>

      {/* Modern Portal Menu Mobile */}
      <div
        className={`fixed inset-0 z-[240] lg:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-md" onClick={() => setIsOpen(false)}></div>

        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="h-full flex flex-col p-10 pt-28">
            <span className="text-[9px] font-black text-blue-600 tracking-[0.5em] uppercase mb-10 block">Menu Estratégico</span>

            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-4xl font-black font-display uppercase tracking-tighter transition-all duration-700 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                    } ${isActive(link.path) ? 'text-blue-600' : 'text-gray-900'}`}
                  style={{ transitionDelay: `${isOpen ? idx * 70 + 100 : 0}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className={`mt-auto pt-10 border-t border-gray-100 transition-all duration-700 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-6">Fale Conosco</p>
              <a href="mailto:nexodigitalwebsite@gmail.com" className="text-sm font-black text-gray-900 block mb-2 break-all">nexodigitalwebsite@gmail.com</a>

              <Link
                to="/contato"
                className="mt-10 flex items-center justify-center bg-blue-600 text-white w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-blue-600/20"
              >
                Solicitar Diagnóstico
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;