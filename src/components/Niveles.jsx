import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Niveles = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const niveles = [
    {
      id: 1,
      titulo: 'Sala Cuna',
      edades: '84 días hasta 2 años',
      descripcion: 'Un entorno seguro, afectivo y protector. Respetamos los ritmos de cada bebé, estimulando su desarrollo cognitivo y físico con amor.',
      bgIconContainer: 'bg-blue-500',
      iconColor: 'text-white',
      textColor: 'text-blue-600',
      shadowHover: 'hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)]',
      translate: 'md:-translate-y-6', // Escalón arriba
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <circle cx="12" cy="13" r="7"/>
          <path d="M7 10A3 3 0 0 1 7 4a3 3 0 0 1 2.9 2.4"/>
          <path d="M17 10a3 3 0 0 0 0-6 3 3 0 0 0-2.9 2.4"/>
          <path d="M12 15h.01"/>
          <path d="M10 17c.5.5 1.5.5 2 0"/>
        </svg>
      )
    },
    {
      id: 2,
      titulo: 'Niveles Medios',
      edades: 'De 2 a 5 años',
      descripcion: 'Fomentamos la autonomía, la exploración y el aprendizaje vivencial. Preparamos a los niños emocional y cognitivamente para su transición escolar.',
      bgIconContainer: 'bg-yellow-400',
      iconColor: 'text-yellow-900',
      textColor: 'text-yellow-600',
      shadowHover: 'hover:shadow-[0_20px_50px_rgba(250,204,21,0.4)]',
      translate: 'md:translate-y-6', // Escalón abajo
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <circle cx="13.5" cy="6.5" r=".5"/>
          <circle cx="17.5" cy="10.5" r=".5"/>
          <circle cx="8.5" cy="7.5" r=".5"/>
          <circle cx="6.5" cy="12.5" r=".5"/>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
        </svg>
      )
    },
    {
      id: 3,
      titulo: 'After School',
      edades: 'Apoyo a las familias',
      descripcion: 'Pensado para la conciliación familiar. Un espacio lúdico y de acompañamiento donde los niños siguen aprendiendo y jugando mientras sus padres trabajan.',
      bgIconContainer: 'bg-action',
      iconColor: 'text-white',
      textColor: 'text-action',
      shadowHover: 'hover:shadow-[0_20px_50px_rgba(239,68,68,0.4)]',
      translate: 'md:-translate-y-6', // Escalón arriba
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/>
          <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
          <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"/>
          <path d="M8 10h8"/>
          <path d="M8 14h8"/>
        </svg>
      )
    }
  ];

  return (
    /* CAMBIO DRÁSTICO DE FONDO: De blanco a un gradiente vibrante y mágico */
    <section id="niveles" className="relative py-28 lg:py-40 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500 overflow-hidden">
      
      {/* OLA SUPERIOR (Blanca, para conectar con la sección de arriba) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg className="relative block w-full h-[40px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H0V95.8C59.71,118.08,130.83,119.24,196.33,109.1,238.82,102.51,281.3,81.1,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* ESTRELLAS Y DECORACIONES FLOTANTES EN EL FONDO OSCURO */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute top-32 left-10 text-yellow-300 opacity-20 w-32 h-32">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </motion.div>
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute bottom-40 right-10 text-white opacity-10 w-48 h-48">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </motion.div>

      <div className="container-custom relative z-20 px-4 sm:px-6">
        
        {/* --- CABECERA (Ahora en texto blanco para contrastar el fondo vibrante) --- */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 lg:mb-32"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-yellow-300 text-yellow-900 font-bold text-sm mb-6 shadow-lg uppercase tracking-widest rotate-[-2deg]">
            🚀 Etapas de Crecimiento
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
            Nuestros <span className="text-yellow-300 font-caricatura tracking-wide text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">Niveles</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Brindamos una educación de calidad, integral e inclusiva. Acompañamos a tu hijo en cada paso importante, asegurando su bienestar y felicidad.
          </p>
        </motion.div>

        {/* --- GRID DE TARJETAS (Efecto Pop-Out) --- */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-10 max-w-7xl mx-auto pb-10 mt-12">
          {niveles.map((nivel, index) => (
            <motion.div
              key={nivel.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 }}
              /* El margin-top compensa el ícono que sobresale por arriba */
              className={`mt-10 md:mt-0 ${nivel.translate} h-full`}
            >
              {/* TARJETA BLANCA PURA */}
              <div className={`relative bg-white rounded-[40px] p-8 pt-16 md:p-10 md:pt-16 text-center shadow-2xl transition-all duration-300 ${nivel.shadowHover} hover:-translate-y-2 group flex flex-col h-full`}>
                
                {/* ÍCONO ROMPIENDO EL BORDE SUPERIOR (Efecto 3D / Pop-out) */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className={`w-24 h-24 rounded-full ${nivel.bgIconContainer} ${nivel.iconColor} flex items-center justify-center shadow-xl border-8 border-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    {nivel.icono}
                  </div>
                </div>

                {/* Edad (Insignia destacada) */}
                <div className="flex justify-center mb-4">
                  <span className={`inline-block px-5 py-2 rounded-full bg-gray-50 ${nivel.textColor} font-bold text-xs sm:text-sm shadow-sm border border-gray-100`}>
                    {nivel.edades}
                  </span>
                </div>

                {/* Título y Descripción */}
                <h3 className={`font-caricatura text-3xl md:text-4xl ${nivel.textColor} mb-4 tracking-wide`}>
                  {nivel.titulo}
                </h3>
                
                <p className="text-dark/70 leading-relaxed font-medium text-base flex-grow mb-8">
                  {nivel.descripcion}
                </p>

                {/* Call to Action Interno */}
                <a href="#contacto" className={`inline-flex items-center justify-center gap-2 font-bold ${nivel.textColor} opacity-80 group-hover:opacity-100 transition-opacity mt-auto`}>
                  Consultar cupos
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* OLA INFERIOR (Blanca, para conectar con la siguiente sección de Talleres que armamos) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[40px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H0V95.8C59.71,118.08,130.83,119.24,196.33,109.1,238.82,102.51,281.3,81.1,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

    </section>
  );
};

export default Niveles;