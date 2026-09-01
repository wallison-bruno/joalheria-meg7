"use client";

import { Star, ShieldCheck, Gem } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function SocialProof() {
  const reviews = [
    {
      id: 1,
      name: "Camila S.",
      text: "A qualidade da prata é impressionante. O brilho da peça que comprei se mantém intacto, uma verdadeira joia de luxo.",
    },
    {
      id: 2,
      name: "Renato V.",
      text: "Comprei as alianças de casamento aqui. O acabamento é perfeito e o atendimento foi de primeira. Altamente recomendado.",
    },
    {
      id: 3,
      name: "Juliana M.",
      text: "Design exclusivo e super elegante. O colar que ganhei se tornou minha peça favorita para qualquer ocasião especial.",
    }
  ];

  return (
    <section id="depoimentos" className="py-28 bg-[#08080a] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Features / Benefits */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 text-center"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#141418] border border-white/10 flex items-center justify-center mb-6 text-[var(--color-gold-400)] shadow-sm">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-white font-serif text-xl mb-2.5">Garantia Vitalícia</h3>
            <p className="text-[var(--color-silver-400)] text-sm max-w-xs leading-relaxed">Autenticidade da Prata 925 e manutenção especializada garantida.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#141418] border border-white/10 flex items-center justify-center mb-6 text-[var(--color-gold-400)] shadow-sm">
              <Gem size={28} />
            </div>
            <h3 className="text-white font-serif text-xl mb-2.5">Cravação de Alta Precisão</h3>
            <p className="text-[var(--color-silver-400)] text-sm max-w-xs leading-relaxed">Zircônias e pedras nobres com cravação manual minuciosa.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#141418] border border-white/10 flex items-center justify-center mb-6 text-[var(--color-gold-400)] shadow-sm">
              <Star size={28} />
            </div>
            <h3 className="text-white font-serif text-xl mb-2.5">Exclusividade Real</h3>
            <p className="text-[var(--color-silver-400)] text-sm max-w-xs leading-relaxed">Design proprietário e coleções manufaturadas em edições limitadas.</p>
          </motion.div>
        </motion.div>

        {/* Reviews */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] text-[var(--color-gold-400)] uppercase font-medium block mb-3">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Experiência Meg7</h2>
          <p className="text-[var(--color-silver-300)] text-sm md:text-base">O que nossos clientes dizem sobre a excelência de nossas joias</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <motion.div 
              variants={itemVariants}
              key={review.id} 
              className="bg-[#111115] p-8 border border-white/5 hover:border-[var(--color-gold-500)]/40 transition-all duration-300 rounded-xs shadow-lg shadow-black/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-[var(--color-gold-400)] mb-5 gap-1">
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                </div>
                <p className="text-[var(--color-silver-300)] text-sm leading-relaxed mb-6 italic font-light">"{review.text}"</p>
              </div>
              <div className="border-t border-white/5 pt-4">
                <h4 className="text-white font-serif text-base tracking-wide">{review.name}</h4>
                <p className="text-[var(--color-gold-500)] text-xs mt-0.5 tracking-wider uppercase">Cliente Verificado</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
