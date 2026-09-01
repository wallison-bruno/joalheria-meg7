"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "Anéis",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
    desc: "Atemporal e marcante",
  },
  {
    id: 2,
    title: "Colares",
    image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?q=80&w=800&auto=format&fit=crop",
    desc: "A essência do brilho",
  },
  {
    id: 3,
    title: "Brincos",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
    desc: "Elegância em detalhes",
  },
  {
    id: 4,
    title: "Alianças",
    image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=800&auto=format&fit=crop",
    desc: "O símbolo do amor",
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function CollectionsGrid() {
  return (
    <section id="colecoes" className="py-24 bg-[var(--background)]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] text-[var(--color-gold-400)] uppercase font-medium block mb-3">
            Seleção Especial
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Nossas Coleções</h2>
          <p className="text-[var(--color-silver-300)] max-w-xl mx-auto text-sm md:text-base">
            Descubra as peças que eternizam momentos com brilho e nobreza.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat) => (
            <motion.div 
              variants={itemVariants}
              key={cat.id} 
              className="group relative h-[420px] rounded-xs overflow-hidden cursor-pointer border border-white/5 hover:border-[var(--color-gold-500)]/40 transition-all duration-500 bg-[#111115]"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/90 via-[#08080a]/30 to-transparent transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-2xl text-white mb-1 drop-shadow-sm">{cat.title}</h3>
                <p className="text-[var(--color-gold-300)] text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light">
                  {cat.desc}
                </p>
                <div className="w-0 h-[1.5px] bg-gradient-to-r from-[var(--color-gold-400)] via-[var(--color-silver-200)] to-transparent group-hover:w-full transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/catalogo" 
            className="inline-flex items-center gap-2 border-b border-[var(--color-gold-500)]/60 text-[var(--color-gold-400)] pb-1.5 text-xs font-semibold tracking-[0.25em] uppercase hover:text-white hover:border-white transition-all"
          >
            Ver Catálogo Completo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
