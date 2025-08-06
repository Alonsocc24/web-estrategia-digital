import BlogCard from "@/components/blog-card";
import { posts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-5xl font-bold text-primary">
            Ideas y Conocimientos
          </h1>
          <p className="mt-2 text-lg text-foreground/80">
            Explorando la intersección de la tecnología, el diseño y la automatización.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
