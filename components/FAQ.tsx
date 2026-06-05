"use client";

import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: t("faq.item1.question"),
      answer: (
        <div className="space-y-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            <Trans i18nKey="faq.item1.p1">
              Diseñamos y fabricamos cocinas <strong>100% a medida</strong>. Aunque contamos con conceptos inspiradores y distribuciones de referencia como punto de partida, cada proyecto se proyecta desde cero para adaptarse con total precisión a la arquitectura de tu hogar y a tus rutinas cotidianas.
            </Trans>
          </p>
          <p>
            <Trans i18nKey="faq.item1.p2">
              No nos limitamos a encajar módulos estándar de catálogo. Planificamos meticulosamente la capacidad de almacenamiento de cada zona, la configuración interior de cajones y gavetas, el sentido de apertura de las puertas, los sistemas de herrajes avanzados, la ergonomía de las alturas y las proporciones generales.
            </Trans>
          </p>
          <p className="italic text-zinc-500 font-medium">
            {t("faq.item1.p3")}
          </p>
        </div>
      ),
    },
    {
      question: t("faq.item2.question"),
      answer: (
        <div className="space-y-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            <Trans i18nKey="faq.item2.header">
              Ofrecemos un <strong>servicio integral llave en mano</strong> que abarca desde la idea inicial hasta el acabado final:
            </Trans>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Trans i18nKey="faq.item2.li1">
                <strong>Asesoría y Concepto:</strong> Nos reunimos para entender tu estilo de vida, necesidades de uso y preferencias estéticas.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="faq.item2.li2">
                <strong>Medición Técnica:</strong> Realizamos una medición in situ exacta y profesional para evitar cualquier margen de error.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="faq.item2.li3">
                <strong>Diseño y Visualización 3D:</strong> Elaboramos una propuesta en tres dimensiones realista para que puedas ver y perfeccionar la cocina antes de comenzar la producción.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="faq.item2.li4">
                <strong>Fabricación e Instalación:</strong> Producimos cada pieza con altos estándares y la instalamos mediante nuestro equipo de montadores especializados para un ajuste milimétrico.
              </Trans>
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: t("faq.item3.question"),
      answer: (
        <div className="space-y-3 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            {t("faq.item3.p1")}
          </p>
          <p>
            {t("faq.item3.p2")}
          </p>
        </div>
      ),
    },
    {
      question: t("faq.item4.question"),
      answer: (
        <div className="space-y-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            {t("faq.item4.header")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="bg-zinc-50 p-4 border border-zinc-100 rounded-lg">
              <h4 className="font-bold text-zinc-800 mb-1.5 text-xs sm:text-sm uppercase tracking-wider">
                {t("faq.item4.box1.title")}
              </h4>
              <p className="text-zinc-600 text-xs sm:text-sm">
                <Trans i18nKey="faq.item4.box1.text">
                  Trabajamos con encimeras de alta gama y gran durabilidad como <strong>Silestone</strong>, <strong>Dekton</strong>, <strong>Corian Solid Surface</strong> y <strong>Compac</strong>.
                </Trans>
              </p>
            </div>
            <div className="bg-zinc-50 p-4 border border-zinc-100 rounded-lg">
              <h4 className="font-bold text-zinc-800 mb-1.5 text-xs sm:text-sm uppercase tracking-wider">
                {t("faq.item4.box2.title")}
              </h4>
              <p className="text-zinc-600 text-xs sm:text-sm">
                <Trans i18nKey="faq.item4.box2.text">
                  Utilizamos los tableros de tecnología avanzada de <strong>Alvic</strong> para lograr acabados impecables y frentes resistentes al desgaste.
                </Trans>
              </p>
            </div>
            <div className="bg-zinc-50 p-4 border border-zinc-100 rounded-lg">
              <h4 className="font-bold text-zinc-800 mb-1.5 text-xs sm:text-sm uppercase tracking-wider">
                {t("faq.item4.box3.title")}
              </h4>
              <p className="text-zinc-600 text-xs sm:text-sm">
                <Trans i18nKey="faq.item4.box3.text">
                  Equipamos nuestros módulos con sistemas de la firma austriaca <strong>Blum</strong>, reconocida por la suavidad y el cierre amortiguado en cajones y puertas.
                </Trans>
              </p>
            </div>
            <div className="bg-zinc-50 p-4 border border-zinc-100 rounded-lg">
              <h4 className="font-bold text-zinc-800 mb-1.5 text-xs sm:text-sm uppercase tracking-wider">
                {t("faq.item4.box4.title")}
              </h4>
              <p className="text-zinc-600 text-xs sm:text-sm">
                <Trans i18nKey="faq.item4.box4.text">
                  Integramos equipos adaptados a tu estilo de cocina con marcas de confianza como <strong>Bosch</strong>, <strong>Siemens</strong>, <strong>Franke</strong>, <strong>Teka</strong>, <strong>Balay</strong> y <strong>Fagor</strong>.
                </Trans>
              </p>
            </div>
          </div>
          <p className="text-xs text-zinc-500 mt-1 italic">
            {t("faq.item4.note")}
          </p>
        </div>
      ),
    },
    {
      question: t("faq.item5.question"),
      answer: (
        <div className="space-y-3 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            {t("faq.item5.p1")}
          </p>
          <p>
            {t("faq.item5.p2")}
          </p>
        </div>
      ),
    },
    {
      question: t("faq.item6.question"),
      answer: (
        <div className="space-y-3 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            <Trans i18nKey="faq.item6.p1">
              Ofrecemos atractivas opciones de financiación flexible de hasta <strong>96 meses</strong> para que puedas acomodar el pago de tu proyecto con total comodidad. Esta facilidad está sujeta a la aprobación de la entidad financiera colaboradora.
            </Trans>
          </p>
          <p>
            {t("faq.item6.p2")}
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-zinc-50/20 py-12 md:py-24 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-[1600px]">
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#1c1c1c] tracking-tight mb-16">
          {t("faq.title")}
        </h2>

        {/* FAQ List Accordion */}
        <div className="max-w-[1400px] mx-auto flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Header Toggle Clickable Area (Fills with brand teal on hover/active) */}
                <button
                  onClick={() => toggleIndex(index)}
                  className={`w-full flex items-center justify-between py-5 sm:py-6 px-6 sm:px-8 text-left transition-all duration-300 group cursor-pointer ${isOpen ? "bg-[#388186] text-white" : "bg-white hover:bg-[#388186] text-[#1c1c1c]"
                    }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6 pr-4">
                    {/* Plus/Minus symbol */}
                    <span
                      className={`text-xl sm:text-2xl font-light w-6 h-6 flex items-center justify-center transition-all duration-300 ${isOpen ? "rotate-45 text-white" : "text-[#000000] group-hover:text-white"
                        }`}
                    >
                      +
                    </span>
                    <span
                      className={`text-sm sm:text-base lg:text-lg font-bold transition-colors duration-300 leading-snug ${isOpen ? "text-white" : "text-[#1c1c1c] group-hover:text-white"
                        }`}
                    >
                      {item.question}
                    </span>
                  </div>
                  {/* Chevron Right */}
                  <span
                    className={`text-xs sm:text-sm font-light transition-all duration-300 flex-shrink-0 ${isOpen ? "rotate-90 text-white" : "text-zinc-300 group-hover:text-white"
                      }`}
                  >
                    &#10095;
                  </span>
                </button>

                {/* Answer Content Panel (Stays white background with dark text) */}
                <div
                  className={`grid transition-all duration-500 ease-in-out bg-white ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6 sm:pb-8 pt-6 sm:pt-8" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-16 sm:pl-20 pr-6 sm:pr-10">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
