import React, { useEffect } from 'react';
// @ts-ignore
import aboutImage from '../src/assets/about.jpeg';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Sobre a Agência Nexo Digital | Especialistas em Autoridade Digital";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Saiba mais sobre a Nexo Digital, uma agência focada em elevar o posicionamento de empresas através de sites estratégicos e tecnologia SEO.');
  }, []);

  return (
    <div className="pt-20">
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Equipe estratégica da Agência Nexo Digital em reunião de planejamento SEO"
                className="rounded-[2.5rem] shadow-xl relative z-10 w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gray-900 text-white p-8 md:p-12 rounded-[2rem] hidden sm:block z-20 shadow-2xl">
                <p className="text-3xl md:text-5xl font-extrabold mb-1 font-display tracking-tight italic">Estratégia</p>
                <p className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[9px]">SEO Antes do Código</p>
              </div>
            </div>
            <div>
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">NOSSA ESSÊNCIA</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 font-display tracking-tight leading-[1.1]">Sua parceira de <span className="text-blue-600 italic font-medium">posicionamento.</span></h1>
              <p className="text-gray-500 text-lg md:text-xl mb-6 leading-relaxed font-light">
                A <span className="text-black font-bold">Nexo Digital</span> nasceu para elevar o padrão de presença digital de marcas que buscam autoridade e ranqueamento orgânico real.
              </p>
              <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed font-light">
                Não construímos apenas páginas; estruturamos a base digital onde sua marca crescerá através de técnicas avançadas de SEO e Arquitetura de Autoridade.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 border-t border-gray-100 pt-10">
                <div>
                  <h4 className="font-bold text-black text-[10px] mb-3 font-display uppercase tracking-widest">Missão SEO</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Dominar as buscas e transformar tecnologia em design de alta conversão para nossos parceiros.</p>
                </div>
                <div>
                  <h4 className="font-bold text-black text-[10px] mb-3 font-display uppercase tracking-widest">Visão 2024</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Ser a principal referência em agência de sites focados em performance e autoridade digital no Brasil.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Projetos Estratégicos", val: "+40" },
              { label: "Ano de Experiência", val: "1" },
              { label: "Crescimento Médio SEO", val: "150%" },
              { label: "Sites de Alta Performance", val: "100%" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-6xl font-black font-display mb-2">{stat.val}</p>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl md:text-6xl font-extrabold mb-20 font-display tracking-tight text-balance">Fundamentos de <span className="text-blue-500 italic font-medium">Crescimento</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              { title: "SEO Semântico", desc: "Conteúdo focado em responder as intenções reais de busca do seu cliente." },
              { title: "Tech Performance", desc: "Código limpo e otimizado para os algoritmos de Core Web Vitals do Google." },
              { title: "Branding Autoridade", desc: "Design que valida sua credibilidade no primeiro segundo de visita." },
              { title: "Dados Reais", desc: "Acompanhamento constante de métricas para evolução contínua do projeto." }
            ].map((pilar, idx) => (
              <div key={idx} className="relative">
                <div className="text-7xl font-extrabold text-white/5 absolute -top-10 -left-4 leading-none font-display">
                  0{idx + 1}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="font-bold text-xl mb-4 font-display tracking-tight text-blue-500 uppercase italic">{pilar.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{pilar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;