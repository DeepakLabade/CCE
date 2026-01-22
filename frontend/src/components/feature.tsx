const featureList = [
  {
    label: "TERM",
    title: "Shared Terminals",
    description: "Multi-user terminal sessions with granular permission controls for secure execution."
  },
  {
    label: "DEBUG",
    title: "Live Debugging",
    description: "Attach debuggers across multiple machines simultaneously to squish bugs faster."
  },
  {
    label: "//",
    title: "Threaded Context",
    description: "Leave comments on blocks of code that persist even after refactors."
  },
  {
    label: "REPLAY",
    title: "Session Replay",
    description: "Watch how a feature was built with per-keystroke historical playback."
  },
  {
    label: "AI",
    title: "AI Pair Pilot",
    description: "Shared AI context that understands your whole codebase, not just the current file."
  },
  {
    label: "GIT",
    title: "Native Git Flow",
    description: "Collaborative branch management with visual merge conflict resolution."
  }
];

const Features = () => {

    return (
        <section className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureList.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-10 rounded-4xl bg-zinc-950 border border-white/5 hover:border-[#bef264]/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-[#bef264] mb-8 group-hover:scale-110 group-hover:bg-[#bef264]/10 transition-all duration-500 font-black text-sm">
                    {feature.label}
                  </div>
                  <h3 className="text-xl font-black mb-4 uppercase italic tracking-tighter text-white">{feature.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Features