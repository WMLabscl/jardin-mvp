# El Castillo de los Bajitos - Landing Page MVP

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BA5?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

Landing page premium y orientada a conversiones desarrollada para el jardín infantil y sala cuna **"El Castillo de los Bajitos"** (San Bernardo, Chile). 

Este proyecto no es solo un sitio web informativo, sino una herramienta de marketing estructurada como un **embudo de ventas (Sales Funnel)**, diseñada para transmitir confianza, seguridad y profesionalismo a los padres, maximizando la captación de matrículas.

## Características Principales

* **Arquitectura UX Estratégica:** El orden de los componentes está diseñado para responder las dudas del usuario paso a paso (Hero -> CTA -> Niveles -> Talleres Especiales -> Pilares -> Historia -> Contacto).
* **Animaciones Avanzadas:** Uso intensivo de `framer-motion` para animaciones de scroll (`whileInView`), parallax, elementos SVG flotantes y micro-interacciones (hover states).
* **Diseño Moderno e Infantil:** Implementación de tendencias UI como *Glassmorphism* (tarjetas de cristal difuminado), formas orgánicas (SVG Waves) y paletas de colores pasteles contrastantes.
* **100% Responsivo:** Adaptación perfecta a dispositivos móviles, tablets y desktop mediante *Mobile-First Design* con Tailwind CSS.
* **Rendimiento Óptimo:** Construido sobre Vite para tiempos de carga ultrarrápidos y una experiencia de desarrollo fluida.

## Tecnologías Utilizadas

* **Framework:** [React 18](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Estilos:** [Tailwind CSS 3](https://tailwindcss.com/)
* **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
* **Iconos y Vectores:** SVG nativos optimizados.

## Estructura del Proyecto (Embudo de Conversión)

El flujo de la aplicación se encuentra en `src/App.jsx` y se divide en los siguientes componentes modulares:

1.  `Hero.jsx`: Primer impacto visual con propuesta de valor.
2.  `CallToAction.jsx`: Sentido de urgencia (Matrículas abiertas).
3.  `Niveles.jsx`: Filtro de utilidad (Edades y salas).
4.  `Talleres.jsx`: Diferenciador competitivo (Huerto, Cocina, Arte + App de Cámaras).
5.  `ValoresCreativo.jsx` / `EnfoqueEducativo.jsx`: Autoridad pedagógica.
6.  `Historia.jsx` & `Testimonios.jsx`: Prueba social y humanización de la marca.
7.  `Contact.jsx` & `Footer.jsx`: Cierre y acción.

## Instalación y Uso

Para correr este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio**
   ```bash
   git clone [https://github.com/wmlabscl/jardin-mvp.git](https://github.com/wmlabscl/jardin-mvp.git)
   cd jardin-mvp
Instalar dependencias

Bash
npm install
Iniciar el servidor de desarrollo

Bash
npm run dev
Construir para producción

Bash
npm run build