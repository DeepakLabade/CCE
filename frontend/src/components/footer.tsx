import React from 'react';
// import { Terminal, Twitter, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-20 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#bef264] rounded-xl">
              {/* <Terminal /> */}
            </div>
            <span className="text-2xl font-black italic uppercase tracking-tighter">Pair<span className="text-zinc-600">Programmer</span></span>
          </div>
          <p className="text-zinc-500 font-medium max-w-sm">
            The engineering workspace of the future. Built for teams that move fast and ship code even faster.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black text-[#bef264] uppercase tracking-[0.2em]">Product</span>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold">Documentation</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold">Changelog</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold">Security</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black text-[#bef264] uppercase tracking-[0.2em]">Social</span>
            <a href="#" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-bold">
              {/* <Twitter size={16} /> */}
               Twitter
            </a>
            <a href="#" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-bold">
              {/* <Github size={16} /> */}
               GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] font-black text-zinc-700 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Pair Programmer Protocol.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-[10px] font-black text-zinc-700 uppercase tracking-widest hover:text-zinc-400">Privacy Policy</a>
          <a href="#" className="text-[10px] font-black text-zinc-700 uppercase tracking-widest hover:text-zinc-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};