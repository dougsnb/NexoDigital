import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Agência Nexo Digital | Criação de Sites Profissionais e Autoridade Digital";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Especialistas em criação de sites estratégicos com foco em autoridade digital, SEO avançado e conversão de leads qualificados.');
  }, []);

  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "CEO na InnovaTech",
      text: "A Nexo Digital transformou nossa presença online. Em 3 meses, nossa taxa de conversão subiu 60% e o site se tornou nossa principal ferramenta de vendas.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Ana Beatriz",
      role: "Diretora de Marketing - Global Logistics",
      text: "O nível de profissionalismo e a visão estratégica da equipe são impressionantes. O site transparece exatamente a autoridade que queríamos projetar.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Marcos Oliveira",
      role: "Sócio-Fundador da Advocacia Oliveira",
      text: "Nosso escritório precisava de seriedade. O site estratégico entregue pela Nexo nos posicionou no topo das buscas orgânicas e trouxe clientes qualificados.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const specialties = [
    {
      title: "Site Estratégico de Alta Conversão",
      tag: "BRANDING DIGITAL",
      desc: "Design exclusivo pensado para posicionar sua marca como referência e gerar confiança desde o primeiro acesso — em qualquer dispositivo.",
      cta: "Ver projetos estratégicos",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
    },
    {
      title: "SEO Técnico & Performance",
      tag: "ALTA VISIBILIDADE",
      desc: "Seu site estruturado para o Google entender, indexar e mostrar para as pessoas certas — com foco em velocidade, SEO local e intenção de busca.",
      cta: "Aumentar visibilidade no Google",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    },
    {
      title: "Arquitetura de Conversão",
      tag: "RESULTADOS REAIS",
      desc: "Organizamos conteúdo, layout e fluxo do site para reduzir objeções e transformar visitantes em contatos qualificados.",
      cta: "Gerar mais leads",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
    },
    {
      title: "Gestão de Autoridade Digital",
      tag: "POSICIONAMENTO",
      desc: "Criamos um ecossistema digital que fortalece sua marca, aumenta percepção de valor e sustenta crescimento no longo prazo.",
      cta: "Construir autoridade online",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"/></svg>
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
            alt="Dashboard de métricas de marketing digital e arquitetura de autoridade" 
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/80 to-gray-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-32">
          <div className="max-w-4xl animate-fade-in">
            <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Performance Digital de Elite</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-8 md:mb-10 font-display tracking-tight text-balance">
              Sites que <span className="text-blue-500 italic font-medium">convertem</span> em autoridade.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 md:mb-14 leading-relaxed font-light max-w-2xl">
              Arquitetura estratégica de sites para empresas que buscam um posicionamento de destaque e resultados mensuráveis em SEO e vendas.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/contato" 
                className="inline-block bg-blue-600 text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 text-center shadow-xl shadow-blue-600/20"
              >
                Solicitar Diagnóstico SEO
              </Link>
              <Link 
                to="/servicos" 
                className="inline-block border border-white/20 text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center backdrop-blur-md"
              >
                Ver Soluções Digitais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section (Métricas) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 inline-block">MÉTODO EXCLUSIVO</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-[1.15] font-display tracking-tight text-gray-900">
                Por que o seu site atual <span className="text-blue-600 italic font-medium">não ranqueia?</span>
              </h2>
              <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                Um site institucional deve ser mais que um cartão de visitas. Ele precisa ser otimizado tecnicamente para o algoritmo do Google e persuasivo para o ser humano.
              </p>
              <p className="text-gray-400 text-base mb-10 leading-relaxed font-light">
                Na <span className="text-black font-bold">Nexo Digital</span>, aplicamos técnicas de SEO técnico e Arquitetura de Autoridade para que sua empresa domine as buscas orgânicas.
              </p>
              <Link to="/sobre" className="group text-black font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:text-blue-600 transition-colors">
                <span>Conheça nossa metodologia</span>
                <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.1)] group">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-1 font-display tracking-tighter italic">99<span className="text-blue-500 font-bold not-italic text-3xl">%</span></h3>
                <p className="text-[9px] text-gray-400 uppercase font-black tracking-[0.2em]">Google Core Web Vitals</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-10 rounded-[2.5rem] text-white shadow-[0_20px_50px_-10px_rgba(37,99,235,0.3)] hover:scale-[1.03] transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black mb-1 font-display tracking-tighter italic">+45<span className="text-blue-200 font-bold not-italic text-3xl">%</span></h3>
                  <p className="text-[9px] text-blue-100 uppercase font-black tracking-[0.2em]">Conversão de Leads</p>
                </div>
              </div>

              <div className="bg-gray-900 p-8 md:p-12 rounded-[2.5rem] col-span-2 text-white relative overflow-hidden group border border-white/5">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.5),transparent)]"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black mb-2 font-display tracking-tight italic">SEO <span className="text-blue-500 not-italic">ELITE</span></h3>
                    <p className="text-[9px] text-gray-500 uppercase font-black tracking-[0.3em]">Domínio das buscas em 2024</p>
                  </div>
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-[10px] font-bold">#0{i}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <span className="text-blue-500 font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">PROVA SOCIAL</span>
            <h2 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-white">Resultados de quem <span className="text-blue-500 italic">posicionou sua marca.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <img src={t.image} alt={`Foto do cliente satisfeito ${t.name} - ${t.role}`} className="w-14 h-14 rounded-full border-2 border-blue-500" />
                  <div>
                    <h4 className="text-white font-bold text-lg font-display">{t.name}</h4>
                    <p className="text-blue-400 text-[10px] uppercase font-bold tracking-widest">{t.role}</p>
                  </div>
                </div>
                <div className="mb-6 flex gap-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="text-gray-400 leading-relaxed font-light italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties - Nossas Soluções */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">NOSSAS SOLUÇÕES</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight mb-6 text-gray-900">Expertise em <span className="text-blue-600">Presença Digital</span></h2>
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">Sua esteira de maturidade digital: do design estratégico à autoridade consolidada.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialties.map((s, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-blue-50/20 p-10 md:p-12 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(59,130,246,0.1)] transition-all duration-700 border border-white hover:border-blue-100 group relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-100/10 rounded-full blur-3xl group-hover:bg-blue-200/20 transition-all duration-700"></div>
                
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {s.icon}
                </div>

                <span className="text-blue-500 font-black text-[9px] uppercase tracking-[0.3em] mb-4 block">{s.tag}</span>
                <h3 className="text-2xl md:text-3xl font-black mb-4 font-display tracking-tight text-gray-900 group-hover:translate-x-1 transition-transform">{s.title}</h3>
                <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed mb-10 max-w-md">{s.desc}</p>
                
                <Link to="/servicos" className="inline-flex items-center text-black font-black text-[10px] uppercase tracking-widest group/link py-2 border-b-2 border-gray-100 hover:border-blue-600 transition-all">
                  {s.cta} <span className="ml-3 text-lg group-hover/link:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-10 font-display tracking-tight leading-[1.1]">Pronto para ser o <span className="text-blue-500 italic font-medium">número 1?</span></h2>
          <p className="text-lg md:text-xl text-gray-500 mb-12 font-light max-w-2xl mx-auto leading-relaxed">Não aceite um site que apenas existe. Tenha um site que vende e ranqueia.</p>
          <Link 
            to="/contato" 
            className="inline-block bg-blue-600 text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl shadow-blue-600/20 active:scale-95"
          >
            Falar com Especialista em SEO
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;