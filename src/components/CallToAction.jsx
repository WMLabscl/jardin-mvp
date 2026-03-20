import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CallToAction = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-12 bg-cream relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-[40px] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden border border-blue-400/20"
        >
          {/* Formas orgánicas de fondo para mantener el estilo del sitio */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

          {/* Contenido de Texto */}
          <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0 relative z-10">
            <div className="inline-block px-5 py-2 rounded-full bg-white text-action font-bold text-sm mb-6 shadow-sm">
              ¡Matrículas Abiertas 2026!
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream mb-4 leading-tight">
              El segundo hogar <br className="hidden md:block"/>
              que tu hijo merece
            </h2>
            <p className="text-blue-100/90 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
              Sabemos que dar el primer paso es importante. Ven a conocernos, descubre nuestros espacios seguros y enamórate de un jardín donde aprender jugando es nuestra prioridad.
            </p>
          </div>

          {/* Botón y urgencia */}
          <div className="md:w-1/3 flex flex-col items-center md:items-end relative z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              className="bg-action text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_20px_rgba(230,57,70,0.3)] hover:bg-red-700 hover:shadow-[0_15px_30px_rgba(230,57,70,0.4)] transition-all duration-300 w-full sm:w-auto text-center"
            >
              Asegura tu Cupo
            </motion.button>
            <p className="text-blue-200/80 text-sm mt-4 text-center md:text-right">
              * Cupos limitados por sala para garantizar educación personalizada.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;