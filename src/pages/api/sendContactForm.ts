import { Resend } from "resend";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const handleContactForm = (data: ContactFormData) => {
  console.log("Entra a la función handleContactForm");
  const { name, company, email, phone, subject, message } = data;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.error("Por favor, introduce un correo electrónico válido.");
    return;
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    console.error(
      "Por favor, introduce un número de teléfono válido (10 dígitos).",
    );
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("La API key de Resend no está configurada.");
    return;
  }

  const resend = new Resend(apiKey);

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.RECEPT_EMAIL ?? "",
    subject: `Solicitud de Información - ${subject}`,
    html: `<p>Nombre: ${name}</p><p>Empresa: ${company}</p><p>Teléfono: ${phone}</p><p>Mensaje: ${message}</p>`,
  });
};
