"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Editorial() {
  return (
    <section id="manufatura" className="py-28 bg-[#08080a] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="/images/logo-3d.jpg"
                alt="MEG 7 Prata 925"
                fill
                className="object-contain drop-shadow-2xl"
              />
              {/* Soft champagne glow behind the logo */}
              <div className="absolute inset-0 bg-[var(--color-gold-400)]/15 blur-[110px] -z-10 rounded-full"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
          >
            <div>
              <span className="text-[11px] tracking-[0.3em] text-[var(--color-gold-400)] uppercase font-medium block mb-3">
                Ateliê de Criação
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white">
                A Arte da <span className="text-[var(--color-silver-200)] italic">Manufatura</span>
              </h2>
            </div>
            <div className="w-14 h-[2px] bg-gradient-to-r from-[var(--color-gold-400)] via-[var(--color-gold-500)] to-transparent mx-auto lg:mx-0"></div>
            <p className="text-[var(--color-silver-300)] text-base md:text-lg leading-relaxed">
              Cada joia da Joalheria Meg7 é forjada com a pureza inigualável da Prata 925. 
              Nosso processo artesanal une técnicas milenares com o design contemporâneo para 
              criar peças que resistem ao teste do tempo.
            </p>
            <p className="text-[var(--color-silver-400)] text-sm md:text-base leading-relaxed">
              As linhas fluidas, o polimento espelhado e os detalhes em zircônias e pedras nobres 
              cuidadosamente cravadas tornam cada anel, colar e brinco uma obra de arte exclusiva. 
              O selo <span className="text-white font-semibold tracking-wider">MEG 7</span> representa nossa 
              garantia máxima de excelência e autenticidade.
            </p>
            <div className="pt-4">
              <button className="px-8 py-4 border border-[var(--color-gold-500)]/40 hover:border-[var(--color-gold-400)] text-white hover:bg-[var(--color-gold-500)]/10 font-semibold tracking-[0.2em] text-xs uppercase transition-all backdrop-blur-xs">
                Nossa História
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
