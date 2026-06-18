import { useState } from 'react';
import { motion } from 'motion/react';
import { COMPARISON_DATA } from '../data/content';
import { Check, X, Shield, Users, Info, HelpCircle } from 'lucide-react';

export default function ComparisonMatrix() {
  const [mobileActiveTab, setMobileActiveTab] = useState<'cocoLign' | 'plastic' | 'styrofoam'>('cocoLign');

  return (
    <section id="comparison" className="py-20 bg-husk-beige relative">
      <div className="absolute top-20 right-10 w-48 h-48 bg-orange-peel/10 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#D98A44] font-mono font-extrabold block">
            Comparative Benchmark
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-shell-brown mt-2 leading-tight">
            How Coco-Lign Outperforms Conventional Packaging
          </h2>
          <div className="h-1 w-20 bg-orange-peel mx-auto mt-4 rounded-full" />
          <p className="text-sm md:text-base text-shell-brown/75 mt-4 font-sans font-medium">
            A comprehensive, rigorous analysis examining strength, heat thresholds, lifecycle costs, 
            and global eco-footprints against typical market materials.
          </p>
        </div>

        {/* Tab Swappers for Mobile Only */}
        <div className="flex md:hidden justify-center bg-shell-brown/5 p-1 rounded-xl mb-6">
          <button
            onClick={() => setMobileActiveTab('cocoLign')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-heading font-black tracking-wide uppercase transition-all duration-300 ${
              mobileActiveTab === 'cocoLign'
                ? 'bg-eco-green text-husk-beige shadow-md'
                : 'text-shell-brown/70 hover:text-shell-brown'
            }`}
          >
            COCO-LIGN PACK
          </button>
          <button
            onClick={() => setMobileActiveTab('plastic')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-heading font-black tracking-wide uppercase transition-all duration-300 ${
              mobileActiveTab === 'plastic'
                ? 'bg-shell-brown text-husk-beige shadow-md'
                : 'text-shell-brown/70 hover:text-shell-brown'
            }`}
          >
            Petroleum Plastic
          </button>
          <button
            onClick={() => setMobileActiveTab('styrofoam')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-heading font-black tracking-wide uppercase transition-all duration-300 ${
              mobileActiveTab === 'styrofoam'
                ? 'bg-shell-brown/40 text-husk-beige shadow-md'
                : 'text-shell-brown/70 hover:text-shell-brown'
            }`}
          >
            Form Styrofoam
          </button>
        </div>

        {/* Benchmarking Grid -- Desktop */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-shell-brown/15 shadow-xl bg-white">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-shell-brown/5 text-shell-brown text-xs sm:text-sm font-heading font-black border-b border-shell-brown/15">
                <th className="p-5 w-1/4 uppercase tracking-wider font-mono">Benchmark Metrics</th>
                <th className="p-5 w-1/4 bg-eco-green text-white text-center text-sm font-extrabold uppercase tracking-wide">
                  COCO-LIGN PACK
                </th>
                <th className="p-5 w-1/4 text-center text-shell-brown/65">Standard Plastics</th>
                <th className="p-5 w-1/4 text-center text-shell-brown/55">Styrofoam Boxes</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b last:border-b-0 border-shell-brown/10 hover:bg-shell-brown/5 transition-colors font-sans text-xs sm:text-sm ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-husk-beige/10'
                  }`}
                >
                  <td className="p-5 font-heading font-black text-shell-brown">
                    {row.parameter}
                  </td>
                  <td className="p-5 text-center bg-eco-green/10 text-eco-green font-extrabold border-x border-eco-green/20">
                    {row.cocoLign}
                  </td>
                  <td className="p-5 text-center text-shell-brown/75 font-medium border-r border-shell-brown/5">
                    {row.plastic}
                  </td>
                  <td className="p-5 text-center text-shell-brown/65 font-medium">
                    {row.styrofoam}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Benchmarking Grid -- Mobile View */}
        <div className="block md:hidden space-y-4">
          {COMPARISON_DATA.map((row, idx) => {
            let columnValue = "";
            let columnHeader = "";
            let bgClass = "";
            let textClass = "";

            if (mobileActiveTab === 'cocoLign') {
              columnValue = row.cocoLign;
              columnHeader = "COCO-LIGN PACK";
              bgClass = "bg-eco-green/10 border-eco-green/20";
              textClass = "text-eco-green font-extrabold";
            } else if (mobileActiveTab === 'plastic') {
              columnValue = row.plastic;
              columnHeader = "Standard Plastics";
              bgClass = "bg-white border-shell-brown/10";
              textClass = "text-shell-brown font-semibold";
            } else {
              columnValue = row.styrofoam;
              columnHeader = "Styrofoam Boxes";
              bgClass = "bg-white/40 border-shell-brown/5";
              textClass = "text-shell-brown/70 font-medium";
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`p-5 rounded-2xl border ${bgClass} shadow-sm space-y-1`}
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-peel">
                  {row.parameter}
                </span>
                <p className={`text-sm ${textClass}`}>
                  {columnValue}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Wet Foods Mitigation explanation */}
        <div className="mt-10 p-5 bg-white/45 border border-shell-brown/10 rounded-2xl text-xs flex items-start gap-3 justify-between max-w-4xl mx-auto">
          <Info className="text-eco-green shrink-0 mt-0.5 animate-bounce" size={18} />
          <div>
            <h4 className="font-heading font-black text-shell-brown uppercase tracking-wider">
              An Important Note on Wet / Soupy Foods
            </h4>
            <p className="text-shell-brown/80 mt-1 leading-relaxed font-sans font-medium">
              As identified in our SWOT analysis, while COCO-LIGN PACK's base fiber structure is naturally 
              sensitive to high-density fluids like soup over long durations, our team optimizes product durability using 
              <strong> organic beeswax barriers & reinforced cellulose nanocrystals (CNC)</strong>. This preserves structural rigidity 
              beautifully for dry, warm, and semi-wet culinary requirements.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
