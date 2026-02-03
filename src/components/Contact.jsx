import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="section-padding relative overflow-hidden bg-gradient-to-br from-forest via-green-700 to-forest">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-900/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        {/* Header centrado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-white/10 text-green-200 font-semibold text-sm mb-6 backdrop-blur-md border border-white/20">
            Visítanos
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6">
            Agenda tu <span className="text-green-300 italic">Visita</span>
          </h2>
          <p className="text-xl text-green-100/80 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo KinderValley puede ser el hogar perfecto para el desarrollo de tu hijo. Te esperamos para mostrarte nuestras instalaciones.
          </p>
        </motion.div>

        {/* Tarjetas de información de contacto */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              title: 'Teléfono',
              content: '+56 2 2345 6789',
              subtitle: 'Lun - Vie: 8:00 - 18:00'
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: 'Email',
              content: 'contacto@kindervalley.edu',
              subtitle: 'Respuesta en 24 hrs'
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: 'Ubicación',
              content: 'Av. Principal 123, Santiago',
              subtitle: 'Estacionamiento disponible'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-400/20 text-green-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-green-100 font-medium mb-1">{item.content}</p>
              <p className="text-green-200/60 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Formulario centrado */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg p-8 lg:p-12 rounded-[40px] border border-white/20">
            <h3 className="font-serif text-3xl font-bold text-white mb-2 text-center">Envíanos un mensaje</h3>
            <p className="text-green-100/70 text-center mb-8">Completa el formulario y nos pondremos en contacto contigo</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-green-200/50 focus:border-green-300 focus:ring-2 focus:ring-green-300/20 outline-none transition-all backdrop-blur-sm"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-green-200/50 focus:border-green-300 focus:ring-2 focus:ring-green-300/20 outline-none transition-all backdrop-blur-sm"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-green-200/50 focus:border-green-300 focus:ring-2 focus:ring-green-300/20 outline-none transition-all backdrop-blur-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-green-200/50 focus:border-green-300 focus:ring-2 focus:ring-green-300/20 outline-none transition-all backdrop-blur-sm resize-none"
                  placeholder="Cuéntanos sobre tu consulta..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-white text-forest px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
