"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "¿Las cocinas son a medida o modelos cerrados?",
      answer: (
        <div className="space-y-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            Diseñamos y fabricamos cocinas <strong>100% a medida</strong>. Aunque contamos con conceptos inspiradores y distribuciones de referencia como punto de partida, cada proyecto se proyecta desde cero para adaptarse con total precisión a la arquitectura de tu hogar y a tus rutinas cotidianas.
          </p>
          <p>
            No nos limitamos a encajar módulos estándar de catálogo. Planificamos meticulosamente la capacidad de almacenamiento de cada zona, la configuración interior de cajones y gavetas, el sentido de apertura de las puertas, los sistemas de herrajes avanzados, la ergonomía de las alturas y las proporciones generales.
          </p>
          <p className="italic text-zinc-500 font-medium">
            Tu cocina se crea para funcionar de verdad en tu casa, no para cumplir con los estándares de un catálogo predefinido.
          </p>
        </div>
      ),
    },
    {
      question: "¿Qué incluye el proyecto?",
      answer: (
        <div className="space-y-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            Ofrecemos un <strong>servicio integral llave en mano</strong> que abarca desde la idea inicial hasta el acabado final:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Asesoría y Concepto:</strong> Nos reunimos para entender tu estilo de vida, necesidades de uso y preferencias estéticas.</li>
            <li><strong>Medición Técnica:</strong> Realizamos una medición in situ exacta y profesional para evitar cualquier margen de error.</li>
            <li><strong>Diseño y Visualización 3D:</strong> Elaboramos una propuesta en tres dimensiones realista para que puedas ver y perfeccionar la cocina antes de comenzar la producción.</li>
            <li><strong>Fabricación e Instalación:</strong> Producimos cada pieza con altos estándares y la instalamos mediante nuestro equipo de montadores especializados para un ajuste milimétrico.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "¿Cuánto tempo estaré sin cocina durante el montaje?",
      answer: (
        <div className="space-y-3 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            Reducimos al mínimo los tiempos de transición para mitigar las molestias en tu día a día. La instalación se planifica minuciosamente con antelación, coordinando los plazos de entrega y montaje de manera eficiente.
          </p>
          <p>
            Nuestro objetivo es que el proceso sea rápido, ordenado y limpio, permitiéndote disfrutar de tu nueva cocina en el menor tiempo posible sin comprometer la alta precisión en los acabados.
          </p>
        </div>
      ),
    },
    {
      question: "¿Con qué marcas trabajan?",
      answer: (
        <div className="space-y-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            Seleccionamos exclusivamente firmas de primer nivel que garanticen durabilidad, ergonomía y resistencia al uso continuo diario:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="bg-zinc-50 p-4 border border-zinc-100 rounded-lg">
              <h4 className="font-bold text-zinc-800 mb-1.5 text-xs sm:text-sm uppercase tracking-wider">Superficies y Encimeras</h4>
              <p className="text-zinc-600 text-xs sm:text-sm">
                Trabajamos con encimeras de alta gama y gran durabilidad como <strong>Silestone</strong>, <strong>Dekton</strong>, <strong>Corian Solid Surface</strong> y <strong>Compac</strong>.
              </p>
            </div>
            <div className="bg-zinc-50 p-4 border border-zinc-100 rounded-lg">
              <h4 className="font-bold text-zinc-800 mb-1.5 text-xs sm:text-sm uppercase tracking-wider">Mobiliario y Acabados</h4>
              <p className="text-zinc-600 text-xs sm:text-sm">
                Utilizamos los tableros de tecnología avanzada de <strong>Alvic</strong> para lograr acabados impecables y frentes resistentes al desgaste.
              </p>
            </div>
            <div className="bg-zinc-50 p-4 border border-zinc-100 rounded-lg">
              <h4 className="font-bold text-zinc-800 mb-1.5 text-xs sm:text-sm uppercase tracking-wider">Herrajes y Sistemas</h4>
              <p className="text-zinc-600 text-xs sm:text-sm">
                Equipamos nuestros módulos con sistemas de la firma austriaca <strong>Blum</strong>, reconocida por la suavidad y el cierre amortiguado en cajones y puertas.
              </p>
            </div>
            <div className="bg-zinc-50 p-4 border border-zinc-100 rounded-lg">
              <h4 className="font-bold text-zinc-800 mb-1.5 text-xs sm:text-sm uppercase tracking-wider">Electrodomésticos</h4>
              <p className="text-zinc-600 text-xs sm:text-sm">
                Integramos equipos adaptados a tu estilo de cocina con marcas de confianza como <strong>Bosch</strong>, <strong>Siemens</strong>, <strong>Franke</strong>, <strong>Teka</strong>, <strong>Balay</strong> y <strong>Fagor</strong>.
              </p>
            </div>
          </div>
          <p className="text-xs text-zinc-500 mt-1 italic">
            * La selección final se define de manera personalizada en la fase de proyecto según diseño, exigencias técnicas y presupuesto.
          </p>
        </div>
      ),
    },
    {
      question: "¿Qué pasa si necesito un ajuste o surge algún problema con la cocina?",
      answer: (
        <div className="space-y-3 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            Tu tranquilidad a largo plazo es nuestra prioridad. Si con el transcurso del tiempo necesitas recalibrar una puerta, revisar el deslizamiento de un cajón o corregir un cierre amortiguado, nuestro servicio postventa se encarga de solucionarlo.
          </p>
          <p>
            Además, todos los componentes y encimeras cuentan con su correspondiente garantía oficial, gestionada directamente por nuestro equipo para evitarte intermediarios y molestias.
          </p>
        </div>
      ),
    },
    {
      question: "¿Cómo funciona la financiación?",
      answer: (
        <div className="space-y-3 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            Ofrecemos atractivas opciones de financiación flexible de hasta <strong>96 meses</strong> para que puedas acomodar el pago de tu proyecto con total comodidad. Esta facilidad está sujeta a la aprobación de la entidad financiera colaboradora.
          </p>
          <p>
            Explicamos todas las condiciones de manera transparente y sin letra pequeña en el momento de entregarte el presupuesto detallado, asegurando que todo quede perfectamente definido antes de comenzar.
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
          Preguntas frecuentes
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
