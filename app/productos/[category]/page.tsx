"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import HashLink from "@/components/HashLink";
import { useLanguage } from "@/components/LanguageProvider";

import { CATEGORY_DATA } from "@/lib/data/productos";

export default function CategoryPage() {
  const params = useParams();
  const category = (params?.category || "") as string;
  const { language } = useLanguage();
  const { t } = useTranslation();

  const isEn = language === "en";
  const staticData = CATEGORY_DATA[category];

  const title = t(`productos_paginas.categories.${category}.title`);

  if (!staticData || !title || title === `productos_paginas.categories.${category}.title`) {
    notFound();
  }

  const subtitle = t(`productos_paginas.categories.${category}.subtitle`);
  const description = t(`productos_paginas.categories.${category}.description`);
  const paragraphs = (t(`productos_paginas.categories.${category}.paragraphs`, { returnObjects: true }) || []) as string[];
  const specifications = (t(`productos_paginas.categories.${category}.specifications`, { returnObjects: true }) || []) as { label: string; value: string }[];

  const remoteDesignItems = (t("productos_paginas.remote_design.items", { returnObjects: true }) || []) as string[];

  return (
    <section className="w-full bg-background py-12 md:py-24 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2.5 text-zinc-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-10">
          <Link href="/" className="hover:text-[#388186] transition-colors duration-300">
            {t("productos_paginas.breadcrumb_home")}
          </Link>
          <span>/</span>
          <Link href="/productos" className="hover:text-[#388186] transition-colors duration-300">
            {t("productos_paginas.breadcrumb_products")}
          </Link>
          <span>/</span>
          <span className="text-zinc-800">{title}</span>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch mb-20">

          {/* Left Column: text details and specs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[#388186] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                {subtitle}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c1c1c] tracking-tight leading-tight">
                {title}
              </h1>
            </div>

            <div className="text-zinc-500 text-sm sm:text-base leading-relaxed space-y-6">
              <p className="text-zinc-800 font-medium text-base sm:text-lg">
                {description}
              </p>
              {Array.isArray(paragraphs) && paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Specifications Table */}
            <div className="pt-6 border-t border-zinc-100">
              <h3 className="text-lg sm:text-xl font-bold text-zinc-800 tracking-tight mb-5">
                {t("productos_paginas.specifications_title")}
              </h3>
              <div className="border border-zinc-200/80 rounded-2xl overflow-hidden bg-zinc-50/50">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <tbody>
                    {Array.isArray(specifications) && specifications.map((spec, idx) => (
                      <tr
                        key={idx}
                        className={`border-zinc-200/80 ${idx < specifications.length - 1 ? 'border-b' : ''}`}
                      >
                        <td className="px-5 py-4 font-bold text-zinc-800 bg-zinc-100/50 w-1/3 border-r border-zinc-200/80">
                          {spec.label}
                        </td>
                        <td className="px-5 py-4 text-zinc-600">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: large image and gallery */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:gap-6 h-full">
            <div className="w-full flex-1 min-h-[300px] sm:min-h-[400px] rounded-3xl overflow-hidden border border-zinc-200 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
              <img
                src={staticData.image}
                alt={title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1500ms]"
              />
            </div>

            <div className="grid grid-cols-2 gap-5 lg:gap-6 shrink-0 h-[180px] sm:h-[220px] lg:h-[240px]">
              {staticData.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="w-full h-full rounded-2xl overflow-hidden border border-zinc-200 relative group"
                >
                  <img
                    src={img}
                    alt={`${title} Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Remote Design Section */}
        <div className="bg-white rounded-[32px] overflow-hidden border border-zinc-100/80 mb-20 flex flex-col md:flex-row items-stretch">
          {/* Text Content */}
          <div className="p-10 md:p-14 lg:p-16 flex-1 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1c1c1c] tracking-tight leading-tight mb-4">
              {t("productos_paginas.remote_design.title")}
              <span className="text-[#519f9f] font-medium font-serif italic tracking-normal">
                {t("productos_paginas.remote_design.italic")}
              </span>
            </h2>
            <p className="text-zinc-600 text-lg sm:text-xl font-medium mb-6">
              {t("productos_paginas.remote_design.subtitle")}
            </p>
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              {t("productos_paginas.remote_design.description")}
            </p>

            <ul className="space-y-4 mb-10 text-zinc-500 text-sm sm:text-base font-medium">
              {Array.isArray(remoteDesignItems) && remoteDesignItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#519f9f] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-[45%] lg:w-1/2 min-h-[400px] relative">
            <img
              src="/icons/atendimento-online.png"
              alt="Atendimento Online"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Dynamic CTA Banner */}
        <div className="bg-[#1c1c1c] text-white rounded-[36px] p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3 z-10 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t("productos_paginas.cta.title")}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-lg leading-relaxed">
              {t("productos_paginas.cta.subtitle")}
            </p>
          </div>

          <HashLink
            href="/#contacto"
            className="bg-[#388186] hover:bg-[#2d6a6e] text-white font-bold py-4 px-8 rounded-xl text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 z-10 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          >
            <span>{t("productos_paginas.cta.button")}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </HashLink>
        </div>
      </div>
    </section>
  );
}
