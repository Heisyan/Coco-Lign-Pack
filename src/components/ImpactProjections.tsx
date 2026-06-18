import { useState, useEffect, useRef, ComponentType } from 'react';
import { motion, useInView } from 'motion/react';
import { IMPACT_METRICS } from '../data/content';
import { Leaf, Trash2, Coins, Network, Users, Award } from 'lucide-react';

const iconMap: Record<string, ComponentType<any>> = {
  Leaf: Leaf,
  Trash2: Trash2,
  Coins: Coins,
  Network: Network,
  Users: Users,
  Award: Award
};

// Count-up helper component triggered on element entering viewport
function Counter({ valueString }: { valueString: string }) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-50px" });
  const [currentValue, setCurrentValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse the string to extract raw numeric value and prefix/suffix
    const match = valueString.match(/^([^0-9.]*)([0-9.]+)([^0-9.]*)$/);
    if (!match) {
      setCurrentValue(valueString);
      return;
    }

    const prefix = match[1];
    const numericPart = parseFloat(match[2]);
    const suffix = match[3];
    const isDecimal = match[2].includes('.');

    let start = 0;
    const end = numericPart;
    const duration = 1500; // ms
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const currentNum = start + easeProgress * (end - start);
      
      const formattedNum = isDecimal ? currentNum.toFixed(2) : Math.floor(currentNum).toString();
      setCurrentValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(valueString);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, valueString]);

  return <span ref={elementRef}>{currentValue}</span>;
}

export default function ImpactProjections() {
  return (
    <section id="impact" className="py-20 bg-husk-beige relative">
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-eco-green/5 rounded-full filter blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D98A44] font-mono font-extrabold block">
            Sustainability Potential & KPIs
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-shell-brown mt-2 leading-tight">
            Measurable Projections of Success
          </h2>
          <div className="h-1 w-20 bg-orange-peel mx-auto mt-4 rounded-full" />
          <p className="text-sm md:text-base text-shell-brown/75 mt-4 font-sans font-medium">
            Representing the core Environmental, Financial, and Social metrics described in the 
            research, predicting real global impact by substituting expanded polystyrene with upcycled fibers.
          </p>
        </div>

        {/* 3 Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {IMPACT_METRICS.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white/40 border border-shell-brown/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-eco-green/5 rounded-full -mr-6 -mt-6" />

              <div>
                {/* Panel Title */}
                <h3 className="font-heading font-black text-lg text-shell-brown border-b border-shell-brown/10 pb-4 mb-6">
                  {section.title}
                </h3>

                {/* KPI metrics in section */}
                <div className="space-y-8">
                  {section.metrics.map((metric, mIdx) => {
                    const IconComp = iconMap[metric.iconName] || Leaf;

                    return (
                      <div key={mIdx} className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-husk-beige flex items-center justify-center text-eco-green shrink-0">
                            <IconComp size={18} className="stroke-[2.5]" />
                          </div>
                          <span className="text-2xl sm:text-3xl font-heading font-black text-shell-brown leading-none tracking-tight">
                            <Counter valueString={metric.value} />
                          </span>
                        </div>
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-orange-peel uppercase tracking-wider">
                          {metric.label}
                        </h4>
                        <p className="text-xs sm:text-sm text-shell-brown/75 leading-relaxed font-sans font-medium">
                          {metric.subtext}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Little quote footer matching poster context */}
              <div className="mt-8 pt-4 border-t border-shell-brown/15 text-[11px] font-mono text-shell-brown/50">
                Data references: Author's work & Research Poster, 2026.
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
