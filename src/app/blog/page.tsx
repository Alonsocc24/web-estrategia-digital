// Contenido actualizado para: src/app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/blog'; // <-- Usamos la nueva lógica
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function BlogPage() {
  const allPosts = getSortedPostsData(); // <-- Obtenemos los posts desde los archivos .mdx

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-5xl font-bold text-primary">
            Ideas y Conocimientos
          </h1>
          <p className="mt-2 text-lg text-foreground/80">
            Explorando la intersección de la tecnología, el diseño y la automatización.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map(({ slug, title, date, summary, image }) => (
            <Link href={`/blog/${slug}`} key={slug} className="group">
              <Card className="h-full flex flex-col transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20 overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={image}
                    alt={`Imagen de portada para el artículo: ${title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <p className="text-sm text-foreground/60">{new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <CardTitle className="font-headline text-2xl mt-1">{title}</CardTitle>
                  <CardDescription className="pt-2 text-foreground/70">{summary}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}