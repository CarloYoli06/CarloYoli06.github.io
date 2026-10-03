import React, { useState, useEffect } from 'react';
import { Server, Play, CheckCircle2, XCircle, Clock, GitBranch, Box, Cloud, Activity } from 'lucide-react';

const mockPipelines = [
  { id: '1', name: 'api-agente-lectura-prod', branch: 'main', status: 'success', time: 'hace 2 min', duration: '1m 45s' },
  { id: '2', name: 'sistema-imss-backend', branch: 'develop', status: 'running', time: 'ahora', duration: '0m 30s' },
  { id: '3', name: 'sap-cds-catalogos', branch: 'feature/fiori-ui', status: 'failed', time: 'hace 1 hora', duration: '2m 10s' },
];

const mockContainers = [
  { id: 'c1', name: 'imss-db-sqlserver', image: 'mcr.microsoft.com/mssql/server:2022', status: 'running', port: '1433' },
  { id: 'c2', name: 'lecty-api-node', image: 'node:18-alpine', status: 'running', port: '3000' },
  { id: 'c3', name: 'redis-cache', image: 'redis:alpine', status: 'stopped', port: '6379' },
];

const DevOpsDashboardDemo = () => {
  const [activeTab, setActiveTab] = useState('pipelines');
  const [pipelines, setPipelines] = useState(mockPipelines);

  // Simulate progress for running pipeline
  useEffect(() => {
    const interval = setInterval(() => {
      setPipelines(current => 
        current.map(p => {
          if (p.status === 'running') {
            const timeParts = p.duration.split('m ');
            let secs = parseInt(timeParts[1].replace('s', '')) + 1;
            let mins = parseInt(timeParts[0]);
            if (secs >= 60) {
              mins += 1;
              secs = 0;
            }
            return { ...p, duration: `${mins}m ${secs}s` };
          }
          return p;
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status) => {
    switch(status) {
      case 'success': return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'failed': return <XCircle className="w-5 h-5 text-rose-400" />;
      case 'running': return <Activity className="w-5 h-5 text-brand-400 animate-pulse" />;
      default: return <Clock className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Cloud className="w-6 h-6 text-brand-400" />
            Cloud & DevOps Console
          </h2>
          <p className="text-slate-400 text-sm">Demostración de capacidades en CI/CD, Azure y Docker.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab('pipelines')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 ${activeTab === 'pipelines' ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            <GitBranch className="w-4 h-4" /> Pipelines
          </button>
          <button 
            onClick={() => setActiveTab('containers')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 ${activeTab === 'containers' ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            <Box className="w-4 h-4" /> Containers
          </button>
        </div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative min-h-[400px]">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

        {activeTab === 'pipelines' && (
          <div className="p-6 space-y-4 animate-in fade-in duration-300">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-brand-400" /> GitHub Actions Workflows
            </h3>
            <div className="space-y-3">
              {pipelines.map(pipeline => (
                <div key={pipeline.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-slate-800/40 hover:bg-slate-800/80 border border-white/5 rounded-xl transition-colors gap-4">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(pipeline.status)}
                    <div>
                      <h4 className="text-white font-medium flex items-center gap-2">
                        {pipeline.name}
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-700 text-slate-300">
                          {pipeline.branch}
                        </span>
                      </h4>
                      <p className="text-slate-400 text-xs mt-1">Última ejecución: {pipeline.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-slate-400 text-xs">Duración</p>
                      <p className="text-slate-200 text-sm font-mono">{pipeline.duration}</p>
                    </div>
                    <button className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium rounded-lg transition-colors border border-white/5">
                      Ver Logs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'containers' && (
          <div className="p-6 space-y-4 animate-in fade-in duration-300">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-cyan-400" /> Docker Swarm / Azure Container Apps
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {mockContainers.map(container => (
                <div key={container.id} className="p-5 bg-slate-800/40 hover:bg-slate-800/80 border border-white/5 rounded-xl transition-colors group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full ${container.status === 'running' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                  <div className="flex justify-between items-start mb-3 pl-2">
                    <div>
                      <h4 className="text-white font-medium text-lg">{container.name}</h4>
                      <p className="text-slate-400 text-xs font-mono mt-1">{container.image}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      container.status === 'running' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {container.status}
                    </span>
                  </div>
                  <div className="pl-2 flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-slate-500" /> Puerto: {container.port}
                    </span>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      {container.status === 'running' ? 'Detener' : 'Iniciar'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevOpsDashboardDemo;
