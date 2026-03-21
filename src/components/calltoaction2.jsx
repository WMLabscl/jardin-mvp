import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="relative w-full overflow-hidden bg-cream py-12 md:py-20 lg:py-24">
      
      <div className="container-custom relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          
          {/* --- LADO IMAGEN (JUGANDO.PNG) --- */}
          <div className="w-full lg:w-[40%] order-2 lg:order-1 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[400px] lg:max-w-[450px]"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-yellow-300 rounded-full blur-3xl opacity-20 z-0" />
              
              <motion.img 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src="/imagenes/jugando.png" 
                alt="Niños felices" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>

          {/* --- LADO TEXTO (CONTENEDOR MÁS CHICO Y COMPACTO) --- */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2 flex items-center justify-center lg:justify-start">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              /* Reduje paddings y max-width para que sea un "cuadrado/rectángulo" más contenido */
              className="relative bg-primary rounded-[30px] md:rounded-[50px] p-8 md:p-12 lg:p-14 shadow-2xl overflow-hidden w-full max-w-[650px]"
            >
              <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left text-white">
                
                <span className="inline-block px-5 py-2 rounded-full bg-yellow-300 text-yellow-950 font-black text-[10px] md:text-xs mb-6 tracking-widest uppercase shadow-md">
                  ¡Matrículas Abiertas 2026!
                </span>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  El <span className="text-yellow-300 font-caricatura inline-block transform rotate-1 drop-shadow-md">segundo hogar</span> <br/>
                  que tu hijo merece
                </h2>

                <p className="text-blue-50 text-base md:text-lg lg:text-xl font-medium mb-10 leading-relaxed opacity-90">
                  Sabemos que dar el primer paso es importante. Ven a conocernos, descubre nuestros espacios seguros y enamórate de un jardín donde aprender jugando es nuestra prioridad.
                </p>

                <div className="flex flex-col items-center lg:items-start gap-4 w-full">
                  <motion.a 
                    href="#contacto"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative w-full sm:w-auto px-8 py-4 bg-yellow-400 text-primary rounded-full font-black text-lg md:text-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 overflow-hidden border-b-4 border-yellow-600/30"
                  >
                    <span className="relative z-10">ASEGURA TU CUPO</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                  <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-tighter">
                    * Cupos limitados por sala
                  </p>
                </div>
              </div>

              {/* Decoración interna sutil para que no sea un bloque plano */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction2;