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
    title: "AI-Powered Websites",
    description:
      "Stunning, responsive, and SEO-optimized websites built with the latest AI-driven technologies to ensure maximum performance and user engagement.",
  },
  {
    icon: <Workflow className="h-10 w-10 text-primary" />,
    title: "Make Automation",
    description:
      "We design and implement powerful Make.com scenarios to automate your business processes, saving you time and reducing operational costs.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "N8N Integration",
    description:
      "Leverage the power of N8N with our custom workflow automation solutions, connecting your apps and services for seamless data flow.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold text-primary">
            Our Expertise
          </h2>
          <p className="mt-2 text-lg text-foreground/80">
            Cutting-edge solutions to elevate your digital presence.
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
