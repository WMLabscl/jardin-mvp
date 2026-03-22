import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ValoresCreativos = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const valores = [
    {
      id: '01',
      titulo: 'Respeto',
      descripcion: 'Reconocimiento de la diversidad, dignidad y derechos de cada niño y niña.',
      colorPunto: 'bg-blue-500',
      colorTexto: 'text-blue-500'
    },
    {
      id: '02',
      titulo: 'Empatía',
      descripcion: 'Comprensión y sensibilidad frente a las emociones, necesidades y experiencias de los niños.',
      colorPunto: 'bg-yellow-500',
      colorTexto: 'text-yellow-500'
    },
    {
      id: '03',
      titulo: 'Responsabilidad',
      descripcion: 'Compromiso con el cuidado, la educación y el bienestar integral de los párvulos.',
      colorPunto: 'bg-red-500',
      colorTexto: 'text-action'
    },
    {
      id: '04',
      titulo: 'Inclusión',
      descripcion: 'Valoración de las diferencias como una tremenda oportunidad de crecimiento.',
      colorPunto: 'bg-green-500',
      colorTexto: 'text-green-500'
    },
    {
      id: '05',
      titulo: 'Colaboración',
      descripcion: 'Trabajo conjunto entre el equipo educativo, las familias y nuestra comunidad.',
      colorPunto: 'bg-purple-500',
      colorTexto: 'text-purple-500'
    },
    {
      id: '06',
      titulo: 'Medioambiente',
      descripcion: 'Promoción del respeto y protección de nuestro medio ambiente desde pequeños.',
      colorPunto: 'bg-orange-500',
      colorTexto: 'text-orange-500'
    }
  ];

  return (
    /* CAMBIO DE FONDO: Eliminamos el blanco. Ahora es un gradiente de azules pastel más oscuros y notorios */
    <section id="valores" className="relative py-24 lg:py-36 bg-gradient-to-b from-[#D4E8FF] via-[#C0DEFF] to-[#A3CEFF] overflow-hidden">
      
      {/* OLA SUPERIOR (Ahora sí es 100% visible gracias al fondo azul) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H0V95.8C59.71,118.08,130.83,119.24,196.33,109.1,238.82,102.51,281.3,81.1,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* FONDOS MÁGICOS SUTILES (Mantenidos para dar luz) */}
      <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-yellow-300 opacity-20 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-purple-300 opacity-20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container-custom relative z-20 px-4 sm:px-6">
        
        {/* --- CABECERA --- */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-24"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white text-action font-bold text-sm mb-6 shadow-sm border border-blue-200 uppercase tracking-widest">
            Nuestra Filosofía
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight drop-shadow-sm">
            Nuestros <span className="text-yellow-500 font-caricatura tracking-wide text-5xl md:text-6xl lg:text-7xl">Pilares</span>
          </h2>
          <p className="text-lg md:text-xl text-dark/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Estos son los principios fundamentales que guían el día a día en nuestro jardín, formando niños íntegros, seguros y felices.
          </p>
        </motion.div>

        {/* --- LISTA DE VALORES (A DOS COLUMNAS) --- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {valores.map((valor, index) => (
            <motion.div
              key={valor.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: Math.floor(index / 2) * 0.15, ease: "easeOut" }}
              /* Tarjetas blancas que ahora hacen un contraste espectacular con el azul */
              className="group relative bg-white/85 backdrop-blur-md rounded-[30px] p-6 lg:p-8 border-2 border-white shadow-[0_15px_35px_rgba(30,86,160,0.1)] hover:shadow-[0_25px_50px_rgba(30,86,160,0.2)] hover:border-blue-200 transition-all duration-300 flex items-start gap-5 lg:gap-8 overflow-hidden"
            >
              {/* Barra de color lateral dinámica */}
              <div className={`absolute left-0 top-0 bottom-0 w-2 ${valor.colorPunto} opacity-50 group-hover:opacity-100 transition-opacity`}></div>

              {/* Número Gigante Decorativo */}
              <div className={`shrink-0 text-5xl md:text-6xl lg:text-7xl font-caricatura opacity-30 group-hover:opacity-60 transition-opacity duration-300 select-none ${valor.colorTexto} pl-2 pt-1`}>
                {valor.id}
              </div>

              {/* Textos */}
              <div className="flex-grow">
                <h3 className={`text-2xl lg:text-3xl font-bold mb-3 ${valor.colorTexto}`}>
                  {valor.titulo}
                </h3>
                <p className="text-dark/80 font-medium text-sm md:text-base leading-relaxed">
                  {valor.descripcion}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* OLA INFERIOR */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H0V95.8C59.71,118.08,130.83,119.24,196.33,109.1,238.82,102.51,281.3,81.1,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

    </section>
  );
};

export default ValoresCreativos;