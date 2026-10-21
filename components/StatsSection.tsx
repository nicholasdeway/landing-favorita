"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

interface AnimatedStatProps {
  value: string;
}

function AnimatedStat({ value }: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Matches e.g. "+3.500", "+20 años", "100%". Text values like "Visualización 3D" are not animated.
    const match = value.match(/^([+\-~]?)(\d{1,3}(?:([.,])\d{3})+|\d+)(?![A-Za-z])(.*)$/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const separator = match[3] || "";
    const targetNumber = parseInt(match[2].replace(/[.,]/g, ""), 10);
    const suffix = match[4];
    const format = (n: number) =>
      separator ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : n.toString();

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let startTimestamp: number | null = null;
          const duration = 2000; // 2 seconds animation

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentNumber = Math.floor(progress * targetNumber);

            setDisplayValue(`${prefix}${format(currentNumber)}${suffix}`);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return <span ref={elementRef}>{displayValue}</span>;
}

const STATS_METADATA = [
  { id: "proyectos" },
  { id: "experiencia" },
  { id: "diseno" },
  { id: "atencion" }
];

export default function StatsSection() {
  const { t } = useTranslation();

  const stats = STATS_METADATA.map((stat) => ({
    value: t(`stats.${stat.id}.value`),
    label: t(`stats.${stat.id}.label`),
    description: t(`stats.${stat.id}.description`)
  }));

  return (
    <section className="w-full bg-[#E7DED3]/15 py-12 md:py-20 px-6 sm:px-12 lg:px-20 border-t border-zinc-200/35">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-zinc-200/40 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-full min-h-[3.5rem] md:min-h-[4.5rem] flex items-center justify-center">
                <span
                  className={`block max-w-full font-extrabold text-brand-gold tracking-tight text-balance break-words group-hover:scale-105 transition-transform duration-300 ${
                    stat.value.length > 10
                      ? "text-3xl sm:text-[28px] lg:text-[26px] xl:text-[32px] leading-[1.1]"
                      : "text-4xl md:text-5xl leading-none"
                  }`}
                >
                  <AnimatedStat value={stat.value} />
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-zinc-900 tracking-tight uppercase">
                {stat.label}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-500 max-w-[220px] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}