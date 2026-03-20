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
            
            {/* Carta Emocional con el Logo Integrado */}
            <div className="bg-white p-8 rounded-[30px] shadow-sm border border-blue-50 mb-8 relative mt-10">
              {/* Logo flotante en la esquina superior izquierda */}
              <div className="absolute -top-10 -left-4 md:-left-8 w-24 h-24 bg-white rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border-4 border-cream z-20">
                <img 
                  src="/imagenes/logo.png" 
                  alt="Logo El Castillo de los Bajitos" 
                  className="w-16 h-16 object-contain"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Logo' }} 
                />
              </div>

              <p className="text-dark/80 text-lg leading-relaxed font-medium mb-4 mt-6">
                "Sabemos que al buscar un jardín infantil surgen muchas preguntas y emociones. Confiar el cuidado y la educación de sus hijos es una decisión muy importante para cada familia."
              </p>
              <p className="text-dark/80 text-lg leading-relaxed font-medium mb-4">
                "En <strong>El Castillo de los Bajitos</strong> queremos que se sientan tranquilos y seguros. Nuestro equipo educativo trabaja con vocación y cariño para acompañar a cada niño."
              </p>
              <p className="text-primary font-bold text-lg">
                Las puertas de nuestro jardín siempre estarán abiertas para recibirlos.
              </p>
            </div>

            {/* Datos de contacto directos */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-primary">Dirección</p>
                  <p className="text-dark/70 text-sm">Colón 992, San Bernardo</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
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
                    <label className="block text-sm font-bold text-primary mb-2" htmlFor="edad">Nivel de interés</label>
                    <select 
                      id="edad"
                      className="w-full px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-dark/70 appearance-none cursor-pointer"
                    >
                      <option value="">Selecciona...</option>
                      <option value="sala-cuna">Sala Cuna (0 a 2 años)</option>
                      <option value="medio">Niveles Medios (2 a 5 años)</option>
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
                  className="w-full py-4 bg-action text-white font-bold text-lg rounded-full shadow-[0_8px_20px_rgba(230,57,70,0.3)] hover:bg-red-700 hover:shadow-[0_15px_30px_rgba(230,57,70,0.4)] transition-all duration-300 mt-2 flex justify-center items-center gap-2"
                >
                  Enviar Mensaje
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>

        {/* --- MAPA DE UBICACIÓN --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 w-full h-[350px] md:h-[450px] rounded-[40px] overflow-hidden shadow-[0_15px_40px_rgba(30,86,160,0.1)] border-8 border-white relative z-10 group"
        >
          {/* Overlay sutil que desaparece al pasar el mouse para que el usuario pueda interactuar con el mapa */}
          <div className="absolute inset-0 bg-primary/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          
          <iframe 
            title="Ubicación El Castillo de los Bajitos"
            src="https://www.google.com/maps?q=Col%C3%B3n+299,+San+Bernardo,+Chile&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;