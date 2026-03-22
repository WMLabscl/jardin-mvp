import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const EnfoqueEducativo = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const sellos = [
    {
      imagen: '/imagenes/sello-1.png',
      icono: '💖',
      titulo: 'Bienestar Integral',
      subtitulo: 'Enfoque Afectivo',
      descripcion: 'Priorizamos el bienestar físico, emocional y social de los niños, promoviendo vínculos seguros y una educación basada en el respeto, el afecto y la contención emocional.'
    },
    {
      imagen: '/imagenes/sello-2.png',
      icono: '🧩',
      titulo: 'Educación Inclusiva',
      subtitulo: 'Atención Personalizada',
      descripcion: 'Reconocemos las características únicas de cada niño. Adaptamos las experiencias a sus ritmos de aprendizaje e intereses, promoviendo la equidad y el respeto por la diversidad.'
    },
    {
      imagen: '/imagenes/sello-3.png',
      icono: '🌱',
      titulo: 'Aprendizaje Vivencial',
      subtitulo: 'Contacto con la Naturaleza',
      descripcion: 'Fomentamos el aprendizaje activo mediante el juego y la experiencia. Utilizamos nuestro huerto, la granja educativa y áreas verdes para crear conciencia ambiental desde pequeños.'
    },
    {
      imagen: '/imagenes/sello-4.png',
      icono: '👨‍👩‍👧‍👦',
      titulo: 'Vínculo Familiar',
      subtitulo: 'Jardín y Comunidad',
      descripcion: 'Promovemos una relación cercana y colaborativa con las familias. A través de instancias como nuestro After School, buscamos ser un apoyo real en la conciliación familiar.'
    }
  ];

  return (
    // CAMBIO APLICADO: Mismo fondo azul pastel oscuro que la sección de Valores
    <section id="enfoque" className="relative py-20 lg:py-18 bg-gradient-to-b from-[#D4E8FF] via-[#C0DEFF] to-[#A3CEFF] overflow-hidden">
      

      {/* Elementos de fondo "Blobs" para darle textura e identidad infantil */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-yellow-300 opacity-20 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-purple-300 opacity-20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container-custom relative z-20 px-4 sm:px-6">
        
        {/* --- CABECERA --- */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white text-primary font-bold text-sm mb-6 shadow-sm border border-blue-200 uppercase tracking-widest">
            Nuestra Metodología
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight drop-shadow-sm">
            Nuestros <span className="text-action font-caricatura tracking-wide text-5xl md:text-6xl lg:text-7xl">Sellos Educativos</span>
          </h2>
          <p className="text-lg md:text-xl text-dark/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Creemos que la infancia es una etapa única e irrepetible. Por eso, acompañamos a cada niño y niña con dedicación, asegurando un desarrollo pleno en un entorno protector.
          </p>
        </motion.div>

        {/* --- TARJETAS --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {sellos.map((sello, index) => (
            <motion.div
              key={sello.titulo}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Tarjetas blancas que ahora flotan espectacularmente sobre el fondo azul
              className="group bg-white rounded-[30px] overflow-hidden shadow-[0_15px_35px_rgba(30,86,160,0.1)] hover:shadow-[0_25px_50px_rgba(30,86,160,0.2)] border-2 border-white transition-all duration-300 hover:-translate-y-3 flex flex-col h-full relative"
            >
              <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={sello.imagen} 
                  alt={sello.titulo} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute -bottom-6 right-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-lg z-20 transform -rotate-6 group-hover:rotate-0 transition-transform border-4 border-white">
                  {sello.icono}
                </div>
              </div>

              <div className="p-8 pt-10 flex-grow flex flex-col relative bg-white">
                <p className="text-action font-bold text-[10px] md:text-xs uppercase tracking-widest mb-3">
                  {sello.subtitulo}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-snug">
                  {sello.titulo}
                </h3>
                <p className="text-dark/70 leading-relaxed text-sm md:text-base flex-grow font-medium">
                  {sello.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- OLA INFERIOR --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H0V95.8C59.71,118.08,130.83,119.24,196.33,109.1,238.82,102.51,281.3,81.1,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

    </section>
  );
};

export default EnfoqueEducativo;