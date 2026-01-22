import { BentoGrid } from "../components/bento-grid"
import Features from "../components/feature"
import { Footer } from "../components/footer"
import { Hero } from "../components/hero"
import { Navbar } from "../components/navbar"

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-[#bef264] selection:text-black">
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#bef264]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/5 rounded-full blur-[140px]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-white/2 rounded-full blur-[120px]" />
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Features />
      </main>
      <Footer />
    </div>  
  )
}

export default Home