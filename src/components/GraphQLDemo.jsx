import React, { useState } from 'react';
import { Play, Copy, Check, Terminal } from 'lucide-react';

const GraphQLDemo = () => {
  const [copied, setCopied] = useState(false);

  const query = `query GetAssetDetails($id: ID!) {
  asset(id: $id) {
    id
    name
    status
    department {
      name
      manager
    }
    specifications
    maintenanceHistory {
      date
      action
      technician
    }
  }
}`;

  const response = `{
  "data": {
    "asset": {
      "id": "ACT-001",
      "name": "Servidor Dell PowerEdge",
      "status": "Activo",
      "department": {
        "name": "Infraestructura",
        "manager": "Roberto Méndez"
      },
      "specifications": {
        "cpu": "Intel Xeon Silver 4210R",
        "ram": "64GB DDR4",
        "storage": "2TB NVMe SSD"
      },
      "maintenanceHistory": [
        {
          "date": "2026-06-15",
          "action": "Actualización de firmware",
          "technician": "Carlos Aguilar"
        }
      ]
    }
  }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Consola GraphQL</h2>
          <p className="text-slate-400 text-sm">Simulación de la API de gestión de activos desarrollada en Node.js.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Request Panel */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
          {/* Editor Header */}
          <div className="bg-[#2d2d2d] px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-400" />
              <span className="text-xs font-mono text-slate-300">query.graphql</span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold rounded-md transition-colors shadow-lg shadow-brand-500/20">
              <Play className="w-3.5 h-3.5 fill-current" /> Ejecutar
            </button>
          </div>
          {/* Editor Content */}
          <div className="p-4 overflow-x-auto flex-1">
            <pre className="text-sm font-mono leading-relaxed">
              <code>
                <span className="text-purple-400">query</span> <span className="text-blue-400">GetAssetDetails</span>(<span className="text-orange-300">$id</span>: <span className="text-emerald-300">ID!</span>) {'{\n'}
                {'  '}<span className="text-blue-300">asset</span>(id: <span className="text-orange-300">$id</span>) {'{\n'}
                {'    '}<span className="text-slate-300">id</span>{'\n'}
                {'    '}<span className="text-slate-300">name</span>{'\n'}
                {'    '}<span className="text-slate-300">status</span>{'\n'}
                {'    '}<span className="text-blue-300">department</span> {'{\n'}
                {'      '}<span className="text-slate-300">name</span>{'\n'}
                {'      '}<span className="text-slate-300">manager</span>{'\n'}
                {'    }\n'}
                {'    '}<span className="text-slate-300">specifications</span>{'\n'}
                {'    '}<span className="text-blue-300">maintenanceHistory</span> {'{\n'}
                {'      '}<span className="text-slate-300">date</span>{'\n'}
                {'      '}<span className="text-slate-300">action</span>{'\n'}
                {'      '}<span className="text-slate-300">technician</span>{'\n'}
                {'    }\n'}
                {'  }\n'}
                {'}'}
              </code>
            </pre>
          </div>
          {/* Variables */}
          <div className="bg-[#252526] border-t border-white/5 p-3">
             <div className="text-xs font-mono text-slate-400 mb-2">Variables</div>
             <pre className="text-xs font-mono text-slate-300">
               {'{ "id": "ACT-001" }'}
             </pre>
          </div>
        </div>

        {/* Response Panel */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col relative">
          {/* Window Controls */}
          <div className="bg-[#2d2d2d] px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="text-xs font-mono text-slate-400">Response (200 OK)</div>
            <button 
              onClick={handleCopy}
              className="text-slate-400 hover:text-white transition-colors"
              title="Copiar JSON"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          
          {/* Response Content */}
          <div className="p-4 overflow-x-auto flex-1">
            <pre className="text-sm font-mono text-slate-300 leading-relaxed">
              <code>{response}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphQLDemo;
