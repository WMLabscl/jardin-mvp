import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333333] text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/imagenes/logo.png" alt="Logo El Castillo de los Bajitos" className="w-10 h-10 object-contain" />
              <div className="leading-tight">
                <p className="text-xs text-white/70">Jardin Infantil y Sala Cuna</p>
                <span className="font-serif text-xl sm:text-2xl font-bold">
                  El Castillo de los <span className="text-blue-400">Bajitos</span>
                </span>
              </div>
            </div>
            <p className="text-white/70 max-w-md leading-relaxed">
              Un espacio educativo donde acompanamos a ninos y ninas con amor, respeto y dedicacion en sus primeros anos de vida.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Equipo', 'Contacto'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-blue-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-white/70">
              <li>+56 2 2345 6789</li>
              <li>contacto@castillodelosbajitos.cl</li>
              <li>Av. Principal 123, Santiago</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} El Castillo de los Bajitos. Todos los derechos reservados.</p>
          <p className="text-text-gray">
                Desarrollado por{' '}
                <a 
                  href="https://wmlabs.cl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-100 font-semibold hover:underline"
                >
                  WM Labs
                </a>
              </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
