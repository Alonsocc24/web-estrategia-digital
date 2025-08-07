// Contenido para: src/app/blog/[slug]/post-content.tsx
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

type PostContentProps = {
  slug: string;
};

// Este componente ahora se encargará de importar y renderizar el MDX
export default function PostContent({ slug }: PostContentProps) {
  const [postModule, setPostModule] = useState<any>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const mod = await import(`@/content/blog/${slug}.mdx`);
        setPostModule(mod);
      } catch (e) {
        notFound();
      }
    };
    loadPost();
  }, [slug]);

  if (!postModule) {
    // Puedes poner un esqueleto de carga aquí si quieres
    return <div className="text-center">Cargando artículo...</div>;
  }

  const { default: MdxContent, frontmatter } = postModule;
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