"use client";

import React from "react";
import { useTranslation, Trans } from "react-i18next";
import ShinyText from "./ShinyText";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="cocinas" className="w-full bg-background py-12 md:py-24 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-teal uppercase">
              {t("about.tag")}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-zinc-950 leading-[1.15]">
              {t("about.title_part1")} <br />
              {t("about.title_part2")}{" "}
              <ShinyText text={t("about.title_shiny")} color="#388186" shineColor="#ffffff" speed={3} />
            </h2>

            <div className="text-zinc-500 text-sm md:text-base leading-relaxed space-y-5">
              <p>
                <Trans i18nKey="about.desc_1">
                  Con <strong className="text-zinc-800 font-semibold">experiencia</strong> y{" "}
                  <strong className="text-zinc-800 font-semibold">diseño personalizado</strong>,
                  creamos espacios prácticos, funcionales y llenos de estilo.
                </Trans>
              </p>

              <p>
                <Trans i18nKey="about.desc_2">
                  Atendemos en <strong className="text-zinc-800 font-semibold">Tenerife</strong>,{" "}
                  <strong className="text-zinc-800 font-semibold">El Hierro</strong> y{" "}
                  <strong className="text-zinc-800 font-semibold">La Gomera</strong>, entregando
                  proyectos únicos que combinan calidad, buen gusto y funcionalidad.
                </Trans>
              </p>

              <div className="pt-4 border-t border-zinc-100">
                <h3 className="text-lg md:text-xl font-bold text-zinc-800 tracking-tight mb-3">
                  {t("about.sub_title")}
                </h3>
                <p className="mb-4">
                  {t("about.sub_desc_1")}
                </p>
                <p>
                  <Trans i18nKey="about.sub_desc_2">
                    Desde cocinas y dormitorios hasta decoración de interiores, te ofrecemos{" "}
                    <strong className="text-zinc-800 font-semibold">diseños innovadores</strong> para
                    transformar tu hogar en un espacio funcional y con estilo.
                  </Trans>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end pb-36 lg:pb-32">
            <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">

              {/* Image Container with Shadow */}
              <div className="relative w-full h-full overflow-hidden z-10">
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent z-10" />

                <img
                  src="/images/003-image.jpg"
                  alt={t("about.img_alt")}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Overlapping text inside the image */}
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white font-bold text-xl md:text-2xl uppercase tracking-wider">
                    {t("about.passion_title")}
                  </p>
                </div>
              </div>

              {/* Decorative Golden Outline Box (U-shape open to the right) */}
              <div className="absolute -left-10 -bottom-28 right-[10%] top-[65%] border-t-2 border-l-2 border-b-2 border-r-0 border-brand-teal z-20 pointer-events-none" />

              {/* Under-image Quote Container (aligned within the golden border space) */}
              <div className="absolute -left-4 -bottom-24 right-[12%] flex items-start gap-3.5 z-30">
                {/* Gold Styled Double Quotes (looks like 99) */}
                <span className="text-8xl font-serif text-brand-teal leading-none -mt-5">
                  ”
                </span>
                <p className="text-xs md:text-sm font-semibold italic text-zinc-700 leading-relaxed">
                  {t("about.quote")}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
