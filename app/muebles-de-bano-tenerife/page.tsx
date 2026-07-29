import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Muebles de Baño a Medida en Tenerife | Diseños Modernos",
  description: "Diseño y fabricación de muebles de baño a medida en Tenerife. Soluciones suspendidas e integradas con materiales resistentes a la humedad. ¡Solicita presupuesto!",
  keywords: "muebles de bano tenerife, bano a medida tenerife, encimeras de bano tenerife, reformas de bano tenerife"
};

export default function BanosTenerifePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "La Favorita Interior - Muebles de Baño",
    "image": "https://lafavoritainterior.com/images/017-image.png",
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
    "url": "https://lafavoritainterior.com/muebles-de-bano-tenerife"
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
          src="/images/017-image.png"
          alt="Mueble de baño moderno a medida en Tenerife"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
          <span className="inline-flex items-center gap-2 text-brand-gold text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-[1px] bg-brand-gold" />
            Servicio Local Premium
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
            Muebles de Baño en Tenerife
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-xl">
            Optimiza tu baño con armarios suspendidos y encimeras resistentes a la humedad, diseñados para un confort diario de lujo.
          </p>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 md:py-24 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">
            Muebles de baño personalizados y carpintería hidrófuga en Tenerife
          </h2>
          <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              El cuarto de baño es una de las estancias que más sufre el desgaste por la humedad y el vapor de agua. En <strong>La Favorita Interior</strong> diseñamos y fabricamos <strong>muebles de baño a medida en Tenerife</strong> utilizando tableros hidrófugos de alta calidad revestidos para soportar las condiciones más exigentes.
            </p>
            <p>
              Nos adaptamos al tamaño de tu estancia para crear armarios suspendidos (que facilitan la limpieza), repisas decorativas empotradas, encimeras a medida para lavabos integrados y soluciones de almacenamiento inteligentes para toallas y cosméticos.
            </p>
            <h3 className="text-xl font-bold text-zinc-900 pt-4">¿Qué ofrecemos para tu baño?</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Materiales 100% hidrófugos:</strong> MDF hidrófugo de alta calidad barnizado, maderas naturales tratadas (teca, roble) y laminados especiales que previenen la hinchazón.</li>
              <li><strong>Encimeras elegantes:</strong> Superficies de Krion, porcelánicos de Dekton o Silestone resistentes al agua y a los agentes de limpieza.</li>
              <li><strong>Herrajes anticorrosión:</strong> Guías y bisagras con recubrimiento especial contra la oxidación y con cierre suave silencioso.</li>
              <li><strong>Instalación e integración:</strong> Montaje coordinado con tu fontanería e instalación de espejos retroiluminados LED a medida.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Local Projects Gallery link */}
      <section className="py-16 bg-white border-y border-zinc-200/40 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">¿Deseas ver proyectos reales de baño?</h3>
          <p className="text-zinc-500 text-sm sm:text-base mb-8">
            Realizamos diseños e instalaciones en Adeje, Arona, Granadilla de Abona, Santa Cruz, La Laguna y toda Tenerife.
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
