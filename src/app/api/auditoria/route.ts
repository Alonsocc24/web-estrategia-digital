// Contenido FINAL Y COMPLETO para: src/app/api/auditoria/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // 1. Obtener la URL del Webhook de las variables de entorno
  const webhookUrl = process.env.MAKE_WEBHOOK_URL;

  // Comprobación de seguridad: si no hemos configurado la URL, devolvemos un error.
  if (!webhookUrl) {
    console.error("Error: La URL del Webhook no está configurada en las variables de entorno.");
    return NextResponse.json({ error: 'La configuración del servidor es incorrecta.' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { name, email, websiteUrl } = body;

    // 2. Validamos que los datos necesarios llegaron
    if (!name || !email || !websiteUrl) {
      return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 });
    }

    // 3. Enviamos los datos al Webhook de Make/N8N
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), // Enviamos todos los datos recibidos
    });

    // Si Make/N8N no responde correctamente, registramos un error
    if (!webhookResponse.ok) {
      console.error("Error al enviar datos al webhook:", await webhookResponse.text());
      throw new Error('El servicio de automatización no respondió correctamente.');
    }
    
    console.log('Solicitud de auditoría enviada exitosamente al webhook.');

    // 4. Respondemos al usuario que todo ha ido bien
    return NextResponse.json({ success: true, message: 'Solicitud recibida y procesada.' });

  } catch (error) {
    console.error('Error en la API de auditoría:', error);
    return NextResponse.json({ error: 'Hubo un error al procesar la solicitud.' }, { status: 500 });
  }
}