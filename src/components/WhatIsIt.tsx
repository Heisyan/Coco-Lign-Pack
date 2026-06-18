import { motion } from 'motion/react';
import { Eye, Info, Sparkles, Check, Droplets, Flame, Shield, Award } from 'lucide-react';

export default function WhatIsIt() {
  const ingredients = [
    {
      pct: "70%",
      name: "Upcycled Coconut Residue",
      desc: "Recovered coarse fibers forming the structural cellular matrix of the container. Lightweight but strong.",
      icon: "🥥"
    },
    {
      pct: "30%",
      name: "Activated Natural Lignin",
      desc: "Natural hydrophobic plant polymer activated in hot water to bind the fibers without formaldehydes or chemicals.",
      icon: "🌳"
    },
    {
      pct: "Eco-Add",
      name: "Orange Peel Powder & Beeswax",
      desc: "Antioxidant citrus powder halts mould/bacteria; organic beeswax acts as the essential fluid and oil barrier.",
      icon: "🍊"
    }
  ];

  return (
    <section id="about" className="py-20 bg-husk-beige relative">
      <div className="absolute top-10 left-12 w-64 h-64 bg-orange-peel/10 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block Illustrating Composite Structure */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/40 border border-shell-brown/10 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-eco-green text-husk-beige text-[10px] uppercase tracking-widest px-3 py-1 font-bold font-mono rounded-bl-xl shadow-sm">
                Material Chemistry
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-orange-peel" size={20} />
                <h3 className="font-heading font-black text-xl text-shell-brown">
                  The Organic Scaffold
                </h3>
              </div>

              {/* Composition Stack */}
              <div className="space-y-4">
                {ingredients.map((ing, k) => (
                  <div key={k} className="p-4 bg-husk-beige/50 hover:bg-husk-beige rounded-xl border border-shell-brown/5 transition-colors flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-shell-brown/5 flex flex-col items-center justify-center font-heading font-black text-xs text-eco-green shrink-0 shadow-sm border border-shell-brown/10">
                      <span className="text-lg">{ing.icon}</span>
                      <span className="text-[9px] -mt-1 font-mono font-bold leading-none">{ing.pct}</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-shell-brown">{ing.name}</h4>
                      <p className="text-xs text-shell-brown/75 mt-1 leading-relaxed font-sans">{ing.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Micro specs info box */}
              <div className="bg-eco-green/10 border border-eco-green/15 rounded-xl p-4 text-xs font-sans text-shell-brown/90 space-y-2 flex items-start gap-3">
                <Info size={18} className="text-eco-green shrink-0 mt-0.5" />
                <div>
                  <span className="font-heading font-extrabold text-[#3A2618]">Zero Formaldehye / Petroleum</span>
                  <p className="text-shell-brown/85 font-normal mt-0.5">
                    Unlike traditional wood pulp boards or bioplastics requiring high chemical resins, COCO-LIGN uses 
                    plant lignin, aligning completely with the SNI 8218:2024 environmental standard.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right text detailing definition */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-eco-green font-mono">
              Innovative Formulation
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-shell-brown leading-tight">
              A Rigid Food Container Engineered directly from Coconut Waste
            </h2>
            <div className="h-1 w-20 bg-orange-peel rounded-full" />
            
            <p className="text-sm sm:text-base text-shell-brown/80 leading-relaxed font-medium">
              Every day, tons of coconut shells and husks are left to rot or openly burned in tropical farms. 
              Our technology upcycles this cellular matrix. We isolate the coarse fibers, hydrate them, 
              and bond them together using plant lignin binder triggered under heavy steam heat.
            </p>

            <p className="text-sm sm:text-base text-shell-brown/80 leading-relaxed font-medium">
              The surface is then coated with light, melted organic beeswax to prevent soup, moisture, 
              or fatty foods from immediately soaking the fibers. It delivers standard container performance, 
              but biodegrades completely in the earth without leaving trace microplastics or toxic chemicals.
            </p>

            {/* Quick value checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                "Biodegrades in 60-90 Days in raw soil",
                "Natural orange-peel microbial shield",
                "Excellent structural reinforcement",
                "High heat resistance up to 120°C",
                "Safe for direct, warm food-contact",
                "Circular local economy support"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-eco-green/15 flex items-center justify-center text-eco-green shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-xs font-sans text-shell-brown/90 font-bold">{point}</span>
                </div>
              ))}
            </div>

            {/* Interactive SDG summary block */}
            <div className="pt-4 border-t border-shell-brown/10 flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-mono text-shell-brown/60 uppercase font-bold">
                Officially Aligned to:
              </span>
              <span className="bg-orange-peel/10 border border-orange-peel/20 text-orange-peel text-[10px] font-bold uppercase rounded-md px-2.5 py-1">
                SDG 12: Responsible Consumption
              </span>
              <span className="bg-eco-green/10 border border-eco-green/20 text-eco-green text-[10px] font-bold uppercase rounded-md px-2.5 py-1">
                SDG 13: Climate Action
              </span>
              <span className="bg-[#417E9B]/10 border border-[#417E9B]/20 text-[#417E9B] text-[10px] font-bold uppercase rounded-md px-2.5 py-1">
                SDG 14: Life Below Water
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
