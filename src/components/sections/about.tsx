import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-headline text-4xl font-bold text-primary">
              Sobre Estrategia Digital
            </h2>
            <p className="text-lg text-foreground/80">
              Somos un equipo de apasionados desarrolladores, diseñadores y expertos en automatización dedicados a ampliar los límites de lo posible en la web. Nuestra misión es potenciar a las empresas con soluciones digitales inteligentes, eficientes y escalables.
            </p>
            <p className="text-foreground/70">
              Con un profundo conocimiento en IA, tecnologías web y automatización de procesos, transformamos desafíos complejos en soluciones simples y elegantes. Creemos en la construcción de alianzas, no solo de proyectos, y estamos comprometidos con el éxito de nuestros clientes.
            </p>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://placehold.co/600x400"
              alt="Equipo de Estrategia Digital"
              layout="fill"
              objectFit="cover"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
