import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "KinderValley",
      "description": "Jardín Infantil donde la seguridad de estándar internacional se une al asombro del aprendizaje natural",
      "url": "https://kindervalley.edu",
      "logo": "https://kindervalley.edu/logo.png",
      "image": "https://kindervalley.edu/hero-image.jpg",
      "telephone": "+56223456789",
      "email": "contacto@kindervalley.edu",
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
        "https://facebook.com/kindervalley",
        "https://instagram.com/kindervalley",
        "https://linkedin.com/company/kindervalley"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios KinderValley",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Visibilidad Total - Cámaras HD",
              "description": "Sistema de cámaras HD para monitoreo en tiempo real"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Protocolos Clínicos - Enfermería 24/7",
              "description": "Atención médica profesional disponible las 24 horas"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Desarrollo Natural - Metodología Orgánica",
              "description": "Aprendizaje basado en metodologías naturales y orgánicas"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Inglés Nativo",
              "description": "Enseñanza de inglés con profesores nativos certificados"
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
