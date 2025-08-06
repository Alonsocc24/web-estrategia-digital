import { Bot, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#services", label: "Servicios" },
  { href: "/#pricing", label: "Planes" },
  { href: "/#about", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contacto" },
];


export function AppFooter() {
  return (
    <footer className="border-t border-border/40 bg-card py-12 text-card-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4">
        {/* About Section */}
        <div className="col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
                <Bot className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold font-headline">Estrategia Digital</span>
            </Link>
            <p className="text-sm text-foreground/70">
            Construimos sitios web inteligentes de alto rendimiento y automatizamos sus flujos de trabajo para impulsar el crecimiento y la eficiencia.
            </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-headline text-lg font-semibold text-primary">Navegación</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map(link => (
                <li key={link.href}>
                    <Link href={link.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                        {link.label}
                    </Link>
                </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-headline text-lg font-semibold text-primary">Contacto</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center text-sm text-foreground/80">
              <Mail className="mr-3 h-4 w-4 text-accent" />
              <span>hola@estrategiadigital.com</span>
            </li>
            <li className="flex items-center text-sm text-foreground/80">
              <Phone className="mr-3 h-4 w-4 text-accent" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center text-sm text-foreground/80">
              <MapPin className="mr-3 h-4 w-4 text-accent" />
              <span>123 Tech Hub, Ciudad Innovación</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
            <h3 className="font-headline text-lg font-semibold text-primary">Síguenos</h3>
            <div className="mt-4 flex space-x-4">
                <Link href="#" aria-label="Facebook">
                    <Facebook className="h-6 w-6 text-foreground/80 transition-colors hover:text-primary" />
                </Link>
                <Link href="#" aria-label="Instagram">
                    <Instagram className="h-6 w-6 text-foreground/80 transition-colors hover:text-primary" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6 text-foreground/80 transition-colors hover:text-primary" />
                </Link>
            </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-border/40 pt-6 text-center text-sm text-foreground/60">
        <p>
          © {new Date().getFullYear()} Estrategia Digital. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
