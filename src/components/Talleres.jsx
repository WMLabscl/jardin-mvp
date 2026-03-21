import { motion } from 'framer-motion';

const Talleres = () => {
  const talleres = [
    {
      id: 1,
      titulo: 'Taller de Huerto Mágico',
      descripcion: 'Conectamos a los niños con la naturaleza. Aprenden a sembrar, cuidar y cosechar, fomentando el amor y respeto por el medio ambiente mientras se ensucian las manos felizmente.',
      color: 'bg-green-100',
      iconoColor: 'text-green-600',
      burbuja: 'bg-green-200',
      etiqueta: 'Naturaleza',
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
          <path d="M12 22v-8"></path>
          <path d="M12 14c-2.76 0-5-2.24-5-5s2.24-5 5-5"></path>
          <path d="M12 14c2.76 0 5-2.24 5-5s-2.24-5-5-5"></path>
          <path d="M3 22h18"></path>
        </svg>
      )
    },
    {
      id: 2,
      titulo: 'Mini Chefs en Acción',
      descripcion: '¡Manos a la masa! Exploramos texturas, olores y sabores mientras preparan recetas sencillas. Un espacio delicioso para estimular su motricidad fina y autonomía.',
      color: 'bg-orange-100',
      iconoColor: 'text-orange-600',
      burbuja: 'bg-orange-200',
      etiqueta: 'Motricidad',
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
          <line x1="6" y1="17" x2="18" y2="17"></line>
        </svg>
      )
    },
    {
      id: 3,
      titulo: 'Arte y Expresión Libre',
      descripcion: 'Un lienzo en blanco donde la creatividad no tiene límites. Pintura, modelado y manualidades para que cada niño exprese sus emociones y desarrolle su sensibilidad artística.',
      color: 'bg-purple-100',
      iconoColor: 'text-purple-600',
      burbuja: 'bg-purple-200',
      etiqueta: 'Creatividad',
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
          <circle cx="8.5" cy="7.5" r=".5"></circle>
          <circle cx="6.5" cy="12.5" r=".5"></circle>
          <circle cx="13.5" cy="6.5" r=".5"></circle>
        </svg>
      )
    }
  ];

  return (
    <section id="talleres" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      
      <div className="container-custom relative z-10">
        
        {/* --- CABECERA --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-28"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Aprender jugando es una <span className="text-action font-caricatura tracking-wide text-5xl lg:text-7xl">Aventura</span>
          </h2>
          <p className="text-lg lg:text-xl text-dark/70 max-w-2xl mx-auto leading-relaxed font-medium">
            Descubre nuestros espacios diseñados para estimular el talento, la curiosidad y la alegría de tu hijo en cada etapa.
          </p>
        </motion.div>

        {/* --- 1. TALLERES EN TIRAS HORIZONTALES (Zig-Zag Layout) --- */}
        <div className="flex flex-col gap-24 lg:gap-32 mb-32 max-w-6xl mx-auto">
          {talleres.map((taller, index) => {
            // Alternamos la dirección (imagen izquierda, luego derecha, luego izquierda)
            const isReversed = index % 2 !== 0; 
            
            return (
              <motion.div 
                key={taller.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20 px-4`}
              >
                {/* Bloque Visual (Donde irá la foto a futuro, ahora es un blob vectorial) */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-[40px] ${taller.color} flex items-center justify-center transform ${isReversed ? '-rotate-3' : 'rotate-3'} transition-transform duration-500 hover:rotate-0 shadow-lg`}>
                    <div className={`absolute -top-4 ${isReversed ? '-right-4' : '-left-4'} w-20 h-20 rounded-full ${taller.burbuja} mix-blend-multiply opacity-70 animate-pulse`}></div>
                    <div className={`absolute -bottom-6 ${isReversed ? '-left-6' : '-right-6'} w-32 h-32 rounded-full ${taller.burbuja} mix-blend-multiply opacity-50`}></div>
                    <div className={`relative z-10 ${taller.iconoColor}`}>
                      {taller.icono}
                    </div>
                  </div>
                </div>

                {/* Bloque de Texto */}
                <div className={`w-full lg:w-1/2 text-center ${isReversed ? 'lg:text-right' : 'lg:text-left'}`}>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-dark/60 font-bold text-xs mb-4 uppercase tracking-widest">
                    {taller.etiqueta}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-caricatura text-primary mb-6 tracking-wide">
                    {taller.titulo}
                  </h3>
                  <p className="text-lg text-dark/70 leading-relaxed font-medium">
                    {taller.descripcion}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- 2. SERVICIOS EXTRAS (Comida y Computación en 2 columnas) --- */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24 px-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFF8ED] rounded-[40px] p-8 md:p-10 border border-orange-100 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 shrink-0 rounded-full bg-orange-200 text-orange-600 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5V17m0 0a2 2 0 100-4 2 2 0 000 4z" /></svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-primary mb-3">Menú Nutricional</h4>
              <p className="text-dark/70 font-medium">Incluye desayuno, almuerzo y cena. Diseñamos un menú saludable, rico y balanceado para el óptimo crecimiento de tu hijo.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#F0FDF4] rounded-[40px] p-8 md:p-10 border border-green-100 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 shrink-0 rounded-full bg-green-200 text-green-600 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-primary mb-3">Sala de Computación</h4>
              <p className="text-dark/70 font-medium">Equipada con tecnología adaptada. Fomentamos la estimulación digital temprana de forma 100% segura y supervisada.</p>
            </div>
          </motion.div>
        </div>

        {/* --- 3. APARTADO ESTRELLA: SEGURIDAD Y CÁMARAS EN VIVO --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-primary rounded-[50px] p-10 md:p-16 shadow-[0_30px_60px_rgba(30,86,160,0.2)] relative overflow-hidden flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Fondo tecnológico (Ondas y luces) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-action opacity-20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400 opacity-20 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Textos de la App */}
          <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-yellow-300 font-bold text-xs mb-6 border border-white/20 uppercase tracking-widest backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Seguridad Premium
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Cámaras en vivo y <span className="text-yellow-300 font-caricatura font-normal tracking-wide">App Exclusiva</span>
            </h3>
            <p className="text-lg text-blue-50/90 leading-relaxed mb-8 font-medium">
              Sabemos que la tranquilidad es lo más importante. Como apoderado, tendrás acceso a una aplicación móvil privada donde podrás ver las cámaras del recinto en tiempo real y seguir las rutinas.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 text-white font-bold bg-white/10 px-6 py-3 rounded-full border border-white/20">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Acceso Privado 100% Seguro
              </div>
            </div>
          </div>

          {/* Ilustración / Mockup de la App */}
          <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end">
            <div className="w-64 h-80 md:w-80 md:h-[400px] bg-white rounded-[40px] shadow-2xl p-4 border-8 border-blue-100 flex flex-col relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Pantalla del celu */}
              <div className="w-full h-full bg-gray-50 rounded-[24px] overflow-hidden flex flex-col">
                <div className="bg-primary text-white p-4 text-center text-sm font-bold flex justify-between items-center">
                  <span>App Apoderados</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                  </div>
                </div>
                {/* Simulador de video en vivo */}
                <div className="p-4 flex-grow flex flex-col gap-4">
                  <div className="w-full h-32 bg-gray-200 rounded-xl relative overflow-hidden flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> EN VIVO
                    </div>
                  </div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded-full"></div>
                  <div className="w-1/2 h-4 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Talleres;