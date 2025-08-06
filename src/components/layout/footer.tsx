import { Bot, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function AppFooter() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Estrategia Digital</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-foreground/80 transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className="h-6 w-6 text-foreground/80 transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-foreground/80 transition-colors hover:text-foreground" />
          </Link>
        </div>
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Estrategia Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
