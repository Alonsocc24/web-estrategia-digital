// Contenido FINAL Y CORRECTO para: next.config.ts

const createMDX = require('@next/mdx')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configura `pageExtensions` para incluir archivos `mdx` además de los existentes
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Tu configuración de Next.js aquí
}

const withMDX = createMDX({
  // Opciones para MDX si las necesitas en el futuro
})

// Exporta la configuración final envuelta en el plugin de MDX
module.exports = withMDX(nextConfig)