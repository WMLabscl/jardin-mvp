import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonios = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const testimonios = [
    {
      id: 1,
      inicial: 'F',
      colorInicial: 'bg-blue-100 text-blue-600',
      bordeTarjeta: 'border-blue-100 hover:border-blue-300', // Borde azul sutil
      comillasColor: 'text-blue-50',
      nombre: 'Familia Fernández',
      relacion: 'Papás de Tomás (Nivel Medio)',
      texto: '"Dejar a nuestro hijo en el jardín por primera vez nos daba mucho miedo, pero desde el día uno sentimos el profesionalismo y el amor del equipo. Tomás llega feliz todos los días y ha aprendido muchísimo. Es literalmente su segundo hogar."',
    },
    {
      id: 2,
      inicial: 'C',
      colorInicial: 'bg-red-100 text-action',
      bordeTarjeta: 'border-red-100 hover:border-red-300', // Borde rojo sutil
      comillasColor: 'text-red-50',
      nombre: 'Carolina M.',
      relacion: 'Mamá de Sofía (Sala Cuna)',
      texto: '"El mejor lugar que pudimos elegir. Me voy a trabajar tranquila sabiendo que mi bebé está en un entorno seguro, impecable y donde la estimulan con tanto cariño. La comunicación con las tías es excelente."',
    },
    {
      id: 3,
      inicial: 'A',
      colorInicial: 'bg-yellow-100 text-yellow-600',
      bordeTarjeta: 'border-yellow-100 hover:border-yellow-300', // Borde amarillo sutil
      comillasColor: 'text-yellow-50',
      nombre: 'Andrés y Camila',
      relacion: 'Papás de Lucas (After School)',
      texto: '"El programa After School nos salvó la vida por nuestros horarios de trabajo. Lucas no solo está seguro, sino que sigue aprendiendo, jugando en la granja y compartiendo con otros niños en vez de estar frente a una pantalla."',
    }
  ];

  return (
    /* FONDO BLANCO PURO RESTAURADO */
    <section id="testimonios" className="py-12 lg:py-12 bg-white relative overflow-hidden">
      
      {/* Manchas de luz hiper sutiles solo para dar un toque de magia en las esquinas */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-50/50 rounded-full blur-[80px] pointer-events-none translate-y-1/3"></div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        
        {/* --- CABECERA --- */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-cream text-action font-bold text-sm mb-6 shadow-sm border border-yellow-200 uppercase tracking-widest">
            Lo que dicen las familias
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Nuestra <span className="text-action font-caricatura tracking-wide text-5xl md:text-6xl lg:text-7xl">Comunidad</span>
          </h2>
          <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto leading-relaxed font-medium">
            La confianza de nuestros apoderados es nuestro mayor orgullo. Descubre cómo vivimos la educación y el cuidado día a día.
          </p>
        </motion.div>

        {/* --- GRID DE TESTIMONIOS (SOMBRAS POTENCIADAS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              /* AQUÍ ESTÁ LA MAGIA: Sombras mucho más profundas y amplias, y borde de 2px de color pastel */
              className={`bg-white rounded-[40px] p-8 md:p-10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-12px_rgba(30,86,160,0.15)] border-2 ${testimonio.bordeTarjeta} transition-all duration-300 hover:-translate-y-2 flex flex-col relative group overflow-hidden`}
            >
              {/* Comillas gigantes decorativas de fondo (ahora combinan con el color de la tarjeta) */}
              <div className={`absolute top-6 right-6 ${testimonio.comillasColor} opacity-60 font-serif text-9xl leading-none select-none group-hover:scale-110 transition-transform duration-500`}>
                "
              </div>

              {/* Estrellitas */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texto del testimonio */}
              <p className="text-dark/80 font-medium text-base md:text-lg leading-relaxed mb-10 flex-grow relative z-10 italic">
                {testimonio.texto}
              </p>

              {/* Datos del Apoderado */}
              <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-gray-50">
                <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center font-bold text-xl ${testimonio.colorInicial}`}>
                  {testimonio.inicial}
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg leading-tight">{testimonio.nombre}</h4>
                  <p className="text-sm text-dark/60 font-medium mt-1">{testimonio.relacion}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- LLAMADO A LA ACCIÓN PARA GOOGLE REVIEWS --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex flex-col items-center justify-center text-center"
        >
          <div className="w-16 h-1 bg-blue-100 rounded-full mb-8"></div>
          <h4 className="text-2xl font-bold text-primary mb-3">¿Eres parte de nuestra familia?</h4>
          <p className="text-dark/70 font-medium mb-8 max-w-md">
            Tu opinión nos ayuda a crecer y a que más familias conozcan nuestro trabajo. ¡Nos encantaría leerte!
          </p>
          
          <a 
            href="#" /* <-- Reemplaza el # por el link de Google Mi Negocio del Jardín */
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-dark font-bold text-lg rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.08)] border-2 border-gray-100 hover:border-gray-200 hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Ícono de Google (G) */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Califícanos en Google
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonios;