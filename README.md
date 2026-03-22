# El Castillo de los Bajitos - Landing Page MVP

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BA5?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

Landing page premium y orientada a conversiones desarrollada para el jardín infantil y sala cuna **"El Castillo de los Bajitos"** (San Bernardo, Chile). 

Este proyecto funciona como una herramienta de marketing estructurada bajo un modelo de **embudo de ventas (Sales Funnel)**. Está diseñada para transmitir confianza, seguridad y profesionalismo a los apoderados, maximizando la captación de matrículas a través de un recorrido visual estratégico.

## Características Principales

* **Arquitectura UX Estratégica:** El orden de los componentes guía al usuario desde el impacto emocional hasta la conversión directa, respondiendo sus dudas de forma secuencial.
* **Canales de Conversión Activos:** Integración de un botón flotante de WhatsApp animado para contacto inmediato y llamados a la acción (CTA) orientados a reseñas en Google Maps para mejorar el SEO local.
* **Animaciones Avanzadas:** Uso intensivo de `framer-motion` para animaciones de scroll (`whileInView`), efectos 3D (Pop-out), elementos SVG flotantes y micro-interacciones.
* **Diseño Moderno e Infantil:** Implementación de tendencias UI como *Glassmorphism* (tarjetas translúcidas), formas orgánicas (SVG Waves) y paletas de colores cálidos y pastel de alto contraste.
* **100% Responsivo:** Adaptación perfecta a dispositivos móviles, tablets y desktop mediante *Mobile-First Design* con Tailwind CSS.
* **Rendimiento y SEO:** Construido sobre Vite para tiempos de carga ultrarrápidos, e incluye el componente `StructuredData` para la optimización de motores de búsqueda.

## Tecnologías Utilizadas

* **Framework:** [React 18](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Estilos:** [Tailwind CSS 3](https://tailwindcss.com/)
* **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
* **Iconos y Vectores:** SVG nativos optimizados e integrados en código para cero latencia.

## Estructura del Proyecto (Embudo de Conversión)

El flujo de la aplicación se orquesta en `src/App.jsx` mediante la siguiente secuencia modular:

1.  **`Hero.jsx`**: Primer impacto visual con la propuesta de valor principal.
2.  **`CallToAction.jsx`**: Generación de sentido de urgencia (estado de matrículas).
3.  **`Niveles.jsx`**: Filtro de utilidad (rangos de edad y programas).
4.  **`Talleres.jsx`**: Diferenciadores competitivos de la institución.
5.  **`GaleriaExperiencias.jsx`**: Transparencia visual de las instalaciones y el día a día.
6.  **`EnfoqueEducativo.jsx`**: Sellos pedagógicos y metodología.
7.  **`Historia.jsx`**: Origen del proyecto para humanizar la marca.
8.  **`ValoresCreativo.jsx`**: Pilares institucionales y filosofía.
9.  **`Testimonios.jsx`**: Prueba social y validación de otros apoderados.
10. **`Contact.jsx`**: Formulario de contacto y mapa de ubicación.
11. **`WhatsAppButton.jsx`**: Componente global persistente para contacto rápido.