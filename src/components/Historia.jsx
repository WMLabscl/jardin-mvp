import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Historia = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const photoFrameVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: -3,
      transition: { duration: 0.8, ease: "backOut" } 
    },
  };

  return (
    <section 
      id="historia" 
      className="relative py-24 lg:py-32 bg-[#FEFDFB] bg-gradient-to-br from-[#FEFDFB] via-white to-[#EAF5FF] overflow-hidden border-t border-gray-100"
    >
      {/* Burbujas de color decorativas de fondo */}
      <div className="absolute top-20 -left-32 w-80 h-80 bg-primary opacity-10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-action opacity-10 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="container-custom relative z-10 grid md:grid-cols-12 items-center gap-16 px-4">
        
        {/* --- COLUMNA DE LA FOTO --- */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={photoFrameVariants}
          className="md:col-span-5 flex justify-center lg:justify-start z-20"
        >
          {/* Contenedor tipo marco polaroid / álbum */}
          <div className="relative bg-white p-5 rounded-[40px] shadow-[0_25px_70px_-15px_rgba(30,86,160,0.25)] border-4 border-dashed border-primary/20 hover:rotate-0 transition-transform duration-500 origin-center">
            
            {/* Cinta adhesiva decorativa (SVG amarillo) */}
            <div className="absolute -top-6 -left-6 w-20 h-20 text-yellow-300 opacity-90 z-20 rotate-[-15deg]">
                <svg viewBox="0 0 100 100" fill="currentColor"><path d="M10,10 L90,20 L80,90 L20,80 Z"/></svg>
            </div>
            
            {/* Foto Original del Castillo por fuera */}
            <img 
              src="/imagenes/fachada.png" /* <-- Asegúrate de que este sea el nombre exacto de tu foto */
              alt="Fachada de El Castillo de los Bajitos" 
              className="rounded-3xl w-64 h-64 md:w-80 md:h-80 object-cover object-center shadow-inner border-8 border-primary/10"
            />
          </div>
        </motion.div>

        {/* --- COLUMNA DE TEXTO --- */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="md:col-span-7 flex flex-col gap-8 text-center md:text-left z-10"
        >
          {/* Título */}
          <motion.h2 variants={textVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 leading-tight tracking-tight drop-shadow-sm">
            Nuestra <span className="text-action font-caricatura tracking-wide text-5xl md:text-6xl lg:text-7xl">Historia</span>
          </motion.h2>

          {/* Línea divisoria orgánica punteada */}
          <motion.div variants={textVariants} className="h-1.5 bg-gradient-to-r from-primary/30 via-primary/70 to-primary/30 rounded-full max-w-sm mx-auto md:mx-0 -mt-2"></motion.div>

          {/* Párrafos Originales */}
          <motion.p variants={textVariants} className="text-lg md:text-xl text-dark/90 font-medium leading-relaxed">
            En 2021, impulsada por un profundo amor hacia la infancia y la necesidad de ofrecer un entorno educativo seguro y enriquecedor, Claudia Belmar fundó "El Castillo de los Bajitos". Nuestro jardín infantil nació con el propósito de ser un segundo hogar para los niños de San Bernardo, un lugar donde el juego, la curiosidad y la alegría son los principales motores del aprendizaje.
          </motion.p>
          
          <motion.p variants={textVariants} className="text-lg md:text-xl text-dark/90 font-medium leading-relaxed mb-4">
            Bajo la dirección de Claudia, hemos consolidado un proyecto educativo que prioriza el bienestar integral de cada niño y niña. Hoy, "El Castillo de los Bajitos" se destaca por su ambiente afectivo y acogedor, donde cada pequeño es respetado y valorado en su individualidad.
          </motion.p>

          {/* Firma Decorativa */}
          <motion.div variants={textVariants} className="mt-2 flex flex-col items-center md:items-start pl-4 border-l-4 border-yellow-300">
            <span className="text-5xl font-caricatura text-yellow-500 rotate-[-4deg] origin-bottom-left">Claudia Belmar</span>
            <span className="text-sm font-bold text-dark/70 uppercase tracking-widest ml-14 -mt-1">Fundadora & Directora</span>
          </motion.div>

        </motion.div>
      </div>

      {/* --- DIVISOR INFERIOR ORGÁNICO --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H0V95.8C59.71,118.08,130.83,119.24,196.33,109.1,238.82,102.51,281.3,81.1,321.39,56.44Z" fill="#F8FAFC"></path>
        </svg>
      </div>

    </section>
  );
};

export default Historia;