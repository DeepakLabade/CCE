
import React from 'react';
import { motion } from 'framer-motion';

const CURSORS = [
  { name: 'Devin', color: '#bef264', x: '15%', y: '35%' },
  { name: 'Aisha', color: '#34d399', x: '70%', y: '45%' },
  { name: 'Marcus', color: '#a3e635', x: '40%', y: '65%' },
];

export const CodeMockup: React.FC = () => {
  const codeSnippet = `// Collaborative session active
import { useCollaboration } from "@pair/sdk";

export default function CollaborativeEditor() {
  const { code, cursors, status } = useCollaboration({
    roomId: "team-alpha-2024",
    optimistic: true
  });

  return (
    <Editor 
      value={code}
      remoteCursors={cursors}
      theme="carbon-lime"
    />
  );
}`;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 shadow-[0_0_50px_-12px_rgba(190,242,100,0.15)] text-left font-mono text-sm leading-relaxed">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-zinc-800" />
          <div className="w-3 h-3 rounded-full bg-zinc-800" />
          <div className="w-3 h-3 rounded-full bg-zinc-800" />
        </div>
        <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#bef264] animate-pulse" />
          Live Session: pair-programmer.tsx
        </div>
        <div className="w-12" />
      </div>

      {/* Editor Content */}
      <div className="p-8 overflow-hidden relative min-h-[320px]">
        <pre className="text-zinc-400">
          {codeSnippet.split('\n').map((line, i) => (
            <div key={i} className="flex">
              <span className="w-8 mr-6 text-zinc-700 text-right select-none">{i + 1}</span>
              <span dangerouslySetInnerHTML={{ 
                __html: line
                  .replace(/(\/\/.*)/g, '<span class="text-zinc-600">$1</span>')
                  .replace(/(import|from|export|default|function|const|return)/g, '<span class="text-[#bef264]">$1</span>')
                  .replace(/(".*")/g, '<span class="text-emerald-400">$1</span>')
                  .replace(/(\(|\)|{|}|\[|\])/g, '<span class="text-zinc-500">$1</span>')
                  .replace(/(useCollaboration|Editor)/g, '<span class="text-zinc-200">$1</span>')
              }} />
            </div>
          ))}
        </pre>

        {/* Floating Cursors */}
        {CURSORS.map((cursor, idx) => (
          <motion.div
            key={idx}
            initial={{ left: cursor.x, top: cursor.y }}
            animate={{ 
              left: [cursor.x, (Math.random() * 80 + 10) + '%', (Math.random() * 80 + 10) + '%', cursor.x],
              top: [cursor.y, (Math.random() * 60 + 20) + '%', (Math.random() * 60 + 20) + '%', cursor.y],
            }}
            transition={{ 
              duration: 10 + idx * 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute pointer-events-none z-10"
          >
            <div className="flex flex-col items-start">
              <div 
                className="w-[2px] h-6" 
                style={{ backgroundColor: cursor.color }} 
              />
              <div 
                className="px-2 py-1 rounded-sm text-[10px] font-black text-black shadow-xl"
                style={{ backgroundColor: cursor.color }}
              >
                {cursor.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};