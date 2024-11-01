import { Resend } from 'resend';


export const handleEmail = (email: FormDataEntryValue | null) => {
    if (typeof email !== 'string') {
      console.error("Email no es válido");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Por favor, introduce un correo electrónico válido.");
      return;
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("La API key de Resend no está configurada.");
        return;
    }

    const resend = new Resend(apiKey);

    resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Solicitud de Información - ArianeDevs',
    html: '<p>Congrats on sending your <strong>first email from ArianeDevs</strong>!</p>'
    });
  };
  