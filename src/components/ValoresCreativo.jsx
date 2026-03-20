import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ValoresCreativos = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const valores = [
    {
      id: 1,
      titulo: 'Respeto',
      descripcion: 'Reconocimiento de la diversidad, dignidad y derechos de cada niño y niña.',
      colorBase: 'bg-blue-200', // Subimos intensidad
      colorIcono: 'text-blue-600',
      forma: 'rounded-[30%_70%_70%_30%/30%_30%_70%_70%]', // Forma irregular 1
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 2,
      titulo: 'Empatía',
      descripcion: 'Comprensión y sensibilidad frente a las emociones, necesidades y experiencias de los niños.',
      colorBase: 'bg-yellow-200', // Subimos intensidad
      colorIcono: 'text-yellow-600',
      forma: 'rounded-[60%_40%_30%_70%/60%_30%_70%_40%]', // Forma irregular 2
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 3,
      titulo: 'Responsabilidad',
      descripcion: 'Compromiso con el cuidado, la educación y el bienestar integral de los párvulos.',
      colorBase: 'bg-red-200', // Subimos intensidad
      colorIcono: 'text-action',
      forma: 'rounded-[40%_60%_60%_40%/60%_60%_40%_40%]', // Forma irregular 3
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 4,
      titulo: 'Inclusión',
      descripcion: 'Valoración de las diferencias como una tremenda oportunidad de crecimiento.',
      colorBase: 'bg-green-200', // Subimos intensidad
      colorIcono: 'text-green-600',
      forma: 'rounded-[30%_70%_40%_60%/60%_60%_40%_40%]', // Forma irregular 4
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      id: 5,
      titulo: 'Colaboración',
      descripcion: 'Trabajo conjunto entre el equipo educativo, las familias y nuestra comunidad.',
      colorBase: 'bg-purple-200', // Subimos intensidad
      colorIcono: 'text-purple-600',
      forma: 'rounded-[60%_40%_70%_30%/30%_30%_70%_70%]', // Forma irregular 5
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 6,
      titulo: 'Cuidado del Entorno',
      descripcion: 'Promoción del respeto y protección de nuestro medio ambiente desde pequeños.',
      colorBase: 'bg-orange-200', // Subimos intensidad
      colorIcono: 'text-orange-600',
      forma: 'rounded-[30%_70%_70%_30%/40%_50%_60%_50%]', // Forma irregular 6
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="valores" className="py-20 lg:py-32 bg-cream relative overflow-hidden">
      {/* Elementos flotantes de fondo para mayor dinamismo */}
      <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute -top-10 left-10 text-4xl opacity-10">🎨</motion.div>
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-1/2 -right-10 text-4xl opacity-10">🌟</motion.div>

      <div className="container-custom relative z-10">
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white text-action font-bold text-sm mb-4 border border-red-100 shadow-sm">
            Nuestros Pilares
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6leading-tight">
            Valores <span className="text-action font-caricatura tracking-wide text-5xl lg:text-6xl">Institucionales</span>
          </h2>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto leading-relaxed">
            Estos son los principios fundamentales que guían el día a día en nuestro jardín, formando niños íntegros, seguros y felices.
          </p>
        </motion.div>

        {/* Mosaico asimétrico y superpuesto */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {valores.map((valor, index) => (
            <motion.div
              key={valor.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className={`
                ${valor.colorBase} ${valor.forma} 
                p-8 md:p-10 flex flex-col items-center text-center 
                shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_15px_35px_rgba(30,86,160,0.1)] 
                border-4 border-white transform transition-all duration-300 
                hover:-translate-y-2 hover:scale-105 group
                ${index === 1 || index === 3 ? 'lg:translate-y-12' : ''} // Desfase vertical asimétrico
              `}
            >
              <div className={`w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-inner mb-8 ${valor.colorIcono} group-hover:rotate-6 transition-transform duration-300`}>
                {valor.icono}
              </div>
              <h3 className="font-caricatura text-3xl font-bold text-primary mb-4">
                {valor.titulo}
              </h3>
              <p className="text-dark/80 leading-relaxed font-medium text-sm md:text-base flex-grow">
                {valor.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValoresCreativos;