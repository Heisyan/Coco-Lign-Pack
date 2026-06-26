import { motion } from 'motion/react';
import { ArrowRight, Leaf, Eye, Play } from 'lucide-react';
import mockupImg from '../assets/images/coco_lign_hero.png';

export default function HeroEco() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative organic-pattern">
      <div className="absolute top-20 right-0 w-96 h-96 bg-eco-green/10 rounded-full filter blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-peel/5 rounded-full filter blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-eco-green/15 border border-eco-green/20 px-3.5 py-1.5 rounded-full"
            >
              <Leaf size={14} className="text-eco-green animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-xs font-bold text-eco-green uppercase tracking-wider font-heading">
                4th International Youth Conference 2026 • Environment
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-5xl sm:text-6xl xl:text-7xl font-black text-shell-brown leading-[1.14] tracking-tight"
            >
              Nature <br />
              <span className="italic text-eco-green font-serif font-light">Packs Better.</span> <br />
              <span className="text-orange-peel text-2xl sm:text-3xl xl:text-4xl mt-3 block font-bold font-heading">
                Turn waste into worth, one packaging at a time.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-shell-brown/80 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              COCO-LIGN PACK is a groundbreaking bio-materials paradigm crafted purely from 
              discarded coconut husk fibers and natural activated lignin. Strong, chemical-free, 
              and custom-coated in protective beeswax. It completely replaces single-use plastic and Styrofoam packaging!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => scrollTo('about')}
                className="w-full sm:w-auto bg-eco-green hover:bg-eco-green/95 text-husk-beige font-heading font-extrabold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm tracking-wide uppercase flex items-center justify-center gap-2"
              >
                Explore Eco-Structure <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('production')}
                className="w-full sm:w-auto bg-shell-brown/10 hover:bg-shell-brown/15 text-shell-brown font-heading font-extrabold px-8 py-4 rounded-full border border-shell-brown/10 hover:-translate-y-0.5 transition-all text-sm tracking-wide uppercase flex items-center justify-center gap-2"
              >
                Track the Workflow <Play size={14} fill="currentColor" />
              </button>
            </motion.div>

            {/* Micro Badges inside Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-6 border-t border-shell-brown/10 grid grid-cols-3 gap-4 text-center sm:text-left self-stretch max-w-lg mx-auto lg:mx-0"
            >
              <div>
                <span className="block font-heading text-lg sm:text-xl font-extrabold text-eco-green">60-90 Days</span>
                <span className="text-[10px] sm:text-xs text-shell-brown/60 uppercase tracking-wider font-bold">100% Bio-Decay</span>
              </div>
              <div>
                <span className="block font-heading text-lg sm:text-xl font-extrabold text-eco-green">Up to 120°C</span>
                <span className="text-[10px] sm:text-xs text-shell-brown/60 uppercase tracking-wider font-bold">Heat Resistance</span>
              </div>
              <div>
                <span className="block font-heading text-lg sm:text-xl font-extrabold text-eco-green">Rp 730/pc</span>
                <span className="text-[10px] sm:text-xs text-shell-brown/60 uppercase tracking-wider font-bold">Stunning Value</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Media */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -12, 0]
              }}
              transition={{ 
                y: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                },
                default: { duration: 0.8, delay: 0.3 }
              }}
              className="relative w-full max-w-[520px] aspect-[4/3] flex items-center justify-center"
            >
              <img
                src={mockupImg}
                alt="COCO-LIGN PACK molded biodegradable tray mockups with structural organic fibers and wax coating"
                className="w-full h-full object-contain scale-[1.4] select-none pointer-events-none drop-shadow-[0_20px_30px_rgba(58,38,24,0.25)] animate-pulse"
                style={{ animationDuration: '4s' }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Elegant overlay floating badge/specs card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full max-w-[340px] bg-white/90 backdrop-blur-md border border-shell-brown/10 p-4 rounded-2xl shadow-xl mt-4 lg:mt-0 lg:absolute lg:bottom-4 lg:left-0 z-10 text-shell-brown"
            >
              <span className="text-[10px] font-mono text-orange-peel uppercase tracking-wider font-extrabold block">
                A3 Proto Mockup • Organic Structure
              </span>
              <p className="text-xs font-sans font-medium leading-relaxed mt-1 text-shell-brown/80">
                Molded directly from local agricultural waste coconut shell fibers and activated lignin.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="text-[9px] bg-eco-green/10 border border-eco-green/20 text-eco-green rounded-lg px-2.5 py-1 font-heading font-black uppercase">
                  Rigid Plate Shape
                </span>
                <span className="text-[9px] bg-orange-peel/10 border border-orange-peel/20 text-orange-peel rounded-lg px-2.5 py-1 font-heading font-black uppercase">
                  100% Biodegradable
                </span>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
