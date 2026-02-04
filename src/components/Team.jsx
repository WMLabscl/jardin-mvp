import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Team = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const teamMembers = [
    {
      name: 'Dra. María González',
      role: 'Directora Académica',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      expertise: 'PhD en Educación Temprana'
    },
    {
      name: 'Enf. Carmen Rojas',
      role: 'Jefa de Enfermería',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
      expertise: 'Especialista Pediátrica'
    },
    {
      name: 'Prof. James Wilson',
      role: 'Coordinador Inglés',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      expertise: 'Nativo Certificado TESOL'
    }
  ];

  return (
    <section id="equipo" className="section-padding relative bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-forest/10 text-forest font-semibold text-sm mb-4">
            Nuestro Equipo
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Profesionales <span className="text-gradient">Certificados</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Un equipo multidisciplinario comprometido con el desarrollo integral de cada niño
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="group"
            >
              <div className="glass-card p-8 text-center">
                <div className="relative inline-block mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-forest/20"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-forest to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                  {member.name}
                </h3>
                <p className="text-forest font-semibold mb-3">{member.role}</p>
                <p className="text-charcoal/60 text-sm">{member.expertise}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
