"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Review, GOOGLE_REVIEWS } from "@/lib/data/google-reviews";



interface ReviewCardProps {
  review: Review;
  cardsPerView: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  cardsPerView,
  isExpanded,
  onToggleExpand,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("72px");

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("72px");
    }
  }, [isExpanded]);

  return (
    <div
      style={{
        width: `calc((100% - (24px * (${cardsPerView} - 1))) / ${cardsPerView})`,
        flexShrink: 0,
      }}
      className="bg-white border border-zinc-100 rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden h-full"
    >
      {/* Card Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-zinc-100 bg-zinc-50 flex-shrink-0">
            <Image
              src={review.avatar}
              alt={review.name}
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm sm:text-base font-bold text-zinc-900 tracking-tight leading-snug truncate">
              {review.name}
            </h4>
            <p className="text-xs text-zinc-400 font-medium truncate">
              {review.date}
            </p>
          </div>
        </div>
        {/* Google Icon - SVG completo */}
        <div className="w-6 h-6 flex-shrink-0">
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
        </div>
      </div>

      {/* Rating Stars & Verified Blue Check */}
      <div className="flex items-center gap-2 mb-3.5">
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        {/* Verified badge */}
        <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24">
          <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.7 3.1 5.52l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82 1.89 3.2 3.4-1.46 3.4 1.46 1.89-3.2 3.61-.82-.34-3.7L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      </div>

      {/* Review Text */}
      <div className="flex-grow">
        <div
          ref={contentRef}
          className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{
            maxHeight: maxHeight,
          }}
        >
          <p className="text-zinc-600 text-sm leading-relaxed">
            {review.text}
          </p>
          <div
            className={`absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent transition-opacity duration-300 ${isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
          />
        </div>
        <button
          onClick={onToggleExpand}
          className="mt-2 text-xs font-semibold text-zinc-400 hover:text-zinc-800 transition-colors duration-200 cursor-pointer"
        >
          {isExpanded ? "Leer menos" : "Leer más"}
        </button>
      </div>
    </div>
  );
};

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [maxIndex, setMaxIndex] = useState(3);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive handling for max carousel pages
  useEffect(() => {
    const handleResize = () => {
      if (!carouselRef.current) return;
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile: 1 card visible
        setCardsPerView(1);
        setMaxIndex(GOOGLE_REVIEWS.length - 1);
      } else if (width < 1280) {
        // Tablet / Small Desktop: 2 cards visible
        setCardsPerView(2);
        setMaxIndex(GOOGLE_REVIEWS.length - 2);
      } else {
        // Large Desktop: 3 cards visible
        setCardsPerView(3);
        setMaxIndex(GOOGLE_REVIEWS.length - 3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay loop effect
  useEffect(() => {
    if (expandedIndex !== null) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Wrap around to the beginning
        }
        return prev + 1;
      });
    }, 5000); // Advance slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex, maxIndex, expandedIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="w-full bg-white py-10 md:py-20 px-6 sm:px-12 lg:px-20 border-t border-zinc-100 select-none overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Block: Google Profile Summary */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-5">
              <div className="relative w-18 h-18 rounded-full overflow-hidden bg-white border border-zinc-100 flex-shrink-0">
                <Image
                  src="/logos/mini-logo.png"
                  alt="La Favorita Logo"
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 leading-tight tracking-tight max-w-sm">
                  La Favorita Interior en Tenerife: Especialistas en Cocinas y Muebles a medida.
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-1 mt-2.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-1.5 text-sm text-zinc-500 font-medium">
                  81 reseñas Google
                </p>
              </div>
            </div>

            <a
              href="https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJ1XRmZOOfagwRG3LLe_-1wcE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-zinc-200 hover:border-zinc-800 text-zinc-800 font-semibold rounded-xl text-sm transition-all duration-300 hover:bg-zinc-50 tracking-wide"
            >
              Escribe una reseña
            </a>
          </div>

          {/* Right Block: Interactive Reviews Carousel */}
          <div className="lg:col-span-8 relative">
            <div className="overflow-hidden px-2 py-4" ref={carouselRef}>
              <div
                className="flex gap-6 items-stretch transition-transform duration-[1200ms] [transition-timing-function:cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${cardsPerView}))`,
                }}
              >
                {GOOGLE_REVIEWS.map((review) => {
                  const isExpanded = expandedIndex === review.id;
                  return (
                    <ReviewCard
                      key={review.id}
                      review={review}
                      cardsPerView={cardsPerView}
                      isExpanded={isExpanded}
                      onToggleExpand={() => setExpandedIndex(isExpanded ? null : review.id)}
                    />
                  );
                })}
              </div>
            </div>

            {/* Left navigation arrow */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`absolute top-1/2 -left-4 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-all duration-300 z-10 ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:scale-105 active:scale-95 cursor-pointer"
                }`}
            >
              <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right navigation arrow */}
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`absolute top-1/2 -right-4 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-all duration-300 z-10 ${currentIndex >= maxIndex ? "opacity-30 cursor-not-allowed" : "hover:scale-105 active:scale-95 cursor-pointer"
                }`}
            >
              <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}