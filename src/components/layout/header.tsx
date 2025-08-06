"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#services", label: "Servicios" },
  { href: "/#pricing", label: "Planes" },
  { href: "/#about", label: "Nosotros" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contacto" },
];

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive =
      (pathname === "/" && href === "/") ||
      (href !== "/" && pathname.startsWith(href));
    return (
      <Link
        href={href}
        onClick={() => setIsMenuOpen(false)}
        className={cn(
          "text-foreground/80 transition-colors hover:text-foreground",
          isActive && "text-primary font-semibold"
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Estrategia Digital
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Abrir Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <Bot className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">
                    Estrategia Digital
                  </span>
                </Link>
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Link href="/" className="flex items-center space-x-2 md:hidden">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Estrategia Digital</span>
          </Link>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/#contact">Cotizar</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
