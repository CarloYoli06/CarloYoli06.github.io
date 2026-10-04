import React, { useState } from 'react';
import { Terminal, Printer, Scan } from 'lucide-react';

const AlbedoScanDemo = () => {
  const [logs, setLogs] = useState([
    { id: 1, text: 'hp-cli v1.0.2 - Inicializando conexión con impresora HP...', type: 'info' },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Simulación de salida de terminal
  const runSimulation = (action) => {
    if (isProcessing) return;
    setIsProcessing(true);
    setLogs(prev => [...prev, { id: Date.now(), text: `hp-cli --${action}`, type: 'command' }]);
    
    setTimeout(() => {
      setLogs(prev => [...prev, { id: Date.now(), text: 'Buscando dispositivo en la red (192.168.1.55)...', type: 'info' }]);
    }, 600);

    setTimeout(() => {
      setLogs(prev => [...prev, { id: Date.now(), text: 'Dispositivo encontrado: HP DeskJet / Envy Series', type: 'success' }]);
    }, 1400);

    setTimeout(() => {
      if (action === 'scan') {
        setLogs(prev => [...prev, { id: Date.now(), text: 'Calentando lámpara del escáner...', type: 'info' }]);
        setTimeout(() => {
           setLogs(prev => [...prev, { id: Date.now(), text: 'Escaneando documento a 300dpi...', type: 'info' }]);
           setTimeout(() => {
             setLogs(prev => [...prev, { id: Date.now(), text: '¡Éxito! Archivo guardado como: scan_doc.pdf', type: 'success' }]);
             setIsProcessing(false);
           }, 1500);
        }, 1200);
      } else {
        setLogs(prev => [...prev, { id: Date.now(), text: 'Enviando documento a la cola de impresión...', type: 'info' }]);
        setTimeout(() => {
           setLogs(prev => [...prev, { id: Date.now(), text: 'Imprimiendo (Página 1/1)...', type: 'info' }]);
           setTimeout(() => {
             setLogs(prev => [...prev, { id: Date.now(), text: '¡Éxito! Documento impreso correctamente.', type: 'success' }]);
             setIsProcessing(false);
           }, 1500);
        }, 1000);
      }
    }, 2200);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-brand-400" />
            HP Scanner/Printer CLI
          </h2>
          <p className="text-slate-400 text-sm">
            Herramienta por línea de comandos para controlar mi impresora HP porque la app oficial no servía.
          </p>
        </div>
        <div className="px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-300 rounded-full text-xs font-semibold flex items-center gap-2">
          Bash / CLI
        </div>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[450px]">
        
        {/* Left Panel: Controls */}
        <div className="md:w-1/3 border-r border-white/5 bg-slate-950/50 p-6 flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">Comandos Disponibles</h3>
          
          <button 
            onClick={() => runSimulation('scan')}
            disabled={isProcessing}
            className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${isProcessing ? 'opacity-50 cursor-not-allowed border-white/5 bg-slate-800/20' : 'border-white/10 bg-slate-800/40 hover:bg-slate-800 hover:border-brand-500/30'}`}
          >
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Scan className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-200">Escanear Documento</div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">hp-cli --scan</div>
            </div>
          </button>

          <button 
            onClick={() => runSimulation('print')}
            disabled={isProcessing}
            className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${isProcessing ? 'opacity-50 cursor-not-allowed border-white/5 bg-slate-800/20' : 'border-white/10 bg-slate-800/40 hover:bg-slate-800 hover:border-brand-500/30'}`}
          >
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-200">Imprimir Archivo</div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">hp-cli --print</div>
            </div>
          </button>

          <div className="mt-auto pt-6 border-t border-white/5">
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Motivación:</strong> La aplicación oficial "HP Smart" a menudo fallaba o requería iniciar sesión obligatoriamente para funciones básicas. Creé este script para comunicarme directamente con los puertos de red de la impresora para escanear e imprimir sin restricciones.
            </p>
          </div>
        </div>

        {/* Right Panel: Terminal Output */}
        <div className="md:w-2/3 bg-slate-950 p-6 flex flex-col font-mono relative overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="ml-2 text-xs text-slate-500">carlos@dev-machine:~/proyectos/escaner</span>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 overflow-y-auto space-y-2 text-sm pb-8">
            {logs.map((log) => (
              <div key={log.id} className="flex gap-3">
                {log.type === 'command' && <span className="text-emerald-400 font-bold">$</span>}
                {log.type === 'info' && <span className="text-slate-500">›</span>}
                {log.type === 'success' && <span className="text-brand-400">✔</span>}
                
                <span className={`
                  ${log.type === 'command' ? 'text-slate-200 font-semibold' : ''}
                  ${log.type === 'info' ? 'text-slate-400' : ''}
                  ${log.type === 'success' ? 'text-emerald-400' : ''}
                `}>
                  {log.text}
                </span>
              </div>
            ))}
            {isProcessing && (
              <div className="flex gap-3 items-center mt-2">
                <span className="text-slate-500">›</span>
                <span className="w-1.5 h-4 bg-slate-400 animate-pulse"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbedoScanDemo;
