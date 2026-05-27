"use client";

import { useState, useEffect, useRef } from "react";

const SLIDES = [
  {
    image: "/images/001-image.jpg",
    title: "La Favorita",
    category: "cocinas",
    subtitle: "cocinas a medida",
  },
  {
    image: "/images/002-image.jpg",
    title: "La Favorita",
    category: "armarios",
    subtitle: "muebles a medida",
  },
  {
    image: "/images/003-image.jpg",
    title: "La Favorita",
    category: "diseño",
    subtitle: "decoracion de interiores",
  },
  {
    image: "/images/004-image.jpg",
    title: "La Favorita",
    category: "hogar",
    subtitle: "accesorios inteligentes",
  },
  {
    image: "/images/005-image.jpg",
    title: "La Favorita",
    category: "exterior",
    subtitle: "cortinas y pergolas",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
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
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    startTimer();
  };

  const handleNext = () => {
    stopTimer();
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    startTimer();
  };

  const handleDotClick = (index: number) => {
    stopTimer();
    setCurrentSlide(index);
    startTimer();
  };

  return (
    <section
      className="w-full h-[calc(100vh-80px)] md:h-[calc(100vh-112px)] min-h-[500px] bg-background px-4 pb-4 pt-0 sm:px-8 sm:pb-8 sm:pt-0 lg:px-12 lg:pb-12 lg:pt-0 select-none"
    >
      <div className="relative w-full h-full overflow-hidden bg-zinc-900 shadow-2xl">
        {/* Background Images Layer */}
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${idx === currentSlide
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
              }`}
          >
            {/* Background image overlay */}
            <div className="absolute inset-0 bg-black/35 z-10" />
            <img
              src={slide.image}
              alt={slide.subtitle}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Main Overlay Golden Box (Tenerife design) */}
        <div className="absolute inset-0 z-20 flex items-center justify-start pointer-events-none">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
            {/* Golden outline container */}
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] border-[1.5px] border-brand-teal/70 p-6 sm:p-10 flex flex-col justify-end pointer-events-auto shadow-2xl">

              {/* Slide content inside the box */}
              {SLIDES.map((slide, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col justify-end transition-opacity duration-500 absolute inset-x-6 sm:inset-x-10 bottom-6 sm:bottom-10 ${idx === currentSlide
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
                >
                  <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[0.9] uppercase flex flex-col">
                    <span className="font-light text-white/95 text-3xl sm:text-5xl tracking-normal normal-case">
                      {slide.title}
                    </span>
                    <span className="text-brand-gold">{slide.category}</span>
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm tracking-widest text-white/80 uppercase font-medium">
                    {slide.subtitle}
                  </p>


                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Manual Slide Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 p-2 rounded-full border border-white/10 bg-black/25 text-white/70 hover:text-white hover:bg-black/50 transition-all duration-300 opacity-0 md:group-hover:opacity-100 pointer-events-auto cursor-pointer"
          aria-label="Anterior slide"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
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
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 p-2 rounded-full border border-white/10 bg-black/25 text-white/70 hover:text-white hover:bg-black/50 transition-all duration-300 opacity-0 md:group-hover:opacity-100 pointer-events-auto cursor-pointer"
          aria-label="Siguiente slide"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
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
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3 pointer-events-auto">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${idx === currentSlide
                ? "w-8 bg-brand-teal"
                : "w-2.5 bg-background/40 hover:bg-background/70"
                }`}
              aria-label={`Ir al slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}