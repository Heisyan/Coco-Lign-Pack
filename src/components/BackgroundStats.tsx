import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, AlertCircle, RefreshCw, Compass, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

export default function BackgroundStats() {
  const [plates, setPlates] = useState<number>(30);
  
  // Equivalence Calculations
  const co2Savings = (plates * 0.05).toFixed(2); // 50g per plate
  const wasteDiverted = (plates * 0.04).toFixed(2); // 40g per plate
  const microplasticsPrevented = plates * 1250; // Average 1250 microparticles per Styrofoam cup/plate degradation

  const stats = [
    {
      value: "19-23M",
      label: "Tons Annually",
      desc: "Volume of plastic entering the global aquatic ecosystem, devastating marine life and food lines.",
      icon: Trash2,
      color: "text-orange-peel"
    },
    {
      value: "3.4M",
      label: "Tons in Indonesia",
      desc: "Unmanaged plastic waste produced each year, making Indonesia one of the largest ocean contributors.",
      icon: AlertCircle,
      color: "text-red-400"
    },
    {
      value: "Just 9%",
      label: "Recycled Globally",
      desc: "The rest (~91%) is dumped in open landfills, rivers, oceans, or burned, resulting in chemical pollution.",
      icon: RefreshCw,
      color: "text-[#5A7D59]"
    }
  ];

  return (
    <section className="bg-[#3A2618] text-[#F4EFE6] py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-peel via-[#5A7D59] to-orange-peel" />
      <div className="absolute -right-32 -bottom-32 w-100 h-100 bg-[#5A7D59]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D98A44] font-mono font-extrabold block">
            The Ecological Context
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black mt-2 leading-tight text-white">
            Single-Use Plastics are Destroying Our Ecosystems
          </h2>
          <div className="h-1 w-20 bg-orange-peel mx-auto mt-4 rounded-full" />
          <p className="text-sm md:text-base text-[#F4EFE6]/75 mt-4 font-sans font-medium">
            With standard petroleum plastics and fragile Styrofoam taking hundreds of years to break down, 
            microplastics are infecting soil, marine food lines, and drinking water.
          </p>
        </div>

        {/* Dynamic Card Grid with creative Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-[#2C1D12] border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-[#5A7D59]/30 transition-all relative group shadow-sm hover:shadow-lg"
            >
              <div className="absolute top-2 right-2 w-20 h-20 bg-[#5A7D59]/5 rounded-full pointer-events-none filter blur-xl group-hover:bg-[#5A7D59]/10 transition-colors" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl sm:text-5xl font-heading font-black text-white group-hover:text-orange-peel transition-colors">
                  {stat.value}
                </span>
                <stat.icon className={`${stat.color} shrink-0 transition-transform duration-300 group-hover:rotate-12`} size={28} />
              </div>
              <h3 className="font-heading font-bold text-sm sm:text-base text-orange-peel mb-2 uppercase tracking-wide">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-[#F4EFE6]/75 leading-relaxed font-sans font-medium">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* INTERACTIVE CRISIS SAVINGS CALCULATOR (SUPER EYE CATCHING) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 border border-white/10 rounded-[32px] p-6 sm:p-10 max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 bg-orange-peel/10 border-l border-b border-orange-peel/15 rounded-bl-2xl text-[10px] uppercase font-mono font-bold tracking-widest text-orange-peel flex items-center gap-1">
            <Sparkles size={11} fill="currentColor" /> Live Calculator
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left side slider */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldAlert className="text-orange-peel" size={20} />
                <h3 className="font-heading font-black text-base uppercase text-white tracking-wider">
                  Assess Your Impact Savings
                </h3>
              </div>
              <p className="text-xs text-[#F4EFE6]/70 font-sans leading-relaxed">
                Estimate the direct reduction of toxin and microplastics released into Southeast Asia rivers by replacing single-use styrofoam boxes with <strong>COCO-LIGN PACK</strong> over one month.
              </p>
              
              <div className="pt-2">
                <label className="text-xs font-mono font-extrabold text-[#F4EFE6]/80 flex justify-between uppercase mb-2">
                  <span>Plastics / Styrofoam used:</span>
                  <span className="text-sm text-orange-peel font-black font-heading">{plates} Units / Month</span>
                </label>
                <input 
                  type="range" 
                  min="5" 
                  max="200" 
                  value={plates} 
                  onChange={(e) => setPlates(parseInt(e.target.value))}
                  className="w-full accent-[#5A7D59] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1 font-mono">
                  <span>5 Units (Slight)</span>
                  <span>100 Units</span>
                  <span>200 Units (Restaurant Scale)</span>
                </div>
              </div>
            </div>

            {/* Right side live result counter gauges */}
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#2C1D12] border border-white/5 rounded-2xl p-4 text-center">
                <span className="text-[10px] uppercase font-mono font-bold text-[#F4EFE6]/50 block">CO2 Equivalent Saved</span>
                <span className="text-2xl font-heading font-black text-[#5A7D59] mt-1 block">
                  {co2Savings} kg
                </span>
                <span className="text-[9px] text-[#F4EFE6]/40 uppercase mt-1 block font-semibold">Mitigates carbon footprint</span>
              </div>

              <div className="bg-[#2C1D12] border border-white/5 rounded-2xl p-4 text-center">
                <span className="text-[10px] uppercase font-mono font-bold text-[#F4EFE6]/50 block">Landfill Soil Saved</span>
                <span className="text-2xl font-heading font-black text-[#5A7D59] mt-1 block">
                  {wasteDiverted} kg
                </span>
                <span className="text-[9px] text-[#F4EFE6]/40 uppercase mt-1 block font-semibold">Biomass decomposition ready</span>
              </div>

              <div className="bg-[#2C1D12] border border-white/5 rounded-2xl p-4 text-center sm:col-span-2">
                <span className="text-[10px] uppercase font-mono font-bold text-[#F4EFE6]/50 block">Ocean Microplastics Diverted</span>
                <span className="text-xl font-heading font-black text-orange-peel mt-1 block">
                  {microplasticsPrevented.toLocaleString()} Particles
                </span>
                <p className="text-[9px] text-[#F4EFE6]/40 mt-1 font-sans leading-none">
                  Fitted perfectly with zero structural microplastic disintegration risks.
                </p>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Global Impact Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto"
        >
          <Compass className="text-orange-peel shrink-0 mt-1 animate-pulse" size={24} style={{ animationDuration: '4s' }} />
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-husk-beige">
              Transnational Pollution Cycle
            </h4>
            <p className="text-[#F4EFE6]/70 mt-1 text-xs sm:text-sm font-sans font-medium leading-relaxed">
              Research by the National Research and Innovation Agency (BRIN) indicates waste expelled from rivers 
              like the Ciliwung can drifts as far as the Indian Ocean, reaching the shoreline of South Africa. 
              This is a global crisis calling for structural alternatives.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
