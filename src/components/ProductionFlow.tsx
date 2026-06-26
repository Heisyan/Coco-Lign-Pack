import { useState, useEffect, useRef, ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTION_STEPS } from '../data/content';
import { 
  Droplets, Flame, Hammer, Waves, Shuffle, Cpu, Thermometer, Layers,
  ChevronLeft, ChevronRight, RefreshCcw, Check, Sparkles, AlertTriangle, HelpCircle, Play, Info
} from 'lucide-react';

// Process Image Import
import manufacturingImg from '../assets/images/manufacturing_process_diagram_1781744748762.jpg';
import process1 from '../assets/images/process_1.png';
import process2 from '../assets/images/process_2.png';
import process3 from '../assets/images/process_3.png';
import process4 from '../assets/images/process_4.png';
import process5 from '../assets/images/process_5.png';
import process6 from '../assets/images/process_6.png';
import process7 from '../assets/images/process_7.png';
import process8 from '../assets/images/process_8.png';

const stepImages: Record<number, string> = {
  1: process1,
  2: process2,
  3: process3,
  4: process4,
  5: process5,
  6: process6,
  7: process7,
  8: process8
};

const iconMap: Record<string, ComponentType<any>> = {
  Droplets: Droplets,
  Flame: Flame,
  Hammer: Hammer,
  Waves: Waves,
  Shuffle: Shuffle,
  Cpu: Cpu,
  Thermometer: Thermometer,
  Layers: Layers
};

