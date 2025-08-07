// Contenido FINAL Y CORREGIDO para: src/app/blog/[slug]/page.tsx

import { getSortedPostsData } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// --- Definición de Tipos ---
// Define la forma de las props que recibirá la página
type PostPageProps = {
  params: {
    slug: string;
  };
};

// --- Generación de Rutas Estáticas ---
// Esta función le dice a Next.js qué páginas de blog debe construir
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// --- Generación de Metadatos SEO ---
// Crea el título y la descripción para cada página de artículo
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const posts = getSortedPostsData();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    };
  }
  return {
    title: `${post.title} | Blog de Estrategia Digital`,
    description: post.summary,
  };
}

// --- Componente de la Página del Artículo ---
// Este es el componente que renderiza el contenido de cada post
export default async function PostPage({ params }: PostPageProps) {
  // Importamos el contenido del archivo .mdx dinámicamente
  // El `default` es el contenido principal del componente MDX
  const { default: MdxContent } = await import(`@/content/blog/${params.slug}.mdx`);

  // Obtenemos los metadatos (frontmatter) de nuestra función síncrona
  const posts = getSortedPostsData();
  const post = posts.find((p) => p.slug === params.slug);

  // Si no encontramos el post o el contenido, mostramos la página 404
  if (!post || !MdxContent) {
    notFound();
  }

  const { title, date, author, image } = post; // Extraemos los datos para usarlos fácilmente

  return (
    <article className="container mx-auto max-w-3xl py-20 md:py-32 px-4">
      {/* Encabezado del Artículo */}
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{title}</h1>
        <p className="mt-4 text-lg text-foreground/60">
          Publicado el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} por {author}
        </p>
      </div>
      
      {/* Imagen de Cabecera (solo si existe) */}
      {image && (
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-lg mb-8">
          <Image src={image} alt={`Imagen de portada para ${title}`} fill className="object-cover" />
        </div>
      )}
      
      {/* Contenido del Artículo */}
      <div className="prose prose-invert lg:prose-xl mx-auto">
        <MdxContent />
      </div>
      
      {/* Botón para Volver al Blog */}
      <div className="mt-12 border-t border-foreground/20 pt-8 text-center">
        <Link href="/blog">
          <Button variant="outline">← Ver todos los artículos</Button>
        </Link>
      </div>
    </article>
  );
}