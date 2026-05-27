"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShinyText from "@/components/ShinyText";

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          {/* Left: Image */}
          <div className="relative w-full h-[500px] sm:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#388186]/40 to-transparent z-10 opacity-60 mix-blend-multiply" />
            <img
              src="/images/patricia.png"
              alt="Patricia - La Favorita Interior"
              className="w-full h-full object-cover object-top transform scale-100 group-hover:scale-105 transition-transform duration-[1500ms]"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-extrabold text-[#1c1c1c] leading-[1.1] tracking-tight text-balance">
              La pasión que da vida a{" "}
              <ShinyText 
                text="La Favorita Interior" 
                color="#388186" 
                shineColor="#5fbfc4" 
                speed={3} 
                className="text-4xl sm:text-5xl lg:text-[3.3rem] font-extrabold tracking-tight inline-block" 
              />
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-zinc-600 mb-2">
              Más que diseño, una manera de crear espacios con alma.
            </p>
            
            <div className="space-y-5 text-zinc-500 text-base sm:text-lg leading-relaxed">
              <p>
                Desde siempre, Patricia ha sentido un amor profundo por
                transformar lugares en rincones llenos de vida, belleza y
                calidez. Lo que comenzó como una pasión se convirtió en su
                propósito y hoy es la esencia de La Favorita Interior.
              </p>
              <p>
                Con más de 20 años de experiencia, ha unido aprendizaje, viajes y
                vivencias personales que le han dado una visión única: diseñar
                pensando en las personas, en sus sueños y en cómo desean vivir
                cada día.
              </p>
              <p>
                Para Patricia, cada proyecto es una historia. Escucha, acompaña
                y transforma las ideas en realidades llenas de estilo, cercanía y
                emoción. Porque para ella, el diseño no es solo estética: es un
                reflejo de quienes somos y de lo que queremos sentir en nuestro
                espacio.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/34650323800?text=Hola%20Patricia,%20me%20gustar%C3%ADa%20hablar%20sobre%20mi%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#388186] hover:bg-[#2d6a6e] text-white font-bold py-4 px-8 rounded-full text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hable con Patricia
              </a>
            </div>
          </div>
        </div>

        {/* CARDS SECTION */}
        <div className="flex flex-col gap-12 lg:gap-16">
          
          {/* Card 1: Misión & Valores */}
          <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100">
            {/* Misión (Teal background) */}
            <div className="w-full lg:w-5/12 bg-[#388186] text-white p-12 lg:p-16 flex flex-col items-center justify-center text-center group cursor-default relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
              
              <div className="relative z-10">
                {/* Animated Icon */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 mb-8 mx-auto flex items-center justify-center">
                  <img 
                    src="/icons/target.gif" 
                    alt="Misión" 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 brightness-0 invert opacity-90" 
                  />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">Misión</h3>
                <p className="text-white/90 text-sm lg:text-base leading-relaxed font-medium">
                  Crear muebles a medida que conviertan cada espacio en un lugar único,
                  funcional y lleno de personalidad. Diseños pensados con detalle, hechos
                  para reflejar quién eres y para acompañar tu forma de vivir.
                </p>
              </div>
            </div>

            {/* Valores (White background) */}
            <div className="w-full lg:w-7/12 p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-[#388186] mb-10 tracking-tight text-center lg:text-left">Valores</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#388186] shrink-0" />
                  <p className="text-zinc-600 text-sm lg:text-base leading-relaxed">
                    <strong className="text-zinc-900 font-bold">Compromiso auténtico:</strong> Cada proyecto es único, lo escuchamos con atención y lo cuidamos como si fuera nuestro.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#388186] shrink-0" />
                  <p className="text-zinc-600 text-sm lg:text-base leading-relaxed">
                    <strong className="text-zinc-900 font-bold">Pasión con propósito:</strong> Diseñamos con alma y entusiasmo, porque creemos que cada espacio debe transmitir emociones, no solo estética.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#388186] shrink-0" />
                  <p className="text-zinc-600 text-sm lg:text-base leading-relaxed">
                    <strong className="text-zinc-900 font-bold">Honestidad y confianza:</strong> Desde el primer presupuesto hasta la entrega final, trabajamos con transparencia absoluta.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#388186] shrink-0" />
                  <p className="text-zinc-600 text-sm lg:text-base leading-relaxed">
                    <strong className="text-zinc-900 font-bold">Calidad que perdura:</strong> Soluciones inteligentes, prácticas y duraderas que resisten al tiempo y al uso diario.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Principios & Visión */}
          <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100">
            {/* Principios (White background) */}
            <div className="w-full lg:w-7/12 p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-[#388186] mb-10 tracking-tight text-center lg:text-left">Principios</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#388186] shrink-0" />
                  <p className="text-zinc-600 text-sm lg:text-base leading-relaxed">
                    <strong className="text-zinc-900 font-bold">Personas en el centro:</strong> Todo empieza escuchando tu necesidad y termina con tu satisfacción.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#388186] shrink-0" />
                  <p className="text-zinc-600 text-sm lg:text-base leading-relaxed">
                    <strong className="text-zinc-900 font-bold">Más que estándar:</strong> Cada mueble se crea para ti, no para un escaparate.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#388186] shrink-0" />
                  <p className="text-zinc-600 text-sm lg:text-base leading-relaxed">
                    <strong className="text-zinc-900 font-bold">Respeto por tu tiempo y espacio:</strong> Cumplimos plazos y cuidamos cada detalle como si fuera nuestra propia casa.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#388186] shrink-0" />
                  <p className="text-zinc-600 text-sm lg:text-base leading-relaxed">
                    <strong className="text-zinc-900 font-bold">Evolución constante:</strong> Aprendemos, mejoramos e innovamos siempre, porque la excelencia nunca se detiene.
                  </p>
                </li>
              </ul>
            </div>

            {/* Visión (Teal background) */}
            <div className="w-full lg:w-5/12 bg-[#388186] text-white p-12 lg:p-16 flex flex-col items-center justify-center text-center group cursor-default relative overflow-hidden order-1 lg:order-2">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
              
              <div className="relative z-10">
                {/* Animated Icon */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 mb-8 mx-auto flex items-center justify-center">
                  <img 
                    src="/icons/views.gif" 
                    alt="Visión" 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 brightness-0 invert opacity-90" 
                  />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">Visión</h3>
                <p className="text-white/90 text-sm lg:text-base leading-relaxed font-medium">
                  Ser referentes en muebles personalizados en Tenerife y Canarias: 
                  reconocidos por la creatividad, la cercanía humana y el compromiso 
                  con la excelencia en el diseño de interiores.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
