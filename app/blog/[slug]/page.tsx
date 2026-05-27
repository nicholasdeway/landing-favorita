import { notFound } from "next/navigation";
import Link from "next/link";
import HashLink from "@/components/HashLink";
import { BLOG_POSTS } from "@/lib/data/blog";

type Params = Promise<{ slug: string }>;

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="w-full bg-background py-12 md:py-24 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2.5 text-zinc-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-10">
          <Link href="/" className="hover:text-[#388186] transition-colors duration-300">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#388186] transition-colors duration-300">Blog</Link>
          <span>/</span>
          <span className="text-zinc-800">{post.title}</span>
        </div>

        {/* Article Header */}
        <div className="mb-10 space-y-6">
          <span className="inline-block bg-[#388186]/10 text-[#388186] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-lg">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c1c1c] tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-zinc-400 text-sm font-semibold uppercase tracking-wide">
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 shadow-xl relative group">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1500ms]"
          />
        </div>

        {/* Article Content */}
        <div 
          className="text-lg text-zinc-700 leading-relaxed 
          [&>h3]:text-2xl [&>h3]:sm:text-3xl [&>h3]:font-extrabold [&>h3]:text-[#1c1c1c] [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:tracking-tight
          [&>p]:mb-6
          [&>p>img]:w-full [&>p>img]:rounded-3xl [&>p>img]:my-12 [&>p>img]:shadow-xl [&>p>img]:aspect-video [&>p>img]:object-cover"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer CTA */}
        <div className="mt-20 p-8 sm:p-12 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col items-center text-center">
          <h3 className="text-2xl font-extrabold text-[#1c1c1c] mb-4">¿Inspirado por estas ideas?</h3>
          <p className="text-zinc-500 mb-8 max-w-lg">
            Nuestro equipo de diseñadores en Tenerife está listo para convertir estas tendencias en realidad en tu hogar.
          </p>
          <HashLink
            href="/#contacto"
            className="bg-[#388186] hover:bg-[#2d6a6e] text-white font-bold py-4 px-8 rounded-xl text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 z-10 hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center gap-2"
          >
            <span>Pedir Presupuesto</span>
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
