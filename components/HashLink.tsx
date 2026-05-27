"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface HashLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function HashLink({ href, className, children }: HashLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const targetId = href.replace(/^\/?#/, "");

      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          let headerOffset = window.innerWidth >= 1024 ? 128 : 96;
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
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
