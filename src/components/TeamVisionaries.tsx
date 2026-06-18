import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data/content';
import { School, Award, Users, Star, GraduationCap } from 'lucide-react';

import diandraImg from '../assets/images/diandra.jpeg';
import okaImg from '../assets/images/oka.jpeg';
import ajesImg from '../assets/images/ajes.jpeg';
import kadeImg from '../assets/images/kade.jpeg';
import aleImg from '../assets/images/ale.jpeg';

const memberImages: Record<string, string> = {
  "Kadek Diandra Prisha Hersaputri": diandraImg,
  "A.A. Ngurah Oka Saraswateswara Udayaditya Warmar": okaImg,
  "Made Puja Rajistha AW": ajesImg,
  "Luh Kade Ari Lestari": kadeImg,
  "Muhammad Heisyan Aleandro": aleImg
};

export default function TeamVisionaries() {
  return (
    <section id="team" className="py-20 bg-husk-beige relative">
      <div className="absolute top-20 right-10 w-96 h-96 bg-eco-green/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D98A44] font-mono font-extrabold block">
            Compiled By DOBBU Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-shell-brown mt-2 leading-tight">
            Meet the Student Innovators
          </h2>
          <div className="h-1 w-20 bg-orange-peel mx-auto mt-4 rounded-full" />
          <p className="text-sm md:text-base text-shell-brown/75 mt-4 font-sans font-medium">
            Representing a visionary cross-university collaboration between Brawijaya University and 
            Primakara University in Indonesia. Awarded presenting honors at the IYC 2026.
          </p>
        </div>

        {/* Members Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member, idx) => {
            const isLeader = member.role === 'Leader';
            
            // Generate initials
            const initials = member.name
              .split(' ')
              .filter(n => n.length > 0)
              .map(n => n[0])
              .slice(0, 2)
              .join('');

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all relative flex flex-col justify-between overflow-hidden text-center ${
                  isLeader 
                    ? 'border-eco-green/30 ring-2 ring-eco-green/5' 
                    : 'border-shell-brown/10'
                }`}
              >
                {/* Decorative leaf/star on leader */}
                {isLeader && (
                  <div className="absolute top-0 right-0 bg-eco-green text-husk-beige text-[10px] uppercase font-bold px-3 py-1 font-mono rounded-bl-xl shadow-sm flex items-center gap-1">
                    <Star size={10} fill="currentColor" /> Lead
                  </div>
                )}

                <div className="space-y-4">
                  {/* Vertical Portrait Avatar */}
                  <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-inner border border-shell-brown/10 bg-shell-brown/5 relative group">
                    {memberImages[member.name] ? (
                      <img 
                        src={memberImages[member.name]} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-heading font-black text-lg text-shell-brown/40">
                        {initials}
                      </div>
                    )}
                  </div>

                  {/* Name and titles */}
                  <div>
                    <h3 className="font-heading font-black text-sm sm:text-base text-shell-brown leading-tight tracking-tight hover:text-eco-green transition-colors min-h-[40px] flex items-center justify-center">
                      {member.name}
                    </h3>
                    
                    <span className={`inline-block text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded mt-2 font-mono ${
                      isLeader 
                        ? 'bg-eco-green/15 text-eco-green font-black' 
                        : 'bg-shell-brown/10 text-shell-brown/70'
                    }`}>
                      {member.role === 'Leader' ? 'Project Leader' : 'Researcher'}
                    </span>
                  </div>
                </div>

                {/* University affiliation at bottom */}
                <div className="mt-6 pt-4 border-t border-shell-brown/5 flex items-center justify-center gap-1 text-[11px] font-sans text-shell-brown/65 font-bold">
                  <GraduationCap size={14} className="text-orange-peel shrink-0" />
                  <span className="truncate">{member.university.split(' ')[0]} Univ.</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global credentials credit line */}
        <div className="mt-12 text-center text-xs text-shell-brown/50 font-mono flex flex-wrap justify-center gap-2 items-center">
          <span>Presented on behalf of</span>
          <span className="text-eco-green font-bold">4th International Youth Conference 2026</span>
          <span>•</span>
          <span className="text-[#D98A44] font-bold">DOBBU Team Projects</span>
        </div>

      </div>
    </section>
  );
}
