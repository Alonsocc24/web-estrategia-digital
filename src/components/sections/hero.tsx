import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full">
      <Image
        src="https://placehold.co/1920x1080"
        alt="AI-driven web design"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
        data-ai-hint="abstract technology"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            AI-Powered Web Design & Automation
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            We build intelligent, high-performance websites and automate your
            workflows to drive growth and efficiency.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/#contact">Get Your Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Link href="/#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
