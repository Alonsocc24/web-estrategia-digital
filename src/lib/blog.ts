// Contenido FINAL Y COMPLETO para: src/lib/blog.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Apuntamos a la carpeta donde están nuestros artículos.
// process.cwd() es la raíz de tu proyecto.
const postsDirectory = path.join(process.cwd(), 'content/blog');

/**
 * Define la estructura de datos que esperamos del frontmatter de cada artículo.
 */
type Frontmatter = {
  title: string;
  date: string;
  summary: string;
  author: string;
  image: string;
};

/**
 * Lee todos los archivos .mdx de la carpeta /content/blog,
 * extrae sus metadatos (frontmatter), y los devuelve
 * como un array de objetos ordenados por fecha descendente.
 */
export function getSortedPostsData() {
  // Lee todos los nombres de archivo en el directorio (ej: 'mi-post.mdx')
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Crea el 'slug' a partir del nombre del archivo (ej: 'mi-post')
    const slug = fileName.replace(/\.mdx$/, '');

    // Construye la ruta completa al archivo
    const fullPath = path.join(postsDirectory, fileName);
    
    // Lee el contenido del archivo como un string
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usa gray-matter para separar los metadatos (frontmatter) del contenido
    const matterResult = matter(fileContents);

    // Combina los datos del frontmatter con el slug
    return {
      slug,
      ...(matterResult.data as Frontmatter),
    };
  });

  // Ordena los posts por fecha, del más nuevo al más antiguo
  return allPostsData.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

// Añade de nuevo esta función a src/lib/blog.ts si la borraste
export async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
        slug,
        frontmatter: data,
        content,
    };
}