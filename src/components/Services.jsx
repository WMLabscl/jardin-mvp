import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Bienestar integral y enfoque afectivo',
      subtitle: 'Sello Educativo 1',
      description: 'Priorizamos el bienestar fisico, emocional y social de los ninos y ninas, promoviendo vinculos seguros, buen trato y contencion emocional.',
      features: ['Buen trato', 'Clima protector', 'Acompañamiento emocional']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Educacion personalizada e inclusiva',
      subtitle: 'Sello Educativo 2',
      description: 'Valoramos las caracteristicas individuales de cada parvulo y adaptamos experiencias educativas segun ritmos, intereses y necesidades.',
      features: ['Respeto por la diversidad', 'Equidad', 'Aprendizaje personalizado']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Aprendizaje vivencial y naturaleza',
      subtitle: 'Sello Educativo 3',
      description: 'Fomentamos el aprendizaje activo a traves del juego, la exploracion y el contacto directo con el entorno natural.',
      features: ['Huerto educativo', 'Granja educativa', 'Conciencia ambiental']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: 'Vinculacion familia - jardin - comunidad',
      subtitle: 'Sello Educativo 4',
      description: 'Fortalecemos una relacion cercana y colaborativa con las familias, reconociendolas como primeros agentes educativos.',
      features: ['Comunidad participativa', 'Trabajo colaborativo', 'Programa After School']
    }
  ];

  return (
    <section id="servicios" className="section-padding relative overflow-hidden bg-gradient-to-br from-[#1E56A0] via-[#1D4E89] to-[#1E56A0] text-white">
      
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-orange-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/15 text-blue-100 border border-white/20 font-semibold text-sm mb-4 backdrop-blur-md">
            Proyecto Educativo
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6">
            Mision, Vision y <span className="text-blue-300 italic">Sellos</span>
          </h2>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Brindamos una educacion de calidad, integral e inclusiva desde sala cuna hasta nivel transicion, con experiencias significativas y respetuosas de cada parvulo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-10">
          <div className="p-8 rounded-[32px] border border-white/10 bg-white/5">
            <h3 className="font-serif text-3xl text-white font-bold mb-4">Mision</h3>
            <p className="text-blue-100 leading-relaxed">
              Promover el bienestar, el desarrollo pleno y aprendizajes significativos en coherencia con las Bases Curriculares de la Educacion Parvularia, fortaleciendo tambien el vinculo con familias y comunidad.
            </p>
          </div>
          <div className="p-8 rounded-[32px] border border-white/10 bg-white/5">
            <h3 className="font-serif text-3xl text-white font-bold mb-4">Vision</h3>
            <p className="text-blue-100 leading-relaxed">
              Consolidarnos como un jardin infantil reconocido por su educacion de calidad, respeto por la diversidad, aprendizaje activo y formacion de ninos y ninas seguros, autonomos y participativos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-8 rounded-[40px] border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-400/20 text-blue-300 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-blue-300 font-medium">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-blue-100 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-100 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="p-12 max-w-4xl mx-auto rounded-[40px] border border-white/10 bg-white/5">
            <h3 className="font-serif text-3xl font-bold text-white mb-4">
              La infancia crece feliz cuando hay amor y respeto
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              "El Castillo de los Bajitos: donde la infancia crece feliz."
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-action text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-red-700 shadow-lg transition-all duration-300"
            >
              Solicitar Entrevista
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
