import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Niveles = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const niveles = [
    {
      id: 1,
      icono: '🧸',
      titulo: 'Sala Cuna',
      edades: 'Desde los 84 días hasta 2 años',
      descripcion: 'Un entorno seguro, afectivo y protector. Respetamos los ritmos de cada bebé, estimulando su desarrollo cognitivo y físico con amor y dedicación.',
      color: 'bg-blue-50',
      borde: 'border-blue-200',
      sombra: 'hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)]' // Sombra azulada
    },
    {
      id: 2,
      icono: '🎨',
      titulo: 'Niveles Medios',
      edades: 'De 2 a 5 años',
      descripcion: 'Fomentamos la autonomía, la exploración y el aprendizaje vivencial. Preparamos a los niños emocional y cognitivamente para su transición a la educación básica.',
      color: 'bg-cream',
      borde: 'border-yellow-200',
      sombra: 'hover:shadow-[0_15px_30px_rgba(250,204,21,0.15)]' // Sombra amarillenta
    },
    {
      id: 3,
      icono: '🎒',
      titulo: 'After School',
      edades: 'Apoyo a las familias',
      descripcion: 'Pensado para la conciliación familiar. Un espacio lúdico y de acompañamiento donde los niños siguen aprendiendo y jugando mientras sus padres trabajan.',
      color: 'bg-red-50',
      borde: 'border-red-200',
      sombra: 'hover:shadow-[0_15px_30px_rgba(239,68,68,0.15)]' // Sombra rojiza
    }
  ];

  return (
    <section id="niveles" className="py-20 lg:py-32 bg-white relative border-t border-gray-100 overflow-hidden">
      
      {/* Detalle de fondo sutil */}
      <div className="absolute top-20 left-10 text-4xl opacity-5 transform -rotate-12 select-none"> ABC </div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-5 transform rotate-12 select-none"> 123 </div>

      <div className="container-custom relative z-10">
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-cream text-action font-bold text-sm mb-4 shadow-sm border border-yellow-200">
            Etapas de Crecimiento
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nuestros <span className="text-action font-caricatura tracking-wide text-5xl lg:text-6xl">Niveles</span>
          </h2>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto leading-relaxed">
            Brindamos una educación de calidad, integral e inclusiva. Acompañamos a tu hijo en cada etapa, asegurando su bienestar y desarrollo pleno.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {niveles.map((nivel, index) => (
            <motion.div
              key={nivel.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-[40px] p-8 md:p-10 text-center border-2 ${nivel.borde} ${nivel.color} transition-all duration-300 hover:-translate-y-3 ${nivel.sombra} group`}
            >
              <div className="text-7xl mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-md">
                {nivel.icono}
              </div>
              <h3 className="font-caricatura text-3xl text-primary mb-4 tracking-wide">
                {nivel.titulo}
              </h3>
              <div className="inline-block px-4 py-2 bg-white rounded-full text-action font-bold text-sm shadow-sm mb-6 border border-gray-100">
                {nivel.edades}
              </div>
              <p className="text-dark/80 leading-relaxed font-medium">
                {nivel.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Niveles;