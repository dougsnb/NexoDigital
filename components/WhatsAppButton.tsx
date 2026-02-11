import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/555198810612?text=Olá! Estava navegando no site da Nexo Digital e gostaria de falar com um especialista."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center group"
      aria-label="Falar pelo WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.236-3.328c1.532.909 3.039 1.389 4.621 1.39 5.405 0 9.813-4.41 9.815-9.814 0-2.622-1.02-5.087-2.871-6.938-1.852-1.851-4.317-2.87-6.939-2.87-5.407 0-9.815 4.409-9.817 9.813-.001 1.738.457 3.432 1.323 4.931l-.101.488-.669 2.445 2.503-.657.435-.188zm11.332-6.521c-.301-.151-1.781-.878-2.057-.978-.275-.1-.476-.151-.676.151-.2.301-.777 1.053-.952 1.254-.175.201-.351.226-.652.076-.301-.151-1.268-.467-2.417-1.493-.893-.797-1.495-1.782-1.671-2.083-.176-.301-.019-.464.131-.614.136-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.151-.676-1.631-.927-2.234-.244-.587-.492-.508-.676-.517-.175-.009-.376-.011-.577-.011-.2 0-.527.075-.802.376-.275.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.91 1.228 3.111.151.201 2.122 3.241 5.14 4.544.718.31 1.279.496 1.716.635.721.23 1.377.198 1.896.121.579-.085 1.781-.728 2.031-1.43.25-.702.25-1.305.176-1.43-.076-.126-.276-.201-.577-.352z"/>
      </svg>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-semibold whitespace-nowrap">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;