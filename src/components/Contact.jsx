import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-cream relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-100 rounded-full blur-3xl translate-y-1/4 opacity-60"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Columna Izquierda: Mensaje de la Directora / Jardín */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white text-action font-bold text-sm mb-6 shadow-sm border border-red-100">
              Hablemos
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              ¡Ven a <span className="text-action font-caricatura text-5xl lg:text-6xl tracking-wide">Conocernos!</span>
            </h2>
            
            <div className="bg-white p-8 rounded-[30px] shadow-sm border border-blue-50 mb-8 relative">
              <div className="absolute -top-5 -left-3 text-4xl transform -rotate-12">💌</div>
              <p className="text-dark/80 text-lg leading-relaxed font-medium mb-4">
                "Sabemos que al buscar un jardín infantil surgen muchas preguntas y emociones. Confiar el cuidado y la educación de sus hijos es una decisión muy importante para cada familia."
              </p>
              <p className="text-dark/80 text-lg leading-relaxed font-medium mb-4">
                "En <strong>El Castillo de los Bajitos</strong> queremos que se sientan tranquilos y seguros. Nuestro equipo educativo trabaja con vocación y cariño para acompañar a cada niño en su proceso de crecimiento."
              </p>
              <p className="text-primary font-bold text-lg">
                Las puertas de nuestro jardín siempre estarán abiertas para recibirlos.
              </p>
            </div>

            {/* Datos de contacto directos */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <p className="font-bold text-primary">Dirección</p>
                  <p className="text-dark/70 text-sm">San Bernardo, Chile</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
                  💬
                </div>
                <div>
                  <p className="font-bold text-primary">WhatsApp</p>
                  <p className="text-dark/70 text-sm">+56 9 XXXX XXXX</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario Limpio */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-white p-8 lg:p-10 rounded-[40px] shadow-[0_10px_40px_rgba(30,86,160,0.08)] border border-gray-100 relative">
              <h3 className="text-2xl font-bold text-primary mb-6">Envíanos un mensaje</h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2" htmlFor="nombre">Nombre del Apoderado</label>
                  <input 
                    type="text" 
                    id="nombre"
                    placeholder="Ej: María Pérez" 
                    className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2" htmlFor="telefono">Teléfono / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="telefono"
                      placeholder="+56 9..." 
                      className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2" htmlFor="edad">Edad del Párvulo</label>
                    <select 
                      id="edad"
                      className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-dark/70"
                    >
                      <option value="">Selecciona...</option>
                      <option value="sala-cuna">Sala Cuna (0 a 2 años)</option>
                      <option value="medio">Niveles Medios (2 a 4 años)</option>
                      <option value="transicion">Transición (4 a 5 años)</option>
                      <option value="after-school">After School</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2" htmlFor="mensaje">¿En qué podemos ayudarte?</label>
                  <textarea 
                    id="mensaje"
                    rows="4" 
                    placeholder="Me gustaría agendar una visita..." 
                    className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full py-4 bg-action text-white font-bold text-lg rounded-full shadow-[0_8px_20px_rgba(230,57,70,0.3)] hover:bg-red-700 hover:shadow-[0_15px_30px_rgba(230,57,70,0.4)] transition-all duration-300 mt-2"
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;