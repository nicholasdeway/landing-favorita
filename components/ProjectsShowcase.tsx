"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface Project {
  id: number;
  title: string;
  category: "cocinas" | "armarios" | "vestidores" | "banos";
  location: string;
  image: string;
  description: string;
  materials: string;
}

const PROJECTS_METADATA = [
  {
    id: 1,
    category: "cocinas" as const,
    location: "Adeje",
    image: "/images/012-image.jpg"
  },
  {
    id: 2,
    category: "vestidores" as const,
    location: "Arona",
    image: "/images/020-image.png"
  },
  {
    id: 3,
    category: "cocinas" as const,
    location: "Granadilla",
    image: "/images/003-image.jpg"
  },
  {
    id: 4,
    category: "armarios" as const,
    location: "La Laguna",
    image: "/images/023-image.png"
  },
  {
    id: 5,
    category: "banos" as const,
    location: "Guía de Isora",
    image: "/images/017-image.png"
  },
  {
    id: 6,
    category: "cocinas" as const,
    location: "Santa Cruz",
    image: "/images/022-image.png"
  },
  {
    id: 7,
    category: "vestidores" as const,
    location: "Adeje",
    image: "/images/021-image.png"
  },
  {
    id: 8,
    category: "armarios" as const,
    location: "Arona",
    image: "/images/018-image.png"
  }
];

const CATEGORIES_METADATA = [
  { value: "all" },
  { value: "cocinas" },
  { value: "armarios" },
  { value: "vestidores" },
  { value: "banos" }
];

export default function ProjectsShowcase() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = PROJECTS_METADATA.map((p) => ({
    ...p,
    title: t(`projects.items.${p.id}.title`),
    description: t(`projects.items.${p.id}.description`),
    materials: t(`projects.items.${p.id}.materials`),
  }));

  const categories = CATEGORIES_METADATA.map((cat) => ({
    value: cat.value,
    label: t(`projects.categories.${cat.value}`),
  }));

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="proyectos" className="w-full bg-[#F5F1EB] py-16 md:py-28 px-6 sm:px-12 lg:px-20 border-t border-zinc-200/45">
      <div className="mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-brand-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              <span className="w-8 h-[1px] bg-brand-gold" />
              {t("projects.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
              {t("projects.title")}
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
              {t("projects.subtitle")}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${filter === cat.value
                  ? "bg-[#3A3A3A] text-white shadow-md"
                  : "bg-white/80 hover:bg-white text-zinc-600 border border-zinc-200/60"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-white rounded-[24px] overflow-hidden border border-zinc-200/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-zinc-100">
                {/* Location Badge */}
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-brand-gold/15 text-[10px] sm:text-xs font-bold text-zinc-800 tracking-wider uppercase flex items-center gap-1.5 shadow-xs">
                  <svg className="w-3.5 h-3.5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>{project.location}</span>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center text-zinc-800 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 space-y-2.5">
                <span className="text-[10px] sm:text-xs font-bold text-brand-gold uppercase tracking-widest font-sans">
                  {project.category === "banos" ? t("projects.labels.baño") : t(`projects.categories.${project.category}`)}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight leading-tight group-hover:text-brand-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-10 select-none animate-[fadeIn_0.3s_ease-out]">
            {/* Click outside container to close */}
            <div className="absolute inset-0 cursor-default" onClick={() => setActiveProject(null)} />

            {/* Modal Box */}
            <div className="relative bg-white rounded-[32px] overflow-hidden max-w-5xl w-full z-10 border border-white/10 flex flex-col lg:flex-row shadow-2xl animate-[scaleIn_0.3s_ease-out]">

              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-black/5 hover:bg-black/10 text-zinc-800 flex items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="Cerrar modal"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left Side: Big Image */}
              <div className="lg:w-3/5 aspect-video lg:aspect-auto lg:h-[550px] relative bg-zinc-900">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Details */}
              <div className="lg:w-2/5 p-8 md:p-10 flex flex-col justify-between bg-white text-zinc-900">
                <div className="space-y-6">
                  {/* Top info */}
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-brand-gold uppercase tracking-widest">
                      {activeProject.category === "banos" ? t("projects.labels.mueble_baño") : t(`projects.categories.${activeProject.category}`)}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight leading-tight">
                      {activeProject.title}
                    </h3>
                  </div>

                  {/* Location and Info */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-zinc-100">
                    <div>
                      <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">{t("projects.labels.location")}</p>
                      <p className="text-zinc-800 text-sm font-semibold mt-1">{activeProject.location}, Tenerife</p>
                    </div>
                    <div>
                      <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">{t("projects.labels.materials")}</p>
                      <p className="text-zinc-800 text-sm font-semibold mt-1">{activeProject.materials}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">{t("projects.labels.description_label")}</p>
                    <p className="text-zinc-600 text-sm leading-relaxed">{activeProject.description}</p>
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-8 border-t border-zinc-100 mt-6 lg:mt-0">
                  <button
                    onClick={() => {
                      setActiveProject(null);
                      const contactSection = document.getElementById("contacto");
                      if (contactSection) {
                        const headerOffset = window.innerWidth >= 1024 ? 128 : 96;
                        const lenis = (window as any).globalLenis;
                        if (lenis) {
                          lenis.scrollTo(contactSection, { offset: -headerOffset, force: true, duration: 1.2 });
                        } else {
                          const pos = contactSection.getBoundingClientRect().top + window.scrollY - headerOffset;
                          window.scrollTo({ top: pos, behavior: "smooth" });
                        }
                      }
                    }}
                    className="w-full bg-[#3A3A3A] hover:bg-brand-gold text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] cursor-pointer text-center block"
                  >
                    {t("projects.labels.cta")}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}