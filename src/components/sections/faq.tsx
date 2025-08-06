import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { AnimateOnScroll } from "../animate-on-scroll";
  
  const faqs = [
    {
      question: "¿Qué incluye exactamente el 'Plan Esencial (Oferta Agosto)' por 299€?",
      answer: "Incluye una página web de una sola sección (one-page) con tu información clave (servicios, quiénes somos, contacto), diseño profesional adaptable a móviles, SEO básico para visibilidad local y formulario de contacto. Dominio y alojamiento básico por un año están incluidos. Es ideal para que los clientes te encuentren online rápidamente."
    },
    {
      question: "¿Qué significa que automatizan flujos de trabajo con Make o N8N?",
      answer: "Significa que conectamos las aplicaciones que ya usas (como tu email, hojas de cálculo, CRM, etc.) para que trabajen juntas automáticamente. Por ejemplo, podemos hacer que cada vez que recibas un email de un cliente, se cree una tarea en tu gestor de proyectos y se añada el contacto a tu lista de marketing, todo sin que tengas que hacer nada manualmente."
    },
    {
      question: "Ya tengo una web, ¿pueden ayudarme a mejorarla o añadirle funciones con IA?",
      answer: "¡Por supuesto! Ofrecemos servicios de consultoría y desarrollo para integrar soluciones de IA en sitios web existentes. Podemos analizar tu caso y proponerte mejoras como chatbots inteligentes, sistemas de recomendación, optimización de contenido con IA, y mucho más."
    },
    {
        question: "No tengo claro qué plan necesito. ¿Cómo me pueden ayudar?",
        answer: "No te preocupes. El primer paso es tener una consulta gratuita con nosotros. Hablaremos de tu negocio, tus objetivos y tus necesidades. Con esa información, te recomendaremos el plan que mejor se adapte a ti, sin ningún compromiso."
    },
    {
      question: "¿Cuánto tiempo tardan en entregar una página web del Plan Esencial?",
      answer: "Nuestro objetivo es la agilidad. Una vez que tenemos toda la información necesaria (textos, imágenes, etc.), el Plan Esencial suele estar listo en un plazo de 7 a 10 días hábiles, perfecto para tener tu presencia online cuanto antes."
    }
  ];
  
  export default function FaqSection() {
    return (
      <section id="faq" className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-bold text-primary">
              Preguntas Frecuentes
            </h2>
            <p className="mt-2 text-lg text-foreground/80">
              Resolvemos tus dudas más comunes sobre nuestros servicios.
            </p>
          </div>
          </AnimateOnScroll>
  
          <AnimateOnScroll className="mx-auto max-w-3xl" delay="delay-100">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimateOnScroll>
        </div>
      </section>
    );
  }
  