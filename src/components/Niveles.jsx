import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Niveles = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const niveles = [
    {
      id: 1,
      icono: '👶',
      titulo: 'Sala Cuna',
      edades: 'Desde los 84 días hasta 2 años',
      descripcion: 'Un entorno seguro, afectivo y protector. Respetamos los ritmos de cada bebé, estimulando su desarrollo cognitivo y físico con amor y dedicación.',
      color: 'bg-blue-50',
      borde: 'border-blue-200'
    },
    {
      id: 2,
      icono: '🧒',
      titulo: 'Niveles Medios y Transición',
      edades: 'De 2 a 5 años',
      descripcion: 'Fomentamos la autonomía, la exploración y el aprendizaje vivencial. Preparamos a los niños emocional y cognitivamente para su transición a la educación básica.',
      color: 'bg-cream',
      borde: 'border-yellow-200'
    },
    {
      id: 3,
      icono: '🎒',
      titulo: 'Programa After School',
      edades: 'Apoyo a las familias',
      descripcion: 'Pensado para la conciliación familiar. Un espacio lúdico y de acompañamiento donde los niños siguen aprendiendo y jugando mientras sus padres trabajan.',
      color: 'bg-red-50',
      borde: 'border-red-200'
    }
  ];

  return (
    <section id="niveles" className="py-20 bg-white relative border-t border-gray-100">
      <div className="container-custom relative z-10">
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nuestros <span className="text-action">Niveles</span>
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
              className={`rounded-[30px] p-8 md:p-10 text-center border ${nivel.borde} ${nivel.color} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="text-6xl mb-6 transform transition-transform hover:scale-110 duration-300">
                {nivel.icono}
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                {nivel.titulo}
              </h3>
              <div className="inline-block px-4 py-1 bg-white rounded-full text-action font-bold text-sm shadow-sm mb-6">
                {nivel.edades}
              </div>
              <p className="text-dark/80 leading-relaxed">
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