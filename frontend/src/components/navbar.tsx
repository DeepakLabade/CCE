import React from 'react';
// import { motion } from 'motion/react';
// import { Terminal, Github } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-xl border-b border-white/5 bg-[#050505]/80"
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="p-1.5 bg-[#bef264] rounded-lg group-hover:rotate-6 transition-all duration-300">
          {/* <Terminal size={18} className="text-black" strokeWidth={3} /> */}
        </div>
        <span className="text-xl font-extrabold tracking-tighter">
          Pair<span className="text-zinc-500">Programmer</span>
        </span>
      </div>

      <div className="flex items-center gap-6">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-[#bef264] transition-colors"
        >
          {/* <Github size={22} /> */}
        </a>
        <button className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black bg-[#bef264] rounded-full hover:bg-[#d9ff96] transition-all hover:scale-105 active:scale-95 glow-lime">
          Get Started
        </button>
      </div>
    </nav>
  );
};