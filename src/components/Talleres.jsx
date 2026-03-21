import { motion } from 'framer-motion';

const Talleres = () => {
  const talleres = [
    {
      id: 1,
      titulo: 'Taller de Huerto Mágico',
      descripcion: 'Conectamos a los niños con la naturaleza. Aprenden a sembrar, cuidar y cosechar, fomentando el amor y respeto por el medio ambiente mientras se ensucian las manos felizmente.',
      // Colores de la tarjeta
      bgCard: 'bg-white/70', // Fondo de la tarjeta semi-transparente
      borderCard: 'border-green-200',
      burbujaBg: 'bg-green-300', // Burbuja de fondo potente
      iconoColor: 'text-green-600',
      etiqueta: 'Naturaleza',
      etiquetaBg: 'bg-green-100',
      etiquetaText: 'text-green-900',
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
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
      // Colores de la tarjeta
      bgCard: 'bg-white/70',
      borderCard: 'border-orange-200',
      burbujaBg: 'bg-orange-300',
      iconoColor: 'text-orange-600',
      etiqueta: 'Motricidad',
      etiquetaBg: 'bg-orange-100',
      etiquetaText: 'text-orange-900',
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
          <line x1="6" y1="17" x2="18" y2="17"></line>
        </svg>
      )
    },
    {
      id: 3,
      titulo: 'Arte y Expresión Libre',
      descripcion: 'Un lienzo en blanco donde la creatividad no tiene límites. Pintura, modelado y manualidades para que cada niño exprese sus emociones y desarrolle su sensibilidad artística.',
      // Colores de la tarjeta
      bgCard: 'bg-white/70',
      borderCard: 'border-purple-200',
      burbujaBg: 'bg-purple-300',
      iconoColor: 'text-purple-600',
      etiqueta: 'Creatividad',
      etiquetaBg: 'bg-purple-100',
      etiquetaText: 'text-purple-900',
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
          <circle cx="8.5" cy="7.5" r=".5"></circle>
          <circle cx="6.5" cy="12.5" r=".5"></circle>
          <circle cx="13.5" cy="6.5" r=".5"></circle>
        </svg>
      )
    }
  ];

  return (
    /* --- CAMBIO DE FONDO: Ahora es bg-cream con gradiente hacia azul --- */
    <section id="talleres" className="py-20 lg:py-32 bg-[#FEFDFB] bg-gradient-to-b from-white via-cream/80 to-[#EAF5FF] relative overflow-hidden">
      
      {/* Burbujas de color de fondo gigantescas para eliminar lo blanco */}
      <div className="absolute top-1/4 -left-40 w-[800px] h-[800px] bg-yellow-300 opacity-20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-2/3 right-0 w-[900px] h-[900px] bg-purple-300 opacity-20 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[1000px] h-[1000px] bg-green-200 opacity-30 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* --- CABECERA --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 lg:mb-32"
        >
          {/* Etiqueta con fondo blanco para que resalte */}
          <span className="inline-block px-5 py-2 rounded-full bg-white text-primary font-bold text-sm mb-6 shadow-md border border-gray-100 uppercase tracking-widest rotate-2">
            🎨 Formación Integral
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Aprender jugando es una <br className="hidden md:block"/>
            <span className="text-action font-caricatura tracking-wide text-5xl md:text-6xl lg:text-8xl drop-shadow-md">Aventura</span>
          </h2>
        </motion.div>

        {/* --- 1. TALLERES EN TIRAS HORIZONTALES (Zig-Zag Layout) --- */}
        <div className="flex flex-col gap-28 lg:gap-36 mb-32 max-w-7xl mx-auto px-4">
          {talleres.map((taller, index) => {
            const isReversed = index % 2 !== 0; 
            
            return (
              <motion.div 
                key={taller.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 md:gap-16 lg:gap-24`}
              >
                {/* Bloque Visual (Caja de color más potente y DIFUMINADA DE FONDO) */}
                <div className="w-full lg:w-1/2 flex justify-center relative">
                   {/* Burbuja de color que se derrama detrás de la caja */}
                  <div className={`absolute inset-0 ${taller.burbujaBg} opacity-80 rounded-full blur-[80px] -translate-y-12`}></div>
                  
                  {/* La caja de color principal */}
                  <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-[40px] ${taller.burbujaBg} flex items-center justify-center transform ${isReversed ? '-rotate-3' : 'rotate-3'} transition-transform duration-500 hover:rotate-0 shadow-xl border-4 border-white/80 z-10`}>
                    <div className={`relative z-10 ${taller.iconoColor}`}>
                      {taller.icono}
                    </div>
                  </div>
                </div>

                {/* Bloque de Texto (TARJETA TIPO CRISTAL DIFUMINADO) */}
                <div className={`w-full lg:w-1/2 ${taller.bgCard} backdrop-blur-lg rounded-[40px] p-10 md:p-12 border-2 ${taller.borderCard} shadow-xl relative z-20 text-center ${isReversed ? 'lg:text-right' : 'lg:text-left'} transform transition-transform duration-300 hover:-translate-y-1`}>
                  <span className={`inline-block px-4 py-1.5 rounded-full ${taller.etiquetaBg} ${taller.etiquetaText} font-bold text-xs mb-5 uppercase tracking-widest border border-current opacity-70`}>
                    {taller.etiqueta}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-caricatura text-primary mb-6 tracking-wide drop-shadow-sm">
                    {taller.titulo}
                  </h3>
                  <p className="text-lg md:text-xl text-dark leading-relaxed font-medium">
                    {taller.descripcion}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- CABECERA SEGUNDA PARTE --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-28 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
             Tranquilidad para ti, <br className="hidden md:block"/>
             <span className="text-yellow-500 font-caricatura tracking-wider text-4xl md:text-5xl">lo mejor</span> para ellos
          </h2>
        </motion.div>

        {/* --- 2. SERVICIOS EXTRAS (Comida y Computación en 2 columnas, MÁS VISIBLES) --- */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto mb-28 px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-[40px] p-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left shadow-xl border-2 border-orange-100 hover:shadow-2xl transition-all group"
          >
            <div className="w-20 h-20 shrink-0 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center border-2 border-orange-200 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5V17m0 0a2 2 0 100-4 2 2 0 000 4z" /></svg>
            </div>
            <div>
              <h4 className="text-2xl lg:text-3xl font-bold text-primary mb-4">Menú Nutricional</h4>
              <p className="text-dark/80 text-base md:text-lg font-medium leading-relaxed">Incluye desayuno, almuerzo y cena. Menú saludable, rico y balanceado para el óptimo desarrollo de tu hijo.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-[40px] p-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left shadow-xl border-2 border-green-100 hover:shadow-2xl transition-all group"
          >
            <div className="w-20 h-20 shrink-0 rounded-full bg-green-100 text-green-600 flex items-center justify-center border-2 border-green-200 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <h4 className="text-2xl lg:text-3xl font-bold text-primary mb-4">Sala de Computación</h4>
              <p className="text-dark/80 text-base md:text-lg font-medium leading-relaxed">Equipada con tecnología adaptada. Fomentamos la estimulación digital temprana de forma segura y supervisada.</p>
            </div>
          </motion.div>
        </div>

        {/* --- 3. APARTADO ESTRELLA: SEGURIDAD Y CÁMARAS EN VIVO (Aún más Atrevido) --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto bg-primary rounded-[50px] p-10 md:p-16 shadow-[0_30px_60px_rgba(30,86,160,0.25)] relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border-8 border-white"
        >
          {/* Fondo tecnológico (Potenciado) */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-action opacity-30 rounded-full blur-[90px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 opacity-30 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Textos de la App */}
          <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left px-2">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-yellow-300 font-bold text-xs mb-8 border-2 border-white/20 uppercase tracking-widest backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              Seguridad Premium 24/7
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Cámaras en vivo y <span className="text-yellow-300 font-caricatura font-normal tracking-wide text-5xl md:text-6xl lg:text-7xl">App Exclusiva</span>
            </h3>
            <p className="text-lg lg:text-xl text-blue-50/95 leading-relaxed mb-10 font-medium">
              Como apoderado, tendrás acceso a una aplicación móvil privada donde podrás ver las cámaras en tiempo real.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <div className="flex items-center gap-3.5 text-white font-bold bg-white/10 px-8 py-4 rounded-full border-2 border-white/20 text-lg">
                <svg className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Acceso Privado 100% Seguro
              </div>
            </div>
          </div>

          {/* Mockup de la App */}
          <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end">
            <div className="w-64 h-80 md:w-80 md:h-[400px] bg-white rounded-[40px] shadow-2xl p-4 border-8 border-blue-100 flex flex-col relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-gray-50 rounded-[24px] overflow-hidden flex flex-col">
                <div className="bg-primary text-white p-4 text-center text-sm font-bold flex justify-between items-center">
                  <span>App Apoderados</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col gap-4">
                  <div className="w-full h-32 bg-gray-200 rounded-xl relative overflow-hidden flex items-center justify-center border-2 border-gray-300">
                    <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> EN VIVO
                    </div>
                  </div>
                  <div className="w-3/4 h-5 bg-gray-200 rounded-full"></div>
                  <div className="w-1/2 h-5 bg-gray-200 rounded-full"></div>
                  <div className="flex-grow"></div>
                  <div className="w-full h-10 bg-primary rounded-xl text-white text-xs flex items-center justify-center font-bold">Ver Sala Medio Menor</div>
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