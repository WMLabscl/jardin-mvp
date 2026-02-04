import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const LifeAtKinder = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [selectedItem, setSelectedItem] = useState(null);

  const bentoContent = {
    alianzas: {
      title: "Alianzas 2025: Un éxito total",
      subtitle: "Más de 100 familias celebrando el aprendizaje",
      description: "Nuestro evento anual más esperado reunió a toda la comunidad KinderValley. Un día lleno de actividades, talleres para padres, y presentaciones de nuestros pequeños artistas y científicos.",
      images: [
        "https://images.unsplash.com/photo-1566004100631-35d015d4a492?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3"
      ],
      highlights: [
        "🎨 10 talleres interactivos",
        "🌟 3 presentaciones artísticas",
        "🍃 Zona de naturaleza al aire libre",
        "👨‍👩‍👧 Actividades familiares"
      ]
    },
    certificacion: {
      title: "Sello COVID+ Certificación 2026",
      subtitle: "Distinción máxima en seguridad sanitaria",
      description: "KinderValley ha renovado su certificación COVID+ con la máxima distinción. Nuestros protocolos de higiene, ventilación y bioseguridad son auditados trimestralmente.",
      images: [
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3"
      ],
      highlights: [
        "✓ Sistema HEPA en todas las salas",
        "✓ Protocolo diario de sanitización",
        "✓ Personal capacitado en bioseguridad",
        "✓ Auditorías trimestrales"
      ]
    },
    openhouse: {
      title: "Open House - Marzo 15",
      subtitle: "Conoce nuestro espacio",
      description: "Te invitamos a recorrer nuestras instalaciones, conocer a nuestro equipo y descubrir la metodología KinderValley en acción. Incluye tour guiado, sesión de preguntas, y tiempo para que los niños exploren.",
      images: [
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-4.0.3"
      ],
      highlights: [
        "📅 Sábado 15 de Marzo",
        "⏰ 10:00 AM - 1:00 PM",
        "🎁 Regalos para los niños",
        "☕ Café y snacks incluidos"
      ]
    },
    huerta: {
      title: "Taller de Huerta Orgánica",
      subtitle: "Nuevo programa 2026",
      description: "Los niños aprenden sobre ciclos naturales, responsabilidad ambiental y alimentación saludable. Cada sala tiene su propio espacio de cultivo donde siembran, cuidan y cosechan vegetales de estación.",
      images: [
        "https://images.unsplash.com/photo-1596464716127-f9a8759fa069?ixlib=rb-1.2.1",
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3"
      ],
      highlights: [
        "🌱 Huerta por sala",
        "🥕 Cosecha semanal",
        "👩‍🌾 Talleres de compostaje",
        "🍅 Recetas saludables"
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
          <span className="text-forest font-bold tracking-wider text-sm uppercase">Nuestra Comunidad</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mt-2">
            Vida en <span className="italic text-forest">KinderValley</span>
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
              alt="Alianzas 2025" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex flex-col justify-end p-8">
              <span className="bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">
                Destacado
              </span>
              <h3 className="text-white font-serif text-2xl">Alianzas 2025: Un éxito total</h3>
              <p className="text-white/80 text-sm mt-1">Más de 100 familias celebrando el aprendizaje.</p>
            </div>
          </motion.div>

          {/* 2. LOGRO IMPORTANTE (Tarjeta Blanca) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            onClick={() => setSelectedItem('certificacion')}
            className="bg-white p-8 rounded-[32px] border border-forest/10 flex flex-col justify-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Decoración de fondo */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-forest/5 rounded-full blur-xl"></div>
            
            <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center text-forest mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 className="font-serif text-xl text-charcoal font-bold mb-2">Sello COVID+</h4>
            <p className="text-charcoal/60 text-sm">Certificación sanitaria 2026 renovada con distinción máxima.</p>
          </motion.div>

          {/* 3. PRÓXIMA ACTIVIDAD (Tarjeta Verde Oscura) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onClick={() => setSelectedItem('openhouse')}
            className="bg-forest p-8 rounded-[32px] flex flex-col justify-between text-cream shadow-xl relative overflow-hidden cursor-pointer"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
             </div>
             <div>
               <span className="text-green-300 text-sm font-semibold tracking-widest uppercase">Próximo Evento</span>
               <h3 className="font-serif text-2xl mt-2">Open House</h3>
             </div>
             <div className="border-t border-green-700/50 pt-4 mt-4">
               <div className="flex items-center justify-between">
                 <span className="text-3xl font-bold">15</span>
                 <div className="text-right">
                   <p className="text-xs uppercase text-green-300">Marzo</p>
                   <p className="text-xs">10:00 AM</p>
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
              alt="Taller de Huerta" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors p-6 flex items-end">
              <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full">
                <p className="text-charcoal font-bold text-sm">🌱 Nuevo: Taller de Huerta Orgánica</p>
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
              className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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
                  className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-charcoal shadow-lg transition-all hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
                      {bentoContent[selectedItem].title}
                    </h3>
                    <p className="text-forest font-semibold text-lg">
                      {bentoContent[selectedItem].subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
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
                  <div className="bg-white rounded-[24px] p-8 border border-forest/10">
                    <h4 className="font-serif text-xl text-charcoal mb-4">Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {bentoContent[selectedItem].highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          className="flex items-center gap-2 text-charcoal/80"
                        >
                          <span className="text-lg">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex justify-center">
                    <button className="bg-forest text-cream px-8 py-4 rounded-full font-bold hover:bg-forest/90 transition-colors">
                      Más Información
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
