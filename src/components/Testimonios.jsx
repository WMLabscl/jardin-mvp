import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonios = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const testimonios = [
    {
      id: 1,
      inicial: 'F',
      colorInicial: 'bg-blue-100 text-blue-600',
      nombre: 'Familia Fernández',
      relacion: 'Papás de Tomás (Nivel Medio)',
      texto: '"Dejar a nuestro hijo en el jardín por primera vez nos daba mucho miedo, pero desde el día uno sentimos el profesionalismo y el amor del equipo. Tomás llega feliz todos los días y ha aprendido muchísimo. Es literalmente su segundo hogar."',
    },
    {
      id: 2,
      inicial: 'C',
      colorInicial: 'bg-red-100 text-action',
      nombre: 'Carolina M.',
      relacion: 'Mamá de Sofía (Sala Cuna)',
      texto: '"El mejor lugar que pudimos elegir. Me voy a trabajar tranquila sabiendo que mi bebé está en un entorno seguro, impecable y donde la estimulan con tanto cariño. La comunicación con las tías es excelente."',
    },
    {
      id: 3,
      inicial: 'A',
      colorInicial: 'bg-yellow-100 text-yellow-600',
      nombre: 'Andrés y Camila',
      relacion: 'Papás de Lucas (After School)',
      texto: '"El programa After School nos salvó la vida por nuestros horarios de trabajo. Lucas no solo está seguro, sino que sigue aprendiendo, jugando en la granja y compartiendo con otros niños en vez de estar frente a una pantalla."',
    }
  ];

  return (
    <section id="testimonios" className="py-20 lg:py-12 bg-white relative overflow-hidden border-y border-gray-100">
      
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-10 left-10 text-5xl opacity-5 transform -rotate-12">💬</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-5 transform rotate-12">⭐</div>

      <div className="container-custom relative z-10">
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-primary font-bold text-sm mb-4 border border-blue-100 shadow-sm">
            Lo que dicen las familias
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nuestra <span className="text-action font-caricatura tracking-wide text-5xl lg:text-6xl">Comunidad</span>
          </h2>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto leading-relaxed px-4">
            La confianza de nuestros apoderados es nuestro mayor orgullo. Descubre cómo vivimos la educación y el cuidado en El Castillo de los Bajitos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-[30px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(30,86,160,0.08)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 flex flex-col relative group"
            >
              {/* Estrellitas */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texto del testimonio */}
              <p className="text-dark/70 font-medium leading-relaxed mb-8 flex-grow italic">
                {testimonio.texto}
              </p>

              {/* Datos del Apoderado */}
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${testimonio.colorInicial}`}>
                  {testimonio.inicial}
                </div>
                <div>
                  <h4 className="font-bold text-primary leading-tight">{testimonio.nombre}</h4>
                  <p className="text-xs text-dark/60 font-medium mt-1">{testimonio.relacion}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonios;