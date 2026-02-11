import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/posts';

const PostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/insights');
      return;
    }

    // SEO Dinâmico do Post
    document.title = `${post.title} | Blog Nexo Digital`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', post.excerpt);

    // Schema BlogPosting
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": "2024-05-15", // Exemplo, idealmente viria do objeto post
      "publisher": {
        "@type": "Organization",
        "name": "Agência Nexo Digital",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nexodigitalweb.com.br/logo.png"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'blog-post-schema';
    script.innerHTML = JSON.stringify(blogSchema);
    document.head.appendChild(script);

    window.scrollTo(0, 0);

    return () => {
      document.getElementById('blog-post-schema')?.remove();
    };
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="pt-28 pb-32">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/insights" 
          className="inline-flex items-center text-blue-600 font-black text-[10px] uppercase tracking-widest-xl mb-14 hover:gap-4 transition-all"
        >
          <span className="text-2xl mr-2">←</span> Todos os Insights de SEO
        </Link>

        <header className="mb-16">
          <div className="flex items-center space-x-6 mb-8">
            <span className="bg-gray-900 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              {post.date} • {post.readingTime} de leitura
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tighter leading-[1] mb-12">
            {post.title}
          </h1>
          <div className="flex items-center space-x-5 pt-8 border-t border-gray-100">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black text-white text-lg">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-black text-black uppercase tracking-tight">{post.author}</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Estrategista Nexo Digital</p>
            </div>
          </div>
        </header>

        <div className="rounded-[3rem] overflow-hidden mb-20 shadow-2xl">
          <img 
            src={post.image} 
            alt={`Capa do artigo: ${post.title}`} 
            className="w-full h-auto object-cover max-h-[600px] hover:scale-105 transition-transform duration-1000"
          />
        </div>

        <div className="prose prose-xl prose-blue max-w-none">
          <div 
            className="font-light text-gray-600 leading-[1.8] space-y-8 text-xl blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <footer className="mt-24 pt-16 border-t border-gray-100 text-center">
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">AUTORIDADE DIGITAL</span>
            <h3 className="font-display font-black text-3xl md:text-5xl tracking-tighter mb-8 leading-tight">Quer aplicar esse SEO no seu site?</h3>
            <p className="text-gray-500 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Na Nexo Digital, transformamos esses insights em estratégias práticas para nossos parceiros de negócio.
            </p>
            <Link 
                to="/contato" 
                className="inline-block bg-black text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest-xl hover:bg-blue-600 transition-all shadow-2xl"
            >
                Solicitar Diagnóstico Estratégico
            </Link>
        </footer>
      </article>

      <style>{`
        .blog-content h2 {
          font-family: var(--font-display);
          font-weight: 900;
          color: #000;
          font-size: 2.25rem;
          margin-top: 4.5rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.04em;
          line-height: 1.1;
        }
        .blog-content p {
          margin-bottom: 2rem;
        }
        .blog-content strong {
          color: #000;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default PostDetail;