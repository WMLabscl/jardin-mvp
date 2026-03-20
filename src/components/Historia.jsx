import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Historia = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 rounded-l-full blur-3xl -z-10"></div>
      
      <div className="container-custom relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-20">
          {/* Columna Izquierda: Imagen con forma de arco/ventana */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Fondo decorativo desfasado */}
              <div className="absolute inset-0 bg-action rounded-t-full rounded-b-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
              
              {/* Contenedor de la imagen */}
              <div className="relative bg-cream rounded-t-full rounded-b-3xl overflow-hidden border-8 border-white shadow-xl z-10 aspect-[4/5]">
                {/* Puedes usar una foto de la fachada o de la dueña/equipo aquí */}
                <img 
                  src="/imagenes/foto_hero.jpg" 
                  alt="Nuestra Historia - El Castillo de los Bajitos" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Etiqueta flotante */}
              <div className="absolute top-10 -left-6 lg:-left-12 bg-white p-4 rounded-2xl shadow-lg z-20 flex items-center gap-3 transform -rotate-6">
                <span className="text-3xl">🏰</span>
                <div>
                  <p className="font-caricatura text-primary text-xl leading-none">Un sueño</p>
                  <p className="text-dark/70 text-sm font-bold">hecho realidad</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Texto de la Historia */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-action font-bold text-sm mb-4 border border-blue-100">
              Quiénes Somos
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Nuestra <span className="text-action font-caricatura text-5xl lg:text-6xl tracking-wide">Historia</span>
            </h2>
            
            <div className="space-y-5 text-dark/80 text-lg leading-relaxed font-medium">
              <p>
                <strong>El Castillo de los Bajitos</strong> nace del sueño y la vocación de crear un espacio educativo donde los niños y niñas puedan crecer felices, seguros y rodeados de cariño.
              </p>
              <p>
                Desde nuestros inicios, el propósito ha sido brindar una educación parvularia de calidad, centrada en el bienestar integral y en el desarrollo de las habilidades sociales, emocionales y cognitivas de cada niño.
              </p>
              <p>
                Hoy, nos hemos consolidado como una comunidad comprometida con el aprendizaje, entendiendo que el desarrollo de los más pequeños se fortalece cuando existe una relación cercana entre el hogar y el jardín.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Fila Inferior: Misión y Visión (Tarjetas Coloridas) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Tarjeta Misión */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-primary text-white p-8 lg:p-10 rounded-[40px] shadow-lg relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="absolute -right-10 -top-10 text-9xl opacity-10 transform group-hover:rotate-12 transition-transform duration-500">🌟</div>
            <h3 className="font-caricatura text-4xl mb-4 text-cream">Nuestra Misión</h3>
            <p className="text-blue-50 text-base lg:text-lg leading-relaxed relative z-10">
              Brindar una educación de calidad, integral e inclusiva, promoviendo el bienestar y aprendizajes significativos. Propiciamos experiencias respetuosas de los ritmos individuales en un entorno seguro y afectivo, apoyando la conciliación familiar a través de nuestro After School.
            </p>
          </motion.div>

          {/* Tarjeta Visión */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-action text-white p-8 lg:p-10 rounded-[40px] shadow-lg relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="absolute -left-10 -bottom-10 text-9xl opacity-10 transform group-hover:-rotate-12 transition-transform duration-500">🔭</div>
            <h3 className="font-caricatura text-4xl mb-4 text-cream">Nuestra Visión</h3>
            <p className="text-red-50 text-base lg:text-lg leading-relaxed relative z-10">
              Consolidarnos como un jardín reconocido por la educación parvularia de calidad y el respeto por la diversidad. Aspiramos a formar niños y niñas seguros, autónomos y emocionalmente preparados, fortaleciendo su vínculo con la comunidad y el cuidado del medio ambiente.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Historia;