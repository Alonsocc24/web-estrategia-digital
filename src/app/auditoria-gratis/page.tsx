// Contenido FINAL Y COMPLETO para: src/app/auditoria-gratis/page.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
// --- 1. AÑADIMOS LA IMPORTACIÓN DEL NUEVO FORMULARIO ---
import { AuditoriaForm } from '@/components/auditoria-form'; 

// Importa los iconos que usaremos
import { TrendingDown, Snail, SearchX, ShieldOff } from 'lucide-react';

export default function AuditoriaGratisPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center text-center py-20 md:py-32">
        <div className="relative z-10 max-w-3xl">
          <h1 className="font-headline text-5xl md:text-6xl font-bold leading-tight text-primary">
            Recibe una Auditoría Web 360° Gratuita
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-foreground/80">
            Descubre el Potencial Oculto de tu Página y Obtén un Plan de Acción Personalizado.
          </p>
          <Button size="lg" asChild className="mt-8">
            <Link href="#formulario-auditoria">Solicitar mi Auditoría Gratuita</Link>
          </Button>
        </div>
      </section>

      {/* Problemas Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl font-bold mb-12">¿Te Suena Familiar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background/80 backdrop-blur-sm text-center">
              <CardHeader>
                <TrendingDown className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="mt-4">Pocas Conversiones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">Atraes visitas, pero no se convierten en clientes.</p>
              </CardContent>
            </Card>
            <Card className="bg-background/80 backdrop-blur-sm text-center">
              <CardHeader>
                <Snail className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="mt-4">Web Lenta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">Tu página tarda en cargar y los usuarios se impacientan.</p>
              </CardContent>
            </Card>
            <Card className="bg-background/80 backdrop-blur-sm text-center">
              <CardHeader>
                <SearchX className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="mt-4">Invisible en Google</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">Tu competencia aparece en los resultados, pero tú no.</p>
              </CardContent>
            </Card>
            <Card className="bg-background/80 backdrop-blur-sm text-center">
              <CardHeader>
                <ShieldOff className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="mt-4">Seguridad Dudosa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">No estás seguro de si tu web está protegida contra ataques.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solución Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl font-bold">Tu Plan de Acción Personalizado</h2>
            <p className="mt-2 text-lg text-foreground/80 max-w-2xl mx-auto">
                Recibirás un informe claro y sin tecnicismos con los 3 errores más críticos y recomendaciones prácticas para solucionarlos.
            </p>
        </div>
      </section>

      {/* Formulario Section */}
      <section id="formulario-auditoria" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-4xl font-bold text-primary">
              Empieza a Convertir Visitantes en Clientes
            </h2>
            <p className="mt-2 text-lg text-foreground/80">
              Es 100% gratis y sin compromiso. ¡Solicita tu auditoría ahora!
            </p>
          </div>
          
          {/* --- 2. REEMPLAZAMOS EL FORMULARIO ESTÁTICO POR NUESTRO NUEVO COMPONENTE --- */}
          <div className="mx-auto mt-12 max-w-xl">
            <AuditoriaForm />
          </div>

        </div>
      </section>
      
    </div>
  );
}