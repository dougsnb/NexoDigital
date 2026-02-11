import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/posts';

const Blog: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulação de chamada de API para inscrição na newsletter
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail('');

    // Resetar o estado de sucesso após 10 segundos para permitir novas inscrições se necessário
    setTimeout(() => setIsSuccess(false), 10000);
  };

  return (
    <div className="pt-20">
      <header className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-blue-500 rounded-full blur-[80px] md:blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full blur-[80px] md:blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 font-display tracking-tighter leading-tight">Insights & Estratégia</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">Conteúdo educativo para empresas que levam a sério seu posicionamento digital.</p>
        </div>
      </header>

      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            {blogPosts.map((post) => (
              <Link 
                to={`/insights/${post.slug}`} 
                key={post.id} 
                className="group flex flex-col h-full animate-fade-in"
              >
                <div className="overflow-hidden rounded-2xl md:rounded-[2rem] mb-6 md:mb-8 aspect-[16/10] shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center space-x-3 mb-4 md:mb-6">
                  <span className="bg-blue-50 text-blue-600 text-[9px] md:text-[10px] font-black px-2 md:px-3 py-1 rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-gray-300 text-[9px] md:text-[10px] font-black uppercase tracking-widest">{post.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 group-hover:text-blue-600 transition-colors leading-tight font-display tracking-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 mb-6 md:mb-8 leading-relaxed font-normal text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                    <span className="text-black font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center group-hover:gap-3 transition-all">
                      Ler artigo <span className="ml-2 text-lg">→</span>
                    </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Now Functional */}
      <section className="py-16 md:py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-blue-600 font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-4 block">COMUNIDADE NEXO</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 font-display tracking-tight text-balance">Receba nossos insights semanais</h2>
          <p className="text-gray-500 text-base md:text-lg mb-10 md:mb-12 font-medium">Dicas diretas de estratégia, design e performance para o seu negócio.</p>
          
          {isSuccess ? (
            <div className="animate-fade-in bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-blue-100 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg shadow-blue-600/20">✓</div>
              <h3 className="text-2xl font-black mb-2 font-display tracking-tight">Inscrição confirmada!</h3>
              <p className="text-gray-500 font-medium">Bem-vindo à Comunidade Nexo. Verifique sua caixa de entrada em breve.</p>
            </div>
          ) : (
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail" 
                className="flex-grow px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-sm md:text-base bg-white"
                required
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px]"
              >
                {isSubmitting ? "Processando..." : "Inscrever-se"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;