"use client";

import Link from "next/link";

const PRODUCT_CATEGORIES = [
  {
    slug: "cocinas-a-medida",
    title: "Cocinas a Medida",
    description: "Diseñamos y fabricamos cocinas a medida exclusivas en Tenerife, optimizando el espacio, la ergonomía y combinando estética de vanguardia con alta funcionalidad.",
    image: "/images/001-image.jpg",
    features: ["Herrajes amortiguados premium", "Diseño ergonómico personalizado", "Amplia gama de materiales y texturas"]
  },
  {
    slug: "muebles-a-medida",
    title: "Muebles a Medida",
    description: "Armarios empotrados, vestidores y mobiliario personalizado para cualquier rincón de tu hogar. Aprovechamos cada centímetro con diseños únicos.",
    image: "/images/002-image.jpg",
    features: ["Interiores configurables", "Acabados lacados y texturizados", "Puertas abatibles o correderas integradas"]
  },
  {
    slug: "decoracion-interiores",
    title: "Decoración de Interiores",
    description: "Asesoramiento profesional para dar coherencia y estilo a tus estancias. Creamos conceptos espaciales completos integrando mobiliario, luces y colores.",
    image: "/images/003-image.jpg",
    features: ["Planificación en 3D", "Coordinación de colores y texturas", "Optimización de la iluminación de estancias"]
  },
  {
    slug: "accesorios-inteligentes",
    title: "Accesorios Inteligentes",
    description: "Integración de cajones automáticos, iluminación LED empotrada con sensor de presencia y soluciones que hacen tu cocina y vestidor inteligentes.",
    image: "/images/001-image.jpg",
    features: ["Apertura motorizada táctil", "Iluminación interior integrada", "Organizadores extraíbles ergonómicos"]
  },
  {
    slug: "cortinas-pergolas",
    title: "Cortinas y Pérgolas",
    description: "Soluciones textiles y estructuras para exterior que complementan tus espacios, controlando el sol y dotando de total privacidad a tu hogar.",
    image: "/images/002-image.jpg",
    features: ["Sistemas motorizados", "Tejidos técnicos de alta durabilidad", "Pérgolas bioclimáticas a medida"]
  }
];

export default function ProductosPage() {
  return (
    <section className="w-full bg-background py-12 md:py-20 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-[#388186] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
            Nuestras Especialidades
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1c1c1c] tracking-tight">
            Productos & Servicios
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
            Fabricamos e instalamos en toda Canarias. Desde cocinas de alta gama hasta vestidores modernos, con la máxima calidad directo de fábrica.
          </p>
          <div className="w-16 h-1 bg-[#388186] mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.slug}
              className="bg-zinc-50/50 border border-zinc-200/60 rounded-[32px] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:bg-white hover:border-zinc-200 transition-all duration-500 group"
            >
              {/* Image Block */}
              <div className="h-60 overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Text Block */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#1c1c1c] tracking-tight group-hover:text-[#388186] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 pt-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-zinc-600">
                        <svg className="w-4 h-4 text-[#388186] flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-6 border-t border-zinc-100">
                  <Link
                    href={`/productos/${category.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-[#388186] hover:text-white border border-zinc-200 hover:border-[#388186] text-zinc-800 font-bold py-3.5 px-6 rounded-2xl text-xs uppercase tracking-widest transition-all duration-300"
                  >
                    <span>Ver Detalles</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
