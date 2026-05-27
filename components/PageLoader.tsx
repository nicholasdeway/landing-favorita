"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // Mantém a tela preenchida por 600ms
    const fadeOutTimer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    // Remove do DOM após a animação de fade-out terminar (700ms de duração da transição)
    const removeTimer = setTimeout(() => {
      setIsRendered(false);
    }, 1300);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 animate-pulse">
        <Image
          src="/logos/mini-logo.png"
          alt="La Favorita Logo"
          fill
          sizes="128px"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}