import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-500 mb-1">Agência</span>
              <h2 className="text-2xl font-extrabold tracking-tighter font-display uppercase leading-none">Nexo Digital</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Criamos sites estratégicos que transformam empresas em autoridades digitais. Foco em performance, SEO e conversão de leads.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/agencianexodigitalweb" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Navegação</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights & Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Soluções</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Criação de Sites Profissionais</li>
              <li>Arquitetura de Autoridade</li>
              <li>SEO & Performance</li>
              <li>Design de Conversão</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-5 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18"/></svg>
                <span>Atendimento Online — Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:nexodigitalwebsite@gmail.com" className="hover:text-white transition-colors">nexodigitalwebsite@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338-11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.236-3.328c1.532.909 3.039 1.389 4.621 1.39 5.405 0 9.813-4.41 9.815-9.814 0-2.622-1.02-5.087-2.871-6.938-1.852-1.851-4.317-2.87-6.939-2.87-5.407 0-9.815 4.409-9.817 9.813-.001 1.738.457 3.432 1.323 4.931l-.101.488-.669 2.445 2.503-.657.435-.188zm11.332-6.521c-.301-.151-1.781-.878-2.057-.978-.275-.1-.476-.151-.676.151-.2.301-.777 1.053-.952 1.254-.175.201-.351.226-.652.076-.301-.151-1.268-.467-2.417-1.493-.893-.797-1.495-1.782-1.671-2.083-.176-.301-.019-.464.131-.614.136-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.151-.676-1.631-.927-2.234-.244-.587-.492-.508-.676-.517-.175-.009-.376-.011-.577-.011-.2 0-.527.075-.802.376-.275.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.91 1.228 3.111.151.201 2.122 3.241 5.14 4.544.718.31 1.279.496 1.716.635.721.23 1.377.198 1.896.121.579-.085 1.781-.728 2.031-1.43.25-.702.25-1.305.176-1.43-.076-.126-.276-.201-.577-.352z"/></svg>
                <a href="https://wa.me/555198810612" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+55 51 9881-0612</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <a href="https://instagram.com/agencianexodigitalweb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@agencianexodigitalweb</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Agência Nexo Digital. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;