import React from 'react';
import { LayoutGrid, Database, BarChart3, Users, Settings, Bell, Briefcase } from 'lucide-react';

const SAPFioriDemo = () => {
  const tiles = [
    { title: 'Gestión de Materiales', icon: Briefcase, color: 'bg-blue-500', value: '142', unit: 'Items', type: 'kpi' },
    { title: 'Órdenes de Compra', icon: BarChart3, color: 'bg-indigo-500', value: '12', unit: 'Pendientes', type: 'kpi' },
    { title: 'Maestro de Usuarios', icon: Users, color: 'bg-teal-500', type: 'app' },
    { title: 'Configuración CDS', icon: Database, color: 'bg-orange-500', type: 'app' },
    { title: 'Alertas del Sistema', icon: Bell, color: 'bg-rose-500', value: '3', unit: 'Críticas', type: 'kpi' },
    { title: 'Ajustes Fiori', icon: Settings, color: 'bg-slate-500', type: 'app' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <LayoutGrid className="w-6 h-6 text-blue-400" />
            SAP Fiori Launchpad
          </h2>
          <p className="text-slate-400 text-sm">Demostración de diseño inspirado en SAP Fiori y Arquitectura SAP S/4HANA.</p>
        </div>
        <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">
          OpenUI5 & CDS
        </div>
      </div>

      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden shadow-2xl p-6 min-h-[400px]">
        
        {/* Fiori Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
           <h3 className="text-lg font-medium text-slate-200">Inicio</h3>
           <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-slate-700 cursor-pointer transition-colors">
                <SearchIcon className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 border border-blue-500 flex items-center justify-center text-white cursor-pointer hover:bg-blue-500 transition-colors">
                CA
              </div>
           </div>
        </div>

        {/* Fiori Tiles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tiles.map((tile, i) => {
            const Icon = tile.icon;
            return (
              <div 
                key={i} 
                className="group relative bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 hover:border-white/20 rounded-xl p-4 h-36 flex flex-col justify-between cursor-pointer transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-semibold text-slate-200 leading-tight w-2/3">{tile.title}</h4>
                  <div className={`p-1.5 rounded-lg ${tile.color}/20 text-${tile.color.split('-')[1]}-400`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                
                {tile.type === 'kpi' && (
                  <div className="mt-auto">
                    <p className="text-3xl font-light text-white">{tile.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{tile.unit}</p>
                  </div>
                )}
                {tile.type === 'app' && (
                  <div className="mt-auto">
                    <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">App</p>
                  </div>
                )}
                
                {/* Bottom decorative line common in SAP Fiori */}
                <div className={`absolute bottom-0 left-0 w-full h-1 ${tile.color} rounded-b-xl opacity-80 group-hover:opacity-100 transition-opacity`} />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

const SearchIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);

export default SAPFioriDemo;
