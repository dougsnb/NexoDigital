import React, { useState, useEffect } from 'react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  site?: string;
}

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Solicite um Diagnóstico SEO Gratuito | Agência Nexo Digital";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Entre em contato e solicite uma análise estratégica gratuita do seu site atual. Transforme sua presença digital com a Agência Nexo Digital.');
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', message: '', site: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === 'name') {
      if (!value.trim()) error = 'O nome é obrigatório.';
      else if (value.trim().length < 3) error = 'O nome deve ter pelo menos 3 caracteres.';
    }

    if (name === 'email') {
      if (!value.trim()) error = 'O e-mail é obrigatório.';
      else if (!emailRegex.test(value)) error = 'Insira um e-mail válido.';
    }

    if (name === 'message') {
      if (!value.trim()) error = 'A mensagem é obrigatória.';
      else if (value.trim().length < 10) error = 'A mensagem deve conter pelo menos 10 caracteres.';
    }

    setErrors(prev => ({ ...prev, [name]: error || undefined }));
    return !error;
  };

  const validateAll = (): boolean => {
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isMessageValid = validateField('message', formData.message);
    return isNameValid && isEmailValid && isMessageValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAll()) {
      setIsSubmitting(true);

      // Estruturando a mensagem para o WhatsApp
      const text = `*NOVO DIAGNÓSTICO ESTRATÉGICO* 🚀\n\n` +
                   `*Nome:* ${formData.name}\n` +
                   `*E-mail:* ${formData.email}\n` +
                   `*Site:* ${formData.site || 'Não informado'}\n` +
                   `*Objetivo:* ${formData.message}`;
      
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/555198810612?text=${encodedText}`;

      // Simulação de processamento para UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Abrir WhatsApp em nova aba
      window.open(whatsappUrl, '_blank');

      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '', site: '' });
      setErrors({});
      
      // Resetar estado de sucesso após um tempo
      setTimeout(() => setSubmitted(false), 8000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  return (
    <div className="pt-20 bg-white">
      <section className="py-12 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            <div className="animate-fade-in">
              <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[9px] md:text-[10px] mb-4 md:mb-6 block">DIAGNÓSTICO SEO GRATUITO</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-10 font-display tracking-tighter leading-none">
                Sua jornada para o topo começa <span className="italic text-blue-600">agora.</span>
              </h1>
              <p className="text-gray-500 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed font-light">
                Ao enviar o formulário, você será redirecionado para o nosso WhatsApp oficial para dar continuidade ao seu atendimento estratégico.
              </p>
              
              <div className="space-y-8 md:space-y-12">
                <div className="group">
                  <h4 className="font-black text-black text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-4">Estratégia Local e Nacional</h4>
                  <p className="text-gray-400 font-medium text-base md:text-lg leading-relaxed">
                    Atendimento especializado para empresas que buscam liderança digital.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
                  <div>
                    <h4 className="font-black text-black text-[9px] md:text-[10px] uppercase tracking-widest mb-1 md:mb-2">E-mail para Consultoria</h4>
                    <a href="mailto:nexodigitalwebsite@gmail.com" className="text-lg md:text-xl font-bold hover:text-blue-600 transition-colors break-all">nexodigitalwebsite@gmail.com</a>
                  </div>
                  <div>
                    <h4 className="font-black text-black text-[9px] md:text-[10px] uppercase tracking-widest mb-1 md:mb-2">Siga no Instagram</h4>
                    <a href="https://instagram.com/agencianexodigitalweb" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-bold hover:text-blue-600 transition-colors">@agencianexodigitalweb</a>
                  </div>
                </div>

                <div className="pt-6 md:pt-8">
                  <a 
                    href="https://wa.me/555198810612?text=Olá! Gostaria de agendar um diagnóstico estratégico gratuito para o meu projeto." 
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-4 bg-green-500 text-white px-8 py-4 rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-green-500/20"
                  >
                    Falar Direto no WhatsApp
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338-11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.236-3.328c1.532.909 3.039 1.389 4.621 1.39 5.405 0 9.813-4.41 9.815-9.814 0-2.622-1.02-5.087-2.871-6.938-1.852-1.851-4.317-2.87-6.939-2.87-5.407 0-9.815 4.409-9.817 9.813-.001 1.738.457 3.432 1.323 4.931l-.101.488-.669 2.445 2.503-.657.435-.188zm11.332-6.521c-.301-.151-1.781-.878-2.057-.978-.275-.1-.476-.151-.676.151-.2.301-.777 1.053-.952 1.254-.175.201-.351.226-.652.076-.301-.151-1.268-.467-2.417-1.493-.893-.797-1.495-1.782-1.671-2.083-.176-.301-.019-.464.131-.614.136-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.151-.676-1.631-.927-2.234-.244-.587-.492-.508-.676-.517-.175-.009-.376-.011-.577-.011-.2 0-.527.075-.802.376-.275.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.91 1.228 3.111.151.201 2.122 3.241 5.14 4.544.718.31 1.279.496 1.716.635.721.23 1.377.198 1.896.121.579-.085 1.781-.728 2.031-1.43.25-.702.25-1.305.176-1.43-.076-.126-.276-.201-.577-.352z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl md:rounded-[2.5rem] p-6 md:p-16 border border-gray-100 shadow-xl md:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl -mr-16 -mt-16"></div>
              {submitted ? (
                <div className="text-center py-16 md:py-20 animate-fade-in relative z-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 text-3xl md:text-4xl shadow-xl shadow-blue-600/30">✓</div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 font-display tracking-tight">Redirecionando...</h3>
                  <p className="text-gray-500 font-medium text-sm md:text-base">Caso a aba do WhatsApp não tenha aberto, clique no botão flutuante ao lado.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">Nome Completo</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={`w-full px-0 py-3 border-b-2 bg-transparent ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-blue-600'} outline-none font-bold`} placeholder="Ex: João Silva" />
                      {errors.name && <p className="text-red-500 text-[9px] font-bold uppercase">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">Seu E-mail Profissional</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full px-0 py-3 border-b-2 bg-transparent ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-blue-600'} outline-none font-bold`} placeholder="nome@empresa.com" />
                      {errors.email && <p className="text-red-500 text-[9px] font-bold uppercase">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">URL do Site Atual (opcional)</label>
                    <input type="text" name="site" value={formData.site} onChange={handleInputChange} className="w-full px-0 py-3 border-b-2 bg-transparent border-gray-200 focus:border-blue-600 outline-none font-bold" placeholder="https://www.seusite.com.br" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">Descreva seu objetivo de SEO</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} className={`w-full px-0 py-3 border-b-2 bg-transparent ${errors.message ? 'border-red-500' : 'border-gray-200 focus:border-blue-600'} outline-none font-bold min-h-[100px] resize-none`} placeholder="Ex: Quero aumentar minhas vendas no Google..."></textarea>
                    {errors.message && <p className="text-red-500 text-[9px] font-bold uppercase">{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white font-black py-5 rounded-xl text-[10px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all flex items-center justify-center shadow-lg shadow-black/10">
                    {isSubmitting ? "PROCESSANDO..." : "ENVIAR E FALAR NO WHATSAPP →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;