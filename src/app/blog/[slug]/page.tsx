// Contenido FINAL (esta vez sí) para: src/app/blog/[slug]/page.tsx

import PostContent from './post-content';
import { getSortedPostsData } from '@/lib/blog';
import type { Metadata } from 'next';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const posts = getSortedPostsData();
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Artículo no encontrado' };
  return {
    title: `${post.title} | Blog de Estrategia Digital`,
    description: post.summary,
  };
}

// La página ahora es una función síncrona simple.
export default function Page({ params }: PostPageProps) {
  // Simplemente pasa el slug al componente de cliente, que se encarga de todo.
  return <PostContent slug={params.slug} />;
}