// Contenido FINAL Y CORRECTO para: next.config.js

const createMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Opciones para MDX si las necesitas
});

module.exports = withMDX(nextConfig);