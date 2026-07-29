import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vestidores a Medida en Tenerife | Closets de Lujo y Diseño",
  description: "Diseño y fabricación de vestidores a medida en Tenerife. Crea un vestidor abierto o cerrado con iluminación LED integrada, pantaloneros y organizadores. ¡Presupuesto gratis!",
  keywords: "vestidores tenerife, vestidores a medida tenerife, armarios vestidores tenerife, armarios empotrados tenerife"
};

export default function VestidoresTenerifePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "La Favorita Interior - Vestidores",
    "image": "https://lafavoritainterior.com/images/021-image.png",
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
    "url": "https://lafavoritainterior.com/vestidores-tenerife"
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
          src="/images/021-image.png"
          alt="Vestidor a medida con iluminación LED en Tenerife"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
          <span className="inline-flex items-center gap-2 text-brand-gold text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-[1px] bg-brand-gold" />
            Servicio Local Premium
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
            Vestidores a Medida en Tenerife
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-xl">
            Proyectamos tu vestidor ideal (abierto, en U o en L) con perfilería de aluminio oculta, cristal templado y detalles en cuero artesanal.
          </p>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 md:py-24 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">
            Diseño exclusivo de vestidores y closets a medida en Tenerife
          </h2>
          <div className="text-zinc-600 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              Tener un espacio dedicado para organizar tu ropa y accesorios con la elegancia de una tienda boutique es posible. En <strong>La Favorita Interior</strong> diseñamos <strong>vestidores a medida en Tenerife</strong>, priorizando la ergonomía, la capacidad de almacenamiento y la iluminación ambiental.
            </p>
            <p>
              Ofrecemos soluciones innovadoras como armarios sin puertas con divisiones modulares, zapateros extraíbles con frontales de cristal, barras de colgar abatibles para optimizar las zonas altas, y cajones organizadores revestidos de terciopelo o cuero para tus joyas y relojes.
            </p>
            <h3 className="text-xl font-bold text-zinc-900 pt-4">¿Por qué confiar en nosotros para tu vestidor?</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Proyecto a medida en 3D:</strong> Ajustamos cada módulo a tus prendas específicas y te mostramos el resultado final fotorrealista.</li>
              <li><strong>Iluminación inteligente:</strong> Luces LED integradas de bajo consumo de activación automática al detectar movimiento o apertura de cajón.</li>
              <li><strong>Estructuras sólidas:</strong> Componentes de madera y metal de alta densidad resistentes a la flexión y al clima húmedo de Tenerife.</li>
              <li><strong>Instalación cuidada:</strong> Montaje limpio sin tornillos vistos, logrando acabados flotantes e integrados en la decoración de tu dormitorio.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Local Projects Gallery link */}
      <section className="py-16 bg-white border-y border-zinc-200/40 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">¿Quieres ver nuestros proyectos reales de vestidores?</h3>
          <p className="text-zinc-500 text-sm sm:text-base mb-8">
            Diseñamos y montamos en Adeje, Arona, Granadilla de Abona, Santa Cruz, La Laguna y toda Tenerife.
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
