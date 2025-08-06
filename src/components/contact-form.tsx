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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, Check } from "lucide-react";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce una dirección de correo electrónico válida.",
  }),
  phone: z
    .string()
    .regex(phoneRegex, "Número de teléfono inválido")
    .min(6, { message: "El número de teléfono parece demasiado corto." })
    .optional()
    .or(z.literal("")),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export function ContactForm() {
  const { toast } = useToast(); 
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  // Reemplaza tu función onSubmit con esta
async function onSubmit(values: z.infer<typeof formSchema>) {
  console.log("¡La función onSubmit se ha ejecutado!"); // <--- AÑADE ESTA LÍNEA
  setIsSubmitting(true);
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error('La respuesta de la red no fue correcta.');
    }

    // Si todo va bien
    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
    });
    setIsSuccess(true);
    form.reset();

  } catch (error) {
    // Si hay un error
    console.error("Error al enviar el formulario:", error);
    toast({
      title: "Error al enviar",
      description: "Hubo un problema. Por favor, inténtalo de nuevo más tarde.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
    // Resetear el estado del botón después de unos segundos
    setTimeout(() => {
        setIsSuccess(false);
    }, 3000);
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
                <Input placeholder="Tu Nombre" {...field} />
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
                <Input placeholder="tu.email@ejemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Tu número de teléfono" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Cuéntanos sobre tu proyecto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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