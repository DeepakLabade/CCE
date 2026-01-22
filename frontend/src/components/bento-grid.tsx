
import React from 'react';

export const BentoGrid: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">Engineered for <br /><span className="text-[#bef264]">Synchronization</span></h2>
          <p className="text-zinc-500 font-medium">Traditional editors weren't built for teams. Pair Programmer is a ground-up reconstruction of the coding environment for the collaborative era.</p>
        </div>
        <div className="flex items-center gap-2 text-[#bef264] text-xs font-bold uppercase tracking-widest border border-[#bef264]/20 rounded-full px-4 py-2 bg-[#bef264]/5">
          <div className="w-2 h-2 rounded-full bg-[#bef264] animate-ping" />
          Operational Status: Optimal
        </div>
      </div>

      <div 
        className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 h-auto md:h-[650px]"
      >
        {/* Real-time Engine */}
        <div 
          className="md:col-span-3 md:row-span-2 relative group overflow-hidden bg-zinc-900 border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between hover:border-[#bef264]/30 transition-all duration-500"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity text-[#bef264] text-9xl font-black">
            CPU
          </div>
          <div>
            <div className="w-14 h-14 bg-[#bef264] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_-5px_rgba(190,242,100,0.4)] text-black font-black text-xs">
              ⚡
            </div>
            <h3 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tighter">The Sync Engine</h3>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              Our proprietary CRDT implementation ensures <span className="text-white font-bold underline decoration-[#bef264]">zero-conflict merging</span>. Even on high-latency connections, your team feels local.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <div className="px-4 py-2 rounded-xl bg-zinc-950 border border-white/5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">50ms Global P99</div>
            <div className="px-4 py-2 rounded-xl bg-zinc-950 border border-white/5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">E2E Encryption</div>
            <div className="px-4 py-2 rounded-xl bg-zinc-950 border border-white/5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Edge-Optimized</div>
          </div>
        </div>

        {/* Collaboration Context */}
        <div 
          className="md:col-span-3 bg-[#bef264] rounded-[2.5rem] p-10 flex flex-col justify-center group relative overflow-hidden"
        >
          <div className="absolute right-[-10%] bottom-[-10%] opacity-10 group-hover:rotate-12 transition-transform duration-700 text-black text-8xl font-black">
            TEAM
          </div>
          <h3 className="text-3xl font-black text-black mb-4 uppercase italic tracking-tighter">Radical Transparency</h3>
          <p className="text-black/70 font-bold max-w-sm">
            See exactly what your peers are looking at. Shared terminals, shared inspectors, and unified debugging sessions.
          </p>
        </div>

        {/* Small Feature: Deployment */}
        <div 
          className="md:col-span-2 bg-zinc-900 border border-white/5 rounded-4xl p-8 flex flex-col justify-center hover:bg-zinc-800/40 transition-colors group"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#bef264] font-black text-lg">SHARE</span>
            <h4 className="font-black text-white uppercase italic">Instant Previews</h4>
          </div>
          <p className="text-zinc-500 text-sm font-medium">Every file save generates a private sandbox link for your team to test immediately.</p>
        </div>

        {/* Small Feature: Security */}
        <div 
          className="md:col-span-1 bg-zinc-900 border border-white/5 rounded-4xl p-8 flex flex-col items-center justify-center hover:bg-zinc-800/40 transition-colors group text-center"
        >
          <span className="text-zinc-600 group-hover:text-[#bef264] transition-colors mb-4 font-black text-2xl">🛡</span>
          <h4 className="font-bold text-white text-xs uppercase tracking-widest">Hardened</h4>
        </div>
      </div>
    </section>
  );
};
