import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cocinas a Medida en Tenerife | Diseños Modernos y de Lujo",
  description: "Diseño y fabricación de Cocinas a Medida en Tenerife. Especialistas en cocinas de alta gama con isla, herrajes alemanes y encimeras premium. ¡Presupuesto gratis!",
  keywords: "cocinas a medida tenerife, cocinas de diseño tenerife, reformas de cocinas tenerife, muebles de cocina tenerife"
};

export default function CocinasTenerifePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "La Favorita Interior - Cocinas a Medida",
    "image": "https://lafavoritainterior.com/images/012-image.jpg",
    "telephone": "+34 650 323 800",
    "email": "proyectoslafavorita@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C. Espronceda 6",
      "addressLocality": "Granadilla",
      "addressRegion": "Tenerife",
      "postalCode": "38611",
      "addressCountry": "ES"
    },
    "url": "https://lafavoritainterior.com/cocinas-a-medida-tenerife"
  };

  return (
    <div className="bg-[#F5F1EB] min-h-screen text-[#3A3A3A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 bg-black/55 z-10" />
        <img
          src="/images/012-image.jpg"
          alt="Cocinas a Medida de lujo en Tenerife"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
          <span className="inline-flex items-center gap-2 text-brand-gold text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-[1px] bg-brand-gold" />
            Servicio Local Premium
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
            Cocinas a Medida en Tenerife
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-xl">
            Diseñamos y fabricamos la cocina de tus sueños adaptada al milímetro a tu espacio y estilo de vida, en cualquier rincón de Tenerife.
          </p>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 md:py-24 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">
            Diseño, calidad artesanal y montaje profesional en Tenerife
          </h2>
          <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              En <strong>La Favorita Interior</strong> entendemos que la cocina es el corazón de tu hogar. Por eso, nos especializamos en la fabricación de <strong>cocinas personalizadas en Tenerife</strong>, combinando materiales de alta durabilidad con una estética moderna y funcional.
            </p>
            <p>
              Cada proyecto se fabrica a medida en nuestro taller local, lo que nos permite un control total sobre la calidad y los plazos de entrega. Desde el triángulo de trabajo ergonómico hasta la elección de encimeras (Dekton, Silestone, granito) y herrajes amortiguados de última generación, cuidamos cada detalle para que tu cocina luzca impecable por décadas.
            </p>
            <h3 className="text-xl font-bold text-zinc-900 pt-4">¿Por qué optar por una Cocinas a Medida con nosotros?</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Asesoría 3D previa:</strong> Visualiza tu proyecto en renders tridimensionales fotorrealistas antes de iniciar la fabricación.</li>
              <li><strong>Materiales premium:</strong> Estructuras de DM hidrófugo y laminados antihuella resistentes a la humedad de las zonas costeras de Tenerife.</li>
              <li><strong>Instalación local impecable:</strong> Nuestro equipo de instaladores realiza el montaje de forma limpia, precisa y profesional.</li>
              <li><strong>Garantía de 5 años:</strong> Respaldo absoluto de fábrica en todo nuestro mobiliario.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Local Projects Gallery link */}
      <section className="py-16 bg-white border-y border-zinc-200/40 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">¿Quieres ver nuestros proyectos reales?</h3>
          <p className="text-zinc-500 text-sm sm:text-base mb-8">
            Hemos transformado hogares en Adeje, Arona, Granadilla, Santa Cruz y San Cristóbal de La Laguna.
          </p>
          <Link
            href="/#proyectos"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3A3A3A] hover:bg-brand-gold text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all duration-300"
          >
            Ver galería de proyectos
          </Link>
        </div>
      </section>

      {/* Final Contact Form */}
      <ContactSection />
    </div>
  );
}
