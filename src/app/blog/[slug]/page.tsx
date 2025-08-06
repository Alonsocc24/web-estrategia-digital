import { posts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-4xl px-4 py-20 md:py-32">
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
            </Link>
        </Button>
      </div>
      <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
        {post.title}
      </h1>
      <p className="mt-2 text-foreground/60">
        Posted on{" "}
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div className="relative my-8 h-96 w-full overflow-hidden rounded-lg">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint="technology blog"
        />
      </div>
      <div
        className="prose prose-invert max-w-none text-foreground/90 prose-p:text-lg prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
