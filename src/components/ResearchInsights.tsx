import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, AlertTriangle, TrendingUp, Info, HelpCircle, Check, DollarSign, Award, Leaf } from 'lucide-react';

type TabType = 'swot' | 'pestle' | 'smart' | 'budget';

export default function ResearchInsights() {
  const [activeTab, setActiveTab] = useState<TabType>('swot');

  return (
    <section id="insights" className="py-20 bg-husk-beige/30 border-t border-shell-brown/10 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#3a261803_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#D98A44] font-mono font-extrabold block">
            Academic Literature & Figures
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-shell-brown mt-2 leading-tight">
            Scientific & Financial Insights
          </h2>
          <div className="h-1 w-20 bg-eco-green mx-auto mt-4 rounded-full" />
          <p className="text-sm md:text-base text-shell-brown/75 mt-4 font-sans font-medium">
            Browse our parsed research diagnostics directly from the presentation poster, 
            detailing SWOT matrices, PESTLE analyses, SMART objectives, and precise cost plans.
          </p>
        </div>

        {/* Dynamic Tab Controllers */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto bg-shell-brown/5 p-1.5 rounded-2xl border border-shell-brown/10">
          {(['swot', 'pestle', 'smart', 'budget'] as TabType[]).map((tab) => {
            const labels: Record<TabType, string> = {
              swot: 'SWOT Outlook',
              pestle: 'PESTLE Context',
              smart: 'SMART Target',
              budget: 'Budget & Pricing'
            };

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[120px] py-3 rounded-xl text-xs sm:text-sm font-heading font-black tracking-wide uppercase transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-eco-green text-husk-beige shadow-md'
                    : 'text-shell-brown/75 hover:text-shell-brown hover:bg-white/40'
                }`}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-shell-brown/10 rounded-3xl p-6 sm:p-10 shadow-xl"
            >
              
              {/* SWOT Tab */}
              {activeTab === 'swot' && (
                <div className="space-y-8" id="swotTab">
                  <div className="flex items-center gap-2">
                    <Shield className="text-eco-green" size={20} />
                    <h3 className="font-heading font-black text-xl text-shell-brown uppercase">
                      Strategic SWOT Matrix
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Strengths */}
                    <div className="bg-eco-green/5 border border-eco-green/10 rounded-2xl p-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-eco-green flex items-center justify-center font-heading font-black text-xs text-husk-beige">S</span>
                        <h4 className="font-heading font-black text-sm text-eco-green tracking-wide uppercase">Key Strengths</h4>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-shell-brown/85 font-sans font-semibold list-disc list-inside leading-relaxed">
                        <li>Made from upcycled coconut husks and lignin bio-adhesives.</li>
                        <li>Decomposes within 60-90 days under natural soil bacteria.</li>
                        <li>Hot-press molding holds high thermal & pressure levels.</li>
                        <li>Drives a localized circular micro-economy by upcycling farming waste.</li>
                      </ul>
                    </div>

                    {/* Weaknesses */}
                    <div className="bg-orange-peel/5 border border-orange-peel/10 rounded-2xl p-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-orange-peel flex items-center justify-center font-heading font-black text-xs text-husk-beige">W</span>
                        <h4 className="font-heading font-black text-sm text-orange-peel tracking-wide uppercase">Core Weaknesses</h4>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-shell-brown/85 font-sans font-semibold list-disc list-inside leading-relaxed">
                        <li>Not completely waterproof over extended fluid storage.</li>
                        <li>Highly sensitive to extreme moisture unless wax coated cleanly.</li>
                        <li>Limits early shipping usage slightly for soupy/wet meals.</li>
                      </ul>
                    </div>

                    {/* Opportunities */}
                    <div className="bg-[#417E9B]/5 border border-[#417E9B]/10 rounded-2xl p-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-[#417E9B] flex items-center justify-center font-heading font-black text-xs text-white">O</span>
                        <h4 className="font-heading font-black text-sm text-[#417E9B] tracking-wide uppercase">Future Opportunities</h4>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-shell-brown/85 font-sans font-semibold list-disc list-inside leading-relaxed">
                        <li>Indonesian government bans single-use plastics and Styrofoam by 2029.</li>
                        <li>Significant export potential across tropical ASEAN countries.</li>
                        <li>Applying wax formulation optimizes moisture ratings further.</li>
                      </ul>
                    </div>

                    {/* Threats */}
                    <div className="bg-red-400/5 border border-red-400/10 rounded-2xl p-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-red-400 flex items-center justify-center font-heading font-black text-xs text-white">T</span>
                        <h4 className="font-heading font-black text-sm text-red-500 tracking-wide uppercase">External Threats</h4>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-shell-brown/85 font-sans font-semibold list-disc list-inside leading-relaxed">
                        <li>Initial restaurant resistance to switch from dirt-cheap, toxic plastics.</li>
                        <li>Need to launch wide campaigns to educate local markets.</li>
                        <li>Agricultural raw price spikes during non-harvest seasons.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* PESTLE Tab */}
              {activeTab === 'pestle' && (
                <div className="space-y-8" id="pestleTab">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-eco-green" size={20} />
                    <h3 className="font-heading font-black text-xl text-shell-brown uppercase">
                      Regulated PESTLE Framework
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      { letter: 'P', label: 'Politics', desc: 'The Indonesian Ministry of Environment and Forestry (KLHK) has established strict targets to reduce single-use plastic waste by 30% and eliminate Styrofoam trays entirely by 2029. COCO-LIGN PACK seamlessly complies with this national agenda.' },
                      { letter: 'E', label: 'Economics', desc: 'Over 75% of APAC consumers state options that are compostable or biodegradable warrant a premium focus. Utilizing low-cost, free coconut shells keeps production unit costs under alternative imported paper options.' },
                      { letter: 'S', label: 'Social', desc: 'Social awareness about the critical biological threats of single-use microplastics serves as a stellar driver. Local communities and fast-food delivery sectors are eager to align their behaviors towards green options.' },
                      { letter: 'T', label: 'Technology', desc: 'Hot-press thermo-compression molds ensure the tray cellular walls are rigid and dense. Constant upgrades to organic carnauba and beeswax coatings serve to counter existing moisture limitations.' },
                      { letter: 'L', label: 'Legal', desc: 'COCO-LIGN conforms cleanly with regional safety standards like SNI 8218:2024 and international compliance metrics like ISO 17088. Its manufacturing aligns with modern environmental guidelines.' },
                      { letter: 'E', label: 'Environment', desc: 'Every kilogram of styrofoam replaced with COCO-LIGN offsets approximately 1.16 kg of CO2 equivalent emissions while diverting organic material from carbon-heavy landfills.' }
                    ].map((row, idx) => (
                      <div key={idx} className="flex gap-4 items-start p-4 hover:bg-husk-beige/30 rounded-xl transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-shell-brown text-husk-beige font-heading font-black text-sm flex items-center justify-center shrink-0">
                          {row.letter}
                        </div>
                        <div>
                          <h4 className="font-heading font-black text-sm text-shell-brown uppercase tracking-wider">{row.label}</h4>
                          <p className="text-xs sm:text-sm text-shell-brown/75 mt-0.5 leading-relaxed font-sans font-medium">{row.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SMART Objectives Tab */}
              {activeTab === 'smart' && (
                <div className="space-y-8" id="smartTab">
                  <div className="flex items-center gap-2">
                    <Sparkles className="text-orange-peel" size={20} />
                    <h3 className="font-heading font-black text-xl text-shell-brown uppercase">
                      S.M.A.R.T Definition Targets
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {[
                      { l: 'S', name: 'Specific', desc: 'Replace unmanaged plastics with a rigid tray produced entirely from upcycled coconut husks and plant lignin adhesives.' },
                      { l: 'M', name: 'Measurable', desc: 'Aim to replace 180 tons of styrofoam, saving 1.16kg emissions for every 1kg discarded, with transaction counts exceeding 100k.' },
                      { l: 'A', name: 'Attainable', desc: 'Achieved by leveraging simple hot-press molding machinery plus securing tropical agricultural waste reserves.' },
                      { l: 'R', name: 'Relevant', desc: 'Extremely contextual next to active single-use bans in Indonesia and Southeast Asia, pushing a localized circular framework.' },
                      { l: 'T', name: 'Time-Bound', desc: 'Rigorous 5-year pipeline: local MVP evaluation (Yr 1) up to automated regional factories and AI supply integrations (Yr 5).' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-husk-beige/40 rounded-2xl p-5 border border-shell-brown/5 space-y-2 flex flex-col justify-between">
                        <div>
                          <span className="text-3xl font-heading font-black text-eco-green block leading-none">{item.l}</span>
                          <h4 className="font-heading font-black text-xs text-shell-brown uppercase tracking-wider mt-1">{item.name}</h4>
                        </div>
                        <p className="text-xs text-shell-brown/75 leading-relaxed font-sans font-medium mt-2">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Budget Plan Tab */}
              {activeTab === 'budget' && (
                <div className="space-y-8" id="budgetTab">
                  <div className="flex items-center gap-2">
                    <DollarSign className="text-eco-green" size={20} />
                    <h3 className="font-heading font-black text-xl text-shell-brown uppercase">
                      Comprehensive Cost Breakdown (For 1,000 Units)
                    </h3>
                  </div>

                  {/* Pricing table */}
                  <div className="overflow-x-auto rounded-2xl border border-shell-brown/10">
                    <table className="w-full text-left border-collapse font-sans text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-shell-brown/5 text-shell-brown font-heading font-black border-b border-shell-brown/10">
                          <th className="p-4 uppercase">Description</th>
                          <th className="p-4 uppercase text-center">Unit Cost</th>
                          <th className="p-4 uppercase text-center">Quantity</th>
                          <th className="p-4 uppercase text-right">Total Cost (Rp)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-shell-brown/5">
                          <td className="p-4 font-bold text-shell-brown">Dried Coconut Husk (Agriculture)</td>
                          <td className="p-4 text-center text-shell-brown/70">Rp 2.000 / kg</td>
                          <td className="p-4 text-center text-shell-brown/70 font-semibold">40 kg</td>
                          <td className="p-4 text-right font-bold text-shell-brown">Rp 80.000,00</td>
                        </tr>
                        <tr className="border-b border-shell-brown/5">
                          <td className="p-4 font-bold text-shell-brown">Natural Binder Lignin</td>
                          <td className="p-4 text-center text-shell-brown/70">Rp 60.000 / kg</td>
                          <td className="p-4 text-center text-shell-brown/70 font-semibold">6 kg</td>
                          <td className="p-4 text-right font-bold text-shell-brown">Rp 360.000,00</td>
                        </tr>
                        <tr className="border-b border-shell-brown/5">
                          <td className="p-4 font-bold text-shell-brown">Dried Orange Peel (Antioxidants)</td>
                          <td className="p-4 text-center text-shell-brown/70">Rp 100.000 / kg</td>
                          <td className="p-4 text-center text-shell-brown/70 font-semibold">0.5 kg</td>
                          <td className="p-4 text-right font-bold text-shell-brown">Rp 50.000,00</td>
                        </tr>
                        <tr className="border-b border-shell-brown/5">
                          <td className="p-4 font-bold text-shell-brown">Natural Beeswax Seal</td>
                          <td className="p-4 text-center text-shell-brown/70">Rp 120.000 / kg</td>
                          <td className="p-4 text-center text-shell-brown/70 font-semibold">0.5 kg</td>
                          <td className="p-4 text-right font-bold text-shell-brown">Rp 60.000,00</td>
                        </tr>
                        <tr className="border-b border-shell-brown/5">
                          <td className="p-4 font-bold text-shell-brown">Direct Labor Costs (Production Worker)</td>
                          <td className="p-4 text-center text-shell-brown/70">Rp 100.000 / day</td>
                          <td className="p-4 text-center text-shell-brown/70 font-semibold">1 worker</td>
                          <td className="p-4 text-right font-bold text-shell-brown">Rp 100.000,00</td>
                        </tr>
                        <tr className="border-b-2 border-shell-brown/10">
                          <td className="p-4 font-bold text-shell-brown">Energy & Operations (Electricity / Oven Pressure)</td>
                          <td className="p-4 text-center text-shell-brown/70">-</td>
                          <td className="p-4 text-center text-shell-brown/70 font-semibold">-</td>
                          <td className="p-4 text-right font-bold text-shell-brown">Rp 80.000,00</td>
                        </tr>
                        {/* Total Highlight */}
                        <tr className="bg-eco-green/10 text-eco-green font-heading font-black text-sm">
                          <td className="p-4 uppercase">Total Manufacturing Cost (1,000 Pcs)</td>
                          <td className="p-4"></td>
                          <td className="p-4"></td>
                          <td className="p-4 text-right text-base text-eco-green font-extrabold">Rp 730.000,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Summary benchmark note */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    <div className="bg-eco-green/10 border-eco-green/20 border-2 rounded-2xl p-5 text-center">
                      <span className="text-xs uppercase font-mono font-bold text-eco-green block">COCO-LIGN PACK Unit cost</span>
                      <strong className="text-xl font-heading text-eco-green block mt-1">Rp 730,00</strong>
                      <span className="text-[10px] text-shell-brown/60 uppercase font-black block mt-0.5">($0.035) Optimal Target</span>
                    </div>
                    <div className="bg-shell-brown/5 border-2 border-shell-brown/10 rounded-2xl p-5 text-center">
                      <span className="text-xs uppercase font-mono font-medium text-shell-brown/65 block">Standard Plastic Packaging</span>
                      <strong className="text-xl font-heading text-shell-brown block mt-1">Rp 1.200 - Rp 2.500</strong>
                      <span className="text-[10px] text-shell-brown/50 uppercase font-semibold block mt-0.5">Prone to Waste Penalties</span>
                    </div>
                    <div className="bg-shell-brown/5 border-2 border-shell-brown/10 rounded-2xl p-5 text-center">
                      <span className="text-xs uppercase font-mono font-medium text-shell-brown/65 block">Standard Styrofoam Tray</span>
                      <strong className="text-xl font-heading text-shell-brown block mt-1">Rp 1.000 - Rp 2.000</strong>
                      <span className="text-[10px] text-shell-brown/50 uppercase font-semibold block mt-0.5">Highly toxic compound polities</span>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
