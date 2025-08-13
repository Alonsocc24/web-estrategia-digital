// Contenido completo para: src/components/auditoria-form.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, Check } from "lucide-react";

// Esquema de validación con Zod
const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un correo electrónico válido."),
  websiteUrl: z.string().url({ message: "Por favor, introduce una URL válida (ej: https://...)" }),
});

export function AuditoriaForm() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      websiteUrl: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSuccess(false);

    try {
      const response = await fetch('/api/auditoria', { // <-- Apunta a nuestra nueva API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al enviar tu solicitud.');
      }

      toast({
        title: "¡Solicitud Recibida!",
        description: "Gracias por tu interés. En breve comenzaremos a procesar tu auditoría.",
      });
      setIsSuccess(true);
      form.reset();

      setTimeout(() => setIsSuccess(false), 3000);

    } catch (error: any) {
      console.error("Error al enviar el formulario:", error);
      toast({
        title: "Error al enviar",
        description: error.message || "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre completo" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Donde enviaremos tu auditoría" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="websiteUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL de tu Página Web</FormLabel>
              <FormControl>
                <Input placeholder="https://www.tu-pagina-web.com" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="w-full transition-all"
          disabled={isSubmitting || isSuccess}
        >
          {isSubmitting ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Procesando...</>
          ) : isSuccess ? (
            <><Check className="mr-2 h-4 w-4" /> ¡Recibido!</>
          ) : (
            <><Send className="mr-2 h-4 w-4" /> ¡Quiero mi Auditoría Gratis!</>
          )}
        </Button>
      </form>
    </Form>
  );
}