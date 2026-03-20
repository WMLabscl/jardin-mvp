import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Team = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const teamMembers = [
    {
      name: 'Respeto',
      role: 'Valor Institucional',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      expertise: 'Reconocimiento de la diversidad, dignidad y derechos de cada nino y nina.'
    },
    {
      name: 'Responsabilidad',
      role: 'Valor Institucional',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
      expertise: 'Compromiso con el cuidado, la educacion y el bienestar integral de los parvulos.'
    },
    {
      name: 'Empatia',
      role: 'Valor Institucional',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      expertise: 'Sensibilidad frente a las emociones y necesidades de ninos, ninas y familias.'
    },
    {
      name: 'Inclusion',
      role: 'Valor Institucional',
      image: 'https://images.unsplash.com/photo-1469571486292-b53601020ac4?w=400&q=80',
      expertise: 'Valoramos las diferencias como oportunidad de aprendizaje y crecimiento.'
    },
    {
      name: 'Colaboracion',
      role: 'Valor Institucional',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80',
      expertise: 'Trabajo conjunto entre equipo educativo, familias y comunidad.'
    },
    {
      name: 'Cuidado del entorno',
      role: 'Valor Institucional',
      image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400&q=80',
      expertise: 'Promovemos el respeto y proteccion del medio ambiente desde la primera infancia.'
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
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Formacion Institucional
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-dark mb-6">
            Valores <span className="text-gradient">Institucionales</span>
          </h2>
          <p className="text-xl text-dark/70 max-w-2xl mx-auto">
            Nuestro proyecto educativo se sostiene en principios que guian cada experiencia de aprendizaje.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-dark/60 text-sm">{member.expertise}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
