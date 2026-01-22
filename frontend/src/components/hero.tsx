export function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-40 md:pb-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
        >
          <span>Real-time Engineering Workspace</span>
        </div>

        <h1
          className="text-5xl md:text-8xl font-black tracking-tight max-w-5xl mb-8 leading-[0.9] text-white"
        >
          Code with your team <br />
          <span className="text-[#bef264] italic">at the speed of light.</span>
        </h1>

        <p
          className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-12 font-medium"
        >
          Stop sharing screens. Start sharing cursors. Pair Programmer provides a low-latency environment for distributed teams to build world-class software.
        </p>

        <div
          className="mb-24"
        >
          <button className="px-10 py-5 bg-[#bef264] text-black font-black uppercase tracking-widest rounded-2xl hover:bg-[#d9ff96] transition-all hover:-translate-y-1 glow-lime shadow-2xl">
            Join the Alpha
          </button>
        </div>

        <div
          className="w-full max-w-5xl relative group"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-[#bef264] to-emerald-500 rounded-3xl opacity-10 group-hover:opacity-20 blur-3xl transition duration-1000" />
          {/* <CodeMockup /> */}
        </div>
      </div>
    </section>
  );  
}