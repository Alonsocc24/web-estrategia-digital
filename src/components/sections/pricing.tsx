import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Esencial",
    description: "Ideal para autónomos, microempresas o startups que necesitan una presencia online profesional para darse a conocer, pero con una inversión inicial controlada.",
    creationCost: "399€ - 1.500€",
    maintenanceCost: "200€ - 800€",
    devFeatures: [
      "Página web corporativa básica (3-5 secciones)",
      "Diseño basado en plantilla profesional",
      "Configuración de SEO básico",
      "Página 'One-Page' o landing page",
    ],
    maintenanceFeatures: [
      "Actualizaciones técnicas y de plugins",
      "Copias de seguridad periódicas",
      "Monitorización de seguridad",
      "Dominio y alojamiento básico incluidos",
    ],
    highlighted: false,
  },
  {
    name: "Profesional",
    description: "Pensado para PYMES que ya tienen un negocio en marcha y quieren que su web sea una herramienta activa para captar clientes y fortalecer su marca.",
    creationCost: "1.500€ - 5.000€",
    maintenanceCost: "600€ - 2.000€",
    devFeatures: [
      "Diseño web 100% a medida y único",
      "Estrategia de negocio y conversión",
      "SEO On-Page avanzado desde el inicio",
      "Integración con herramientas externas (CRM, etc.)",
    ],
    maintenanceFeatures: [
      "Todo lo del Plan Esencial",
      "Soporte prioritario y horas de desarrollo",
      "Renovación de licencias 'premium'",
      "Hosting de mayor capacidad y velocidad",
    ],
    highlighted: true,
  },
  {
    name: "E-commerce",
    description: "Para cualquier negocio que quiera empezar a vender sus productos o servicios directamente por internet, con gestión de pagos y pedidos.",
    creationCost: "1.500€ - 6.000€",
    maintenanceCost: "800€ - 3.000€",
    devFeatures: [
      "Tienda online (WooCommerce o Shopify)",
      "Configuración de pagos y envíos",
      "Diseño de catálogo de productos atractivo",
      "Formación para autogestión de la tienda",
    ],
    maintenanceFeatures: [
      "Todo lo del Plan Profesional",
      "Mantenimiento específico para e-commerce",
      "Seguridad reforzada para transacciones",
      "Soporte técnico especializado",
    ],
    highlighted: false,
  },
];

const FeatureListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start">
        <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
        <span className="text-foreground/80">{children}</span>
    </li>
);

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold text-primary">
            Planes a tu Medida
          </h2>
          <p className="mt-2 text-lg text-foreground/80">
            Soluciones transparentes y adaptadas a cada etapa de tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col h-full ${plan.highlighted ? 'border-primary shadow-lg shadow-primary/20 scale-105' : 'border-border/60'}`}>
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl text-primary">{plan.name}</CardTitle>
                <CardDescription className="pt-2 text-base text-foreground/70 min-h-[100px]">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-8">
                <div className="space-y-2">
                    <div className="text-center">
                        <p className="text-sm text-foreground/60">Coste de creación</p>
                        <p className="text-2xl font-bold">{plan.creationCost}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-foreground/60">Mantenimiento anual</p>
                        <p className="text-xl font-bold">{plan.maintenanceCost}</p>
                    </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Desarrollo</h4>
                    <ul className="space-y-2">
                        {plan.devFeatures.map((feature, i) => <FeatureListItem key={i}>{feature}</FeatureListItem>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Mantenimiento</h4>
                     <ul className="space-y-2">
                        {plan.maintenanceFeatures.map((feature, i) => <FeatureListItem key={i}>{feature}</FeatureListItem>)}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className={`w-full ${plan.highlighted ? 'bg-primary hover:bg-primary/90' : 'bg-accent text-accent-foreground hover:bg-accent/90'}`}>
                    <a href="/#contact">
                        {plan.highlighted ? "Empezar Ahora" : "Solicitar Plan"}
                    </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
