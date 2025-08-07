// Contenido FINAL Y COMPLETO para: src/components/sections/hero.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";
// --- CORRECCIÓN CLAVE AQUÍ ---
// Se ha cambiado a una importación nombrada con llaves { }
import { ParticlesBackground } from "@/components/particles-background";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-auto min-h-[500px] w-full overflow-hidden pt-10 pb-20 md:h-[80vh]"
    >
      <ParticlesBackground />

      <div className="container mx-auto px-4">
        <div className="mb-8 rounded-lg border border-accent bg-accent/20 p-4 text-center shadow-lg transition-shadow hover:shadow-accent/30">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
            <Badge className="bg-accent text-accent-foreground mb-2 sm:mb-0">
              ¡Oferta de Agosto!
            </Badge>
            <p className="text-center text-foreground sm:text-left">
              Tu negocio físico online por solo <strong>299€</strong>. ¡Consigue
              clientes locales!
            </p>
            <Button
              asChild
              size="sm"
              variant="link"
              className="h-auto p-0 text-accent"
            >
              <Link href="/#pricing">Ver Oferta →</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Diseño Web y Automatización con IA
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Construimos sitios web inteligentes de alto rendimiento y
            automatizamos sus flujos de trabajo para impulsar el crecimiento y
            la eficiencia.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
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