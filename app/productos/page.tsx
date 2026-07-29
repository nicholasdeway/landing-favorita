"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const PRODUCT_CATEGORIES = [
  {
    slug: "cocinas-a-medida",
    image: "/images/008-image.jpg"
  },
  {
    slug: "armarios-a-medida",
    image: "/images/020-image.png"
  },
  {
    slug: "muebles-a-medida",
    image: "/images/013-image.jpg"
  },
  {
    slug: "soluciones-inteligentes",
    image: "/images/007-image.jpg"
  },
  {
    slug: "cortinas-pergolas",
    image: "/images/014-image.png"
  }
];

export default function ProductosPage() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-background py-12 md:py-20 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-[#388186] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
            {t("productos_page.tag")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1c1c1c] tracking-tight">
            {t("productos_page.title")}
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
            {t("productos_page.description")}
          </p>
          <div className="w-16 h-1 bg-[#388186] mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((category) => {
            const title = t(`productos_page.cards.${category.slug}.title`);
            const description = t(`productos_page.cards.${category.slug}.description`);
            const features = (t(`productos_page.cards.${category.slug}.features`, { returnObjects: true }) || []) as string[];

            return (
              <div
                key={category.slug}
                className="bg-zinc-50/50 border border-zinc-200/60 rounded-[32px] overflow-hidden flex flex-col justify-between hover:bg-white hover:border-zinc-200 transition-all duration-500 group"
              >
                {/* Image Block */}
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Text Block */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#1c1c1c] tracking-tight group-hover:text-[#388186] transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 pt-2">
                      {features.map((feature, idx) => (
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
                      <span>{t("productos_page.btn_more")}</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
