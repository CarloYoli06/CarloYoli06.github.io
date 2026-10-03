import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, BookOpen, Sparkles, Loader2 } from 'lucide-react';

const LectyDemo = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Soy Lecty, tu compañero de lectura. ¿Sobre qué cuento o historia te gustaría que platiquemos hoy? 📚✨", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const userInput = input.toLowerCase();

    // Simulated static responses for the demo
    setTimeout(() => {
      let reply = "¡Qué interesante! Cuéntame más sobre eso. 🤔📖";
      
      if (userInput.includes("hola") || userInput.includes("saludos")) {
        reply = "¡Hola de nuevo! ¿Listos para la aventura de hoy? 🚀📚";
      } else if (userInput.includes("cuento") || userInput.includes("historia")) {
        reply = "¡Me encantan los cuentos! ¿Tienes alguno favorito en mente? Yo acabo de leer uno sobre un dragón amigable. 🐉✨";
      } else if (userInput.includes("no se") || userInput.includes("no sé") || userInput.includes("ayuda")) {
        reply = "¡No te preocupes! ¿Te gustan más las historias de magia, de animales o del espacio exterior? 🌟🦁";
      } else if (userInput.includes("magia") || userInput.includes("espacio") || userInput.includes("animales")) {
        reply = "¡Esa es una excelente elección! Imagina todo lo que podemos descubrir. ¿Te gustaría leer un pequeño fragmento juntos? 🧐✨";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: reply, sender: "bot" }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 h-[80vh] flex flex-col">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" />
            Lecty Demo
          </h2>
          <p className="text-slate-400 text-sm">Prueba en vivo del agente inteligente de lectura para niños (Basado en LLMs).</p>
        </div>
        <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-xs font-semibold flex items-center gap-2 self-start md:self-auto">
          <Sparkles className="w-3.5 h-3.5" />
          Simulated AI Demo
        </div>
      </div>

      <div className="flex-1 bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col relative">
        {/* Chat Background Decals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-[80px]" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-500 rounded-full blur-[80px]" />
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 z-10">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[85%] md:max-w-[70%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg ${
                  msg.sender === 'user' ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30' : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                
                {/* Message Bubble */}
                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-lg ${
                  msg.sender === 'user' 
                    ? 'bg-gradient-to-br from-brand-600 to-indigo-600 text-white rounded-tr-sm' 
                    : msg.isError 
                      ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20 rounded-tl-sm'
                      : 'bg-slate-800 text-slate-200 border border-white/5 rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex w-full justify-start">
               <div className="flex gap-3 max-w-[85%] flex-row">
                 <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-lg">
                   <Bot className="w-4 h-4" />
                 </div>
                 <div className="p-4 rounded-2xl bg-slate-800 border border-white/5 rounded-tl-sm flex items-center gap-2 shadow-lg">
                   <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />
                   <span className="text-slate-400 text-xs font-medium">Lecty está escribiendo...</span>
                 </div>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-900/80 border-t border-white/5 z-10 backdrop-blur-md">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-2 relative max-w-4xl mx-auto"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe un mensaje a Lecty..."
              className="flex-1 bg-slate-950/80 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-slate-500 shadow-inner"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-purple-600 to-brand-600 hover:from-purple-500 hover:to-brand-500 disabled:opacity-50 text-white rounded-lg transition-all shadow-lg flex items-center justify-center hover:scale-105 active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LectyDemo;
