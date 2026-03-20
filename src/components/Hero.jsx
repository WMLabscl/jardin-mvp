import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-cream overflow-hidden">
      
      {/* Elementos Mágicos Flotantes (Fondo) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-10 lg:left-32 text-4xl opacity-30 select-none"
      >
        🎈
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 lg:right-40 text-5xl opacity-30 select-none"
      >
        🌟
      </motion.div>
      <motion.div 
        animate={{ rotate: [0, 360] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-1/4 text-3xl opacity-20 select-none hidden lg:block"
      >
        🎨
      </motion.div>

      <div className="container-custom relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Columna Izquierda: Textos y CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left"
        > 
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] mb-6 tracking-tight flex flex-col items-center lg:items-start">
            <span>Bienvenidos a</span>
            <span className="text-primary font-caricatura inline-block mt-2 text-6xl sm:text-7xl lg:text-8xl -rotate-2">El Castillo de </span>
            <span className="text-action font-caricatura inline-block ml-3 text-6xl sm:text-7xl lg:text-8xl rotate-2">los Bajitos</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-dark/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Un espacio seguro, afectivo y lleno de aprendizajes, donde cada niño y niña es acompañado con amor, respeto y dedicación en sus primeros años de vida.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#contacto" 
              className="w-full sm:w-auto px-8 py-4 bg-action text-white rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(230,57,70,0.3)] hover:bg-red-700 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(230,57,70,0.4)] transition-all duration-300"
            >
              Agenda tu Visita
            </a>
            <a 
              href="#enfoque" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-full font-bold text-lg shadow-sm border border-gray-100 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
            >
              Conoce más
            </a>
          </div>
        </motion.div>

        {/* Columna Derecha: Foto con forma orgánica (Blob) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full max-w-lg mx-auto relative"
        >
          {/* Sombra/Fondo de color desfasado para darle volumen */}
          <div className="absolute inset-0 bg-primary/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transform rotate-6 scale-105 transition-transform duration-300 hover:rotate-12"></div>
          <div className="absolute inset-0 bg-action/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] transform -rotate-6 scale-105"></div>
          
          {/* Contenedor de la imagen con forma de Blob */}
          <motion.div 
            animate={{ 
              borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "30% 70% 50% 50% / 50% 30% 70% 50%", "40% 60% 70% 30% / 40% 50% 60% 50%"] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square overflow-hidden border-8 border-white shadow-2xl z-10"
          >
            <img 
              src="/imagenes/foto_hero.png" 
              alt="Niños felices en El Castillo de los Bajitos" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Tarjeta flotante de confianza */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-6 -left-6 lg:-left-12 bg-white px-6 py-4 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-20 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl">
              💛
            </div>
            <div>
              <p className="font-bold text-primary text-sm lg:text-base leading-tight">Ambiente Familiar</p>
              <p className="text-xs lg:text-sm text-dark/70 font-medium">Seguro y afectivo</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;