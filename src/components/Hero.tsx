"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("colecoes");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Colar de Prata 925 com pingente de número 7 e zircônia"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-lg"
        >
          O Brilho da<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--color-silver-200)] to-[var(--color-gold-300)] italic">
            Exclusividade
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-[var(--color-silver-300)] mb-10 leading-relaxed drop-shadow-md"
        >
          Alta joalheria em Prata 925. Peças desenhadas para destacar a sua essência com a sofisticação e o acabamento impecável que você merece.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="/catalogo" 
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[var(--color-gold-400)] via-[var(--color-gold-500)] to-[var(--color-gold-600)] hover:brightness-110 text-[#08080a] font-semibold text-sm tracking-wider uppercase transition-all shadow-lg shadow-[rgba(197,160,89,0.25)] flex items-center justify-center gap-2"
          >
            Explorar Coleções
            <ArrowRight size={16} />
          </Link>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/[0.03] border border-white/20 text-[var(--color-silver-200)] hover:bg-white/10 hover:border-white/40 font-semibold text-sm tracking-wider uppercase transition-all backdrop-blur-sm">
            Fale Conosco
          </button>
        </motion.div>
      </div>
      
      {/* Luxury Scroll Indicator */}
      <motion.button 
        type="button"
        onClick={scrollToNextSection}
        aria-label="Rolar para ver as coleções"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5 group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-gold-500)] rounded-full px-3 py-1 transition-all duration-300"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-light text-[var(--color-silver-400)] group-hover:text-[var(--color-gold-300)] transition-colors duration-300 select-none">
          Explorar
        </span>

        {/* Minimalist Pill with glowing bead */}
        <div className="relative w-[18px] h-8 rounded-full border border-white/20 group-hover:border-[var(--color-gold-400)]/60 transition-colors duration-300 flex justify-center p-1 backdrop-blur-[2px]">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.4, 1, 0.4],
              scale: [0.85, 1.1, 0.85]
            }}
            transition={{ 
              duration: 2.2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-white via-[var(--color-silver-200)] to-[var(--color-gold-400)] shadow-[0_0_8px_rgba(223,193,123,0.8)]"
          />
        </div>

        {/* Delicate vertical guidance line */}
        <motion.div
          animate={{
            scaleY: [0.7, 1.1, 0.7],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[1px] h-4 bg-gradient-to-b from-[var(--color-gold-400)]/50 via-white/20 to-transparent group-hover:from-[var(--color-gold-300)] group-hover:h-6 transition-all duration-300"
        />
      </motion.button>
    </section>
  );
}
