import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck, Rocket, LineChart, Code, Palette, Settings, Zap, Database, Search, MessageSquare, Briefcase, ShoppingCart, CreditCard, Package, GraduationCap, Calendar } from "lucide-react";
import { AnimateOnScroll } from "../animate-on-scroll";

const featureIcons: { [key: string]: React.ReactNode } = {
  default: <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "página web": <Code className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "diseño": <Palette className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "seo": <Search className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "actualizaciones": <Settings className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "copias de seguridad": <Database className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "seguridad": <ShieldCheck className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "dominio y alojamiento": <Briefcase className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "estrategia": <LineChart className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "integrar herramientas": <Zap className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "soporte": <MessageSquare className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "licencias 'premium'": <Briefcase className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "hosting": <Rocket className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "tienda online": <ShoppingCart className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "pagos y envíos": <CreditCard className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "catálogo de productos": <Package className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
  "formación": <GraduationCap className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />,
};

const getFeatureIcon = (feature: string) => {
  const lowerFeature = feature.toLowerCase();
  for (const key in featureIcons) {
    if (lowerFeature.includes(key)) {
      return featureIcons[key];
    }
  }
  return featureIcons.default;
};


const plans = [
  {
    name: "Esencial (Oferta Agosto)",
    description: "Ideal para negocios físicos (restaurantes, peluquerías, tiendas retail...) que necesitan una presencia online profesional, rápida y económica para conectar con clientes locales.",
    creationCost: "299€",
    originalCost: "399€",
    maintenanceCost: "desde 200€",
    devFeatures: [
      "Página web con tus servicios, menú y horarios",
      "Diseño profesional adaptado a tu marca",
      "Visibilidad local en Google (SEO básico)",
      "Presencia online inmediata para tus clientes",
    ],
    maintenanceFeatures: [
      "Actualizaciones técnicas y de plugins",
      "Copias de seguridad periódicas",
      "Monitorización de seguridad",
      "Dominio y alojamiento básico incluidos",
    ],
    highlighted: false,
    cta: "Aprovechar Oferta"
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
      "Integrar herramientas externas (CRM, etc.)",
    ],
    maintenanceFeatures: [
      "Todo lo del Plan Esencial",
      "Soporte prioritario y horas de desarrollo",
      "Renovación de licencias 'premium'",
      "Hosting de mayor capacidad y velocidad",
    ],
    highlighted: true,
    cta: "Empezar Ahora"
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
    cta: "Solicitar Plan"
  },
];

const FeatureListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start">
        {getFeatureIcon(children as string)}
        <span className="text-foreground/80">{children}</span>
    </li>
);

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold text-primary">
            Planes a tu Medida
          </h2>
          <p className="mt-2 text-lg text-foreground/80">
            Soluciones transparentes y adaptadas a cada etapa de tu negocio.
          </p>
        </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          {plans.map((plan, index) => (
             <AnimateOnScroll
             key={plan.name}
             delay={`delay-${index * 100}`}
             className="h-full"
           >
            <Card className={`relative flex flex-col h-full ${plan.highlighted ? 'border-primary shadow-lg shadow-primary/20 scale-105 bg-secondary' : 'border-border/60'}`}>
              {plan.highlighted && (
                <Badge className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                  Más Popular
                </Badge>
              )}
              <CardHeader className="text-center pt-10">
                <CardTitle className="font-headline text-3xl text-primary">{plan.name}</CardTitle>
                <CardDescription className="pt-2 text-base text-foreground/70 min-h-[100px]">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-8">
                <div className="space-y-2">
                    <div className="text-center">
                        <p className="text-sm text-foreground/60">Coste de creación</p>
                         <div className="flex items-baseline justify-center gap-2">
                          <p className={`text-4xl font-bold ${plan.originalCost ? 'text-accent' : ''}`}>{plan.creationCost}</p>
                          {plan.originalCost && (
                             <p className="text-xl font-bold text-destructive line-through">{plan.originalCost}</p>
                          )}
                        </div>
                        {plan.originalCost && (
                          <div className="flex justify-center items-center gap-2 mt-1">
                            <Calendar className="h-4 w-4 text-foreground/60" />
                            <p className="text-xs text-foreground/60">Oferta válida hasta el 31 de Agosto</p>
                          </div>
                        )}
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
                        {plan.cta}
                    </a>
                </Button>
              </CardFooter>
            </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}