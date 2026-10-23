/** @type {import('tailwindcss').Config} */
module.exports = {
  // Incluye los .md porque contienen clases de Tailwind (p. ej. los iframes de lab.md)
  // y el JS de index.html, que genera clases dinámicamente como strings.
  content: ['./index.html', './content/**/*.md'],
  theme: {
    extend: {
      fontFamily: { sans: ['Outfit', 'sans-serif'] },
      colors: {
        dark: '#121212',
        brand: '#ff5e00',
        brandLight: '#ff8c00'
      }
    }
  },
  plugins: []
};
