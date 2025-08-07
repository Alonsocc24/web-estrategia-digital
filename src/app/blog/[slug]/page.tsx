// Contenido FINAL Y ROBUSTO para: src/app/blog/[slug]/page.tsx

import { getSortedPostsData } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MDXRemote } from 'next-mdx-remote/rsc'; // Usaremos esta librería que es robusta

// --- Tipos de Props ---
type PostPageProps = {
  params: {
    slug: string;
  };
};

// --- Generación de Rutas Estáticas ---
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

// --- Generación de Metadatos SEO ---
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const posts = getSortedPostsData();
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Artículo no encontrado' };
  return {
    title: `${post.title} | Blog de Estrategia Digital`,
    description: post.summary,
  };
}

// --- Componente de Página (Componente de Servidor) ---
export default async function PostPage({ params }: PostPageProps) {
  const posts = getSortedPostsData();
  const post = posts.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  // Leemos el contenido del archivo directamente aquí
  const { content } = await import(`@/content/blog/${params.slug}.mdx`);
  const { title, date, author, image } = post;

  return (
    <article className="container mx-auto max-w-3xl py-20 md:py-32 px-4">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{title}</h1>
        <p className="mt-4 text-lg text-foreground/60">
          Publicado el {new Date(date).toLocaleDate_string('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} por {author}
        </p>
      </div>
      
      {image && (
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-lg mb-8">
          <Image src={image} alt={`Imagen de portada para ${title}`} fill className="object-cover" />
        </div>
      )}
      
      <div className="prose prose-invert lg:prose-xl mx-auto">
        {/* Usamos MDXRemote para renderizar el contenido de forma segura */}
        <MDXRemote source={content} />
      </div>
      
      <div className="mt-12 border-t border-foreground/20 pt-8 text-center">
        <Link href="/blog">
          <Button variant="outline">← Ver todos los artículos</Button>
        </Link>
      </div>
    </article>
  );
}