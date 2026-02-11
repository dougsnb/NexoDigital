import React, { useEffect } from 'react';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Serviços de Criação de Sites Profissionais e SEO | Nexo Digital";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Conheça nossas soluções de criação de sites institucionais, otimização de performance SEO e design focado em conversão de leads qualificados.');

    // JSON-LD para Serviços
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Criação de Sites Profissionais",
          "description": "Desenvolvimento de sites institucionais com design exclusivo e arquitetura de autoridade."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Otimização SEO e Performance",
          "description": "Serviços avançados de SEO on-page e otimização técnica de carregamento (Core Web Vitals)."
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'services-schema';
    script.innerHTML = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    return () => {
      document.getElementById('services-schema')?.remove();
    };
  }, []);

  const solutions = [
    {
      title: "Criação de sites profissionais estratégicos",
      tag: "Site Institucional de Elite",
      desc: "Desenvolvemos o coração da sua presença online. Entregamos um site que posiciona sua marca como autoridade absoluta em seu nicho através de design estratégico.",
      features: ["Navegação UX Intuitiva", "Copywriting Persuasivo", "Design Exclusivo Responsivo"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
      alt: "Exemplo de interface de site institucional estratégico focado em autoridade"
    },
    {
      title: "Performance e Otimização SEO Avançado",
      tag: "Site Otimizado para o Google",
      desc: "Não basta ser bonito, precisa ser encontrado. Otimizamos cada linha de código para garantir o topo das buscas orgânicas com as melhores práticas de SEO técnico.",
      features: ["Otimização Core Web Vitals", "Arquitetura SEO On-page", "Carregamento Instantâneo"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
      alt: "Painel de análise de SEO avançado e métricas de performance do Google"
    },
    {
      title: "Design focado em Conversão (CRO)",
      tag: "Geração de Leads Qualificados",
      desc: "Transforme tráfego em receita recorrente. Criamos caminhos de conversão claros e CTAs estratégicos que guiam o visitante até o contato final.",
      features: ["Arquitetura de Conversão Digital", "Design de Landing Pages", "Otimização de Taxa de Resposta"],
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=2070",
      alt: "Planejamento estratégico de design focado em conversão de usuários"
    }
  ];

  return (
    <div className="pt-20">
      <header className="bg-gray-50 py-24 md:py-32 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 font-display tracking-tight leading-tight">
              Soluções de <span className="text-blue-600">Performance SEO</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Sua empresa merece uma agência estratégica focada em crescimento real através da tecnologia e design de ponta.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-32 md:space-y-48">
          {solutions.map((s, idx) => (
            <article 
              key={idx} 
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              <div className="flex-1 animate-fade-in">
                <span className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">{s.tag}</span>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-8 font-display tracking-tight leading-tight text-gray-900">{s.title}</h2>
                <p className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed font-light">{s.desc}</p>
                <ul className="grid grid-cols-1 gap-4">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-900 font-semibold text-xs uppercase tracking-widest">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-4 shrink-0">
                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1 w-full animate-fade-in">
                <div className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-video lg:aspect-square">
                  <img 
                    src={s.image} 
                    alt={s.alt} 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                    loading="lazy" 
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;