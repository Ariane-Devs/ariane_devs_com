import { Resend } from "resend";

export const handleEmail = (email: FormDataEntryValue | null) => {
  console.log("Entra a la función handleEmail");
  if (typeof email !== "string") {
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

  resend.emails
    .send({
      from: "onboarding@resend.dev",
      to: process.env.RECEPT_EMAIL ?? "",
      subject: "Solicitud de Información - ArianeDevs",
      html:
        "<p>¡Hola! Alguien ha solicitado información en tu sitio web, el email es: " +
        email +
        "</p>",
    })
    .then(() => {
      resend.emails.send({
        from: process.env.RECEPT_EMAIL ?? "",
        to: email,
        subject: "Solicitud de contacto - ArianeDevs",
        html: "<p>¡Hola! Hemos recibido tu mensaje y te responderemos lo más pronto posible.</p>",
      });
    })
    .catch((error) => {
      console.error("Error al enviar el email", error);
    });
};
