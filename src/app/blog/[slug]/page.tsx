// Contenido FINAL para: src/app/blog/[slug]/page.tsx
import { getSortedPostsData } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { importMdx } from '@/lib/mdx-utils';

// --- Definimos el tipo de las props UNA SOLA VEZ ---
type PostPageProps = {
  params: {
    slug: string;
  };
};

// --- Generamos las rutas estáticas ---
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

// --- Generamos los metadatos SEO usando el tipo correcto ---
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = (await importMdx(params.slug))?.post;
  if (!post) { 
    return { title: 'Artículo no encontrado' };
  }
  return {
    title: `${post.frontmatter.title} | Blog de Estrategia Digital`,
    description: post.frontmatter.summary,
  };
}

// --- Renderizamos la página usando el tipo correcto ---
export default async function PostPage({ params }: PostPageProps) {
  const { post, MdxContent } = (await importMdx(params.slug)) ?? {};
  if (!post || !MdxContent) {
    notFound();
  }

  const { title, date, author, image } = post.frontmatter;

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
        <MdxContent />
      </div>
      
      <div className="mt-12 border-t border-foreground/20 pt-8 text-center">
        <Link href="/blog">
          <Button variant="outline">← Ver todos los artículos</Button>
        </Link>
      </div>
    </article>
  );
}