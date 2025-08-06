import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BrainCircuit, CodeXml, Workflow } from "lucide-react";

const services = [
  {
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    title: "Sitios Web con IA",
    description:
      "Sitios web impresionantes, responsivos y optimizados para SEO, construidos con las últimas tecnologías de IA para garantizar el máximo rendimiento y la participación del usuario.",
  },
  {
    icon: <Workflow className="h-10 w-10 text-primary" />,
    title: "Automatización con Make",
    description:
      "Diseñamos e implementamos potentes escenarios en Make.com para automatizar sus procesos de negocio, ahorrándole tiempo y reduciendo costos operativos.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Integración con N8N",
    description:
      "Aproveche el poder de N8N con nuestras soluciones de automatización de flujos de trabajo personalizadas, conectando sus aplicaciones y servicios para un flujo de datos sin interrupciones.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold text-primary">
            Nuestra Experiencia
          </h2>
          <p className="mt-2 text-lg text-foreground/80">
            Soluciones de vanguardia para elevar su presencia digital.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="transform border-border/60 bg-card transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader className="items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl">
                  {service.title}
                </CardTitle>
                <CardDescription className="pt-2 text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
