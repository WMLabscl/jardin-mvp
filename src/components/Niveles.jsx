import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Niveles = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const niveles = [
    {
      id: 1,
      titulo: 'Sala Cuna',
      edades: 'Desde los 84 días hasta 2 años',
      descripcion: 'Un entorno seguro, afectivo y protector. Respetamos los ritmos de cada bebé, estimulando su desarrollo cognitivo y físico con amor y dedicación.',
      color: 'bg-blue-50',
      borde: 'border-blue-200',
      sombra: 'hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)]',
      colorIcono: 'text-blue-500',
      icono: (
        // Icono Osito de Peluche SVG
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 mx-auto">
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
      descripcion: 'Fomentamos la autonomía, la exploración y el aprendizaje vivencial. Preparamos a los niños emocional y cognitivamente para su transición a la educación básica.',
      color: 'bg-cream',
      borde: 'border-yellow-200',
      sombra: 'hover:shadow-[0_15px_30px_rgba(250,204,21,0.15)]',
      colorIcono: 'text-yellow-500',
      icono: (
        // Icono Paleta de Arte SVG
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 mx-auto">
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
      color: 'bg-red-50',
      borde: 'border-red-200',
      sombra: 'hover:shadow-[0_15px_30px_rgba(239,68,68,0.15)]',
      colorIcono: 'text-action',
      icono: (
        // Icono Mochila SVG
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 mx-auto">
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
    <section id="niveles" className="py-20 lg:py-12 bg-white relative border-t border-gray-100 overflow-hidden">
      
      {/* Detalle de fondo sutil usando SVG en lugar de letras sueltas */}
      <div className="absolute top-20 left-10 opacity-5 transform -rotate-12 pointer-events-none">
        <svg className="w-32 h-32 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/></svg>
      </div>

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
              className={`rounded-[40px] p-8 md:p-10 text-center border-2 ${nivel.borde} ${nivel.color} transition-all duration-300 hover:-translate-y-3 ${nivel.sombra} group flex flex-col`}
            >
              <div className={`mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${nivel.colorIcono}`}>
                {nivel.icono}
              </div>
              <h3 className="font-caricatura text-3xl text-primary mb-4 tracking-wide">
                {nivel.titulo}
              </h3>
              <div className="inline-block px-4 py-2 bg-white rounded-full text-action font-bold text-sm shadow-sm mb-6 border border-gray-100 self-center">
                {nivel.edades}
              </div>
              <p className="text-dark/80 leading-relaxed font-medium flex-grow">
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