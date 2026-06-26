import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { FEATURES } from '../data/content';
import { Leaf, Flame, Sparkles, Shield, Award, Cpu } from 'lucide-react';

const iconMap: Record<string, ComponentType<any>> = {
  biodegradable: Leaf,
  heat: Flame,
  antibacterial: Sparkles,
  strength: Shield,
  food_safe: Award,
  zero_chemical: Cpu
};

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 bg-husk-beige/30 border-y border-shell-brown/10 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D98A44] font-mono font-extrabold block">
            Technical Properties
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-shell-brown mt-2 leading-tight">
            Superior Functional Performance
          </h2>
          <div className="h-1 w-20 bg-eco-green mx-auto mt-4 rounded-full" />
          <p className="text-sm md:text-base text-shell-brown/75 mt-4 font-sans font-medium">
            COCO-LIGN PACK doesn't just match single-use petroleum storage—it exceeds their thermal limits and 
            safety dimensions using natural compounds.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, index) => {
            const IconComponent = iconMap[feat.id] || Leaf;

            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white border border-shell-brown/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-eco-green/45 transition-all group"
              >
                <div>
                  {/* Icon Panel */}
                  <div className="w-12 h-12 rounded-xl bg-husk-beige flex items-center justify-center text-eco-green shadow-sm border border-shell-brown/10 mb-6 group-hover:bg-eco-green group-hover:text-husk-beige transition-colors">
                    <IconComponent size={22} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>

                  {/* Badge */}
                  {feat.badge && (
                    <span className="text-[10px] bg-orange-peel/10 border border-orange-peel/15 text-orange-peel rounded px-2 py-0.5 font-bold uppercase tracking-wide">
                      {feat.badge}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="font-heading font-black text-lg text-shell-brown mt-3 group-hover:text-eco-green transition-colors">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-shell-brown/75 mt-2 leading-relaxed font-sans font-medium">
                    {feat.description}
                  </p>
                </div>

                {/* Accent Anchor line */}
                <div className="mt-6 w-full h-0.5 bg-shell-brown/10 group-hover:bg-eco-green transition-colors" />
              </motion.div>
            );
          })}
        </div>

        {/* Brief cost note bottom banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 p-6 bg-eco-green text-husk-beige rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-black text-lg">
              Stunning Economical Viability
            </h4>
            <p className="text-xs text-husk-beige/85 font-medium max-w-2xl">
              By reusing free coconut waste, the target production costs of COCO-LIGN PACK are optimized 
              to approximately Rp 730 ($0.035) per tray—significantly lower than bags or plates crafted from bagasse which average $0.052.
            </p>
          </div>
          <div className="bg-husk-beige text-eco-green font-heading font-extrabold text-sm px-6 py-3 rounded-xl uppercase tracking-wider shadow-inner shrink-0">
            Outperforms Bagasse
          </div>
        </motion.div>

      </div>
    </section>
  );
}
