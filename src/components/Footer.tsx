import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, Award, BookOpen, ExternalLink, Globe, Shield, 
  ChevronDown, ChevronUp, Mail, Network
} from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Footer() {
  const [showRefs, setShowRefs] = useState(false);

  // References list directly from PDF literature citation Page 10
  const references = [
    { author: "Badan Riset dan Inovasi Nasional (BRIN). (2025)", title: "Penelitian dampak sampah plastik Indonesia terhadap polusi laut lintas negara.", url: "https://www.brin.go.id" },
    { author: "Condor Ferries. (2025)", title: "Global plastic waste statistics and ocean pollution.", url: "https://www.condorferries.co.uk/plastic-in-the-ocean-statistics" },
    { author: "Kementerian Lingkungan Hidup dan Kehutanan (KLHK). (2023)", title: "Laporan Pengelolaan Sampah Indonesia 2022 dan Kebijakan Pengurangan Sampah Plastik.", url: "https://www.kemenlh.go.id" },
    { author: "Mongabay.co.id. (2025)", title: "Plastic pollution in Indonesia and global impact.", url: "https://mongabay.co.id/2025/09/26/plastic-polusi-dunia-indonesia" },
    { author: "Organisation for Economic Co-operation and Development (OECD). (2024)", title: "Policy scenarios for eliminating plastic pollution by 2040.", url: "https://www.oecd.org" },
    { author: "Pew Charitable Trusts & Imperial College London. (2025)", title: "Breaking the Plastic Wave: A comprehensive study on global plastic waste.", url: "https://www.pewtrusts.org/en/research-and-analysis" },
    { author: "Rayda, N. (2023)", title: "Indonesia akan larang penggunaan plastik sekali pakai pada 2029.", url: "https://www.channelnewsasia.com" },
    { author: "United Nations Environment Programme (UNEP). (2025)", title: "Plastic pollution: A growing global challenge.", url: "https://www.unep.org/plastic-pollution" },
    { author: "Visual Capitalist. (2025)", title: "Where the world’s ocean plastic waste comes from.", url: "https://www.visualcapitalist.com" },
    { author: "Widodo, A. (2024)", title: "Sampah plastik Indonesia sudah mencapai Afrika!.", url: "https://inibaru.id" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-shell-brown text-husk-beige/80 py-16 relative overflow-hidden border-t border-husk-beige/15">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          
          {/* Brand/Conference Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={scrollToTop}>
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 p-0.5 flex items-center justify-center shadow-inner">
                <img src={logo} alt="Coco-Lign Pack Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-extrabold text-lg text-white tracking-tight uppercase">
                COCO-LIGN <span className="text-eco-green">PACK</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-husk-beige/70 leading-relaxed max-w-md font-sans font-medium">
              Rigid biodegradable packaging upcycled from discarded agricultural residues. Highly thermodynamic, 
              safe for direct hot contact, and completely compostable in 60-90 days in local environments.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-white font-mono uppercase font-extrabold">
                <Award size={12} className="text-orange-peel" /> IYC Presenter 2026
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-white font-mono uppercase font-extrabold">
                <Globe size={12} className="text-eco-green" /> DOBBU International
              </span>
            </div>
          </div>

          {/* Sinks and SDGs Badges Col */}
          <div className="space-y-4">
            <h4 className="font-heading font-black text-sm text-white uppercase tracking-wider">
              Goal Alignments
            </h4>
            <div className="space-y-3">
              {[
                { n: "SDG 12", label: "Responsible Sourcing", desc: "Circular bio-waste upcycling." },
                { n: "SDG 13", label: "Climate Safeguards", desc: "1.16kg emissions offset per kg." },
                { n: "SDG 14", label: "Ocean Life Protection", desc: "No microplastics entering rivers." }
              ].map((sdg, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <span className="w-12 text-[10px] font-mono font-black border border-orange-peel/40 bg-orange-peel/10 text-orange-peel px-1.5 py-0.5 rounded text-center shrink-0">
                    {sdg.n}
                  </span>
                  <div>
                    <span className="text-xs font-heading font-bold text-white block leading-none">{sdg.label}</span>
                    <span className="text-[10px] text-husk-beige/55 font-sans block mt-0.5">{sdg.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Action links */}
          <div className="space-y-4">
            <h4 className="font-heading font-black text-sm text-white uppercase tracking-wider">
              About Project
            </h4>
            <ul className="space-y-2 text-xs font-sans font-semibold">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white hover:underline transition-all">
                  Chemistry Formulas
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('production')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white hover:underline transition-all">
                  Manufacturing Blueprint
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white hover:underline transition-all">
                  Benchmarking Matrices
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white hover:underline transition-all">
                  SWOT & Budget Breakdown
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* References Expanding Drawer */}
        <div className="mt-12 pt-8 border-t border-husk-beige/10">
          <button
            onClick={() => setShowRefs(!showRefs)}
            className="flex items-center gap-2 text-xs font-heading font-black text-white hover:text-eco-green transition-colors uppercase tracking-wider"
          >
            <BookOpen size={14} />
            {showRefs ? "Hide Academic Literature References" : "Show Academic Literature References"}
            {showRefs ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <AnimatePresence>
            {showRefs && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-6 bg-white/5 border border-white/15 rounded-2xl p-6 space-y-4"
              >
                <h5 className="font-heading font-black text-xs text-white uppercase tracking-wider mb-2">
                  Cited Academic Papers:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {references.map((ref, rIdx) => (
                    <div key={rIdx} className="p-3.5 bg-white/5 rounded-xl border border-white/5 space-y-1 hover:bg-white/10 transition-colors">
                      <span className="text-[10px] font-mono text-orange-peel font-black block">
                        {ref.author}
                      </span>
                      <p className="text-xs font-semibold font-sans text-husk-beige leading-snug">
                        {ref.title}
                      </p>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] text-eco-green hover:underline font-extrabold uppercase mt-1 leading-none"
                      >
                        Source Library <ExternalLink size={10} />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Copyright strip bottom */}
        <div className="mt-10 pt-6 border-t border-husk-beige/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-[10px] sm:text-xs font-mono text-husk-beige/40 font-bold">
          <span>
            © 2026 COCO-LIGN PACK. Sourced directly from Brawijaya & Primakara Student Paper. All Rights Reserved.
          </span>
          <span className="flex items-center gap-1">
            <Mail size={12} className="text-orange-peel" /> mightysyan@gmail.com
          </span>
        </div>

      </div>
    </footer>
  );
}
