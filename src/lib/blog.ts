// Contenido para: src/lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Apuntamos a la carpeta donde están nuestros artículos
const postsDirectory = path.join(process.cwd(), 'content/blog');

// Función para obtener los datos de TODOS los posts (para la página de listado)
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { 
        title: string; 
        date: string; 
        summary: string;
        author: string;
        image: string;
      }),
    };
  });

  // Ordenar los posts por fecha (el más nuevo primero)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Función para obtener los datos y el contenido de UN SOLO post (para la página del artículo)
export async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usar gray-matter para separar los datos (frontmatter) y el contenido
    const { data, content } = matter(fileContents);

    return {
        slug,
        frontmatter: data,
        content,
    };
}