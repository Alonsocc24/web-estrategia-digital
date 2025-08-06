import { Button } from "@/components/ui/button";
import Link from "next/link";
import ParticlesBackground from "@/components/particles-background";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-auto min-h-[500px] w-full overflow-hidden py-20">
      <ParticlesBackground />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container px-4">
          <div className="mb-6 inline-block rounded-lg border border-accent bg-accent/20 p-4 shadow-lg">
             <div className="flex items-center gap-2">
                <Badge className="bg-accent text-accent-foreground">¡Oferta de Agosto!</Badge>
                <p className="text-foreground">
                  Tu Web Profesional por solo <strong>299€</strong>.
                </p>
                <Button asChild size="sm" variant="link" className="text-accent">
                    <Link href="/#pricing">Ver Oferta →</Link>
                </Button>
             </div>
             <p className="text-sm text-foreground/70 mt-2">Ideal para restaurantes, peluquerías, tiendas y pequeños negocios.</p>
          </div>
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
