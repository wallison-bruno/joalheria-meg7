"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string | number;
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, category, price, image }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative bg-[#111115] border border-white/5 rounded-xs overflow-hidden flex flex-col cursor-pointer hover:border-[var(--color-gold-500)]/40 transition-all duration-500 shadow-lg shadow-black/20"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#0c0c10]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-108"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Action Button */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-[80%]">
          <button className="w-full bg-gradient-to-r from-[var(--color-gold-400)] via-[var(--color-gold-500)] to-[var(--color-gold-600)] hover:brightness-110 text-[#08080a] py-3 text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-md">
            Ver Detalhes
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow text-center">
        <span className="text-[var(--color-gold-400)] text-[10px] tracking-[0.25em] uppercase font-medium mb-2">
          {category}
        </span>
        <h3 className="font-serif text-lg text-white mb-2.5 flex-grow group-hover:text-[var(--color-gold-300)] transition-colors duration-300">{name}</h3>
        <p className="text-[var(--color-silver-200)] font-sans text-sm tracking-wide font-medium">
          {formattedPrice}
        </p>
      </div>
    </motion.div>
  );
}