export default function ProductionFlow() {
  const [activeTab, setActiveTab] = useState<'all' | 'prep' | 'activation' | 'finish'>('all');

  const filteredSteps = PRODUCTION_STEPS.filter(step => {
    if (activeTab === 'all') return true;
    if (activeTab === 'prep') return step.phase === 'Preparation';
    if (activeTab === 'activation') return step.phase === 'Activation & Mixing';
    if (activeTab === 'finish') return step.phase === 'Forming & Finishing';
    return true;
  });
  const [activeLightboxImage, setActiveLightboxImage] = useState<{src: string, title: string} | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const handleScroll = () => {
    updateScrollButtons();
    if (containerRef.current) {
      const { scrollLeft, scrollWidth } = containerRef.current;
      const itemWidth = scrollWidth / filteredSteps.length;
      const index = Math.round(scrollLeft / itemWidth);
      if (index >= 0 && index < filteredSteps.length) {
        setActiveIndex(index);
      }
    }
  };

  const scrollToStep = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemWidth = container.scrollWidth / filteredSteps.length;
      container.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const scrollNext = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemWidth = container.scrollWidth / filteredSteps.length;
      const targetIndex = Math.min(activeIndex + 1, filteredSteps.length - 1);
      container.scrollTo({
        left: targetIndex * itemWidth,
        behavior: 'smooth'
      });
      setActiveIndex(targetIndex);
    }
  };

  const scrollPrev = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemWidth = container.scrollWidth / filteredSteps.length;
      const targetIndex = Math.max(activeIndex - 1, 0);
      container.scrollTo({
        left: targetIndex * itemWidth,
        behavior: 'smooth'
      });
      setActiveIndex(targetIndex);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0 });
      setActiveIndex(0);
      setCanScrollLeft(false);
      setCanScrollRight(filteredSteps.length > 1);
    }
  }, [activeTab, filteredSteps.length]);

  const getPhaseBadgeColor = (phase: string) => {
    switch (phase) {
      case 'Preparation':
        return 'bg-[#D98A44]/15 text-[#D98A44] border-[#D98A44]/20';
      case 'Activation & Mixing':
        return 'bg-eco-green/15 text-eco-green border-eco-green/20';
      case 'Forming & Finishing':
        return 'bg-shell-brown/15 text-shell-brown border-shell-brown/20';
      default:
        return 'bg-shell-brown/5 text-shell-brown/70 border-shell-brown/10';
    }
  };
  
  // Thermodynamic Simulator States
  const [temp, setTemp] = useState<number>(135);
  const [pressure, setPressure] = useState<number>(5.5);
  const [resin, setResin] = useState<number>(8);
  const [isForging, setIsForging] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [simResult, setSimResult] = useState<{
    quality: string;
    strength: string;
    absorption: string;
    compliance: string;
    description: string;
    status: 'optimal' | 'fail_cold' | 'fail_hot' | 'fail_pressure' | 'fail_resin';
  } | null>(null);


  // Calculate thermodynamic outcome
  const runSimulation = () => {
    setIsForging(true);
    setProgress(0);
    setSimResult(null);

    // Simulate progress load
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          
          // Calculate outcome
          let status: 'optimal' | 'fail_cold' | 'fail_hot' | 'fail_pressure' | 'fail_resin' = 'optimal';
          let quality = "Superior Food Grade";
          let strength = "Highly Rigid (18.4 MPa)";
          let absorption = "0.08% / 24 hrs";
          let compliance = "SNI 8218:2024 certified";
          let description = "Outstanding biological matrix compaction! Lignin bonds are perfectly polymerized within coconut cellulose walls.";

          if (temp < 100) {
            status = 'fail_cold';
            quality = "Uncured Bio-Paste";
            strength = "Collapsed / Watery (1.2 MPa)";
            absorption = "85.4% / High Spillage";
            compliance = "Non-compliant (Structural failure)";
            description = "Heat is too low. Lignin binder did not reach glass-transition temperature. Fibers remain un-cohesive.";
          } else if (temp > 165) {
            status = 'fail_hot';
            quality = "Carbonized Carbon Ash";
            strength = "Extremely Brittle (3.1 MPa)";
            absorption = "15.0% / Burned Cellular Walls";
            compliance = "Non-compliant (Toxicity threat)";
            description = "Fibers carbonized and became highly fragile under extreme thermal stress. Releases a dark burnt odor.";
          } else if (pressure < 3) {
            status = 'fail_pressure';
            quality = "Loose Fiber Plate";
            strength = "Crumbly / Fragile (5.6 MPa)";
            absorption = "12.2% / Non-Compact";
            compliance = "Weak (Incomplete structural seal)";
            description = "Under-pressured curing left hollow voids in the mold. The tray lacks density and water barrier defense.";
          } else if (resin < 5) {
            status = 'fail_resin';
            quality = "Resin-Starved Fiber Board";
            strength = "Brittle Cohesion (6.8 MPa)";
            absorption = "24.5% / High Water Wicking";
            compliance = "Weak (Lack of natural adhesive)";
            description = "Fibers are dry because there is not enough lignin binder. High porous wicking paths allow rapid moisture penetration.";
          }

          setSimResult({ quality, strength, absorption, compliance, description, status });
          setIsForging(false);
          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  const getStatusBannerColor = (status: string) => {
    switch(status) {
      case 'optimal': return 'bg-eco-green/10 border-eco-green/20 text-eco-green';
      case 'fail_cold': return 'bg-cyan-500/10 border-cyan-500/20 text-cyan-500';
      case 'fail_hot': return 'bg-red-500/10 border-red-500/20 text-red-600';
      default: return 'bg-orange-peel/10 border-orange-peel/20 text-orange-peel';
    }
  };

  return (
    <section id="production" className="py-24 bg-husk-beige/30 border-y border-shell-brown/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3A261803_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D98A44] font-mono font-extrabold block">
            Manufacturing Mechanism
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-shell-brown mt-2 leading-tight">
            How Waste Becomes Rigid Material
          </h2>
          <div className="h-1.5 w-24 bg-eco-green mx-auto mt-4 rounded-full" />
          <p className="text-sm md:text-base text-shell-brown/75 mt-4 font-sans font-medium leading-relaxed">
            Witness the precise chemical transformation converting discarded agricultural coconut shells and natural
            lignin adhesives into indestructible organic food-ware trays.
          </p>
        </div>

        {/* HIGH-FIDELITY INTERACTIVE SUBSECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* Col 1: Live Interactive Mold Thermoplastic Simulator (STUNNING GIMMICK) */}
          <div className="lg:col-span-6 bg-white border-2 border-shell-brown/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#D98A44]/15 text-[#D98A44] text-[10px] font-mono font-extrabold uppercase px-3 py-1 rounded-bl-xl border-l border-b border-[#D98A44]/10">
              Interactive Lab Panel
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Thermometer className="text-eco-green animate-bounce" size={22} style={{ animationDuration: '3s' }} />
                <h3 className="font-heading font-black text-lg text-shell-brown uppercase tracking-tight">
                  Hot-Press Curing Simulator
                </h3>
              </div>
              <p className="text-xs text-shell-brown/70 leading-relaxed font-sans font-medium mb-6">
                Adjust thermodynamic parameters below to test structural composite formation in our laboratory reactor. Squeeze fibers under extreme temperature and pressure!
              </p>

              <div className="space-y-6">
                {/* Temp Component */}
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-shell-brown mb-2">
                    <span className="flex items-center gap-1">REACTOR TEMP (°C)</span>
                    <span className={`text-sm ${temp >= 110 && temp <= 160 ? 'text-eco-green' : 'text-[#D98A44]'}`}>{temp}°C</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="180" 
                    value={temp} 
                    onChange={(e) => setTemp(parseInt(e.target.value))}
                    className="w-full accent-eco-green h-2 bg-shell-brown/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-shell-brown/50 font-mono mt-1">
                    <span>50°C (Frozen Pulp)</span>
                    <span className="font-bold text-eco-green">110°C - 160°C (Optimal)</span>
                    <span>180°C (Carbonize)</span>
                  </div>
                </div>

                {/* Pressure Component */}
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-shell-brown mb-2">
                    <span className="flex items-center gap-1">COMPRESSION PRESSURE (BAR)</span>
                    <span className={`text-sm ${pressure >= 3 && pressure <= 8 ? 'text-eco-green' : 'text-[#D98A44]'}`}>{pressure} Bar</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    step="0.5"
                    value={pressure} 
                    onChange={(e) => setPressure(parseFloat(e.target.value))}
                    className="w-full accent-eco-green h-2 bg-shell-brown/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-shell-brown/50 font-mono mt-1">
                    <span>1 Bar (Loose)</span>
                    <span className="font-bold text-eco-green font-mono">3 - 8 Bar (Optimal)</span>
                    <span>10 Bar (Excessive)</span>
                  </div>
                </div>

                {/* Resin Component */}
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-shell-brown mb-2">
                    <span className="flex items-center gap-1">LIGNIN BIO-RESIN RATIO (%)</span>
                    <span className={`text-sm ${resin >= 5 && resin <= 12 ? 'text-eco-green' : 'text-[#D98A44]'}`}>{resin}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="2" 
                    max="15" 
                    value={resin} 
                    onChange={(e) => setResin(parseInt(e.target.value))}
                    className="w-full accent-eco-green h-2 bg-shell-brown/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-shell-brown/50 font-mono mt-1">
                    <span>2% (Crumbly)</span>
                    <span className="font-bold text-eco-green">5% - 12% (Perfect)</span>
                    <span>15% (Sticky)</span>
                  </div>
                </div>
              </div>

              {/* Action Trigger Grid */}
              <div className="mt-8">
                <button
                  onClick={runSimulation}
                  disabled={isForging}
                  className="w-full bg-[#3A2618] hover:bg-[#5A7D59] text-white py-4 rounded-xl font-heading font-black uppercase text-xs sm:text-sm tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden flex items-center justify-center gap-2"
                >
                  {isForging ? (
                    <>
                      <RefreshCcw className="animate-spin" size={18} />
                      Forging Bio-Composition ({progress}%)
                    </>
                  ) : (
                    <>
                      <Play size={16} fill="white" />
                      Trigger Thermo-Compression Curing
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Results visual output screen */}
            <div className="mt-6 pt-6 border-t border-shell-brown/10 min-h-[140px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isForging && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-3 py-4 w-full"
                  >
                    <div className="w-12 h-12 rounded-full border-4 border-eco-green/20 border-t-eco-green animate-spin mx-auto" />
                    <span className="text-xs font-mono font-bold text-shell-brown/80 block uppercase">
                      Applying {pressure} Bar at {temp}°C... Polymerizing Lignin...
                    </span>
                  </motion.div>
                )}

                {!isForging && simResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`w-full p-4 rounded-2xl border ${getStatusBannerColor(simResult.status)} space-y-3`}
                  >
                    <div className="flex items-center gap-2">
                      {simResult.status === 'optimal' ? (
                        <Check className="w-5 h-5 bg-eco-green text-white rounded-full p-0.5" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-orange-peel" />
                      )}
                      <div>
                        <h4 className="font-heading font-black text-xs uppercase tracking-wider leading-none">
                          Tray State: {simResult.quality}
                        </h4>
                        <span className="text-[10px] opacity-85 font-semibold font-mono">{simResult.compliance}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs font-sans font-semibold leading-relaxed opacity-90">
                      {simResult.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] font-mono border-t border-shell-brown/10">
                      <div>
                        <span className="block text-shell-brown/60">Tensile Strength</span>
                        <strong className="font-black text-shell-brown">{simResult.strength}</strong>
                      </div>
                      <div>
                        <span className="block text-shell-brown/60">Water Absorption</span>
                        <strong className="font-black text-shell-brown">{simResult.absorption}</strong>
                      </div>
                    </div>
                  </motion.div>
                )}

                {!isForging && !simResult && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-shell-brown/50 py-8"
                  >
                    <Info size={28} className="mx-auto text-shell-brown/30 mb-2" />
                    <span className="text-xs font-sans font-semibold">Click the Forging button above to manufacture your prototype tray.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Col 2: Newly Generated Manufacturing Process Schematic Diagram */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-white border-2 border-shell-brown/10 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-black text-[#D98A44] uppercase tracking-wide">Infographic Schematic</span>
                <h3 className="font-heading font-black text-xl text-shell-brown mt-1 uppercase">
                  Biocomposite Polymerization
                </h3>
                <p className="text-xs text-shell-brown/75 font-sans font-medium leading-relaxed mt-2 mb-4">
                  Witness how mechanical thermo-compression bonds agricultural waste. Discarded coconut shell fibers acts as the high-tensile skeleton, wrapped securely around activated lignin matrix.
                </p>
              </div>

              {/* High production process illustration */}
              <div className="rounded-2xl overflow-hidden border border-shell-brown/10 shadow-inner flex-1 max-h-[240px] relative group">
                <img 
                  src={manufacturingImg} 
                  alt="COCO-LIGN Manufacturing Process Schematic" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-shell-brown/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-white uppercase tracking-wider">
                    High-Tech Sustainable Mold Line
                  </span>
                </div>
              </div>

              {/* Extra technical labels */}
              <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] font-sans font-bold text-shell-brown/75 bg-husk-beige/30 p-3 rounded-xl border border-shell-brown/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-eco-green" />
                  <span>Carnauba Coating</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-peel" />
                  <span>Antioxidant Orange</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brown-600" />
                  <span>Zero Heavy Metals</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  <span>Lignin Matrix</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* INTERACTIVE STEP GRID SECTION */}
        <div className="bg-white border border-shell-brown/10 rounded-[32px] p-6 sm:p-10 shadow-xl mb-12">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-shell-brown/10">
            <div>
              <h3 className="font-heading font-black text-xl text-shell-brown uppercase tracking-tight">
                8-Step Prototyping Lifecycle
              </h3>
              <p className="text-xs sm:text-sm text-shell-brown/70 font-sans font-medium mt-1">
                Explore chronological progress of materials from raw agricultural soil to the user's hand.
              </p>
            </div>

            {/* Step Phase Tabs */}
            <div className="flex flex-wrap gap-1.5 mt-4 md:mt-0 bg-husk-beige/50 p-1 rounded-xl border border-shell-brown/5">
              {[
                { id: 'all', label: 'All Steps' },
                { id: 'prep', label: 'Preparation' },
                { id: 'activation', label: 'Activation' },
                { id: 'finish', label: 'Molding' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-heading font-black tracking-wider uppercase transition-all ${
                    activeTab === tab.id
                      ? 'bg-eco-green text-husk-beige shadow-sm'
                      : 'text-shell-brown/75 hover:bg-white/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {/* Carousel Slider */}
          <div className="relative px-2">
            <div 
              ref={containerRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <AnimatePresence mode="popLayout">
                {filteredSteps.map((step, index) => {
                  const IconComp = iconMap[step.iconName] || Cpu;
                  
                  // Detail explanation injection to make it extremely detailed
                  const extendedExpl: Record<number, { detailed_process: string, critical_temp: string, safety_compliance: string }> = {
                    1: {
                      detailed_process: "Manually sourced coconut shells from tropical East Java plantations are broken down to segregate high-fibrous meat. Debris are washed 3 times to filter trace salts, organic sand, and eliminate mold spores.",
                      critical_temp: "Neutral / Peak fluid circulation (25°C)",
                      safety_compliance: "No toxic solvents or industrial bleach allowed."
                    },
                    2: {
                      detailed_process: "Fibrous husks are organized neatly into highly uniform laboratory clean ovens. Constant dry warm currents remove cell water down to less than 4%, creating stable bone-dry composite matrix building materials.",
                      critical_temp: "70°C for 180 continuous minutes",
                      safety_compliance: "Curbs microbial germination prior to milling."
                    },
                    3: {
                      detailed_process: "Milled through high-torque double-shaft blade machinery. Sieve selectors guarantee particle sizing falls safely between 0.5mm and 1.5mm length parameters to optimize interlocking fiber density.",
                      critical_temp: "Ambient / Dry milling",
                      safety_compliance: "Continuous air exhaust prevents dust inhalation risks."
                    },
                    4: {
                      detailed_process: "Premium grade organic wood lignin is hydrolyzed. Alkaline adjustments decouple molecule lattices, prepping lignin chains to cross-link with coconut shell cellulose during thermo-compression.",
                      critical_temp: "90°C for optimal chemical activation",
                      safety_compliance: "Biodegradable, completely formaldehyde-free."
                    },
                    5: {
                      detailed_process: "Coconut fiber dust is mixed with activated liquid lignin matrix inside high-speed mixers. Dry orange peel powder is added dynamically, providing anti-bacterial protection and fresh therapeutic scents.",
                      critical_temp: "Rotational mixing speed: 350 RPM",
                      safety_compliance: "Ensures uniform food grade material distribution."
                    },
                    6: {
                      detailed_process: "The dense organic paste is transferred to custom engineered steel molding platens. Huge thermodynamic heat press plungers exert tremendous compression forces to fuse fibers.",
                      critical_temp: "135°C under high-force 5.5 Bar pressure",
                      safety_compliance: "Achieves durable, non-leaching water structural walls."
                    },
                    7: {
                      detailed_process: "Platens open to reveal rigid brown packaging. Trays are extracted using automated handles and stabilized inside temperature-controlled dry cabins to prevent early micro-warp.",
                      critical_temp: "25°C monitored relative humidity",
                      safety_compliance: "Fixates standard structural limits statically."
                    },
                    8: {
                      detailed_process: "Tray outer coatings are sprayed with natural carnauba beeswax to seal molecular structures cleanly. Ensures trays repel hot oily soups and fatty acids for over 8 continuous hours.",
                      critical_temp: "Superfine mist dispersion (45°C melted wax)",
                      safety_compliance: "100% Edible class certification, FDA conforming."
                    }
                  };

                  const detail = extendedExpl[step.stepNumber] || { 
                    detailed_process: step.description, 
                    critical_temp: "Standard Range", 
                    safety_compliance: "Eco-Conformity" 
                  };

                  return (
                    <div 
                      key={step.stepNumber}
                      className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                    >
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-husk-beige/10 border-2 border-shell-brown/10 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-eco-green/35 transition-all duration-300 flex flex-col justify-between group h-full"
                      >
                        {/* Top Image area */}
                        <div className="h-52 w-full overflow-hidden relative bg-shell-brown/5">
                          {/* Step Indicator Badge */}
                          <div className="absolute top-3 left-3 bg-[#3A2618] text-husk-beige px-3 py-1 rounded-full text-[10px] font-mono font-black z-10 shadow-md flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-peel animate-ping" />
                            STEP 0{step.stepNumber}
                          </div>

                          {/* Phase Badge */}
                          <div className={`absolute top-3 right-3 border px-3 py-1 rounded-full text-[9px] font-heading font-black uppercase z-10 shadow-sm ${getPhaseBadgeColor(step.phase)}`}>
                            {step.phase}
                          </div>

                          {stepImages[step.stepNumber] ? (
                            <div 
                              className="w-full h-full cursor-zoom-in relative"
                              onClick={() => setActiveLightboxImage({ src: stepImages[step.stepNumber], title: step.title })}
                            >
                              <img 
                                src={stepImages[step.stepNumber]} 
                                alt={step.title} 
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                                <span className="bg-[#3A2618]/85 text-husk-beige text-[10px] font-mono font-extrabold uppercase px-2.5 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Buka Gambar
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                              <Sparkles className="text-shell-brown/20 mb-2 animate-pulse" size={24} />
                              <span className="text-xs font-heading font-black text-shell-brown/40 uppercase">Gambar Menyusul</span>
                            </div>
                          )}

                          {/* Subtle dark gradient overlay at bottom of image */}
                          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                        </div>

                        {/* Content Area */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2.5">
                            <div className="flex items-center gap-2.5 border-b border-shell-brown/10 pb-3">
                              <div className="w-9 h-9 rounded-lg bg-shell-brown/5 border border-shell-brown/10 text-shell-brown flex items-center justify-center shadow-sm shrink-0">
                                <IconComp size={18} className="stroke-[2.5]" />
                              </div>
                              <h4 className="font-heading font-black text-sm text-shell-brown uppercase tracking-tight leading-tight">
                                {step.title}
                              </h4>
                            </div>

                            <p className="text-xs text-shell-brown/85 font-sans font-medium leading-relaxed min-h-[64px]">
                              {detail.detailed_process}
                            </p>
                          </div>

                          {/* Tech Metrics Grid Footer */}
                          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-shell-brown/10 text-[10px] font-sans font-bold text-shell-brown">
                            <div className="bg-white border border-shell-brown/5 rounded-xl p-2.5 shadow-sm flex flex-col justify-between">
                              <span className="text-[8px] text-shell-brown/50 uppercase font-mono block">Metric Target</span>
                              <span className="text-eco-green mt-0.5 block leading-tight">{detail.critical_temp}</span>
                            </div>
                            <div className="bg-white border border-shell-brown/5 rounded-xl p-2.5 shadow-sm flex flex-col justify-between">
                              <span className="text-[8px] text-shell-brown/50 uppercase font-mono block">Compliance</span>
                              <span className="text-orange-peel mt-0.5 block leading-tight">{detail.safety_compliance}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            {canScrollLeft && (
              <button
                onClick={scrollPrev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-shell-brown/10 text-shell-brown hover:text-eco-green hover:bg-white flex items-center justify-center shadow-md transition-all z-10 hover:scale-105 active:scale-95 animate-in fade-in zoom-in-75 duration-200"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} className="stroke-[2.5]" />
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={scrollNext}
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-shell-brown/10 text-shell-brown hover:text-eco-green hover:bg-white flex items-center justify-center shadow-md transition-all z-10 hover:scale-105 active:scale-95 animate-in fade-in zoom-in-75 duration-200"
                aria-label="Next Slide"
              >
                <ChevronRight size={20} className="stroke-[2.5]" />
              </button>
            )}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {filteredSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToStep(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-5 bg-eco-green'
                    : 'w-1.5 bg-shell-brown/20 hover:bg-shell-brown/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeLightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightboxImage(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video w-full bg-black">
                  <img
                    src={activeLightboxImage.src}
                    alt={activeLightboxImage.title}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setActiveLightboxImage(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors shadow-md text-lg font-bold"
                  >
                    ×
                  </button>
                </div>
                <div className="p-5 bg-white border-t border-shell-brown/10 flex items-center justify-between">
                  <h4 className="font-heading font-black text-[#3A2618] uppercase tracking-tight">
                    {activeLightboxImage.title}
                  </h4>
                  <span className="text-xs font-mono font-bold text-shell-brown/60 uppercase">
                    Klik di luar untuk menutup
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
