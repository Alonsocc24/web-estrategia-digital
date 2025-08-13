import {
  Code,
  Bot,
  Zap,
  Rocket,
  ShieldCheck,
  Users,
  Award,
  Tag,
  CheckCircle,
  Server,
  Database,
  LifeBuoy,
  Clock,
  Package,
  Gem,
  Handshake,
} from "lucide-react";

// --- Services Section ---
export const services = [
  {
    icon: Code,
    title: "Desarrollo Web a Medida",
    description:
      "Creamos sitios web y aplicaciones web desde cero, totalmente personalizadas para tus necesidades, utilizando las últimas tecnologías para un rendimiento y seguridad óptimos.",
  },
  {
    icon: Bot,
    title: "Integración de IA",
    description:
      "Potenciamos tu negocio con soluciones de inteligencia artificial, desde chatbots inteligentes hasta análisis de datos predictivo para una toma de decisiones más inteligente.",
  },
  {
    icon: Zap,
    title: "Automatización de Procesos",
    description:
      "Optimizamos tus flujos de trabajo conectando tus herramientas (CRM, email, etc.) con Make/n8n para automatizar tareas repetitivas y aumentar la eficiencia.",
  },
];

// --- Pricing Section ---
export const plans = [
  {
    name: "Presencia Digital",
    description:
      "Ideal para negocios locales, profesionales y startups que buscan establecer una presencia online sólida y profesional.",
    creationCost: "299€",
    originalCost: "499€",
    offerIcon: Tag,
    offerText: "Oferta especial de Agosto",
    maintenanceCost: "149€/año",
    cta: "Empezar Ahora",
    highlighted: false,
    devFeatures: [
      { icon: CheckCircle, text: "Página web de hasta 3 secciones" },
      { icon: CheckCircle, text: "Diseño responsive (móvil y tablet)" },
      { icon: CheckCircle, text: "Formulario de contacto" },
      { icon: CheckCircle, text: "Integración con Google Maps" },
      { icon: CheckCircle, text: "Optimización SEO básica" },
    ],
    maintenanceFeatures: [
      { icon: Server, text: "Hosting y dominio (.es/.com) incluido" },
      { icon: ShieldCheck, text: "Certificado SSL y seguridad" },
      { icon: Database, text: "Copias de seguridad mensuales" },
      { icon: LifeBuoy, text: "Soporte técnico por email" },
    ],
  },
  {
    name: "Negocio Plus",
    description:
      "La solución perfecta para empresas en crecimiento que necesitan más funcionalidades, como un blog, sistema de reservas o integraciones.",
    creationCost: "Desde 899€",
    maintenanceCost: "299€/año",
    cta: "Solicitar Presupuesto",
    highlighted: true,
    devFeatures: [
      { icon: CheckCircle, text: "Todo lo del plan Presencia Digital" },
      { icon: CheckCircle, text: "Hasta 8 secciones o páginas" },
      { icon: CheckCircle, text: "Gestor de contenidos (Blog)" },
      { icon: CheckCircle, text: "Integración de calendario o reservas" },
      { icon: CheckCircle, text: "Optimización SEO avanzada" },
    ],
    maintenanceFeatures: [
      { icon: Server, text: "Hosting de alto rendimiento" },
      { icon: ShieldCheck, text: "Seguridad y firewall avanzados" },
      { icon: Database, text: "Copias de seguridad semanales" },
      { icon: LifeBuoy, text: "Soporte prioritario (email y chat)" },
      { icon: Clock, text: "1 hora de cambios mensuales" },
    ],
  },
  {
    name: "A Medida",
    description:
      "Para proyectos complejos, tiendas online, aplicaciones web o automatizaciones avanzadas. Construimos la solución exacta que necesitas.",
    creationCost: "A consultar",
    maintenanceCost: "Personalizado",
    cta: "Contactar para Consulta",
    highlighted: false,
    devFeatures: [
      { icon: Gem, text: "Desarrollo 100% personalizado" },
      { icon: Package, text: "Tienda online (e-commerce)" },
      { icon: Bot, text: "Integraciones con APIs y IA" },
      { icon: Zap, text: "Automatizaciones Rápidas" },