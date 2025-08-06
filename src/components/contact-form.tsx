"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react"; // React se importa automáticamente en Next.js, pero es buena práctica mantenerlo

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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, Check } from "lucide-react";

// Expresión regular mejorada para validar teléfonos de forma más flexible
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

// Esquema de validación con Zod
const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un correo electrónico válido."),
  phone: z
    .string()
    .regex(phoneRegex, "El número de teléfono no es válido.")
    .min(6, "El número de teléfono es demasiado corto.")
    .optional()
    .or(z.literal("")), // Permite que el campo esté vacío
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

// --- COMPONENTE DEL FORMULARIO ---
export function ContactForm() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Usamos el estado de 'isSubmitting' que nos provee la librería
  const { isSubmitting } = form.formState;

  // --- FUNCIÓN DE ENVÍO ---
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSuccess(false); // Reseteamos el estado de éxito al iniciar un nuevo envío

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        // Si hay un error, intentamos leer el mensaje del servidor
        const errorData = await response.json().catch(() => ({ message: 'Error en el servidor.' }));
        throw new Error(errorData.error || 'La respuesta de la red no fue correcta.');
      }

      // Si todo va bien
      toast({
        title: "¡Mensaje Enviado!",
        description: "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
      });
      setIsSuccess(true);
      form.reset(); // Limpiamos el formulario

      // Ocultamos el icono de "check" después de 3 segundos
      setTimeout(() => setIsSuccess(false), 3000);

    } catch (error: any) {
      // Si hay un error en la llamada fetch o en el servidor
      console.error("Error al enviar el formulario:", error);
      toast({
        title: "Error al enviar",
        description: error.message || "Hubo un problema. Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    }
  }

  // --- RENDERIZADO DEL COMPONENTE ---
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Campo Nombre */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Tu Nombre" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Campo Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input placeholder="tu.email@ejemplo.com" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Campo Teléfono */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Tu número de teléfono" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Campo Mensaje */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Cuéntanos sobre tu proyecto" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Botón de Envío */}
        <Button
          type="submit"
          className="w-full transition-all"
          disabled={isSubmitting || isSuccess}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : isSuccess ? (
            <>
              <Check className="mr-2 h-4 w-4" />
               ¡Enviado!
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Enviar Mensaje
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}