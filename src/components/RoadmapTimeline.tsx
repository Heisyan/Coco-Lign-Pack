import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ROADMAP_YEARS } from '../data/content';
import { Award, Target, BookOpen, Layers, Milestone, Calendar } from 'lucide-react';

export default function RoadmapTimeline() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const activeYearData = ROADMAP_YEARS.find(y => y.year === selectedYear) || ROADMAP_YEARS[0];

  return (
    <section id="roadmap" className="py-20 bg-husk-beige/30 border-y border-shell-brown/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-peel/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#D98A44] font-mono font-extrabold block">
            Forward Projections
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-shell-brown mt-2 leading-tight">
            Our Multi-Year Strategic Roadmap
          </h2>
          <div className="h-1 w-20 bg-eco-green mx-auto mt-4 rounded-full" />
          <p className="text-sm md:text-base text-shell-brown/75 mt-4 font-sans font-medium">
            Discover our scheduled timeline from research and testing in 2026 to automated scaling and 
            global replication across the ASEAN block by 2031.
          </p>
        </div>

        {/* Dynamic Year selector buttons timeline rail */}
        <div className="relative max-w-4xl mx-auto mb-10 pb-4">
          {/* Horizontal dotted line */}
          <div className="absolute top-6 left-6 right-6 h-0.5 border-t-2 border-dashed border-shell-brown/15 -z-10" />

          {/* Connected Buttons list */}
          <div className="flex justify-between items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {ROADMAP_YEARS.map((col) => {
              const active = col.year === selectedYear;

              return (
                <button
                  key={col.year}
                  onClick={() => setSelectedYear(col.year)}
                  className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none shrink-0"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-black border-2 transition-all duration-300 ${
                    active 
                      ? 'bg-eco-green text-husk-beige border-eco-green scale-110 shadow-lg ring-4 ring-eco-green/10'
                      : 'bg-white text-shell-brown/50 border-shell-brown/15 shadow-sm group-hover:border-shell-brown/60 group-hover:text-shell-brown'
                  }`}>
                    {col.year}
                  </div>
                  <span className={`text-[10px] font-heading font-extrabold tracking-wider uppercase transition-colors uppercase ${
                    active ? 'text-eco-green' : 'text-shell-brown/60'
                  }`}>
                    {col.topic.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlight Focus Container */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-white border border-shell-brown/10 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-peel/5 rounded-full -mr-12 -mt-12" />

              {/* Year large text left */}
              <div className="md:col-span-4 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-shell-brown/10 pb-6 md:pb-0 md:pr-8 shrink-0">
                <span className="text-5xl sm:text-6xl font-heading font-black text-eco-green block leading-none">
                  {activeYearData.year}
                </span>
                <span className="text-xs font-mono text-orange-peel uppercase tracking-widest font-black block">
                  Interactive Node
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] bg-shell-brown/5 text-shell-brown border border-shell-brown/10 rounded-full px-2.5 py-1 font-bold">
                  <Calendar size={12} /> Target Stage
                </span>
              </div>

              {/* Description right */}
              <div className="md:col-span-8 space-y-6">
                <div>
                  <h3 className="font-heading font-black text-xl text-shell-brown tracking-tight">
                    {activeYearData.topic}
                  </h3>
                  <div className="h-0.5 w-12 bg-orange-peel mt-2 rounded-full" />
                </div>

                <div className="space-y-4">
                  {/* Activity Details Box */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-husk-beige flex items-center justify-center text-[#3A2618] shrink-0">
                      <BookOpen size={16} />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-xs text-shell-brown uppercase tracking-wider">
                        Focus Activity
                      </h4>
                      <p className="text-xs sm:text-sm text-shell-brown/75 mt-1 leading-relaxed font-sans font-semibold">
                        {activeYearData.activity}
                      </p>
                    </div>
                  </div>

                  {/* Output Details Box */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-eco-green/10 flex items-center justify-center text-eco-green shrink-0">
                      <Target size={16} />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-xs text-eco-green uppercase tracking-wider">
                        Anticipated Output Metrics
                      </h4>
                      <p className="text-xs sm:text-sm text-shell-brown/75 mt-1 leading-relaxed font-sans font-semibold">
                        {activeYearData.output}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
