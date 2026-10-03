import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CVContent from './components/CVContent';
import AssetTableDemo from './components/AssetTableDemo';
import GraphQLDemo from './components/GraphQLDemo';
import LectyDemo from './components/LectyDemo';
import DevOpsDashboardDemo from './components/DevOpsDashboardDemo';
import SAPFioriDemo from './components/SAPFioriDemo';
import AlbedoScanDemo from './components/AlbedoScanDemo';
import ComingSoon from './components/ComingSoon';

function App() {
  const [activeView, setActiveView] = useState('cv');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderContent = () => {
    switch (activeView) {
      case 'cv':
        return <CVContent />;
      case 'table-demo':
        return <AssetTableDemo />;
      case 'graphql-demo':
        return <GraphQLDemo />;
      case 'lecty-demo':
        return <LectyDemo />;
      case 'albedo-demo':
        return <AlbedoScanDemo />;
      case 'devops-demo':
        return <DevOpsDashboardDemo />;
      case 'sap-demo':
        return <SAPFioriDemo />;
      case 'coming-soon':
        return <ComingSoon />;
      default:
        return <CVContent />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-300 ease-in-out z-30 lg:z-auto`}>
        <Sidebar activeView={activeView} setActiveView={(view) => { setActiveView(view); setIsSidebarOpen(false); }} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <div className="lg:hidden h-16 border-b border-white/10 bg-slate-900/80 backdrop-blur-md flex items-center px-4 z-10 sticky top-0">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-white/5 text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="ml-4 font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-indigo-400">Carlos Aguilar</span>
        </div>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 pb-24 scroll-smooth">
          <div className="max-w-5xl mx-auto h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderContent()}
          </div>
        </main>
        
        {/* Background Decorative Elements */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-600/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px]" />
        </div>
      </div>
    </div>
  );
}

export default App;
