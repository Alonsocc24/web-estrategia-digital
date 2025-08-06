import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Post } from "@/lib/blog-data";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
      <div className="relative h-48 w-full">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint="technology abstract"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
        <CardDescription className="text-sm text-foreground/60">
          {new Date(post.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80">{post.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 text-primary">
          <Link href={`/blog/${post.slug}`}>
            Leer Más <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
