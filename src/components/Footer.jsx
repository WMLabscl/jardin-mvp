import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Quitamos animaciones del contenedor padre para evitar el parpadeo
  return (
    <footer className="bg-primary text-cream relative w-full border-t-8 border-action overflow-hidden">
      
      {/* Decoración sutil de fondo para no dejarlo plano */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-action opacity-10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Columna 1: Marca y Eslogan */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded-2xl shadow-sm">
                <img src="/imagenes/logo.png" alt="Logo El Castillo de los Bajitos" className="w-14 h-14 object-contain" />
              </div>
              <div className="leading-tight">
                <p className="text-sm text-blue-200 font-bold mb-1 uppercase tracking-wider">Jardín Infantil y Sala Cuna</p>
                <span className="font-caricatura text-3xl lg:text-4xl text-white tracking-wide">
                  El Castillo de <span className="text-action">los Bajitos</span>
                </span>
              </div>
            </div>
            
            <p className="text-blue-100 max-w-md leading-relaxed font-medium">
              <span className="italic font-bold text-white">"Donde la infancia crece feliz."</span> <br/>
              Un espacio educativo donde acompañamos a niños y niñas con amor, respeto y dedicación en sus primeros años de vida.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex space-x-4 pt-2">
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#" aria-label="Facebook" className="w-12 h-12 bg-white/10 hover:bg-action rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" /></svg>
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#" aria-label="Instagram" className="w-12 h-12 bg-white/10 hover:bg-action rounded-full flex items-center justify-center transition-colors duration-300">
                 <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 1.5c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5zm0 4.35c2.288 0 4.15 1.862 4.15 4.15s-1.862 4.15-4.15 4.15-4.15-1.862-4.15-4.15 1.862-4.15 4.15-4.15zm0 1.5c-1.46 0-2.65 1.19-2.65 2.65s1.19 2.65 2.65 2.65 2.65-1.19 2.65-2.65-1.19-2.65-2.65-2.65zm3.8-3.4c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75z"/></svg>
              </motion.a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos Actualizados */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white border-b border-blue-400/30 pb-2 inline-block">Navegación</h3>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', link: '#inicio' },
                { name: 'Nuestra Historia', link: '#nosotros' },
                { name: 'Sellos Educativos', link: '#enfoque' },
                { name: 'Niveles', link: '#niveles' },
                { name: 'Valores', link: '#valores' },
                { name: 'Contacto', link: '#contacto' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="text-blue-100 hover:text-white hover:pl-2 flex items-center transition-all duration-300 font-medium">
                    <span className="text-action mr-2 text-xs">▶</span> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white border-b border-blue-400/30 pb-2 inline-block">Contacto</h3>
            <ul className="space-y-4 text-blue-100 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <span>San Bernardo,<br/>Región Metropolitana</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <span>+56 9 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <span className="break-all">contacto@elcastillodelosbajitos.cl</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Barra inferior */}
        <div className="border-t border-blue-400/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p className="mb-4 md:mb-0">&copy; {currentYear} El Castillo de los Bajitos. Todos los derechos reservados.</p>
          <p>
            Desarrollado con 💛 por{' '}
            <a href="https://wmlabs.cl" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-action transition-colors">
              WM Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;