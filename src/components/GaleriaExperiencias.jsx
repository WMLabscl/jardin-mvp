import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GaleriaExperiencias = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    // CAMBIO RADICAL: Fondo primary (Azul) para cortar la página
    <section id="experiencias" className="py-20 lg:py-32 bg-primary relative overflow-hidden border-y-8 border-action">
      {/* Luces de fondo para que no sea un azul plano */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-action rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-cream font-bold text-sm mb-6 backdrop-blur-sm border border-white/20">
              Nuestra Comunidad
            </span>
            {/* Textos en blanco y crema */}
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Crecer en un ambiente <br/>
              <span className="text-action font-caricatura tracking-wide text-5xl lg:text-6xl">seguro y afectivo</span>
            </h2>
            
            <div className="space-y-4 text-lg text-blue-100 mb-8 leading-relaxed font-medium">
              <p>
                Sabemos que elegir un jardín infantil es una de las decisiones más importantes para una familia. Confiar el cuidado y la educación de sus hijos e hijas requiere seguridad, tranquilidad y confianza.
              </p>
              <p>
                En <strong className="text-white">El Castillo de los Bajitos</strong> comprendemos esa responsabilidad y trabajamos cada día para ofrecer un ambiente cálido, lleno de afecto, donde los niños y niñas puedan descubrir el mundo, aprender jugando y desarrollar todo su potencial.
              </p>
            </div>

            {/* Frase destacada invertida */}
            <div className="bg-white p-6 rounded-3xl shadow-2xl border-l-8 border-action relative transform rotate-1 hover:rotate-0 transition-transform">
              <div className="absolute -top-6 -left-4 text-5xl drop-shadow-md">💛</div>
              <p className="text-primary font-serif font-bold text-xl italic pl-4">
                “La infancia es el lugar donde comienzan los sueños. Aquí los cuidamos, los acompañamos y los ayudamos a crecer.”
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
              <div className="row-span-2 rounded-3xl overflow-hidden shadow-2xl group relative border-4 border-white/10">
                <div className="absolute inset-0 bg-action/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <div className="w-full h-full bg-blue-800/50 flex items-center justify-center"> {/* Placeholder si no hay foto */}
                  <img src="/imagenes/galeria-1.png" alt="Niño sonriendo" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                  <p className="text-white font-bold text-xl drop-shadow-md">Aprendiendo con amor</p>
                </div>
              </div>
              
              <div className="rounded-3xl overflow-hidden shadow-2xl group relative border-4 border-white/10">
                <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img src="/imagenes/galeria-2.png" alt="Día del mini chef" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                  <p className="text-white font-bold drop-shadow-md">Día del Mini Chef</p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-2xl group relative border-4 border-white/10">
                <div className="absolute inset-0 bg-action/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img src="/imagenes/galeria-3.png" alt="Juegos didácticos" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                  <p className="text-white font-bold drop-shadow-md">Explorando el mundo</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GaleriaExperiencias;