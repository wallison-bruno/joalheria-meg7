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
      className="group relative bg-[var(--color-background)] border border-white/5 rounded-sm overflow-hidden flex flex-col cursor-pointer hover:border-white/20 transition-colors duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Action Button */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="bg-white text-black px-6 py-2 text-xs uppercase tracking-widest font-medium hover:bg-[var(--color-gold-400)] hover:text-white transition-colors duration-300">
            Ver Detalhes
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow text-center">
        <span className="text-[var(--color-gold-500)] text-[10px] tracking-widest uppercase mb-2">
          {category}
        </span>
        <h3 className="font-serif text-lg text-white mb-3 flex-grow">{name}</h3>
        <p className="text-[var(--color-silver-400)] font-sans text-sm tracking-wide">
          {formattedPrice}
        </p>
      </div>
    </motion.div>
  );
}
