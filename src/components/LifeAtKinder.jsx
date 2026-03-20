import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const LifeAtKinder = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [selectedItem, setSelectedItem] = useState(null);

  const bentoContent = {
    alianzas: {
      title: "Historia del Jardin",
      subtitle: "Un sueno educativo que sigue creciendo",
      description: "El Castillo de los Bajitos nace de la vocacion de crear un espacio donde ninos y ninas crezcan felices, seguros y rodeados de carino, con educacion parvularia de calidad y trabajo colaborativo con las familias.",
      images: [
        "https://images.unsplash.com/photo-1566004100631-35d015d4a492?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3"
      ],
      highlights: [
        "Educacion centrada en el bienestar integral",
        "Compromiso con la infancia y su desarrollo",
        "Vinculo cercano entre hogar y jardin",
        "Comunidad educativa en crecimiento"
      ]
    },
    certificacion: {
      title: "Mensaje para Familias",
      subtitle: "Acompanamos una decision importante",
      description: "Sabemos que elegir jardin infantil es una de las decisiones mas importantes para una familia. Trabajamos cada dia para brindar un ambiente calido, seguro y lleno de afecto.",
      images: [
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3"
      ],
      highlights: [
        "Entorno seguro, afectivo y protector",
        "Aprender jugando con confianza",
        "Comunidad educativa cercana",
        "Trabajo conjunto con madres y padres"
      ]
    },
    openhouse: {
      title: "Visitanos por Primera Vez",
      subtitle: "Puertas abiertas para tu familia",
      description: "Nuestro equipo educativo recibe a cada familia con cercania, responsabilidad y carino, resolviendo dudas y mostrando un entorno con oportunidades de aprendizaje para cada parvulo.",
      images: [
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-4.0.3"
      ],
      highlights: [
        "Recorrido por nuestros espacios educativos",
        "Presentacion de nuestra propuesta pedagogica",
        "Dialogo directo con el equipo",
        "Acompanamiento personalizado"
      ]
    },
    huerta: {
      title: "Programa After School",
      subtitle: "Apoyo a la conciliacion familiar",
      description: "Fortalecemos el vinculo familia-jardin-comunidad mediante instancias como After School, aportando continuidad educativa y acompanamiento en la rutina diaria.",
      images: [
        "https://images.unsplash.com/photo-1596464716127-f9a8759fa069?ixlib=rb-1.2.1",
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3"
      ],
      highlights: [
        "Acompana horarios familiares",
        "Refuerza habitos y autonomia",
        "Promueve convivencia positiva",
        "Amplia experiencias de aprendizaje"
      ]
    }
  };

  return (
    <section className="section-padding bg-cream relative">
      <div className="container-custom">
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-wider text-sm uppercase">Nuestra Comunidad</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-dark mt-2">
            Vida en <span className="italic text-primary">El Castillo de los Bajitos</span>
          </h2>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* 1. ACTIVIDAD PRINCIPAL (Grande - Ocupa 2x2) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            onClick={() => setSelectedItem('alianzas')}
            className="md:col-span-2 md:row-span-2 relative rounded-[32px] overflow-hidden group shadow-xl cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1566004100631-35d015d4a492?ixlib=rb-4.0.3" 
              alt="Historia del jardin" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex flex-col justify-end p-8">
              <span className="bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">
                Destacado
              </span>
              <h3 className="text-white font-serif text-2xl">Historia del Jardin</h3>
              <p className="text-white/80 text-sm mt-1">Un sueno educativo que sigue creciendo.</p>
            </div>
          </motion.div>

          {/* 2. LOGRO IMPORTANTE (Tarjeta Blanca) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            onClick={() => setSelectedItem('certificacion')}
            className="bg-white p-8 rounded-[32px] border border-primary/10 flex flex-col justify-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Decoración de fondo */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
            
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 className="font-serif text-xl text-dark font-bold mb-2">Mensaje a las Familias</h4>
            <p className="text-dark/60 text-sm">Trabajamos cada dia para cuidar y educar con cercania y confianza.</p>
          </motion.div>

          {/* 3. PRÓXIMA ACTIVIDAD (Tarjeta Verde Oscura) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onClick={() => setSelectedItem('openhouse')}
            className="bg-[#1E56A0] p-8 rounded-[32px] flex flex-col justify-between text-cream shadow-xl relative overflow-hidden cursor-pointer"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
             </div>
             <div>
               <span className="text-blue-300 text-sm font-semibold tracking-widest uppercase">Primer Acercamiento</span>
               <h3 className="font-serif text-2xl mt-2">Conoce el Jardin</h3>
             </div>
             <div className="border-t border-blue-700/50 pt-4 mt-4">
               <div className="flex items-center justify-between">
                 <span className="text-3xl font-bold">Hoy</span>
                 <div className="text-right">
                   <p className="text-xs uppercase text-blue-300">Visitas</p>
                   <p className="text-xs">con cita previa</p>
                 </div>
               </div>
             </div>
          </motion.div>

          {/* 4. TALLER/CLASE ESPECIAL (Imagen Horizontal) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            onClick={() => setSelectedItem('huerta')}
            className="md:col-span-2 relative rounded-[32px] overflow-hidden group cursor-pointer"
          >
             <img 
              src="https://images.unsplash.com/photo-1596464716127-f9a8759fa069?ixlib=rb-1.2.1" 
              alt="After School" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors p-6 flex items-end">
              <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full">
                <p className="text-dark font-bold text-sm">Programa After School para nuestras familias</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* MODAL DE DETALLE */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-cream rounded-[32px] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-dark shadow-lg transition-all hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="font-serif text-3xl md:text-4xl text-dark mb-2">
                      {bentoContent[selectedItem].title}
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      {bentoContent[selectedItem].subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-dark/80 text-lg leading-relaxed mb-8">
                    {bentoContent[selectedItem].description}
                  </p>

                  {/* Image Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {bentoContent[selectedItem].images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative rounded-[24px] overflow-hidden aspect-video md:aspect-square"
                      >
                        <img
                          src={img}
                          alt={`${bentoContent[selectedItem].title} - ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="bg-white rounded-[24px] p-8 border border-primary/10">
                    <h4 className="font-serif text-xl text-dark mb-4">Puntos Clave</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {bentoContent[selectedItem].highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          className="flex items-center gap-2 text-dark/80"
                        >
                          <span className="text-lg">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex justify-center">
                    <button className="bg-primary text-cream px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-colors">
                      Quiero saber mas
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
};

export default LifeAtKinder;
