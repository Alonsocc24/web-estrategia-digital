import { ContactForm } from "@/components/contact-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold text-primary">
            Construyamos Juntos
          </h2>
          <p className="mt-2 text-lg text-foreground/80">
            ¿Tienes un proyecto en mente o quieres más información? Escríbenos.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl space-y-8">
            <div className="rounded-lg border border-accent/50 bg-accent/10 p-4 text-center">
                <p className="text-foreground/90">
                ¿Tienes un restaurante, peluquería o tienda? Aprovecha nuestra <Link href="/#pricing" className="font-bold text-accent underline hover:no-underline">oferta especial de agosto</Link>: tu web básica por solo 299€.
                </p>
            </div>
            <ContactForm />
        </div>
      </div>
    </section>
  );
}
