import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import PageLoader from "@/components/PageLoader";

import { LanguageProvider } from "@/components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Favorita | Cocina y Muebles a Medida en Tenerife",
  description: "Diseño y fabricación de cocinas, armarios y vestidores a medida de alta calidad. Creamos espacios únicos para tu hogar.",
  icons: {
    icon: "/logos/mini-logo.png",
    shortcut: "/logos/mini-logo.png",
    apple: "/logos/mini-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background">
        <LanguageProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <FloatingWidgets />
          <PageLoader />
        </LanguageProvider>
      </body>
    </html>
  );
}