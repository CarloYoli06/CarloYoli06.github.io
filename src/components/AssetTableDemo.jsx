import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Edit2, Trash2, CheckCircle2, XCircle, AlertCircle, X, Save } from 'lucide-react';

const mockData = [
  { id: 'ACT-001', name: 'Servidor Dell PowerEdge', dept: 'Infraestructura', status: 'Activo', date: '2026-03-15' },
  { id: 'ACT-002', name: 'Switch Cisco Catalyst', dept: 'Redes', status: 'Activo', date: '2026-03-20' },
  { id: 'ACT-003', name: 'Workstation HP Z4', dept: 'Desarrollo', status: 'Mantenimiento', date: '2026-04-10' },
  { id: 'ACT-004', name: 'Monitor UltraWide LG', dept: 'Diseño', status: 'Activo', date: '2026-04-12' },
  { id: 'ACT-005', name: 'Impresora Multifuncional', dept: 'Administración', status: 'Inactivo', date: '2026-05-05' },
  { id: 'ACT-006', name: 'Laptop ThinkPad T14', dept: 'Desarrollo', status: 'Activo', date: '2026-06-01' },
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'Activo':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    case 'Mantenimiento':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    case 'Inactivo':
      return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
    default:
      return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'Activo': return <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />;
    case 'Mantenimiento': return <AlertCircle className="w-3.5 h-3.5 mr-1.5" />;
    case 'Inactivo': return <XCircle className="w-3.5 h-3.5 mr-1.5" />;
    default: return null;
  }
};

const AssetTableDemo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredData = mockData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Gestión de Activos</h2>
          <p className="text-slate-400 text-sm">Demostración de interfaz de tabla para el sistema del IMSS.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2"
        >
          + Nuevo Activo
        </button>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-800/30">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Buscar por ID o nombre..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950/50 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all placeholder:text-slate-600"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="px-3 py-2 bg-slate-800 hover:bg-slate-700 border border-white/5 rounded-lg text-slate-300 text-sm font-medium transition-colors flex items-center justify-center gap-2 flex-1 sm:flex-none">
              <Filter className="w-4 h-4" /> Filtros
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-900/80 text-slate-400 border-b border-white/5">
              <tr>
                <th className="px-6 py-4 font-semibold w-24">ID Activo</th>
                <th className="px-6 py-4 font-semibold">Nombre del Equipo</th>
                <th className="px-6 py-4 font-semibold">Departamento</th>
                <th className="px-6 py-4 font-semibold">Estado</th>
                <th className="px-6 py-4 font-semibold">Fecha Registro</th>
                <th className="px-6 py-4 font-semibold text-right w-16">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredData.map((asset) => (
                <tr key={asset.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <span className="font-mono text-xs text-slate-400 group-hover:text-brand-400 transition-colors">{asset.id}</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-200">
                    {asset.name}
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    {asset.dept}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusStyle(asset.status)}`}>
                      {getStatusIcon(asset.status)}
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-xs">
                    {asset.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-slate-400 hover:text-brand-400 hover:bg-brand-400/10 rounded-md transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 rounded-md transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-white rounded-md transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-slate-500">
                    No se encontraron activos que coincidan con la búsqueda.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-white/5 bg-slate-900/30 text-xs text-slate-500 flex justify-between items-center">
          <span>Mostrando {filteredData.length} de {mockData.length} resultados</span>
          <div className="flex gap-1">
            <button className="px-2 py-1 rounded bg-slate-800 text-slate-400 disabled:opacity-50" disabled>Anterior</button>
            <button className="px-2 py-1 rounded bg-slate-800 text-slate-400 disabled:opacity-50" disabled>Siguiente</button>
          </div>
        </div>
      </div>

      {/* New Asset Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-slate-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-md relative z-10 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            <div className="p-5 border-b border-white/5 flex justify-between items-center bg-slate-800/30">
              <h3 className="text-lg font-bold text-white">Registrar Nuevo Activo</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400 hover:text-white rounded-md transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Nombre del Equipo</label>
                <input type="text" placeholder="Ej. Servidor Dell PowerEdge" className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all placeholder:text-slate-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Departamento</label>
                  <select className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all appearance-none">
                    <option>Infraestructura</option>
                    <option>Redes</option>
                    <option>Desarrollo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Estado Inicial</label>
                  <select className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all appearance-none">
                    <option>Activo</option>
                    <option>En Stock</option>
                    <option>Mantenimiento</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Notas adicionales</label>
                <textarea rows="3" placeholder="Detalles de configuración, número de serie, etc." className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all placeholder:text-slate-600 resize-none"></textarea>
              </div>
            </div>
            <div className="p-5 border-t border-white/5 bg-slate-800/30 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors border border-white/5">
                Cancelar
              </button>
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-brand-500/20 flex items-center gap-2">
                <Save className="w-4 h-4" /> Guardar Activo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetTableDemo;
