import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const EnfoqueEducativo = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const sellos = [
    {
      imagen: '/imagenes/sello-1.jpg',
      icono: '💖',
      titulo: 'Bienestar Integral',
      subtitulo: 'Enfoque Afectivo',
      descripcion: 'Priorizamos el bienestar físico, emocional y social de los niños, promoviendo vínculos seguros y una educación basada en el respeto, el afecto y la contención emocional.'
    },
    {
      imagen: '/imagenes/sello-2.jpg',
      icono: '🧩',
      titulo: 'Educación Inclusiva',
      subtitulo: 'Atención Personalizada',
      descripcion: 'Reconocemos las características únicas de cada niño. Adaptamos las experiencias a sus ritmos de aprendizaje e intereses, promoviendo la equidad y el respeto por la diversidad.'
    },
    {
      imagen: '/imagenes/sello-3.jpg',
      icono: '🌱',
      titulo: 'Aprendizaje Vivencial',
      subtitulo: 'Contacto con la Naturaleza',
      descripcion: 'Fomentamos el aprendizaje activo mediante el juego y la experiencia. Utilizamos nuestro huerto, la granja educativa y áreas verdes para crear conciencia ambiental desde pequeños.'
    },
    {
      imagen: '/imagenes/sello-4.jpg',
      icono: '👨‍👩‍👧‍👦',
      titulo: 'Vínculo Familiar',
      subtitulo: 'Jardín y Comunidad',
      descripcion: 'Promovemos una relación cercana y colaborativa con las familias. A través de instancias como nuestro After School, buscamos ser un apoyo real en la conciliación familiar.'
    }
  ];

  return (
    <section id="enfoque" className="py-20 lg:py-32 relative bg-white">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cream rounded-full blur-3xl -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl translate-y-1/2 opacity-60"></div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-primary font-bold text-sm mb-4 border border-blue-100">
            Nuestra Metodología
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nuestros <span className="text-action">Sellos Educativos</span>
          </h2>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto leading-relaxed">
            Creemos que la infancia es una etapa única e irrepetible. Por eso, acompañamos a cada niño y niña con dedicación, asegurando un desarrollo pleno en un entorno protector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sellos.map((sello, index) => (
            <motion.div
              key={sello.titulo}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(30,86,160,0.08)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Imagen Superior */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={sello.imagen} 
                  alt={sello.titulo} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute -bottom-6 right-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-lg z-20 transform -rotate-6 group-hover:rotate-0 transition-transform">
                  {sello.icono}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 pt-10 flex-grow flex flex-col">
                <p className="text-action font-bold text-sm uppercase tracking-wider mb-1">
                  {sello.subtitulo}
                </p>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  {sello.titulo}
                </h3>
                <p className="text-dark/70 leading-relaxed text-sm flex-grow">
                  {sello.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnfoqueEducativo;