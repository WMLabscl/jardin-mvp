import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GaleriaExperiencias = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="experiencias" className="py-20 lg:py-32 bg-cream relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Columna Izquierda: Texto Emocional */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white text-action font-bold text-sm mb-6 shadow-sm">
              Nuestra Comunidad
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Crecer en un ambiente <br/>
              <span className="text-action">seguro y afectivo</span>
            </h2>
            
            <div className="space-y-4 text-lg text-dark/80 mb-8 leading-relaxed font-medium">
              <p>
                Sabemos que elegir un jardín infantil es una de las decisiones más importantes para una familia. Confiar el cuidado y la educación de sus hijos e hijas requiere seguridad, tranquilidad y confianza.
              </p>
              <p>
                En <strong>El Castillo de los Bajitos</strong> comprendemos esa responsabilidad y trabajamos cada día para ofrecer un ambiente cálido, lleno de afecto, donde los niños y niñas puedan descubrir el mundo, aprender jugando y desarrollar todo su potencial.
              </p>
            </div>

            {/* Frase que llega al corazón */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-action relative">
              <div className="absolute -top-4 -left-2 text-4xl">💛</div>
              <p className="text-primary font-serif font-bold text-xl italic pl-4">
                “La infancia es el lugar donde comienzan los sueños. Aquí los cuidamos, los acompañamos y los ayudamos a crecer.”
              </p>
            </div>
          </motion.div>

          {/* Columna Derecha: Bento Grid de Fotos Reales */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
              {/* Foto grande izquierda */}
              <div className="row-span-2 rounded-3xl overflow-hidden shadow-lg group relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img src="/imagenes/galeria-1.jpg" alt="Niño sonriendo" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
                  <p className="text-white font-bold text-lg">Aprendiendo con amor</p>
                </div>
              </div>
              
              {/* Foto arriba derecha */}
              <div className="rounded-3xl overflow-hidden shadow-lg group relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img src="/imagenes/galeria-2.jpg" alt="Día del mini chef" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
                  <p className="text-white font-bold">Día del Mini Chef</p>
                </div>
              </div>

              {/* Foto abajo derecha */}
              <div className="rounded-3xl overflow-hidden shadow-lg group relative">
                <div className="absolute inset-0 bg-action/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img src="/imagenes/galeria-3.jpg" alt="Juegos didácticos" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
                  <p className="text-white font-bold">Explorando el mundo</p>
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