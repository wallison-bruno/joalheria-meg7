"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
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
          <span className="text-[var(--color-silver-400)] italic">Exclusividade</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-[var(--color-silver-400)] mb-10 leading-relaxed drop-shadow-md"
        >
          Alta joalheria em Prata 925. Peças desenhadas para destacar a sua essência com a sofisticação e o acabamento impecável que você merece.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/catalogo" className="w-full sm:w-auto px-8 py-4 bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] text-black font-semibold text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2">
            Explorar Coleções
            <ArrowRight size={16} />
          </Link>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold text-sm tracking-wider uppercase transition-colors backdrop-blur-sm">
            Fale Conosco
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
