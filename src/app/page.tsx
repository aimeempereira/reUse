'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

// Watson Assistant integration
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "e42bd378-6210-42fd-b73a-c436fe158339",
      region: "us-south",
      serviceInstanceID: "e9570b59-3a6c-4128-8364-6e233c67c2b3",
      onLoad: async (instance: { render: () => Promise<void> }) => { 
  await instance.render(); 
},
    };

    const script = document.createElement("script");
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Detecta quando elementos aparecem na tela
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-emerald-50 relative overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight text-emerald-700">
            ReUse <br />
            Transforme, Conecte, Reutilize
          </h1>

          <p className="text-xl md:text-2xl text-emerald-800/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            🌱 Plataforma que conecta pessoas conscientes para dar nova vida aos objetos. 
            Encontre, compartilhe e descubra o poder da economia circular.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              href="/buscar"
              className="bg-white text-emerald-600 px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 flex items-center space-x-3"
            >
              <span className="text-2xl">🔍</span>
              <span>Explorar Itens</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
            </Link>

            <button className="bg-white/10 text-emerald-800 px-10 py-5 rounded-full font-bold text-xl border-2 border-emerald-200 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center space-x-3">
              <span className="text-2xl">📦</span>
              <span>Adicionar Item</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-emerald-700 mb-12 text-center">
            Como Funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[ 
              { step: '01', title: 'Encontre ou Publique', desc: 'Busque itens que precisa ou publique o que não usa mais.', icon: '🔍', color: 'from-emerald-400 to-teal-500' },
              { step: '02', title: 'Conecte-se', desc: 'Chat direto com outros usuários. Combine detalhes e local de encontro.', icon: '💬', color: 'from-teal-400 to-cyan-500' },
              { step: '03', title: 'Transforme', desc: 'Finalize a troca ou doação e acompanhe o impacto positivo.', icon: '🌟', color: 'from-cyan-400 to-blue-500' },
            ].map((feature, index) => (
              <div 
                key={index} 
                id={`feature-${index}`}
                data-animate
                className={`transform transition-all duration-1000 ${isVisible[`feature-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`bg-white rounded-3xl p-10 shadow-lg hover:scale-105 transition-transform duration-300`}>
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-4xl mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-700 mb-3">{feature.title}</h3>
                  <p className="text-emerald-800/80">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-emerald-700 mb-8">
          Pronto para fazer a diferença?
        </h2>
        <p className="text-emerald-800/80 mb-12 max-w-2xl mx-auto">
          Junte-se a milhares de pessoas que já estão transformando o mundo através da reutilização.
        </p>
        <Link 
          href="/Buscar"
          className="inline-flex items-center space-x-4 bg-emerald-500 text-white px-12 py-6 rounded-full font-black text-2xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-110"
        >
          <span>🚀</span>
          <span>Entrar na Plataforma</span>
          <span className="text-3xl">→</span>
        </Link>
      </section>
    </div>
  );
}
