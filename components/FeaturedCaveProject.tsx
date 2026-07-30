"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const CAVE_PROJECT_STEPS = [
  { 
    key: "01", 
    images: ["/blog/003-blog.png", "/blog/002-blog.png"] 
  },
  { 
    key: "02", 
    images: ["/blog/004-blog.png", "/images/patricia2.jpg"] 
  },
  { 
    key: "03", 
    images: ["/blog/005-blog.png"] 
  },
  { 
    key: "04", 
    images: ["/blog/006-blog.png"] 
  },
  { 
    key: "05", 
    images: ["/blog/007-blog.png"] 
  },
];

export default function FeaturedCaveProject() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section className="w-full bg-[#122022] py-16 md:py-24 px-4 sm:px-8 lg:px-20 text-white overflow-hidden relative border-t border-[#1a2d30]">
      {/* Decorative dark background details */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,129,134,0.12),transparent_45%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest text-brand-gold uppercase bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20 mb-4">
            {t("featured_project.tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
            {t("featured_project.title")}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            {t("featured_project.subtitle")}
          </p>
        </div>

        {/* Video Player Section with Audio and Controls (Centered Vertical Format) */}
        <div className="flex justify-center mb-20">
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
            <video
              src="/videos/favorita-video.mp4"
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>

        {/* Alternating Steps List */}
        <div className="space-y-16 md:space-y-24">
          {CAVE_PROJECT_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 1;
            const title = t(`featured_project.keys.${step.key}.title`);
            const desc = t(`featured_project.keys.${step.key}.desc`);
            const hasMultipleImages = step.images.length > 1;

            return (
              <div
                key={step.key}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center py-6 lg:py-10 border-b border-white/5 last:border-b-0"
              >
                {/* Image Side - 7 Cols out of 12 for bigger display */}
                <div className={`w-full lg:col-span-7 ${isEven ? "lg:order-last" : ""}`}>
                  {hasMultipleImages ? (
                    /* Double Image Layout (Magazine Spread) */
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {step.images.map((imgSrc, imgIdx) => (
                        <div 
                          key={imgIdx} 
                          onClick={() => setSelectedImage(imgSrc)}
                          className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-white/10 group cursor-zoom-in"
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-[#122022]/20 via-transparent to-transparent z-10 pointer-events-none" />
                          <img
                            src={imgSrc}
                            alt={`${title} - detalle ${imgIdx + 1}`}
                            className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-700"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Single Image Layout */
                    <div 
                      onClick={() => setSelectedImage(step.images[0])}
                      className="relative w-full aspect-video lg:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-zoom-in"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#122022]/30 via-transparent to-transparent z-10 pointer-events-none" />
                      <img
                        src={step.images[0]}
                        alt={title}
                        className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-700"
                      />
                    </div>
                  )}
                </div>

                {/* Text Side - 5 Cols out of 12 for compact display */}
                <div className="w-full lg:col-span-5 space-y-4 lg:space-y-5">
                  <span className="inline-flex items-center justify-center text-sm font-bold w-10 h-10 rounded-xl bg-brand-gold text-zinc-950 shadow-md">
                    {step.key}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                    {title}
                  </h3>
                  
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Panoramic Cave Bottom Image */}
        <div 
          onClick={() => setSelectedImage("/blog/001-blog.png")}
          className="relative w-full aspect-[21/9] md:aspect-[24/10] lg:aspect-[28/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 mt-20 group cursor-zoom-in animate-[fadeIn_0.7s_ease-out]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#122022]/40 via-transparent to-transparent z-10 pointer-events-none" />
          <img
            src="/blog/001-blog.png"
            alt={t("featured_project.title")}
            className="w-full h-full object-cover transform hover:scale-[1.01] transition-transform duration-700"
          />
        </div>

        {/* Project Metadata Overview Bar (Bottom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm mt-10 md:mt-12 mx-auto max-w-3xl">
          <div>
            <span className="block text-xs text-brand-gold font-semibold uppercase tracking-wider">
              {t("featured_project.labels.location")}
            </span>
            <span className="block text-sm sm:text-base text-zinc-200 mt-1 font-medium">
              {t("featured_project.labels.location_val")}
            </span>
          </div>
          <div>
            <span className="block text-xs text-brand-gold font-semibold uppercase tracking-wider">
              {t("featured_project.labels.materials")}
            </span>
            <span className="block text-sm sm:text-base text-zinc-200 mt-1 font-medium">
              {t("featured_project.labels.materials_val")}
            </span>
          </div>
        </div>

        {/* Centered Read Article CTA */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <Link href="/blog/primera-cocina-alvic-en-una-cueva-claves-diseno" className="inline-block group">
            <span className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold hover:bg-brand-gold/90 text-[#122022] font-bold rounded-xl text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/25 cursor-pointer">
              {t("featured_project.cta")}
              <svg
                className="w-4.5 h-4.5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </Link>
        </div>

      </div>

      {/* Lightbox Modal for fullscreen image focus */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 cursor-zoom-out"
          >
            {/* Close button inside modal */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Cerrar vista"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scale animated image */}
            <motion.img
              src={selectedImage}
              alt="Detalle del proyecto ampliado"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="max-w-full max-h-[85vh] sm:max-h-[90vh] rounded-2xl object-contain shadow-2xl border border-white/5 cursor-default select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
