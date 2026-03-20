import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    const baseUrl = window.location.origin;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Jardin Infantil y Sala Cuna El Castillo de los Bajitos",
      "description": "Educacion parvularia de calidad, integral e inclusiva en un entorno seguro, afectivo y respetuoso.",
      "url": baseUrl,
      "logo": `${baseUrl}/imagenes/logo.png`,
      "image": `${baseUrl}/imagenes/foto_hero.jpg`,
      "telephone": "+56223456789",
      "email": "contacto@castillodelosbajitos.cl",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Principal 123",
        "addressLocality": "Santiago",
        "addressCountry": "CL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-33.4489",
        "longitude": "-70.6693"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "sameAs": [
        "https://facebook.com/elcastillodelosbajitos",
        "https://instagram.com/elcastillodelosbajitos"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Proyecto Educativo El Castillo de los Bajitos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bienestar integral y enfoque afectivo",
              "description": "Promovemos vinculos seguros, buen trato y contencion emocional."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Educacion personalizada e inclusiva",
              "description": "Experiencias adaptadas a ritmos, intereses y necesidades de cada parvulo."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Aprendizaje vivencial y contacto con la naturaleza",
              "description": "Juego, exploracion y entorno natural como base del aprendizaje."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vinculacion familia - jardin - comunidad",
              "description": "Trabajo colaborativo con familias y programa After School."
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default StructuredData;
