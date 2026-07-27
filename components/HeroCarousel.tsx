"use client";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const SLIDES_METADATA = [
  { image: "/images/010-image.jpg" },
  { image: "/images/002-image.jpg" },
  { image: "/images/003-image.jpg" },
  { image: "/images/007-image.jpg" },
  { image: "/images/013-image.jpg" },
];

export default function HeroCarousel() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const featuresRaw = t("hero.features", { returnObjects: true }) as any;
  const features: string[] = Array.isArray(featuresRaw)
    ? featuresRaw
    : typeof featuresRaw === "string"
      ? featuresRaw.split("·").map((s) => s.trim().replace(/^\s*/, ""))
      : [];

  const slides = SLIDES_METADATA.map((slide, idx) => ({
    ...slide,
    title: t(`hero.slides.${idx}.title`),
    subtitle: t(`hero.slides.${idx}.subtitle`),
  }));

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handlePrev = () => {
    stopTimer();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer();
  };

  const handleNext = () => {
    stopTimer();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startTimer();
  };

  const handleDotClick = (index: number) => {
    stopTimer();
    setCurrentSlide(index);
    startTimer();
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = window.innerWidth >= 1024 ? 128 : 96;
      const lenis = (window as any).globalLenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -headerOffset, force: true, duration: 1.2 });
      } else {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-112px)] min-h-[600px] bg-[#F5F1EB] overflow-hidden select-none">
      {/* Background Images Layer */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-all duration-[1200ms] ease-in-out ${idx === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
        >
          {/* Magazine-style dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Main Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-start pointer-events-none">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="max-w-3xl flex flex-col justify-center pointer-events-auto">
            {/* White Logo */}
            <div className="relative h-12 w-56 sm:h-16 sm:w-72 mb-6 sm:mb-8 animate-[fadeIn_0.5s_ease-out]">
              <img
                src="/logos/logo-branco.png?v=2"
                alt="La Favorita Interior"
                className="h-full w-full object-contain object-left"
              />
            </div>

            {/* Slide title and subtitle */}
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 ${idx === currentSlide
                  ? "opacity-100 translate-y-0 relative pointer-events-auto"
                  : "opacity-0 translate-y-4 absolute pointer-events-none"
                  }`}
              >
                {idx === currentSlide && (
                  <>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white tracking-tight leading-[1.1]">
                      {slide.title}
                    </h1>
                    <p className="mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-xl font-sans leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </>
                )}
              </div>
            ))}

            {/* Premium CTA Button Group */}
            <div className="mt-10 flex flex-wrap gap-4 animate-[fadeIn_0.7s_ease-out]">
              <button
                onClick={() => handleScrollTo("proyectos")}
                className="px-8 py-4 bg-brand-gold hover:bg-brand-gold/90 text-white font-semibold rounded-xl text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/25 cursor-pointer"
              >
                {t("hero.btn_cta")}
              </button>
            </div>

            {/* Divider Line */}
            <div className="mt-8 border-t border-white/15 w-full max-w-xl animate-[fadeIn_0.9s_ease-out]" />

            {/* Slide Features */}
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] sm:text-xs md:text-sm text-white/80 font-medium tracking-wide animate-[fadeIn_0.9s_ease-out]">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1.5 whitespace-nowrap text-brand-gold">
                  <span>{feature}</span>
                  {idx < features.length - 1 && (
                    <span className="text-white/30 ml-2 select-none font-normal">·</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Manual Slide Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/15 bg-black/15 text-white/60 hover:text-white hover:bg-black/40 transition-all duration-300 cursor-pointer hidden md:flex items-center justify-center"
        aria-label={t("hero.arrow_prev")}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/15 bg-black/15 text-white/60 hover:text-white hover:bg-black/40 transition-all duration-300 cursor-pointer hidden md:flex items-center justify-center"
        aria-label={t("hero.arrow_next")}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${idx === currentSlide
              ? "w-8 bg-brand-gold"
              : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            aria-label={`${t("hero.dot_aria")} ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}