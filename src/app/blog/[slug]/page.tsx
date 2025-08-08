// Contenido FINAL Y COMPLETO para: src/app/blog/[slug]/page.tsx

import { getSortedPostsData, getPostData } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MDXRemote } from 'next-mdx-remote/rsc';

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

// --- Generación de Metadatos SEO (VERSIÓN MEJORADA) ---
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const postData = await getPostData(params.slug);

  if (!postData) {
    return { title: 'Artículo no encontrado' };
  }

  const { title, summary, image } = postData.frontmatter;

  // Construye la URL completa de la imagen para Open Graph
  const imageUrl = `https://www.estrategiadigital.io${image}`;

  return {
    title: `${title} | Blog de Estrategia Digital`,
    description: summary,
    // --- SECCIÓN DE OPEN GRAPH (LA CLAVE) ---
    openGraph: {
      title: title,
      description: summary,
      url: `https://www.estrategiadigital.io/blog/${params.slug}`,
      siteName: 'Estrategia Digital',
      images: [
        {
          url: imageUrl, // URL completa de la imagen
          width: 1200,   // Ancho recomendado
          height: 630,   // Alto recomendado
          alt: title,
        },
      ],
      locale: 'es_ES',
      type: 'article',
    },
    // --- Opcional pero recomendado: Twitter Cards ---
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: summary,
        images: [imageUrl],
    }
  };
}

// --- Componente de Página (Componente de Servidor) ---
export default async function PostPage({ params }: PostPageProps) {
  const postData = await getPostData(params.slug);
  
  if (!postData) {
    notFound();
  }

  const { frontmatter, content } = postData;
  const { title, date, author, image } = frontmatter;

  return (
    <article className="container mx-auto max-w-3xl py-20 md:py-32 px-4">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{title}</h1>
        <p className="mt-4 text-lg text-foreground/60">
          Publicado el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} por {author}
        </p>
      </div>
      
      {image && (
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-lg mb-8">
          <Image src={image} alt={`Imagen de portada para ${title}`} fill className="object-cover" />
        </div>
      )}
      
      <div className="prose prose-invert lg:prose-xl mx-auto">
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