import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col md:flex-row items-center bg-gradient-to-r from-pfe-dark to-[#165a8a] text-white overflow-hidden shrink-0 min-h-[85vh]">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-r from-pfe-dark to-[#165a8a]"
      >
        <div className="absolute inset-0 bg-pfe-dark/20 mix-blend-multiply" />
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 bg-pfe-light/10 flex items-center justify-center pointer-events-none">
          {/* Abstract Geometric Design Elements */}
          <div className="absolute w-[800px] h-[800px] rounded-full border-[12px] border-white/5 right-[-200px] top-[-100px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full border-[1px] border-white/20 animate-pulse right-[100px] top-[100px]" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[60%] lg:w-1/2 z-10">
          {/* Main large heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold !text-pfe-light mb-6 text-left leading-[1.1] drop-shadow-md"
          >
            Reliable Medicine <br className="hidden md:block"/>Distribution Across <br className="hidden md:block"/><span className="!text-white">Pakistan</span>
          </motion.h1>

          <div className="relative pt-6 flex flex-col items-start gap-6">
            
            {/* Left Aligned Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block px-3 py-1 bg-pfe-light text-[10px] uppercase tracking-[0.2em] font-bold rounded text-white"
            >
              ISO 9001:2015 Certified
            </motion.div>

            {/* Subtext aligned to the left */}
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-blue-100 text-lg md:text-xl max-w-md font-light leading-relaxed"
            >
              Connecting quality manufacturers with trusted healthcare partners and pharmacies nationwide through a seamless cold-chain network.
            </motion.p>
          </div>

          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#products" 
              className="bg-white text-pfe-dark font-bold py-3 px-8 rounded-md shadow-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors uppercase tracking-widest text-xs"
            >
              Explore Products <ArrowRight size={16} />
            </a>
            <a 
              href="#about" 
              className="border border-white/30 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-md backdrop-blur-sm flex items-center justify-center transition-colors uppercase tracking-widest text-xs"
            >
              Our Story
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
