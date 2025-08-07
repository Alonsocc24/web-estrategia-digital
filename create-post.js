// Contenido para el archivo: create-post.js

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// --- Configuración ---
const authorName = "Estrategia Digital"; // Puedes cambiar tu nombre por defecto aquí
// -------------------

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- Creador de Artículos para Estrategia Digital ---");

rl.question('Introduce el título completo del nuevo artículo: ', (title) => {
  if (!title) {
    console.error("❌ El título no puede estar vacío.");
    rl.close();
    return;
  }

  // Convertir el título en un 'slug' para la URL y el nombre de archivo
  // Ejemplo: "Mi Gran Título" -> "mi-gran-titulo"
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, '-')       // Reemplaza espacios con -
    .replace(/[^\w-]+/g, '')    // Elimina todos los caracteres no alfanuméricos excepto -
    .replace(/--+/g, '-');      // Reemplaza múltiples - con uno solo

  const date = new Date().toISOString().split('T')[0]; // Fecha de hoy en formato YYYY-MM-DD
  const fileName = `${slug}.mdx`;
  const filePath = path.join(process.cwd(), 'content', 'blog', fileName);

  // Plantilla del contenido del archivo
  const frontmatter = `---
title: "${title}"
date: "${date}"
summary: "Escribe aquí un resumen atractivo de 2-3 líneas para este artículo."
author: "${authorName}"
image: "/images/blog/${slug}.jpg"
---

## Comienza a Escribir tu Artículo Aquí

Reemplaza este texto con el contenido de tu post. Puedes usar la sintaxis de Markdown para darle formato.

### Ejemplo de Subtítulo

- Listas
- **Negrita**
- *Cursiva*
`;

  // Crear la carpeta /content/blog si no existe
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  if (!fs.existsSync(contentDir)){
      fs.mkdirSync(contentDir, { recursive: true });
  }

  // Escribir el archivo
  fs.writeFileSync(filePath, frontmatter);

  console.log("\n----------------------------------------------------");
  console.log(`✅ ¡Artículo creado con éxito!`);
  console.log(`   -> Archivo: content/blog/${fileName}`);
  console.log(`\n💡 Tarea Pendiente:`);
  console.log(`   -> Añade una imagen llamada '${slug}.jpg' en la carpeta 'public/images/blog/'.`);
  console.log("----------------------------------------------------");
  
  rl.close();
});