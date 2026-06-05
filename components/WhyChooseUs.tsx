"use client";

import { useTranslation } from "react-i18next";
import SpotlightCard from "./SpotlightCard";

const CARDS_METADATA = [
  {
    id: "01",
    icon: (
      <svg className="w-16 h-16 text-brand-teal mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 46h16v4H24v-4z" />
        <path d="M18 50h28v4H18v-4z" />
        <path d="M32 38v8" />
        <path d="M20 16v12c0 6.6 5.4 12 12 12s12-5.4 12-12V16H20z" />
        <path d="M20 20h-4c-2.2 0-4-1.8-4-4v-4c0-2.2 1.8-4 4-4h4" />
        <path d="M44 20h4c2.2 0 4-1.8 4-4v-4c0-2.2-1.8-4-4-4h-4" />
        <path d="M30 22h2v10" />
        <path d="M29 24.5l3-2.5" />
        <path d="M29 32h6" />
        <path d="M11 31.5c0-1 1-1.5 2-1.5s2 .5 2 1.5-.8 1.5-2 1.5-2 .5-2 1.5.8 1.5 2 1.5 2-.5 2-1.5M13 29v10" />
        <path d="M48 31.5c0-1 1-1.5 2-1.5s2 .5 2 1.5-.8 1.5-2 1.5-2 .5-2 1.5.8 1.5 2 1.5 2-.5 2-1.5M50 29v10" />
      </svg>
    )
  },
  {
    id: "02",
    icon: (
      <svg className="w-16 h-16 text-brand-teal mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="24" y="10" width="26" height="34" rx="4" />
        <path d="M30 18h14M30 24h14" />
        <circle cx="28" cy="36" r="10" fill="white" />
        <path d="M26 33.5c0-1 1-1.5 2-1.5s2 .5 2 1.5-.8 1.5-2 1.5-2 .5-2 1.5.8 1.5 2 1.5 2-.5 2-1.5M28 31v10" />
        <path d="M12 44h10l8-8c1.1-1.1 2.9-1.1 4 0v0c1.1 1.1 1.1 2.9 0 4l-8 8H12" />
      </svg>
    )
  },
  {
    id: "03",
    icon: (
      <svg className="w-16 h-16 text-brand-teal mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 50L14 32a2 2 0 0 1 0-2.8l6-6a2 2 0 0 1 2.8 0L32 32" />
        <path d="M32 50L26 24a2 2 0 0 1 1-2.4l7.8-3.6a2 2 0 0 1 2.6 1L42 34" />
        <path d="M32 50L38 26a2 2 0 0 1 2.3-1.6l8.2 2.2a2 2 0 0 1 1.6 2.3L44 38" />
        <circle cx="32" cy="50" r="3" fill="currentColor" />
        <path d="M16 54h32" />
        <path d="M20 54v-4M28 54v-4M36 54v-4M44 54v-4" />
      </svg>
    )
  },
  {
    id: "04",
    icon: (
      <svg className="w-16 h-16 text-brand-teal mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 8c-9 0-14 4-14 18 0 11 9 18 14 20 5-2 14-9 14-20 0-14-5-18-14-18z" />
        <path d="M27 18h10v3h-7v4c1 0 2.5.5 3.5 1.5s1.5 2.5 1.5 3.5c0 1.7-.7 3.2-1.8 4.2S30.7 36 29 36c-2 0-3.5-.8-4.5-2.2" />
        <path d="M40 40l2 8-5-3-5 3 1-8" />
        <circle cx="36" cy="38" r="6" fill="white" />
        <path d="M36 32v12M32 36l8 4" />
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const cards = CARDS_METADATA.map((card) => ({
    ...card,
    title: t(`why_choose_us.cards.${card.id}.title`),
    description: t(`why_choose_us.cards.${card.id}.description`),
  }));

  return (
    <section
      id="why-choose-us-section"
      className="w-full bg-zinc-50/50 py-10 md:py-20 px-6 sm:px-12 lg:px-20 border-t border-zinc-100/80"
    >
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-zinc-950 tracking-tight leading-tight">
          {t("why_choose_us.title")}
        </h2>
        <p className="mt-4 text-zinc-500 text-base sm:text-lg">
          {t("why_choose_us.subtitle")}
        </p>
      </div>

      {/* Static 2x2 grid for all screen sizes */}
      <div className="mx-auto max-w-[1080px] w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {cards.map((card) => (
            <SpotlightCard
              key={card.id}
              className="w-full min-h-[220px] md:h-80 p-8 md:p-12 rounded-[30px] bg-white border border-brand-teal/15 text-center flex flex-col items-center justify-center relative overflow-hidden"
            >
              <span className="absolute top-4 right-5 text-4xl md:text-5xl font-black text-brand-teal/8">
                {card.id}
              </span>
              <div className="flex flex-col items-center max-w-xl px-2">
                {card.icon}
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-sm md:text-base text-zinc-500 leading-normal">
                  {card.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}