import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-20 pb-16 lg:pt-36 lg:pb-24 bg-[#F8FAFC] overflow-hidden flex flex-col items-center justify-start min-h-[90vh]">
      
      {/* --- FONDO ANIMADO: Cielos y Nubes Esponjosas --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 via-white to-white"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] max-w-[900px] lg:max-w-[1100px] blur-[1.5px]"
        >
          <img 
            src="/imagenes/castillogrande.png" 
            alt="Fondo Castillo Ilustración" 
            className="w-full h-auto object-contain opacity-40 "
          />
        </motion.div>
        {/* Nube Flotante Izquierda (Original) */}
        <motion.div 
          animate={{ x: [-10, 15, -10], y: [0, -8, 0], scale: [1, 1.02, 1] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-20 lg:left-0 text-blue-200/50 w-64 lg:w-96 opacity-60"
        >
          <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M400,240a104,104,0,0,0-202.4-28.7A80,80,0,0,0,64,272a80,80,0,0,0,80,80H400a80,80,0,0,0,0-160Z"/></svg>
        </motion.div>

        {/* Nube Mediana Centro-Arriba (Original) */}
        <motion.div 
          animate={{ x: [20, -15, 20], y: [0, 5, 0] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-5 right-1/4 text-blue-200/40 w-48 lg:w-64 opacity-50 transform -scale-x-100"
        >
          <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M400,240a104,104,0,0,0-202.4-28.7A80,80,0,0,0,64,272a80,80,0,0,0,80,80H400a80,80,0,0,0,0-160Z"/></svg>
        </motion.div>

        {/* Nube Flotante Derecha (Original) */}
        <motion.div 
          animate={{ x: [0, -25, 0], y: [0, 10, 0] }} 
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-32 -right-24 lg:right-10 text-blue-200/50 w-72 lg:w-[400px] opacity-70"
        >
          <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M421.2,217.4C414,142.2,348.6,84.5,270.9,84.5c-59.5,0-110.8,33.5-136.9,82.4c-6.8-1.5-13.8-2.3-21.1-2.3C62.4,164.6,13.5,213.5,13.5,264s48.9,99.4,99.4,99.4h296.8c50.5,0,91.4-40.9,91.4-91.4C501.1,228.6,466.1,218.6,421.2,217.4z"/></svg>
        </motion.div>

        {/* Nube Pequeña Inferior (Original) */}
        <motion.div 
          animate={{ x: [-15, 10, -15] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute bottom-20 left-20 text-blue-200/30 w-32 hidden md:block"
        >
          <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M400,240a104,104,0,0,0-202.4-28.7A80,80,0,0,0,64,272a80,80,0,0,0,80,80H400a80,80,0,0,0,0-160Z"/></svg>
        </motion.div>

        {/* --- NUEVAS NUBES RÁPIDAS CRUZANDO --- */}
        {/* Nueva Nube Rápida 1 (Capa superior, cruza de izq a der) */}
        <motion.div 
          initial={{ x: '-15vw' }}
          animate={{ x: '110vw' }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 text-white w-40 opacity-40 z-10"
        >
          <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M400,240a104,104,0,0,0-202.4-28.7A80,80,0,0,0,64,272a80,80,0,0,0,80,80H400a80,80,0,0,0,0-160Z"/></svg>
        </motion.div>

        {/* Nueva Nube Rápida 2 (Más pequeña, cruza de der a izq) */}
        <motion.div 
          initial={{ x: '110vw' }}
          animate={{ x: '-15vw' }} 
          transition={{ duration: 35, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute top-48 text-blue-200/40 w-32 opacity-50 z-10 transform -scale-x-100"
        >
          <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M400,240a104,104,0,0,0-202.4-28.7A80,80,0,0,0,64,272a80,80,0,0,0,80,80H400a80,80,0,0,0,0-160Z"/></svg>
        </motion.div>
      </div>

      {/* --- CONTENIDO CENTRALIZADO Y COMPACTO --- */}
      <div className="container-custom relative z-10 flex flex-col items-center text-center px-4 w-full pt-10 lg:pt-0">
        
        {/* Etiqueta */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-action font-bold text-xs sm:text-sm mb-6 shadow-sm border border-red-100 uppercase tracking-widest"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
          Matrículas 2026 Abiertas
        </motion.div>

        {/* 1. Logo Soberbio y Centrado */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring", bounce: 0.5 }}
          className="mb-8"
        >
          <img 
            src="/imagenes/logocastillo.webp" 
            alt="Logo El Castillo de los Bajitos" 
            className="w-44 sm:w-56 lg:w-80 drop-shadow-xl"
          />
        </motion.div>

        {/* 2. EL BLOQUE DE TEXTO: ORDENADO Y HERMOSO */}
        <div className="flex flex-col items-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-[1.1] mb-2 tracking-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
          >
            <span className="shrink-0">Bienvenidos a</span>
            <span className="text-primary font-caricatura shrink-0 mt-1 lg:mt-0 text-5xl sm:text-6xl lg:text-7xl -rotate-2">El Castillo de </span>
            <span className="text-action font-caricatura shrink-0 text-5xl sm:text-6xl lg:text-7xl rotate-2">los Bajitos</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-dark/80 mb-8 max-w-2xl leading-relaxed font-medium mx-auto"
          >
            Un espacio seguro, afectivo y lleno de aprendizajes, donde cada niño y niña es acompañado con amor, respeto y dedicación en sus primeros años de vida.
          </motion.p>
        </div>

        {/* 3. LOS CTAS CENTRALIZADOS Y ORDENADOS */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          /* --- SEPARACIÓN AUMENTADA AQUÍ (mt-12) --- */
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-12"
        >
          <a 
            href="#contacto" 
            className="w-full sm:w-auto px-10 py-4 bg-action text-white rounded-full font-bold text-lg shadow-[0_8px_25px_rgba(230,57,70,0.4)] hover:bg-red-700 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(230,57,70,0.5)] transition-all duration-300"
          >
            Agenda tu Visita
          </a>
          <a 
            href="#enfoque" 
            className="w-full sm:w-auto px-10 py-4 bg-white text-primary rounded-full font-bold text-lg shadow-md border border-gray-100 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
          >
            Conoce más
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;