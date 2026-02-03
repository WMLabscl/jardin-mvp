import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2 md:py-3' : 'py-4 md:py-6'
        }`}
      >
        <nav className="container-custom">
          <div
            className={`mx-auto flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-xl shadow-forest/5 max-w-4xl'
                : 'bg-white/60 backdrop-blur-lg max-w-6xl'
            }`}
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-forest to-green-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">K</span>
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                Kinder<span className="text-gradient">Valley</span>
              </span>
            </motion.div>

            {/* Navigation Links - Desktop */}
            <ul className="hidden md:flex items-center space-x-8">
              {['Inicio', 'Servicios', 'Equipo', 'Contacto'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="font-medium text-charcoal/80 hover:text-forest transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contacto')}
              className="hidden md:block bg-gradient-to-r from-forest to-green-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-base hover:shadow-xl hover:shadow-forest/20 transition-all duration-300"
            >
              Agenda tu Visita
            </motion.button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-charcoal">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Noise Overlay */}
      <div className="noise-overlay"></div>
    </>
  );
};

export default Navbar;
