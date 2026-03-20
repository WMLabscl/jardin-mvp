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
                ? 'bg-white/90 backdrop-blur-xl shadow-xl shadow-primary/5 max-w-4xl'
                : 'bg-white/60 backdrop-blur-lg max-w-6xl'
            }`}
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <img
                src="/imagenes/logo.png"
                alt="Logo El Castillo de los Bajitos"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <div className="leading-tight">
                <p className="hidden lg:block text-[10px] text-dark/70 font-medium">Jardin Infantil y Sala Cuna</p>
                <span className="font-serif text-xs sm:text-sm lg:text-xl font-bold text-dark">
                  El Castillo de los <span className="text-gradient">Bajitos</span>
                </span>
              </div>
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
                    className="font-medium text-dark/80 hover:text-primary transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contacto')}
              className="hidden md:block bg-[#E63946] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-base hover:bg-[#C62828] shadow-lg shadow-red-500/30 border border-red-300/30 transition-all duration-300"
            >
              Agenda tu Visita
            </motion.button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-dark">
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
