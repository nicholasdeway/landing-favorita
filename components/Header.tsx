"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./LanguageProvider";

const NAV_LINKS = [
  { href: "/#bienvenida", key: "bienvenida" },
  {
    href: "/productos",
    key: "productos",
    sublinks: [
      { href: "/productos/cocinas-a-medida", key: "cocinas_medida" },
      { href: "/productos/armarios-a-medida", key: "armarios_medida" },
      { href: "/productos/muebles-a-medida", key: "muebles_medida" },
      { href: "/productos/soluciones-inteligentes", key: "soluciones_inteligentes" },
      { href: "/productos/cortinas-pergolas", key: "cortinas_pergolas" }
    ]
  },
  { href: "/sobre-nosotros", key: "sobre_nosotros" },
  { href: "/blog", key: "blog" },
  { href: "/#contacto", key: "contacto" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/lafavoritainterior/",
    label: "Instagram",
    isImage: true,
    icon: (
      <img
        src="/icons/instagram-new.png?v=2"
        alt="Instagram"
        className="h-[20px] w-[20px] object-contain"
      />
    ),
  },
  {
    href: "https://www.facebook.com/lafavoritainterior/?locale=es_ES",
    label: "Facebook",
    isImage: true,
    icon: (
      <img
        src="/icons/facebook-new.png?v=2"
        alt="Facebook"
        className="h-[18px] w-[18px] object-contain"
      />
    ),
  },
  {
    href: "https://www.google.com.br/search?sca_esv=07c1394e5d835a50&sxsrf=ANbL-n5Apabou-hIUXcc3q3zgu020C4NPw:1779868026524&kgmid=/g/11q2m1725b&q=La+Favorita+Interior+en+Tenerife:+Especialistas+en+Cocinas+y+Muebles+a+medida.&shem=rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=368a91ff5dcfca05&utm_source=rimspwouoe,sh/x/loc/uni/m1/1",
    label: "Google",
    isImage: false,
    icon: (
      <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.518 0-6.377-2.87-6.377-6.4s2.859-6.4 6.377-6.4c1.582 0 3.03.572 4.148 1.57l3.095-3.095C19.348 2.583 15.981 1.1 12.24 1.1 5.866 1.1.7 6.265.7 12.6s5.166 11.5 11.54 11.5c6.31 0 11.528-4.57 11.528-11.5 0-.742-.09-1.428-.242-2.315H12.24z" />
      </svg>
    ),
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  // Track active section on scroll if on home page
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["bienvenida", "contacto"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      // If we are at the very top
      if (window.scrollY < 200) {
        setActiveSection("bienvenida");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle hash scrolling when mounting or on hashchange events
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            let headerOffset = window.innerWidth >= 1024 ? 128 : 96;
            if (targetId === "contacto") headerOffset;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - headerOffset,
              behavior: "smooth"
            });
            // Strip hash cleanly from URL bar
            window.history.replaceState(null, "", window.location.pathname);
          }, 150);
        }
      }
    };

    handleHashChange(); // Run once on layout render
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const targetId = href.replace(/^\/?#/, "");

      if (pathname === "/") {
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = window.innerWidth >= 1024 ? 128 : 96;

          const lenis = (window as any).globalLenis;
          if (lenis) {
            lenis.scrollTo(element, { offset: -headerOffset, force: true, duration: 1.2 });
          } else {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
          }

          window.history.replaceState(null, "", "/");
        }
      } else {
        e.preventDefault();
        setMobileMenuOpen(false);
        sessionStorage.setItem("scrollTo", targetId);
        router.push("/");
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    }
  };

  const isLinkActive = (link: typeof NAV_LINKS[0]) => {
    if (link.href === "/blog") {
      return pathname === "/blog";
    }
    if (link.href === "/productos" || link.href.startsWith("/productos/")) {
      return pathname.startsWith("/productos");
    }
    if (link.href === "/#bienvenida") {
      return pathname === "/" && (activeSection === "bienvenida" || activeSection === "");
    }
    if (link.href === "/#contacto") {
      return pathname === "/" && activeSection === "contacto";
    }
    return false;
  };

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("mobileMenuToggle", { detail: { open: mobileMenuOpen } })
    );
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background transition-all duration-300 shadow-xs">
      <div className="mx-auto max-w-10xl px-6 sm:px-10 lg:px-14">
        {/* Desktop Header Layout */}
        <div className="hidden xl:flex relative h-32 items-center justify-center">
          {/* Logo Section */}
          <div className="absolute left-0 flex-shrink-0">
            <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
              <div className="relative h-10 w-48 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/logos/logo-preto.png?v=2"
                  alt="La Favorita"
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="flex items-center gap-8 xl:gap-12">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link);
              const isHashLink = link.href.startsWith("/#");
              const useAnchor = isHashLink && pathname === "/";
              const actualHref = useAnchor ? link.href.replace("/", "") : link.href;
              const LinkComponent = useAnchor ? "a" : Link;

              return (
                <div key={link.key} className="relative group">
                  <LinkComponent
                    href={actualHref}
                    onClick={(e: any) => handleLinkClick(e, link.href)}
                    className={`relative py-2 text-xs font-semibold tracking-widest transition-colors duration-300 flex items-center gap-1.5 ${active
                      ? "text-brand-teal font-semibold"
                      : "text-zinc-800 hover:text-brand-teal"
                      }`}
                  >
                    {t("header." + link.key)}
                    {link.sublinks && (
                      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    )}
                    {/* Premium hover line effect */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-brand-teal transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                  </LinkComponent>


                  {/* Dropdown Menu */}
                  {link.sublinks && (
                    <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-zinc-100 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="flex flex-col py-2">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.key}
                            href={sublink.href}
                            className="px-5 py-3 text-xs font-semibold tracking-widest text-zinc-600 hover:text-brand-teal hover:bg-zinc-50 transition-colors duration-300"
                          >
                            {t("header.sublinks." + sublink.key)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Section (Desktop Socials) */}
          <div className="absolute right-0 flex justify-end items-center">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`transition-all duration-300 hover:scale-110 ${social.isImage ? "hover-brand-teal" : "text-zinc-800 hover:text-black"
                    }`}
                >
                  {social.icon}
                </a>
              ))}

              {/* Premium Language Selector */}
              <div className="flex items-center gap-3.5 ml-4 pl-4 border-l border-zinc-200">
                <button
                  onClick={() => changeLanguage("es")}
                  className={`relative p-0.5 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${language === "es"
                    ? "ring-1 ring-brand-teal ring-offset-1 opacity-100 scale-105"
                    : "opacity-45 hover:opacity-100"
                    }`}
                  aria-label="Español"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_flag_es)">
                      <rect width="24" height="24" fill="#FCD116" />
                      <rect width="24" height="6" fill="#C60B1E" />
                      <rect y="18" width="24" height="6" fill="#C60B1E" />
                    </g>
                    <circle cx="12" cy="12" r="11.5" stroke="#E4E4E7" strokeWidth="1" />
                    <defs>
                      <clipPath id="clip0_flag_es">
                        <circle cx="12" cy="12" r="12" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`relative p-0.5 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${language === "en"
                    ? "ring-1 ring-brand-teal ring-offset-1 opacity-100 scale-105"
                    : "opacity-45 hover:opacity-100"
                    }`}
                  aria-label="English"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_flag_en)">
                      <g transform="scale(0.046875)">
                        <path fill="#012169" d="M0 0h512v512H0z"/>
                        <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"/>
                        <path fill="#C8102E" d="m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"/>
                        <path fill="#FFF" d="M176 0v512h160V0zM0 176v160h512V176z"/>
                        <path fill="#C8102E" d="M0 208v96h512v-96zM208 0v512h96V0z"/>
                      </g>
                    </g>
                    <circle cx="12" cy="12" r="11.5" stroke="#E4E4E7" strokeWidth="1" />
                    <defs>
                      <clipPath id="clip0_flag_en">
                        <circle cx="12" cy="12" r="12" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header Layout */}
        <div className="flex xl:hidden flex-col items-center justify-center py-5 gap-2.5">
          {/* Centered Large Logo */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center group">
            <div className="relative h-14 w-60 transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="/logos/logo-preto.png?v=2"
                alt="La Favorita"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          {/* Hamburger Menu Button centered below logo */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center p-1.5 text-zinc-800 hover:text-brand-teal hover:bg-zinc-50 rounded-md focus:outline-none transition-colors duration-300"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Abrir menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-7.5 w-7.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-7.5 w-7.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                stroke="currentColor"
                aria-hidden="true"
              >
                {/* Centered two-line `=` menu from the mockup */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16M4 15h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer/Menu (Slide-over from left to right) */}
      <div
        className={`xl:hidden fixed inset-0 h-screen w-screen bg-background z-50 transition-transform duration-500 ease-in-out transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        id="mobile-menu"
      >
        {/* Close Button at top right */}
        <div className="absolute top-8 right-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            type="button"
            className="inline-flex items-center justify-center p-1.5 text-zinc-800 hover:text-brand-teal focus:outline-none transition-colors duration-300"
          >
            <svg
              className="h-7.5 w-7.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Container (flex layout for top links and bottom copyright/socials) */}
        <div className="flex flex-col h-full justify-between px-8 pt-28 pb-14 sm:px-12">
          {/* Main Navigation Links */}
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link);
              const isHashLink = link.href.startsWith("/#");
              const useAnchor = isHashLink && pathname === "/";
              const actualHref = useAnchor ? link.href.replace("/", "") : link.href;
              const LinkComponent = useAnchor ? "a" : Link;

              return (
                <div key={link.key} className="flex flex-col gap-4">
                  <LinkComponent
                    href={actualHref}
                    onClick={(e: any) => handleLinkClick(e, link.href)}
                    className={`text-3xl sm:text-4xl font-bold tracking-wide transition-colors duration-300 ${active ? "text-brand-teal" : "text-zinc-900 hover:text-brand-teal"
                      }`}
                  >
                    {t("header." + link.key)}
                  </LinkComponent>

                  {/* Mobile Sublinks */}
                  {link.sublinks && (
                    <div className="flex flex-col gap-4 pl-5 border-l-2 border-zinc-100">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.key}
                          href={sublink.href}
                          onClick={(e) => handleLinkClick(e, sublink.href)}
                          className="text-lg font-semibold tracking-wide text-zinc-500 hover:text-brand-teal transition-colors duration-300"
                        >
                          {t("header.sublinks." + sublink.key)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Footer Section */}
          <div className="flex flex-col gap-5">
            {/* Copyright Text */}
            <p className="text-xs text-zinc-400 font-medium">
              {t("header.rights_reserved")}
            </p>

            {/* Horizontal Social Links & Mobile Language Selector */}
            <div className="flex items-center justify-between border-t border-zinc-100 pt-5 mt-1">
              <div className="flex items-center gap-5.5">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/lafavoritainterior/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-black hover:text-brand-teal transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/lafavoritainterior/?locale=es_ES"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-black hover:text-brand-teal transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>

                {/* Google */}
                <a
                  href="https://www.google.com.br/search?sca_esv=07c1394e5d835a50&sxsrf=ANbL-n5Apabou-hIUXcc3q3zgu020C4NPw:1779868026524&kgmid=/g/11q2m1725b&q=La+Favorita+Interior+en+Tenerife:+Especialistas+en+Cocinas+y+Muebles+a+medida.&shem=rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=368a91ff5dcfca05&utm_source=rimspwouoe,sh/x/loc/uni/m1/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google"
                  className="text-zinc-800 hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.518 0-6.377-2.87-6.377-6.4s2.859-6.4 6.377-6.4c1.582 0 3.03.572 4.148 1.57l3.095-3.095C19.348 2.583 15.981 1.1 12.24 1.1 5.866 1.1.7 6.265.7 12.6s5.166 11.5 11.54 11.5c6.31 0 11.528-4.57 11.528-11.5 0-.742-.09-1.428-.242-2.315H12.24z" />
                  </svg>
                </a>
              </div>

              {/* Mobile Language Selector */}
              <div className="flex items-center gap-3.5">
                <button
                  onClick={() => changeLanguage("es")}
                  className={`relative p-0.5 rounded-full transition-all duration-300 cursor-pointer ${language === "es"
                    ? "ring-1 ring-brand-teal ring-offset-1 opacity-100 scale-105"
                    : "opacity-45"
                    }`}
                  aria-label="Español"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_flag_es_mobile)">
                      <rect width="24" height="24" fill="#FCD116" />
                      <rect width="24" height="6" fill="#C60B1E" />
                      <rect y="18" width="24" height="6" fill="#C60B1E" />
                    </g>
                    <circle cx="12" cy="12" r="11.5" stroke="#E4E4E7" strokeWidth="1" />
                    <defs>
                      <clipPath id="clip0_flag_es_mobile">
                        <circle cx="12" cy="12" r="12" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`relative p-0.5 rounded-full transition-all duration-300 cursor-pointer ${language === "en"
                    ? "ring-1 ring-brand-teal ring-offset-1 opacity-100 scale-105"
                    : "opacity-45"
                    }`}
                  aria-label="English"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_flag_en_mobile)">
                      <g transform="scale(0.046875)">
                        <path fill="#012169" d="M0 0h512v512H0z"/>
                        <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"/>
                        <path fill="#C8102E" d="m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"/>
                        <path fill="#FFF" d="M176 0v512h160V0zM0 176v160h512V176z"/>
                        <path fill="#C8102E" d="M0 208v96h512v-96zM208 0v512h96V0z"/>
                      </g>
                    </g>
                    <circle cx="12" cy="12" r="11.5" stroke="#E4E4E7" strokeWidth="1" />
                    <defs>
                      <clipPath id="clip0_flag_en_mobile">
                        <circle cx="12" cy="12" r="12" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}