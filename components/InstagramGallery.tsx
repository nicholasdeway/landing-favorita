"use client";

import React, { useState } from "react";
import Image from "next/image";
import { InstagramPost, INSTAGRAM_POSTS, INSTAGRAM_EXTRA_POSTS } from "@/lib/data/instagram";



export default function InstagramGallery() {
  const [posts, setPosts] = useState<InstagramPost[]>(INSTAGRAM_POSTS);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  const handleLoadMore = () => {
    if (!hasLoadedMore) {
      setPosts((prev) => [...prev, ...INSTAGRAM_EXTRA_POSTS]);
      setHasLoadedMore(true);
    }
  };

  return (
    <section className="w-full bg-zinc-50/40 py-10 md:py-20 px-6 sm:px-12 lg:px-20 border-t border-zinc-100 select-none">
      <div className="mx-auto max-w-[1600px]">

        {/* Instagram Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 pb-8 border-b border-zinc-150/60 max-w-4xl mx-auto">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border border-zinc-200/80 bg-zinc-100 flex-shrink-0">
            <Image
              src="/logos/logo-instagram.jpg"
              alt="La Favorita Instagram Logo"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center sm:justify-start">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight leading-none">
                lafavoritainterior
              </h2>
              <a
                href="https://www.instagram.com/lafavoritainterior/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 bg-[#4a5df9] hover:bg-[#3547f1] text-white font-semibold rounded-lg text-xs sm:text-sm uppercase tracking-wider"
              >
                Seguir
              </a>
            </div>
            <p className="mt-3 text-zinc-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
              LA FAVORITA MUEBLES A MEDIDA EN TENERIFE
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-6 mt-4 text-xs sm:text-sm text-zinc-500 font-medium">
              <span><strong className="text-zinc-800 font-bold">341</strong> publicaciones</span>
              <span><strong className="text-zinc-800 font-bold">5.008</strong> seguidores</span>
              <span><strong className="text-zinc-800 font-bold">1.515</strong> seguidos</span>
            </div>
          </div>
        </div>

        {/* 4x2 Grid Container (Increased to max-w-[1800px] and gap scaled up) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-[1800px] mx-auto">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url || "https://www.instagram.com/lafavoritainterior/"}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-[4/5] w-full relative overflow-hidden group rounded-none bg-white transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Post Type */}
              {post.type === "image" && post.src && (
                <>
                  <Image
                    src={post.src}
                    alt="Instagram Post"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700"
                  />
                  {/* Carousel Multiple Icon (Scaled and adjusted position) */}
                  {post.id === 6 && (
                    <div className="absolute top-4 right-4 z-10 text-white/90 bg-black/40 p-2 rounded-lg pointer-events-none">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" />
                      </svg>
                    </div>
                  )}
                </>
              )}
            </a>
          ))}
        </div>

        {/* Load More & Follow Buttons */}
        <div className="flex flex-row items-stretch justify-center gap-3 sm:gap-4 mt-12 w-full px-2 sm:px-0">
          {!hasLoadedMore && (
            <button
              onClick={handleLoadMore}
              className="flex-1 sm:flex-none px-2 sm:px-8 py-3 sm:py-3.5 border border-zinc-300 hover:border-zinc-800 text-zinc-700 hover:text-zinc-950 font-bold rounded-xl text-[11px] sm:text-sm transition-all duration-300 hover:bg-zinc-50 tracking-wider uppercase cursor-pointer flex items-center justify-center text-center"
            >
              Cargar más
            </button>
          )}
          <a
            href="https://www.instagram.com/lafavoritainterior/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-8 py-3 sm:py-3.5 bg-[#4a5df9] hover:bg-[#3547f1] text-white font-bold rounded-xl text-[11px] sm:text-sm tracking-wider uppercase text-center"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span className="truncate">Seguir en Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
}
