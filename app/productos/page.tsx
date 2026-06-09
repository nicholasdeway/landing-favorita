"use client";

import Link from "next/link";

const PRODUCT_CATEGORIES = [
  {
    slug: "cocinas-a-medida",
    title: "Cocinas a Medida",
    description: "Diseñamos y fabricamos cocinas a medida exclusivas en Tenerife, optimizando el espacio, la ergonomía y combinando estética de vanguardia con alta funcionalidad.",
    image: "/images/012-image.jpg",
    features: ["Herrajes amortiguados premium", "Diseño ergonómico personalizado", "Amplia gama de materiales y texturas"]
  },
  {
    slug: "armarios-a-medida",
    title: "Armarios a Medida",
    description: "Diseño y fabricación de armarios empotrados y vestidores a medida en Tenerife. Soluciones inteligentes para maximizar y organizar tu espacio del día a día.",
    image: "/images/001-image.jpg",
    features: ["Interiores configurables", "Acabados lacados y texturizados", "Puertas correderas o abatibles integradas"]
  },
  {
    slug: "muebles-a-medida",
    title: "Muebles a Medida",
    description: "Mobiliario personalizado de alta gama para salones, dormitorios y recibidores. Diseñamos piezas funcionales y exclusivas que se integran en tu hogar.",
    image: "/images/013-image.jpg",
    features: ["Fabricación artesanal propia", "Maderas nobles y lacados premium", "Diseños adaptados a tu estilo de vida"]
  },
  {
    slug: "soluciones-inteligentes",
    title: "Soluciones Inteligentes",
    description: "Integración de cajones automáticos, iluminación LED integrada con sensores de presencia y domótica avanzada para hacer tu hogar más práctico.",
    image: "/images/007-image.jpg",
    features: ["Aperturas motorizadas y táctiles", "Cargadores inalámbricos ocultos", "Iluminación interior automatizada"]
  },
  {
    slug: "cortinas-pergolas",
    title: "Cortinas y Pérgolas",
    description: "Soluciones de protección solar a medida como estores técnicos y pérgolas bioclimáticas automáticas para disfrutar al máximo de tu terraza.",
    image: "/images/010-image.jpg",
    features: ["Sistemas motorizados WiFi", "Tejidos técnicos de alta durabilidad", "Pérgolas bioclimáticas de aluminio"]
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
              className="bg-zinc-50/50 border border-zinc-200/60 rounded-[32px] overflow-hidden flex flex-col justify-between hover:bg-white hover:border-zinc-200 transition-all duration-500 group"
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
