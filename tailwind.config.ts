// Contenido FINAL Y CORRECTO para: tailwind.config.ts

import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography'; // <-- 1. Importa el plugin
import animate from 'tailwindcss-animate';      // Importa el otro plugin que usas

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}', // <-- Importante: Asegúrate de que escanea los archivos de contenido
	],
  prefix: "",
  theme: {
    // ...toda tu configuración de 'theme' (container, extend, etc.) va aquí...
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Tu configuración de 'extend' (colors, borderRadius, keyframes, animation)
    },
  },
  plugins: [
    animate, 
    typography // <-- 2. Añade el plugin aquí
  ],
}

export default config;