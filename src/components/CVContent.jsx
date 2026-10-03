import React from 'react';
import { Mail, ExternalLink, Briefcase, GraduationCap, MapPin, Code2, Database, BrainCircuit, Globe, Layers, Award, Languages, Book } from 'lucide-react';

const CVContent = () => {
  const skills = [
    { name: 'JavaScript / ES6+', icon: Code2 },
    { name: 'React & Vite', icon: Globe },
    { name: 'Node.js & Express', icon: Layers },
    { name: 'GraphQL', icon: Database },
    { name: 'SQL Server', icon: Database },
    { name: 'Docker', icon: Layers },
    { name: 'Azure', icon: Globe },
    { name: 'SAP S/4HANA', icon: Briefcase },
    { name: 'IA Generativa (Gemini/Copilot)', icon: BrainCircuit },
  ];

  return (
    <div className="space-y-12 pb-10">
      {/* Header Profile */}
      <section className="relative rounded-3xl overflow-hidden bg-slate-900/40 border border-white/5 backdrop-blur-xl shadow-2xl">
        <div className="h-32 bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 opacity-80 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        </div>
        <div className="px-8 pb-8 pt-0 relative">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-12 mb-6">
            <div className="w-24 h-24 rounded-2xl bg-slate-800 border-4 border-slate-900 flex items-center justify-center shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
              <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br from-brand-400 to-purple-400">CA</span>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1">
                Carlos Daniel Aguilar Sanchez
              </h1>
              <h2 className="text-brand-400 font-medium text-lg flex items-center gap-2">
                Ingeniero en Sistemas Computacionales
              </h2>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <a href="#" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-xl transition-colors border border-white/5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> Carlo Yoli06
              </a>
              <a href="#" className="flex items-center justify-center px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-brand-500/25">
                <Mail className="w-4 h-4" /> Contactar
              </a>
            </div>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-6 border border-white/5 text-slate-300 leading-relaxed text-sm md:text-base">
            <p>
              Desarrollador Full-Stack apasionado por la creación de soluciones eficientes y escalables.
              Especializado en la construcción de interfaces modernas, gestión de bases de datos robustas y el despliegue de
              sistemas integrales. Fuerte interés y experiencia en la integración de Inteligencia Artificial
              y Modelos de Lenguaje (LLMs) para potenciar aplicaciones y mejorar procesos empresariales.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
            <Briefcase className="w-4 h-4" />
          </div>
          <h3 className="text-2xl font-bold text-slate-100">Experiencia Destacada</h3>
        </div>

        <div className="grid gap-6">
          {/* IMSS */}
          <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent hover:from-brand-500/20 transition-all duration-500">
            <div className="absolute inset-0 bg-slate-900/40 rounded-2xl backdrop-blur-sm -z-10" />
            <div className="bg-slate-900/80 rounded-xl p-6 border border-white/5 group-hover:border-brand-500/30 transition-colors h-full">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">Líder de Proyecto / Desarrollador Full-Stack</h4>
                  <p className="text-slate-400 font-medium flex items-center gap-2 mt-1">
                    <MapPin className="w-3.5 h-3.5" /> IMSS
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20 self-start">
                  Marzo 2026 - Agosto 2026
                </span>
              </div>
              <p className="text-slate-300 text-sm mb-6">
                Desarrollo y liderazgo técnico de un sistema integral de gestión de activos institucionales, optimizando la trazabilidad y control del inventario.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['React', 'Node.js', 'GraphQL', 'SQL Server', 'Electron'].map(tech => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CICESE */}
          <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent hover:from-purple-500/20 transition-all duration-500">
            <div className="absolute inset-0 bg-slate-900/40 rounded-2xl backdrop-blur-sm -z-10" />
            <div className="bg-slate-900/80 rounded-xl p-6 border border-white/5 group-hover:border-purple-500/30 transition-colors h-full">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Desarrollador de Software e IA</h4>
                  <p className="text-slate-400 font-medium flex items-center gap-2 mt-1">
                    <MapPin className="w-3.5 h-3.5" /> CICESE Tepic
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20 self-start">
                  Feb 2025 - Agosto 2026
                </span>
              </div>
              <p className="text-slate-300 text-sm mb-6">
                Creación de un agente inteligente basado en Modelos de Lenguaje Grandes (LLMs) diseñado para promover e incentivar la lectura en el público infantil mediante interacciones dinámicas.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['Unity', 'JavaScript', 'Despliegue Local de IA', 'LLMs'].map(tech => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
            <GraduationCap className="w-4 h-4" />
          </div>
          <h3 className="text-2xl font-bold text-slate-100">Educación</h3>
        </div>

        <div className="grid gap-4">
          <div className="bg-slate-800/40 border border-white/5 rounded-xl p-5 hover:bg-slate-800/60 transition-colors flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-white">Ingeniería en Sistemas Computacionales</h4>
              <p className="text-slate-400 text-sm mt-1">Instituto Tecnológico de Tepic (TecNM)</p>
              <p className="text-brand-400 text-xs font-medium mt-2">Egresado (Título en trámite)</p>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 text-xs font-semibold bg-white/5 text-slate-300 rounded-full border border-white/10">2021 - 2026</span>
            </div>
          </div>
          <div className="bg-slate-800/40 border border-white/5 rounded-xl p-5 hover:bg-slate-800/60 transition-colors flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-white">Técnico en Programación</h4>
              <p className="text-slate-400 text-sm mt-1">CETIS 100, Tepic</p>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 text-xs font-semibold bg-white/5 text-slate-300 rounded-full border border-white/10">2018 - 2021</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications and Languages Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Certifications */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 border border-yellow-500/20">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-slate-100">Certificaciones</h3>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Fundamentos de la Dirección de Proyectos Ágiles', issuer: 'PMI', date: 'Feb 2025' },
              { name: 'Fundamentos de la Dirección de Proyectos Predictive', issuer: 'PMI', date: 'Feb 2025' },
              { name: 'IBM Z Xplore (Advanced & Concepts)', issuer: 'IBM', date: 'Mar 2025' },
              { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', date: 'Mar 2025' },
            ].map((cert, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-800/30 border border-white/5 flex gap-3 hover:border-white/10 transition-colors">
                <Book className="w-5 h-5 text-yellow-400/70 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-slate-200">{cert.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-500">{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                    <span className="text-xs text-slate-500">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
              <Languages className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-slate-100">Idiomas</h3>
          </div>
          <div className="grid gap-3">
            <div className="p-4 rounded-xl bg-slate-800/30 border border-white/5 flex justify-between items-center">
              <span className="text-sm font-medium text-slate-200">Español</span>
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20">Nativo</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/30 border border-white/5 flex justify-between items-center">
              <span className="text-sm font-medium text-slate-200">Inglés</span>
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20">Intermedio Alto (B2)</span>
            </div>
          </div>
        </section>
      </div>

      {/* Skills Grid */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
            <GraduationCap className="w-4 h-4" />
          </div>
          <h3 className="text-2xl font-bold text-slate-100">Habilidades Clave</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-800/40 hover:bg-slate-800/80 border border-white/5 hover:border-brand-500/30 rounded-xl transition-all duration-300 group cursor-default"
              >
                <div className="p-2 rounded-lg bg-slate-900 group-hover:bg-brand-500/10 text-slate-400 group-hover:text-brand-400 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CVContent;
