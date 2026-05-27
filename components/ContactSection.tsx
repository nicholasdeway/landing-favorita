"use client";

import React, { useState, useRef } from "react";
import ShinyText from "@/components/ShinyText";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const subject = encodeURIComponent(
      `Nueva consulta de cocina — ${formData.nombre}`
    );
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\n\nMensaje:\n${formData.mensaje}`
    );

    window.location.href = `mailto:proyectoslafavorita@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  };

  return (
    <section id="contacto" className="w-full bg-background py-12 md:py-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">

      <div className="mx-auto max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side — Title & Info */}
          <div className="flex flex-col justify-center lg:sticky lg:top-32">
            {/* Small tag above title */}
            <span className="inline-flex items-center gap-2 text-[#388186] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-[2px] bg-[#388186] rounded-full" />
              Contacto
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold text-[#1c1c1c] tracking-tight leading-[1.1] mb-6">
              Cuéntanos tu idea
              <br />
              <ShinyText
                text="de cocina"
                color="#388186"
                shineColor="#5fbfc4"
                speed={3}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold tracking-tight"
              />
            </h2>

            <p className="text-zinc-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mb-10">
              Comparte con nosotros los detalles de tu proyecto y te
              responderemos con una propuesta personalizada. Sin compromiso.
            </p>

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-4">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#388186]/10 group-hover:border-[#388186]/30">
                  <svg
                    className="w-5 h-5 text-[#388186]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="mailto:proyectoslafavorita@gmail.com"
                    className="text-[#1c1c1c] text-sm sm:text-base font-medium transition-colors duration-300"
                  >
                    proyectoslafavorita@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#388186]/10 group-hover:border-[#388186]/30">
                  <svg
                    className="w-5 h-5 text-[#388186]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">
                    Teléfono
                  </p>
                  <a
                    href="tel:+34650323800"
                    className="text-[#1c1c1c] text-sm sm:text-base font-medium transition-colors duration-300"
                  >
                    +34 650 323 800
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#388186]/10 group-hover:border-[#388186]/30">
                  <svg
                    className="w-5 h-5 text-[#388186]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">
                    Dirección
                  </p>
                  <p className="text-[#1c1c1c] text-sm sm:text-base font-medium">
                    C. Espronceda 6, 38611, Granadilla, Tenerife
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side — Form */}
          <div className="relative">
            {/* Card form container */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 sm:p-10 lg:p-12">
              {/* Success feedback overlay */}
              {sent && (
                <div className="absolute inset-0 z-20 bg-white/95 rounded-3xl flex flex-col items-center justify-center gap-4 animate-[fadeIn_0.3s_ease-out]">
                  <div className="w-16 h-16 rounded-full bg-[#388186]/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#388186]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="text-[#1c1c1c] font-bold text-lg">
                    ¡Mensaje preparado!
                  </p>
                  <p className="text-zinc-400 text-sm text-center max-w-xs">
                    Se ha abierto tu cliente de correo. Envía el mensaje para
                    completar la consulta.
                  </p>
                </div>
              )}

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {/* Nombre */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-nombre"
                    className="text-zinc-500 text-xs font-bold uppercase tracking-[0.15em]"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="contact-nombre"
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full bg-zinc-100 border border-zinc-200 rounded-xl px-5 py-4 text-[#1c1c1c] text-sm sm:text-base placeholder:text-zinc-400 focus:outline-none focus:border-[#388186]/60 focus:bg-zinc-50 transition-all duration-300"
                  />
                </div>

                {/* Email & Teléfono (2-column on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-email"
                      className="text-zinc-500 text-xs font-bold uppercase tracking-[0.15em]"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="w-full bg-zinc-100 border border-zinc-200 rounded-xl px-5 py-4 text-[#1c1c1c] text-sm sm:text-base placeholder:text-zinc-400 focus:outline-none focus:border-[#388186]/60 focus:bg-zinc-50 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-telefono"
                      className="text-zinc-500 text-xs font-bold uppercase tracking-[0.15em]"
                    >
                      Teléfono
                    </label>
                    <input
                      id="contact-telefono"
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="w-full bg-zinc-100 border border-zinc-200 rounded-xl px-5 py-4 text-[#1c1c1c] text-sm sm:text-base placeholder:text-zinc-400 focus:outline-none focus:border-[#388186]/60 focus:bg-zinc-50 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-mensaje"
                    className="text-zinc-400 text-xs font-bold uppercase tracking-[0.15em]"
                  >
                    Cuéntanos tu idea
                  </label>
                  <textarea
                    id="contact-mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe tu proyecto ideal: distribución, estilo, materiales, presupuesto estimado..."
                    className="w-full bg-zinc-100 border border-zinc-200 rounded-xl px-5 py-4 text-[#1c1c1c] text-sm sm:text-base placeholder:text-zinc-400 focus:outline-none focus:border-[#388186]/60 focus:bg-zinc-50 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="mt-2 w-full bg-[#388186] hover:bg-[#2d6a6e] text-white font-bold py-4 sm:py-5 rounded-xl text-sm sm:text-base uppercase tracking-[0.15em] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer relative overflow-hidden group"
                >
                  <span
                    className={`inline-flex items-center gap-2 transition-all duration-300 ${isSending ? "opacity-0" : "opacity-100"}`}
                  >
                    Enviar consulta
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                  {isSending && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 animate-spin text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </span>
                  )}
                </button>

                {/* Privacy note */}
                <p className="text-center text-zinc-400 text-[11px] sm:text-xs leading-relaxed">
                  Al enviar este formulario, aceptas que nos pongamos en contacto
                  contigo para responder a tu consulta. Sin spam, sin compromiso.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps — Grayscale */}
        <div className="mt-20 flex flex-col items-center">
          <h3 className="text-center text-lg sm:text-xl lg:text-2xl font-extrabold text-[#1c1c1c] tracking-tight mb-5">
            ¿Dónde estamos?
          </h3>

          {/* Minimalist button to open route in Google Maps */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=La+Favorita+Interior+Tenerife,+C.+Espronceda+6,+38611+Granadilla+de+Abona,+Santa+Cruz+de+Tenerife"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mb-8 text-xs font-bold tracking-widest bg-[#388186] hover:bg-[#2d6a6e] text-white py-3.5 px-7 rounded-2xl shadow-xs transition-all duration-300 uppercase group"
          >
            <svg
              className="w-4 h-4 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span>Abrir ruta en Google Maps</span>
          </a>

          <div
            className="w-full rounded-2xl overflow-hidden border border-zinc-200"
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            <iframe
              title="La Favorita Interior — Ubicación"
              src="https://www.google.com/maps?q=La+Favorita+Interior+Tenerife,+C.+Espronceda+6,+38611+Granadilla+de+Abona,+Santa+Cruz+de+Tenerife&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="520"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}