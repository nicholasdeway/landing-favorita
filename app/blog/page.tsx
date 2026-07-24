"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/components/LanguageProvider";
import { BLOG_POSTS } from "@/lib/data/blog";

export default function BlogPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isEn = language === "en";

  const localizedPosts = BLOG_POSTS.map((post) => ({
    ...post,
    title: isEn ? post.title_en : post.title_es,
    excerpt: isEn ? post.excerpt_en : post.excerpt_es,
    category: isEn ? post.category_en : post.category_es,
    date: isEn ? post.date_en : post.date_es,
    readTime: isEn ? post.readTime_en : post.readTime_es,
  }));

  return (
    <section className="w-full bg-background py-12 md:py-20 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-[#388186] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
            {t("blog_page.tag")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1c1c1c] tracking-tight">
            {t("blog_page.title")}
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
            {t("blog_page.description")}
          </p>
          <div className="w-16 h-1 bg-[#388186] mt-4 rounded-full" />
        </div>

        {/* Featured Post (Highlighted layout) */}
        <div className="mb-20 bg-zinc-50 border border-zinc-200 rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group">
          <div className="lg:col-span-7 h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
            <img
              src={localizedPosts[0].image}
              alt={localizedPosts[0].title}
              className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-[1200ms]"
            />
            <span className="absolute top-6 left-6 z-20 bg-[#388186] text-white text-xs font-bold tracking-widest uppercase px-4.5 py-2.5 rounded-xl">
              {localizedPosts[0].category}
            </span>
          </div>
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <span className="text-zinc-400 text-xs font-bold tracking-wider uppercase">
              {localizedPosts[0].date} &bull; {localizedPosts[0].readTime}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1c1c] leading-snug tracking-tight hover:text-[#388186] transition-colors duration-300">
              <Link href={`/blog/${localizedPosts[0].slug}`}>
                {localizedPosts[0].title}
              </Link>
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed line-clamp-3">
              {localizedPosts[0].excerpt}
            </p>
            <div className="pt-4">
              <Link
                href={`/blog/${localizedPosts[0].slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-[#388186] hover:text-[#2d6a6e] transition-colors duration-300 group/link"
              >
                {t("blog_page.read_article")}
                <svg
                  className="w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localizedPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white border border-zinc-100 hover:border-zinc-200 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col group"
            >
              {/* Image box */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 z-10 bg-white/90 text-[#388186] text-[10px] font-extrabold tracking-widest uppercase px-3.5 py-1.5 rounded-lg border border-zinc-100">
                  {post.category}
                </span>
              </div>

              {/* Content box */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="text-zinc-400 text-[11px] font-semibold tracking-wide uppercase">
                    {post.date} &bull; {post.readTime}
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1c1c] leading-snug tracking-tight hover:text-[#388186] transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-50">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#388186] hover:text-[#2d6a6e] transition-colors duration-300 group/link"
                  >
                    {t("blog_page.read_more")}
                    <svg
                      className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

