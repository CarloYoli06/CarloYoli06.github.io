import React from 'react';
import { User, Table, Terminal, Sparkles, Code2, Briefcase, Mail, BookOpen, Cloud, LayoutGrid, Scan } from 'lucide-react';

const Sidebar = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: 'cv', label: 'Mi CV', icon: User, section: 'Perfil' },
    { id: 'table-demo', label: 'Gestión (Demo IMSS)', icon: Table, section: 'Capacidades' },
    { id: 'graphql-demo', label: 'Consola GraphQL', icon: Terminal, section: 'Capacidades' },
    { id: 'lecty-demo', label: 'Lecty AI Demo', icon: BookOpen, section: 'Capacidades' },
    { id: 'albedo-demo', label: 'HP Scanner CLI', icon: Scan, section: 'Capacidades' },
    { id: 'devops-demo', label: 'Cloud & DevOps', icon: Cloud, section: 'Capacidades' },
    { id: 'sap-demo', label: 'SAP Fiori Dashboard', icon: LayoutGrid, section: 'Capacidades' },
    { id: 'coming-soon', label: 'Próximos Proyectos', icon: Sparkles, section: 'Futuro' },
  ];

  return (
    <aside className="w-72 h-full bg-slate-900/50 backdrop-blur-xl border-r border-white/5 flex flex-col shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-brand-500/20">
            <Code2 className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">Portfolio</h1>
            <p className="text-xs text-slate-400 font-medium">Carlos Aguilar</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
        {/* Sections */}
        {['Perfil', 'Capacidades', 'Futuro'].map((section) => (
          <div key={section}>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-3">
              {section}
            </h3>
            <div className="space-y-1">
              {menuItems
                .filter((item) => item.section === section)
                .map((item) => {
                  const Icon = item.icon;
                  const isActive = activeView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveView(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${isActive
                          ? 'bg-brand-500/10 text-brand-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] border border-brand-500/20'
                          : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent'
                        }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-brand-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                      {item.label}
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                      )}
                    </button>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="p-4 m-4 rounded-xl bg-slate-800/50 border border-white/5 backdrop-blur-md">
        <p className="text-xs text-slate-400 mb-3 font-medium">Conecta conmigo</p>
        <div className="flex justify-around">
          <a href="https://github.com/CarloYoli06" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="GitHub">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/carlos-daniel-aguilar-sanchez-54522a229" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-[#0a66c2] hover:bg-white/10 rounded-lg transition-colors" title="LinkedIn">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="mailto:casaamba@gmail.com" className="p-2 text-slate-400 hover:text-brand-400 hover:bg-white/10 rounded-lg transition-colors" title="Email">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
