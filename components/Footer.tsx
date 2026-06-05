"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const FOOTER_LINKS_METADATA = [
  { href: "/#cocinas", key: "cocinas" },
  { href: "/productos", key: "productos" },
  { href: "/sobre-nosotros", key: "sobre_nosotros" },
  { href: "/blog", key: "blog" },
  { href: "/#contacto", key: "contacto" },
];

const LOCAL_SERVICES_LINKS_METADATA = [
  { href: "/cocinas-a-medida-tenerife", key: "cocinas_medida" },
  { href: "/armarios-empotrados-tenerife", key: "armarios_empotrados" },
  { href: "/vestidores-tenerife", key: "vestidores_medida" },
  { href: "/muebles-de-bano-tenerife", key: "muebles_bano" },
];

export default function Footer() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const footerLinks = FOOTER_LINKS_METADATA.map((link) => ({
    href: link.href,
    label: t(`footer.links.${link.key}`),
  }));

  const localServicesLinks = LOCAL_SERVICES_LINKS_METADATA.map((link) => ({
    href: link.href,
    label: t(`footer.services.${link.key}`),
  }));

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const targetId = href.replace(/^\/?#/, "");

      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          let headerOffset = window.innerWidth >= 1024 ? 128 : 96;
          if (targetId === "contacto") headerOffset;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth"
          });
          window.history.replaceState(null, "", "/");
        }
      } else {
        e.preventDefault();
        sessionStorage.setItem("scrollTo", targetId);
        router.push("/");
      }
    }
  };

  return (
    <footer className="w-full bg-[#1c1c1c] text-white">
      {/* Top divider */}
      <div className="w-full h-px bg-white/10" />

      <div className="mx-auto max-w-[1600px] px-6 sm:px-12 lg:px-20 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
          {/* Left — Logo + Copyright */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <Link href="/" className="group">
              <img
                src="/logos/logo-branco.png?v=2"
                alt="La Favorita"
                className="h-8 sm:h-9 w-auto object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </Link>
            <div className="text-center lg:text-left">
              <p className="text-white/40 text-[11px] sm:text-xs font-medium leading-relaxed">
                © La Favorita {new Date().getFullYear()}
              </p>
              <p className="text-white/30 text-[10px] sm:text-[11px] font-medium mb-3">
                {t("footer.rights_reserved")}
              </p>
              <p className="text-white/20 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest">
                {t("footer.developed_by")}{' '}
                <a
                  href="https://portfolio-bice-phi-cwnx2074yd.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-300 font-bold underline decoration-white/20 hover:decoration-white underline-offset-4"
                >
                  Nicholas Deway
                </a>
              </p>
            </div>
          </div>

          {/* Center — Social Icons & Distributor */}
          <div className="flex flex-col items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/lafavoritainterior/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-[18px] h-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/lafavoritainterior/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>

              {/* Google */}
              <a
                href="https://www.google.com.br/search?sca_esv=07c1394e5d835a50&sxsrf=ANbL-n5Apabou-hIUXcc3q3zgu020C4NPw:1779868026524&kgmid=/g/11q2m1725b&q=La+Favorita+Interior+en+Tenerife:+Especialistas+en+Cocinas+y+Muebles+a+medida.&shem=rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=368a91ff5dcfca05&utm_source=rimspwouoe,sh/x/loc/uni/m1/1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.518 0-6.377-2.87-6.377-6.4s2.859-6.4 6.377-6.4c1.582 0 3.03.572 4.148 1.57l3.095-3.095C19.348 2.583 15.981 1.1 12.24 1.1 5.866 1.1.7 6.265.7 12.6s5.166 11.5 11.54 11.5c6.31 0 11.528-4.57 11.528-11.5 0-.742-.09-1.428-.242-2.315H12.24z" />
                </svg>
              </a>
            </div>

            {/* Distributor Badge */}
            <div className="pt-6 border-t border-white/10 flex flex-col items-center gap-3 w-full min-w-[200px]">
              <span className="text-white/30 text-[9px] uppercase tracking-[0.2em] font-bold">{t("footer.official_distributor")}</span>
              <img
                src="/logos/logo_alvic.png"
                alt="Alvic"
                className="h-7 w-auto object-contain opacity-70 brightness-0 invert"
              />
            </div>
          </div>

          {/* Right — Navigation Links Grid */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-16">
            {/* Group 1: Menu */}
            <nav className="flex flex-col items-center sm:items-start lg:items-end gap-3">
              <span className="text-white/30 text-[9px] uppercase tracking-[0.2em] font-bold mb-1">{t("footer.company_title")}</span>
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-white/50 text-xs sm:text-sm font-medium tracking-wide hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Group 2: Servicios Tenerife */}
            <nav className="flex flex-col items-center sm:items-start lg:items-end gap-3">
              <span className="text-white/30 text-[9px] uppercase tracking-[0.2em] font-bold mb-1">{t("footer.tenerife_title")}</span>
              {localServicesLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/50 text-xs sm:text-sm font-medium tracking-wide hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
