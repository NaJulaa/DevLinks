import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-12 px-4 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* Cabeçalho do Perfil */}
      <div className="text-center mb-10">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl shadow-lg shadow-purple-500/30">
          🚀
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Ana & Josué</h1>
        <p className="text-gray-400 mt-2 text-sm">Desenvolvimento Web & Soluções em Tecnologia</p>
      </div>

      {/* Seção de Orçamentos (Call to Action principal) */}
      <div className="w-full max-w-sm mb-10 space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-4 text-center font-semibold">
          Faça um orçamento
        </h2>
        
        {/* Dica: Troque o '#' pelo link do WhatsApp da dupla */}
        <a href="#" className="flex items-center justify-center w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-purple-600/40">
          💻 Orce seu Site ou Landing Page
        </a>
        <a href="#" className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-blue-600/40">
          🤖 Orce seu BOT conosco
        </a>
      </div>

      {/* Redes - Ana */}
      <div className="w-full max-w-sm mb-8 space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-4 text-center font-semibold">
          Ana Julia • Frontend
        </h2>
        <a href="https://www.linkedin.com/in/ana-julia-925b47243" target="_blank" rel="noopener noreferrer" 
           className="block w-full bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-500 text-gray-200 py-3 px-6 rounded-xl text-center transition-all duration-200">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/NaJulaa" target="_blank" rel="noopener noreferrer" 
           className="block w-full bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-500 text-gray-200 py-3 px-6 rounded-xl text-center transition-all duration-200">
          🐙 GitHub
        </a>
      </div>

      {/* Redes - Josué */}
      <div className="w-full max-w-sm space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-4 text-center font-semibold">
          Josué Barbosa • Backend
        </h2>
        <a href="https://www.linkedin.com/in/josu%C3%A9-barbosa-427a0b23a/" target="_blank" rel="noopener noreferrer" 
           className="block w-full bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-500 text-gray-200 py-3 px-6 rounded-xl text-center transition-all duration-200">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/josuelb" target="_blank" rel="noopener noreferrer" 
           className="block w-full bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-500 text-gray-200 py-3 px-6 rounded-xl text-center transition-all duration-200">
          🐙 GitHub
        </a>
      </div>

    </div>
  );
};

export default LandingPage;