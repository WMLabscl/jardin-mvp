/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8E1',     // Fondo cálido del castillo
        primary: '#1E56A0',   // Azul principal del logo
        action: '#E63946',    // Rojo de los techos (Para botones y CTAs)
        dark: '#333333',      // Gris oscuro para legibilidad de textos
        accent: '#8D6E63',    // Marrón para detalles
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      animation: {
        'morph': 'morph 8s ease-in-out infinite',
        'noise': 'noise 0.2s infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        morph: {
          '0%, 100%': { borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' },
          '34%': { borderRadius: '70% 30% 50% 50% / 30% 30% 70% 70%' },
          '67%': { borderRadius: '100% 60% 60% 100% / 100% 100% 60% 60%' },
        },
        noise: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 10%)' },
          '80%': { transform: 'translate(-15%, 0)' },
          '90%': { transform: 'translate(10%, 5%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
