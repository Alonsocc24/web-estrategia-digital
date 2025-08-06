import Image from "next/image";
import { Award, Bot, Smile } from "lucide-react";
import { AnimatedStat } from "../animated-stat";

const stats = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: "10+",
    label: "Años de Experiencia",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    value: "50+",
    label: "Proyectos con IA",
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    value: "98%",
    label: "Satisfacción de Clientes",
  },
];


export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <h2 className="font-headline text-4xl font-bold text-primary">
              Sobre Estrategia Digital
            </h2>
            <p className="text-lg text-foreground/80">
              Somos un equipo de apasionados desarrolladores, diseñadores y expertos en automatización dedicados a ampliar los límites de lo posible en la web.
            </p>
            <p className="text-foreground/70">
              Nuestra misión es potenciar a las empresas con soluciones digitales inteligentes, eficientes y escalables. Creemos en la construcción de alianzas, no solo de proyectos, y estamos comprometidos con el éxito de nuestros clientes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
              {stats.map((stat, index) => (
                <AnimatedStat key={index} {...stat} />
              ))}
            </div>
          </div>
          <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/app-proy-1e4a3.appspot.com/o/2c9c7f21-789a-4c28-98e8-6e3e574c8402.png?alt=media&token=87e9c991-5a39-4d37-8e6f-124bb88319f3"
              alt="Equipo de Estrategia Digital"
              layout="fill"
              objectFit="cover"
              data-ai-hint="team collaboration office"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
