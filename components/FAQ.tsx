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
            <Trans i18nKey="faq.item1.p1" components={[<strong key="0" />]} />
          </p>
          <p>
            {t("faq.item1.p2")}
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
            <Trans i18nKey="faq.item2.header" components={[<strong key="0" />]} />
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Trans i18nKey="faq.item2.li1" components={[<strong key="0" />]} />
            </li>
            <li>
              <Trans i18nKey="faq.item2.li2" components={[<strong key="0" />]} />
            </li>
            <li>
              <Trans i18nKey="faq.item2.li3" components={[<strong key="0" />]} />
            </li>
            <li>
              <Trans i18nKey="faq.item2.li4" components={[<strong key="0" />]} />
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
                <Trans
                  i18nKey="faq.item4.box1.text"
                  components={[
                    <strong key="0" />,
                    <strong key="1" />,
                    <strong key="2" />,
                    <strong key="3" />
                  ]}
                />
              </p>
            </div>
            <div className="bg-zinc-50 p-4 border border-zinc-100 rounded-lg">
              <h4 className="font-bold text-zinc-800 mb-1.5 text-xs sm:text-sm uppercase tracking-wider">
                {t("faq.item4.box2.title")}
              </h4>
              <p className="text-zinc-600 text-xs sm:text-sm">
                <Trans
                  i18nKey="faq.item4.box2.text"
                  components={[
                    <strong key="0" />
                  ]}
                />
              </p>
            </div>
            <div className="bg-zinc-50 p-4 border border-zinc-100 rounded-lg">
              <h4 className="font-bold text-zinc-800 mb-1.5 text-xs sm:text-sm uppercase tracking-wider">
                {t("faq.item4.box3.title")}
              </h4>
              <p className="text-zinc-600 text-xs sm:text-sm">
                <Trans
                  i18nKey="faq.item4.box3.text"
                  components={[
                    <strong key="0" />
                  ]}
                />
              </p>
            </div>
            <div className="bg-zinc-50 p-4 border border-zinc-100 rounded-lg">
              <h4 className="font-bold text-zinc-800 mb-1.5 text-xs sm:text-sm uppercase tracking-wider">
                {t("faq.item4.box4.title")}
              </h4>
              <p className="text-zinc-600 text-xs sm:text-sm">
                <Trans
                  i18nKey="faq.item4.box4.text"
                  components={[
                    <strong key="0" />,
                    <strong key="1" />,
                    <strong key="2" />,
                    <strong key="3" />,
                    <strong key="4" />,
                    <strong key="5" />
                  ]}
                />
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
            <Trans i18nKey="faq.item6.p1" components={[<strong key="0" />]} />
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
