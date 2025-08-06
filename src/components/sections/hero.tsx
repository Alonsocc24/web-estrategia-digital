import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full">
      <Image
        src="https://placehold.co/1920x1080"
        alt="Diseño web impulsado por IA"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
        data-ai-hint="abstract technology"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Diseño Web y Automatización con IA
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Construimos sitios web inteligentes de alto rendimiento y automatizamos sus flujos de trabajo para impulsar el crecimiento y la eficiencia.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/#contact">Consulta Gratuita</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Link href="/#services">Explorar Servicios</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
