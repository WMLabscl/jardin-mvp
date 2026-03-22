import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-12 lg:py-12 bg-cream relative px-4 z-20">
      <div className="container-custom mx-auto max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="relative bg-primary rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-[0_20px_50px_rgba(30,86,160,0.3)] border-4 border-white"
        >
          {/* --- FOTO Y CAPA DE COLOR --- */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/imagenes/jugando.png" 
              alt="Fondo jardín" 
              className="w-full h-full object-cover " 
            />
            {/* Overlay azul (85% opacidad) para asegurar que el texto se lea perfecto */}
            <div className="absolute inset-0 bg-primary/85"></div>
          </div>

          {/* Manchas de luz orgánicas de fondo */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-action opacity-70 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400 opacity-50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none z-0"></div>

          {/* Elementos Vectoriales Flotantes */}
          {/* Estrella superior derecha */}
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-20 text-white opacity-20 hidden md:block pointer-events-none z-10">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/></svg>
          </motion.div>
          
          {/* Estrella derecha central */}
          <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-1/2 right-12 text-white hidden lg:block pointer-events-none z-10">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/></svg>
          </motion.div>

          {/* Contenido Real (z-20 para que quede por encima de todo) */}
          <div className="relative z-20 px-8 py-16 md:px-16 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            
            <div className="lg:max-w-2xl">
              <motion.div 
                initial={{ rotate: -3 }}
                animate={{ rotate: [-3, 0, -3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-300 text-yellow-900 font-bold text-sm mb-6 shadow-md uppercase tracking-widest border-2 border-yellow-400"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ¡Matrículas Abiertas 2026!
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                El <span className="text-yellow-300 font-caricatura tracking-wide text-5xl md:text-6xl lg:text-7xl drop-shadow-md">segundo hogar</span> <br/>que tu hijo merece
              </h2>
              
              <p className="text-blue-50 text-lg md:text-xl font-medium mb-0 max-w-xl mx-auto lg:mx-0">
                Sabemos que dar el primer paso es importante. Ven a conocernos, descubre nuestros espacios seguros y enamórate de un jardín donde aprender jugando es nuestra prioridad.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center">
              <motion.a 
                href="#contacto"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-action text-white rounded-full font-bold text-xl lg:text-2xl shadow-[0_10px_30px_rgba(230,57,70,0.6)] hover:bg-red-700 transition-all duration-300 border-2 border-white/20 flex items-center gap-3 group"
              >
                <span>Asegura tu Cupo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <p className="text-white/70 text-xs md:text-sm mt-5 font-medium max-w-[250px] leading-tight text-center">
                * Cupos limitados por sala para garantizar educación personalizada.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;