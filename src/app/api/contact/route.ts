// Contenido corregido para: src/app/api/contact/route.ts
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// --- INICIALIZACIÓN SEGURA DE RESEND ---
// Comprobamos si la API Key existe al iniciar. Si no, el proceso fallará con un error claro.
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  throw new Error('La variable de entorno RESEND_API_KEY no está definida.');
}
const resend = new Resend(resendApiKey);

// --- FUNCIÓN DEL ENDPOINT ---
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // --- VALIDACIÓN MÁS ROBUSTA ---
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos: nombre, email y mensaje son obligatorios.' }, { status: 400 });
    }

    // --- ENVÍO DEL EMAIL ---
    const { data, error } = await resend.emails.send({
      // ¡IMPORTANTE! Cambia esto por un email de tu dominio verificado en Resend
      from: 'Contacto Web <noreply@estrategiadigital.io>', 
      // ¡IMPORTANTE! Cambia esto por el email donde quieres recibir los mensajes
      to: ['hola@estrategiadigital.io'],
      subject: `Nuevo Mensaje de Contacto de: ${name}`,
      reply_to: email, // Para que al hacer clic en "Responder", le respondas al cliente
      html: `
        <h1>Nuevo Mensaje de Contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
        <hr>
        <h2>Mensaje:</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // --- MANEJO DE ERRORES DE RESEND ---
    if (error) {
      console.error('Error desde Resend:', error);
      return NextResponse.json({ error: 'Error al enviar el email.' }, { status: 500 });
    }

    // --- RESPUESTA EXITOSA ---
    return NextResponse.json({ success: true, data });

  } catch (error) {
    // --- MANEJO DE ERRORES GENERALES (ej: JSON mal formado) ---
    console.error('Error en la API de contacto:', error);
    return NextResponse.json({ error: 'Hubo un error al procesar la solicitud.' }, { status: 500 });
  }
}