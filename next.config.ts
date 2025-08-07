// Contenido para: next.config.ts
const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configura `pageExtensions` para incluir archivos `mdx`
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Opcionalmente, añade cualquier otra configuración de Next.js que tengas
}

module.exports = withMDX(nextConfig)