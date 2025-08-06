// Contenido para: src/app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validar que los datos importantes existen
    if (!name || !email || !message) {
      return new Response('Faltan campos requeridos', { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Estrategia Digital <onboarding@resend.dev>', // Importante: Resend requiere un remitente verificado
      to: ['hola@estrategiadigital.io'], // <-- ¡¡REEMPLAZA ESTO CON TU EMAIL!!
      subject: `Nuevo Mensaje de Contacto de: ${name}`,
      reply_to: email, // Para que al responder, le respondas al cliente
      html: `
        <h1>Nuevo Mensaje de Contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
        <hr>
        <h2>Mensaje:</h2>
        <p>${message}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Hubo un error al enviar el mensaje.' }, { status: 500 });
  }
}