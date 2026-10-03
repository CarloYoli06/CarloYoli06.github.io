import React, { useState, useEffect } from 'react';
import { Scan, Package, CheckCircle2, Database } from 'lucide-react';

const AlbedoScanDemo = () => {
  const [scanning, setScanning] = useState(true);
  const [scannedItems, setScannedItems] = useState([
    { id: 'SCN-1012', item: 'Laptop ThinkPad', time: '10:42 AM', status: 'verified' },
    { id: 'SCN-1013', item: 'Monitor Dell 27"', time: '10:45 AM', status: 'verified' },
  ]);

  useEffect(() => {
    let timeout;
    if (scanning) {
      timeout = setTimeout(() => {
        setScannedItems(prev => [
          { id: `SCN-${Math.floor(1000 + Math.random() * 9000)}`, item: 'Equipo de Red Cisco', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), status: 'new' },
          ...prev
        ]);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [scanning, scannedItems]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Scan className="w-6 h-6 text-emerald-400" />
            AlbedoScan (Electron App)
          </h2>
          <p className="text-slate-400 text-sm">Demostración de la aplicación de escritorio para escaneo y control de inventarios.</p>
        </div>
        <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold flex items-center gap-2">
          <Database className="w-3.5 h-3.5" /> SQL Server
        </div>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl min-h-[400px] flex flex-col md:flex-row">
        
        {/* Left Panel: Scanner View */}
        <div className="md:w-1/2 border-r border-white/5 bg-slate-950/50 p-6 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Decorative Corner Borders for Scanner */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-emerald-500/50 rounded-tl-lg"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-emerald-500/50 rounded-tr-lg"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-emerald-500/50 rounded-bl-lg"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-emerald-500/50 rounded-br-lg"></div>

          <div className="z-10 text-center space-y-4">
            <div className={`w-32 h-32 mx-auto rounded-2xl border-2 flex items-center justify-center transition-colors ${scanning ? 'border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.2)]' : 'border-slate-700 bg-slate-800'}`}>
              <Scan className={`w-12 h-12 ${scanning ? 'text-emerald-400 animate-pulse' : 'text-slate-500'}`} />
            </div>
            
            <div>
              <h3 className="text-white font-medium">{scanning ? 'Escaneando código de barras...' : 'Escáner inactivo'}</h3>
              <p className="text-slate-400 text-xs mt-1">Conectado a lector USB / Serie</p>
            </div>

            <button 
              onClick={() => setScanning(!scanning)}
              className={`px-6 py-2 rounded-lg font-medium text-sm transition-colors ${scanning ? 'bg-rose-500/20 text-rose-400 hover:bg-rose-500/30' : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20'}`}
            >
              {scanning ? 'Detener Escaneo' : 'Iniciar Escáner'}
            </button>
          </div>

          {/* Animated Scan Line */}
          {scanning && (
            <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,1)] animate-[scan_2s_ease-in-out_infinite]" />
          )}
        </div>

        {/* Right Panel: Data Sync */}
        <div className="md:w-1/2 bg-slate-900/80 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Activos Registrados</h3>
            <span className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-300 border border-white/5 font-mono">
              Total: {scannedItems.length}
            </span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-2">
            {scannedItems.map((item, idx) => (
              <div key={idx} className={`p-4 rounded-xl border transition-all ${item.status === 'new' ? 'bg-emerald-500/10 border-emerald-500/30 animate-in slide-in-from-right-4' : 'bg-slate-800/40 border-white/5 hover:bg-slate-800/80'}`}>
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="mt-1">
                      {item.status === 'new' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Package className="w-4 h-4 text-slate-400" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">{item.item}</h4>
                      <p className="text-xs text-slate-500 font-mono mt-1">ID: {item.id}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">{item.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Sincronizado con SQL Server
            </div>
            <button className="text-xs text-brand-400 hover:text-brand-300 font-medium">
              Exportar Reporte
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AlbedoScanDemo;
