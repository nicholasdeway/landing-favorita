"use client";

import { useEffect, useState } from "react";

export default function FloatingWidgets() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      setMenuOpen(customEvent.detail.open);
    };
    window.addEventListener("mobileMenuToggle", handleToggle);
    return () => {
      window.removeEventListener("mobileMenuToggle", handleToggle);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* 1. Floating Vertical Social Bar (Mobile/Tablet Only) */}
      <div
        className={`fixed right-2 sm:right-4 z-40 lg:hidden flex flex-col items-center bg-background/95 backdrop-blur-sm py-4 px-2.5 rounded-full shadow-lg border border-zinc-100 gap-4.5 transition-all duration-500 ease-in-out hover:shadow-xl ${menuOpen ? "top-[78%] -translate-y-1/2 scale-50 opacity-0 pointer-events-none" : "top-1/2 -translate-y-1/2 opacity-100"
          }`}
      >
        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-black hover:text-brand-teal transition-all duration-300 hover:scale-115"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-black hover:text-brand-teal transition-all duration-300 hover:scale-115"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
          </svg>
        </a>

        {/* Google */}
        <a
          href="https://www.google.com.br/search?sca_esv=07c1394e5d835a50&sxsrf=ANbL-n5Apabou-hIUXcc3q3zgu020C4NPw:1779868026524&kgmid=/g/11q2m1725b&q=La+Favorita+Interior+en+Tenerife:+Especialistas+en+Cocinas+y+Muebles+a+medida.&shem=rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=368a91ff5dcfca05&utm_source=rimspwouoe,sh/x/loc/uni/m1/1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google"
          className="text-black hover:text-brand-teal transition-all duration-300 hover:scale-115"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.518 0-6.377-2.87-6.377-6.4s2.859-6.4 6.377-6.4c1.582 0 3.03.572 4.148 1.57l3.095-3.095C19.348 2.583 15.981 1.1 12.24 1.1 5.866 1.1.7 6.265.7 12.6s5.166 11.5 11.54 11.5c6.31 0 11.528-4.57 11.528-11.5 0-.742-.09-1.428-.242-2.315H12.24z" />
          </svg>
        </a>
      </div>

      {/* 2. Floating WhatsApp Button (Bottom-Right) */}
      <a
        href="https://wa.me/34650323800"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed right-4 bottom-4 z-40 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25d366]/40"
      >
        {/* Pulse effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-35 animate-ping -z-10"></span>
        <svg className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.9 9.9 0 0 0-6.978-2.879c-5.443 0-9.866 4.372-9.87 9.802 0 1.772.465 3.503 1.346 5.025l-.985 3.596 3.678-.952zm11.385-6.52c-.273-.135-1.616-.789-1.87-.881-.252-.093-.436-.139-.62.135-.182.273-.707.881-.865 1.063-.16.182-.319.204-.592.069-.272-.135-1.15-.42-2.19-1.341-.809-.716-1.355-1.601-1.513-1.873-.159-.272-.017-.419.12-.555.123-.122.273-.319.41-.478.136-.159.182-.272.272-.454.09-.182.046-.341-.023-.478-.069-.135-.62-1.479-.849-2.03-.223-.538-.47-.464-.649-.474-.168-.009-.36-.011-.553-.011-.193 0-.507.072-.772.359-.265.287-1.011.977-1.011 2.383 0 1.407 1.035 2.766 1.179 2.957.145.19 2.037 3.078 4.935 4.307.69.292 1.229.467 1.649.599.692.217 1.323.187 1.821.114.555-.081 1.616-.653 1.844-1.282.228-.629.228-1.17.159-1.282-.07-.11-.252-.177-.525-.312z" />
        </svg>
      </a>
    </>
  );
}