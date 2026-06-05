import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Armarios Empotrados a Medida en Tenerife | Carpintería de Lujo",
  description: "Diseño y fabricación de armarios empotrados a medida en Tenerife. Maximiza el espacio de tus dormitorios con acabados de alta calidad. ¡Pide presupuesto gratis!",
  keywords: "armarios empotrados tenerife, armarios a medida tenerife, vestidores a medida tenerife, carpinteria de madera tenerife"
};

export default function ArmariosTenerifePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "La Favorita Interior - Armarios Empotrados",
    "image": "https://lafavoritainterior.com/images/001-image.jpg",
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
    "url": "https://lafavoritainterior.com/armarios-empotrados-tenerife"
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
          src="/images/001-image.jpg"
          alt="Armario empotrado a medida en Tenerife"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
          <span className="inline-flex items-center gap-2 text-brand-gold text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-[1px] bg-brand-gold" />
            Servicio Local Premium
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
            Armarios Empotrados en Tenerife
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-xl">
            Soluciones de almacenamiento a medida que aprovechan cada centímetro de tu dormitorio con puertas correderas o abatibles de alta gama.
          </p>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 md:py-24 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">
            Armarios a medida y carpintería artesanal en Tenerife
          </h2>
          <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              ¿Buscas optimizar el espacio de tu hogar y darle un toque de elegancia? En <strong>La Favorita Interior</strong> diseñamos y fabricamos <strong>armarios empotrados a medida en Tenerife</strong> adaptados 100% a tus necesidades de organización y almacenamiento.
            </p>
            <p>
              Fabricamos frentes de armarios e interiores totalmente equipados: cajoneras con guías amortiguadas, pantaloneros extraíbles, barras de colgar con iluminación LED integrada y zapateros deslizantes. Trabajamos con una amplia variedad de acabados, desde maderas nobles barnizadas hasta DM lacado mate premium y cristales templados tintados.
            </p>
            <h3 className="text-xl font-bold text-zinc-900 pt-4">Ventajas de nuestros armarios empotrados</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Maximización del espacio:</strong> Aprovechamos huecos difíciles, esquinas y techos abuhardillados de suelo a techo.</li>
              <li><strong>Puertas a tu gusto:</strong> Sistemas de puertas abatibles, correderas o coplanares con freno amortiguado de alta durabilidad.</li>
              <li><strong>Interiores configurables:</strong> Diseñamos la distribución interna contigo para que cada prenda y accesorio tenga su lugar ideal.</li>
              <li><strong>Acabados premium:</strong> Melaminas de alta densidad (19mm) y maderas tratadas resistentes al desgaste y la humedad.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Local Projects Gallery link */}
      <section className="py-16 bg-white border-y border-zinc-200/40 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">¿Deseas ver proyectos de armarios reales?</h3>
          <p className="text-zinc-500 text-sm sm:text-base mb-8">
            Fabricamos e instalamos en Adeje, Arona, Guía de Isora, Santa Cruz, La Laguna y toda Tenerife.
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
