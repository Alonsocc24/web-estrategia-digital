import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-headline text-4xl font-bold text-primary">
              About Estrategia Digital
            </h2>
            <p className="text-lg text-foreground/80">
              We are a team of passionate developers, designers, and automation
              experts dedicated to pushing the boundaries of what's possible on
              the web. Our mission is to empower businesses with intelligent,
              efficient, and scalable digital solutions.
            </p>
            <p className="text-foreground/70">
              With a deep understanding of AI, web technologies, and process
              automation, we transform complex challenges into simple, elegant
              solutions. We believe in building partnerships, not just
              projects, and are committed to our clients' success.
            </p>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://placehold.co/600x400"
              alt="Estrategia Digital Team"
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
