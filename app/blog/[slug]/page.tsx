"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/components/LanguageProvider";
import HashLink from "@/components/HashLink";
import { BLOG_POSTS } from "@/lib/data/blog";

type Params = Promise<{ slug: string }>;

export default function BlogPostPage({ params }: { params: Params }) {
  const { slug } = React.use(params);
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isEn = language === "en";

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const title = isEn ? post.title_en : post.title_es;
  const content = isEn ? post.content_en : post.content_es;
  const category = isEn ? post.category_en : post.category_es;
  const date = isEn ? post.date_en : post.date_es;
  const readTime = isEn ? post.readTime_en : post.readTime_es;

  const localizedOtherPosts = BLOG_POSTS.filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((postItem) => ({
      ...postItem,
      title: isEn ? postItem.title_en : postItem.title_es,
      excerpt: isEn ? postItem.excerpt_en : postItem.excerpt_es,
      category: isEn ? postItem.category_en : postItem.category_es,
      date: isEn ? postItem.date_en : postItem.date_es,
      readTime: isEn ? postItem.readTime_en : postItem.readTime_es,
    }));

  return (
    <section className="w-full bg-background py-12 md:py-24 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2.5 text-zinc-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-10">
          <Link href="/" className="hover:text-[#388186] transition-colors duration-300">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#388186] transition-colors duration-300">Blog</Link>
          <span>/</span>
          <span className="text-zinc-800">{title}</span>
        </div>

        {/* Article Header */}
        <div className="mb-10 space-y-6">
          <span className="inline-block bg-[#388186]/10 text-[#388186] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-lg">
            {category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c1c1c] tracking-tight leading-tight">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-zinc-400 text-sm font-semibold uppercase tracking-wide">
            <span>{date}</span>
            <span>&bull;</span>
            <span>{readTime}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full rounded-3xl overflow-hidden mb-16 relative group">
          <img
            src={post.image}
            alt={title}
            className="w-full h-auto transform scale-100 group-hover:scale-105 transition-transform duration-[1500ms]"
          />
        </div>

        {/* Article Content */}
        <div
          className="text-lg text-zinc-700 leading-relaxed 
          [&>h3]:text-2xl [&>h3]:sm:text-3xl [&>h3]:font-extrabold [&>h3]:text-[#1c1c1c] [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:tracking-tight
          [&>p]:mb-6
          [&>p>img]:w-full [&>p>img]:h-auto [&>p>img]:rounded-3xl [&>p>img]:my-12"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Related Posts */}
        <div className="mt-24 pt-16 border-t border-zinc-150">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1c1c] tracking-tight mb-10 text-center sm:text-left">
            {t("blog_page.related_title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedOtherPosts.map((otherPost) => (
              <article
                key={otherPost.id}
                className="bg-white border border-zinc-100 hover:border-zinc-200 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col group"
              >
                {/* Image box */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={otherPost.image}
                    alt={otherPost.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 z-10 bg-white/90 text-[#388186] text-[10px] font-extrabold tracking-widest uppercase px-3.5 py-1.5 rounded-lg border border-zinc-100">
                    {otherPost.category}
                  </span>
                </div>

                {/* Content box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-zinc-400 text-[10px] font-semibold tracking-wide uppercase">
                      {otherPost.date} &bull; {otherPost.readTime}
                    </div>
                    <h4 className="text-base font-bold text-[#1c1c1c] leading-snug tracking-tight hover:text-[#388186] transition-colors duration-300 line-clamp-2">
                      <Link href={`/blog/${otherPost.slug}`}>
                        {otherPost.title}
                      </Link>
                    </h4>
                    <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3">
                      {otherPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-zinc-50">
                    <Link
                      href={`/blog/${otherPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-[#388186] hover:text-[#2d6a6e] transition-colors duration-300 group/link"
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

        {/* Footer CTA */}
        <div className="mt-20 p-8 sm:p-12 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col items-center text-center">
          <h3 className="text-2xl font-extrabold text-[#1c1c1c] mb-4">{t("blog_page.cta_title")}</h3>
          <p className="text-zinc-500 mb-8 max-w-lg">
            {t("blog_page.cta_description")}
          </p>
          <HashLink
            href="/#contacto"
            className="bg-[#388186] hover:bg-[#2d6a6e] text-white font-bold py-4 px-8 rounded-xl text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 z-10 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          >
            <span>{t("blog_page.cta_button")}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </HashLink>
        </div>
      </div>
    </section>
  );
}
