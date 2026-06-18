import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf, Award } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'What is it?' },
    { id: 'features', label: 'Features' },
    { id: 'comparison', label: 'Comparison' },
    { id: 'production', label: 'Manufacturing' },
    { id: 'impact', label: 'Impact' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'team', label: 'Team' },
    { id: 'insights', label: 'Research Insights' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection observer to update active section
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      <header
        id="appHeader"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-husk-beige/90 backdrop-blur-md shadow-sm border-b border-shell-brown/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('home')}
            id="headerLogo"
          >
            <div className="w-10 h-10 rounded-full bg-eco-green flex items-center justify-center text-husk-beige shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Leaf size={18} className="animate-pulse" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-shell-brown leading-none whitespace-nowrap block">
                COCO-LIGN<span className="text-eco-green ml-1">PACK</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-peel font-bold block mt-1">
                DOBBU TEAM
              </span>
            </div>
          </div>

          {/* Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktopNav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-350 relative hover:text-eco-green ${
                  activeSection === item.id 
                    ? 'text-eco-green font-bold bg-eco-green/5' 
                    : 'text-shell-brown/80'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-eco-green"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-shell-brown/60 uppercase border border-shell-brown/15 rounded-full px-2.5 py-1 bg-shell-brown/5">
              <Award size={12} className="text-orange-peel" /> IYC 2026
            </span>
            <button
              onClick={() => scrollToSection('insights')}
              className="bg-eco-green hover:bg-eco-green/90 text-husk-beige text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Research Paper
            </button>
          </div>

          {/* Toggle Menu - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-shell-brown hover:text-eco-green focus:outline-none"
            aria-label="Toggle Menu"
            id="mobileMenuToggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] bg-husk-beige border-b border-shell-brown/15 shadow-xl z-45 lg:hidden max-h-[calc(100vh-60px)] overflow-y-auto"
            id="mobileNavDrawer"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                    activeSection === item.id
                      ? 'bg-eco-green text-husk-beige'
                      : 'text-shell-brown/80 hover:bg-shell-brown/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-shell-brown/10 flex flex-col gap-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-shell-brown/70 py-1 px-2 uppercase bg-shell-brown/5 rounded-md self-start">
                  <Award size={14} className="text-orange-peel" /> 4th International Youth Conference 2026
                </div>
                <button
                  onClick={() => scrollToSection('insights')}
                  className="w-full text-center bg-eco-green text-husk-beige text-xs font-bold uppercase py-3 rounded-lg shadow-md"
                >
                  View Research Paper
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
