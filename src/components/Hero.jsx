import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-green-50/30 to-cream pt-32 md:pt-40 pb-24 sm:pb-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-forest/10 text-forest font-semibold text-sm backdrop-blur-sm border border-forest/20">
                <span className="w-2 h-2 bg-forest rounded-full mr-2 animate-pulse"></span>
                Educación de Estándar Internacional
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-tight"
            >
              Donde la{' '}
              <span className="text-gradient">Seguridad</span>
              {' '}se une al{' '}
              <span className="text-gradient">Aprendizaje Natural</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-charcoal/70 leading-relaxed max-w-xl"
            >
              Jardín Infantil donde la seguridad de estándar internacional se une al asombro del aprendizaje natural. Un espacio diseñado para el desarrollo integral de tu hijo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-forest to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-forest/30 transition-all duration-300 w-full sm:w-auto"
              >
                Agendar Tour Virtual
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/60 backdrop-blur-lg border border-forest/20 text-forest px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/80 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Conocer Metodología
              </motion.button>
            </motion.div>

            {/* Stats - Diseño horizontal compacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {[
                { value: '100%', label: 'Visibilidad HD' },
                { value: '24/7', label: 'Enfermería' },
                { value: '15', label: 'Años Experiencia' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/40 backdrop-blur-sm px-4 py-3 rounded-2xl border border-forest/10">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-forest">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-charcoal/70 font-medium max-w-[80px]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image con forma orgánica */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* Forma orgánica de fondo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="organic-shape w-[500px] h-[500px] bg-gradient-to-br from-forest/20 to-green-400/20 blur-3xl"></div>
            </div>

            {/* Imagen principal con máscara orgánica */}
            <div className="relative z-10 w-full max-w-md lg:max-w-lg">
              <motion.div
                animate={{
                  borderRadius: [
                    '40% 60% 70% 30% / 40% 50% 60% 50%',
                    '70% 30% 50% 50% / 30% 30% 70% 70%',
                    '100% 60% 60% 100% / 100% 100% 60% 60%',
                    '40% 60% 70% 30% / 40% 50% 60% 50%'
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="relative overflow-hidden w-full aspect-square shadow-2xl shadow-forest/20"
              >
                <img
                  src="/imagenes/foto_hero.jpg"
                  alt="Niños felices en KinderValley"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/10 to-transparent"></div>
              </motion.div>

              {/* Elementos decorativos flotantes */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-lg rounded-3xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-forest rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-charcoal text-sm">Certificado</div>
                    <div className="text-xs text-charcoal/60">Internacional</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-lg rounded-3xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-forest rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-charcoal text-sm">Cámaras HD</div>
                    <div className="text-xs text-charcoal/60">En Vivo</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee de servicios */}
      <div className="absolute bottom-0 left-0 right-0 bg-forest/5 backdrop-blur-sm py-4 sm:py-6 overflow-hidden border-t border-forest/10">
        <div className="flex whitespace-nowrap">
          <div className="marquee-content flex items-center space-x-8 sm:space-x-12 px-4 sm:px-6">
            {[
              'CÁMARAS HD',
              'ENFERMERÍA 24/7',
              'METODOLOGÍA ORGÁNICA',
              'INGLÉS NATIVO',
              'PROTOCOLOS CLÍNICOS',
              'NUTRICIÓN BALANCEADA',
              'DESARROLLO NATURAL',
              'SEGURIDAD INTERNACIONAL'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-forest font-bold text-sm sm:text-base lg:text-lg">{item}</span>
                <span className="text-forest text-xl sm:text-2xl">✦</span>
              </div>
            ))}
          </div>
          <div className="marquee-content flex items-center space-x-8 sm:space-x-12 px-4 sm:px-6" aria-hidden="true">
            {[
              'CÁMARAS HD',
              'ENFERMERÍA 24/7',
              'METODOLOGÍA ORGÁNICA',
              'INGLÉS NATIVO',
              'PROTOCOLOS CLÍNICOS',
              'NUTRICIÓN BALANCEADA',
              'DESARROLLO NATURAL',
              'SEGURIDAD INTERNACIONAL'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-forest font-bold text-sm sm:text-base lg:text-lg">{item}</span>
                <span className="text-forest text-xl sm:text-2xl">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
