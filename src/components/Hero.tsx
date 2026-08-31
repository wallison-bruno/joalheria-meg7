import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Colar de Prata 925 com pingente de número 7 e zircônia"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center mt-20">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-lg">
          O Brilho da<br />
          <span className="text-[var(--color-silver-400)] italic">Exclusividade</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-sm md:text-base text-[var(--color-silver-400)] mb-10 leading-relaxed drop-shadow-md">
          Alta joalheria em Prata 925. Peças desenhadas para destacar a sua essência com a sofisticação e o acabamento impecável que você merece.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] text-black font-semibold text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2">
            Explorar Coleções
            <ArrowRight size={16} />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold text-sm tracking-wider uppercase transition-colors backdrop-blur-sm">
            Fale Conosco
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}
