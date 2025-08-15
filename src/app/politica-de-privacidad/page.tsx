// Contenido completo para: src/app/politica-de-privacidad/page.tsx

import type { Metadata } from 'next';

// Metadatos SEO para la página
export const metadata: Metadata = {
  title: 'Política de Privacidad | Estrategia Digital',
  description: 'Conoce cómo Estrategia Digital trata tus datos personales, tus derechos y nuestras políticas de cookies y seguridad.',
};

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="container mx-auto max-w-3xl py-20 md:py-32 px-4">
        <div className="prose prose-invert lg:prose-xl mx-auto">
          
          <h1 className="text-primary">Política de Privacidad</h1>
          <p className="text-sm text-foreground/60">Última actualización: 10 de Agosto de 2025</p>

          <p>
            En Estrategia Digital, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad te informará sobre cómo tratamos tus datos cuando visitas nuestro sitio web (independientemente de desde dónde lo visites) y te explicará tus derechos de privacidad y cómo la ley te protege.
          </p>

          <h2>1. Información Importante y Quiénes Somos</h2>
          <p>
            <strong>Responsable del tratamiento:</strong> Estrategia Digital.
            <br />
            <strong>Ubicación:</strong> Murcia, España.
            <br />
            <strong>Email de contacto:</strong> <a href="mailto:privacidad@estrategiadigital.io">privacidad@estrategiadigital.io</a>
          </p>
          <p>
            Estrategia Digital es el responsable del tratamiento de tus datos personales. Si tienes alguna pregunta sobre esta política de privacidad, incluyendo cualquier solicitud para ejercer tus derechos legales, por favor, contáctanos a través del email proporcionado.
          </p>

          <h2>2. Los Datos que Recopilamos Sobre Ti</h2>
          <p>
            Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti, que hemos agrupado de la siguiente manera:
          </p>
          <ul>
            <li><strong>Datos de Identidad:</strong> Incluye tu nombre.</li>
            <li><strong>Datos de Contacto:</strong> Incluye tu dirección de correo electrónico.</li>
            <li><strong>Datos Técnicos:</strong> Incluye la URL de tu sitio web cuando solicitas una auditoría. No recopilamos tu dirección IP de forma directa, aunque nuestros proveedores de hosting (Vercel) pueden procesarla para fines de seguridad y analíticas anónimas.</li>
          </ul>

          <h2>3. ¿Cómo Usamos tus Datos Personales?</h2>
          <p>
            Utilizamos tus datos personales en las siguientes situaciones:
          </p>
          <ul>
            <li>
              <strong>Para prestarte un servicio:</strong> Cuando solicitas una auditoría web gratuita, usamos tu nombre, email y la URL de tu web para generar dicha auditoría y enviártela.
            </li>
            <li>
              <strong>Para comunicarnos contigo:</strong> Usamos tu nombre y email para responder a las consultas que nos envías a través de nuestro formulario de contacto.
            </li>
          </ul>
          <p>
            No utilizaremos tus datos para fines de marketing a menos que nos des tu consentimiento explícito.
          </p>

          <h2>4. Divulgación de tus Datos Personales a Terceros</h2>
          <p>
            Para poder prestar nuestros servicios, necesitamos compartir tus datos con proveedores de confianza que actúan como encargados del tratamiento. Nos hemos asegurado de que todos ellos cumplen con la normativa de protección de datos.
          </p>
          <ul>
            <li>
              <strong>Make.com (Celonis, Inc.):</strong> Utilizamos esta plataforma para automatizar el proceso de recepción de solicitudes de auditoría y el envío de los informes.
            </li>
            <li>
              <strong>Google AI (Gemini):</strong> La URL de tu sitio web es procesada por los modelos de IA de Google para generar el contenido de la auditoría.
            </li>
            <li>
              <strong>Google Docs:</strong> Utilizamos este servicio para crear el documento PDF de la auditoría.
            </li>
            <li>
              <strong>Zoho Mail / Resend:</strong> Utilizamos estos servicios para enviar los correos electrónicos con las auditorías y para responder a tus consultas.
            </li>
            <li>
              <strong>Vercel Inc.:</strong> Es nuestro proveedor de hosting y puede recopilar datos técnicos anónimos para garantizar el rendimiento y la seguridad del sitio web.
            </li>
          </ul>

          <h2>5. Tus Derechos Legales</h2>
          <p>
            Bajo la normativa de protección de datos, tienes derecho a:
          </p>
          <ul>
            <li>Solicitar el acceso a tus datos personales.</li>
            <li>Solicitar la rectificación de tus datos personales.</li>
            <li>Solicitar la supresión de tus datos personales.</li>
            <li>Oponerte al tratamiento de tus datos personales.</li>
            <li>Solicitar la limitación del tratamiento de tus datos personales.</li>
            <li>Solicitar la portabilidad de tus datos personales.</li>
            <li>Derecho a retirar el consentimiento.</li>
          </ul>
          <p>
            Si deseas ejercer alguno de estos derechos, por favor, contáctanos en <a href="mailto:privacidad@estrategiadigital.io">privacidad@estrategiadigital.io</a>.
          </p>

          <h2>6. Política de Cookies</h2>
          <p>
            Actualmente, nuestro sitio web no utiliza cookies de seguimiento o marketing. Solo utilizamos las cookies técnicas esenciales para el funcionamiento de la plataforma (Vercel). En el futuro, si implementamos herramientas como Google Analytics, esta sección será actualizada y te pediremos tu consentimiento explícito a través de un banner de cookies.
          </p>

        </div>
      </div>
    </main>
  );
}