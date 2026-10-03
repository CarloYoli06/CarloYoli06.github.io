import React from 'react';
import { Construction, Sparkles } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="h-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/20 backdrop-blur-sm">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] -z-10"></div>
      
      <div className="w-20 h-20 bg-slate-800/80 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-2xl relative">
        <Sparkles className="w-10 h-10 text-brand-400 absolute -top-3 -right-3 animate-pulse" />
        <Construction className="w-10 h-10 text-slate-300" />
      </div>
      
      <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Próximos Proyectos</h2>
      
      <p className="text-slate-400 max-w-md text-lg leading-relaxed mb-8">
        Este espacio está reservado para mis futuras implementaciones. Aquí inyectaré componentes más complejos y demostraciones de nuevas tecnologías.
      </p>

      <div className="flex gap-4">
         <div className="px-4 py-2 bg-slate-800/50 rounded-lg border border-white/5 text-sm text-slate-400 font-mono">
           /src/components/nuevos_proyectos
         </div>
      </div>
      
      {/* Decorative dots */}
      <div className="absolute bottom-8 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-slate-700 animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 rounded-full bg-slate-700 animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 rounded-full bg-slate-700 animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
};

export default ComingSoon;
