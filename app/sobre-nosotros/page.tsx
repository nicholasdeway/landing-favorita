"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import ShinyText from "@/components/ShinyText";
import { useLanguage } from "@/components/LanguageProvider";

export default function SobreNosotrosPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isEn = language === "en";

  // Safely fallback to empty array if translation hasn't loaded yet
  const valuesItems = (t("sobre_nosotros.values.items", { returnObjects: true }) || []) as { bold: string; text: string }[];
  const principlesItems = (t("sobre_nosotros.principles.items", { returnObjects: true }) || []) as { bold: string; text: string }[];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          {/* Left: Image */}
          <div className="relative w-full h-[500px] sm:h-[600px] rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#388186]/40 to-transparent z-10 opacity-60 mix-blend-multiply" />
            <img
              src="/images/patricia2.jpg"
              alt="Patricia - La Favorita Interior"
              className="w-full h-full object-cover object-top transform scale-100 group-hover:scale-105 transition-transform duration-[1500ms]"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-extrabold text-[#1c1c1c] leading-[1.1] tracking-tight text-balance">
              {t("sobre_nosotros.hero.title")}
              <ShinyText
                text={t("sobre_nosotros.hero.title_shiny") || ""}
                color="#388186"
                shineColor="#5fbfc4"
                speed={3}
                className="text-4xl sm:text-5xl lg:text-[3.3rem] font-extrabold tracking-tight inline-block"
              />
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-zinc-600 mb-2">
              {t("sobre_nosotros.hero.subtitle")}
            </p>

            <div className="space-y-5 text-zinc-500 text-base sm:text-lg leading-relaxed">
              <p>
                {t("sobre_nosotros.hero.p1")}
              </p>
              <p>
                {t("sobre_nosotros.hero.p2")}
              </p>
              <p>
                {t("sobre_nosotros.hero.p3")}
              </p>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/34650323800?text=${isEn ? "Hello%20Patricia,%20I%27d%20like%20to%20talk%20about%20my%20project." : "Hola%20Patricia,%20me%20gustar%C3%ADa%20hablar%20sobre%20mi%20proyecto."}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#388186] hover:bg-[#2d6a6e] text-white font-bold py-4 px-8 rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 group"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("sobre_nosotros.hero.button")}
              </a>
            </div>
          </div>
        </div>

        {/* CARDS SECTION */}
        <div className="flex flex-col gap-12 lg:gap-16">

          {/* Card 1: Misión & Valores */}
          <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden border border-zinc-100">
            {/* Misión (Teal background) */}
            <div className="w-full lg:w-5/12 bg-[#388186] text-white p-12 lg:p-16 flex flex-col items-center justify-center text-center group cursor-default relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>

              <div className="relative z-10">
                {/* Animated Icon */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 mb-8 mx-auto flex items-center justify-center">
                  <img
                    src="/icons/target.gif"
                    alt={t("sobre_nosotros.mission.title") || ""}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 brightness-0 invert opacity-90"
                  />
                </div>

                <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
                  {t("sobre_nosotros.mission.title")}
                </h3>
                <p className="text-white/90 text-sm lg:text-base leading-relaxed font-medium">
                  {t("sobre_nosotros.mission.description")}
                </p>
              </div>
            </div>

            {/* Valores (White background) */}
            <div className="w-full lg:w-7/12 p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-[#388186] mb-10 tracking-tight text-center lg:text-left">
                {t("sobre_nosotros.values.title")}
              </h3>
              <ul className="space-y-6">
                {Array.isArray(valuesItems) && valuesItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#388186] shrink-0" />
                    <p className="text-zinc-600 text-sm lg:text-base leading-relaxed">
                      <strong className="text-zinc-900 font-bold">{item.bold}</strong>{item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Principios & Visión */}
          <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden border border-zinc-100">
            {/* Principios (White background) */}
            <div className="w-full lg:w-7/12 p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-[#388186] mb-10 tracking-tight text-center lg:text-left">
                {t("sobre_nosotros.principles.title")}
              </h3>
              <ul className="space-y-6">
                {Array.isArray(principlesItems) && principlesItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#388186] shrink-0" />
                    <p className="text-zinc-600 text-sm lg:text-base leading-relaxed">
                      <strong className="text-zinc-900 font-bold">{item.bold}</strong>{item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visión (Teal background) */}
            <div className="w-full lg:w-5/12 bg-[#388186] text-white p-12 lg:p-16 flex flex-col items-center justify-center text-center group cursor-default relative overflow-hidden order-1 lg:order-2">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>

              <div className="relative z-10">
                {/* Animated Icon */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 mb-8 mx-auto flex items-center justify-center">
                  <img
                    src="/icons/views.gif"
                    alt={t("sobre_nosotros.vision.title") || ""}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 brightness-0 invert opacity-90"
                  />
                </div>

                <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
                  {t("sobre_nosotros.vision.title")}
                </h3>
                <p className="text-white/90 text-sm lg:text-base leading-relaxed font-medium">
                  {t("sobre_nosotros.vision.description")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
