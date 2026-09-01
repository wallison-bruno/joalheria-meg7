"use client";

import { Star, ShieldCheck, Gem } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
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
    <section id="depoimentos" className="py-24 bg-[#0a0a0a] border-t border-white/5">
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
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-[var(--color-gold-500)]">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-white font-serif text-xl mb-3">Garantia Vitalícia</h3>
            <p className="text-[var(--color-silver-500)] text-sm">Autenticidade da Prata 925 e manutenção especializada garantida.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-[var(--color-gold-500)]">
              <Gem size={32} />
            </div>
            <h3 className="text-white font-serif text-xl mb-3">Cravação Perfeita</h3>
            <p className="text-[var(--color-silver-500)] text-sm">Zircônias e pedras preciosas com cravação manual de alta precisão.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-[var(--color-gold-500)]">
              <Star size={32} />
            </div>
            <h3 className="text-white font-serif text-xl mb-3">Exclusividade</h3>
            <p className="text-[var(--color-silver-500)] text-sm">Design proprietário e coleções em edições limitadas.</p>
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
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Experiência Meg7</h2>
          <p className="text-[var(--color-silver-400)]">O que nossos clientes dizem sobre nós</p>
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
              className="bg-white/5 p-8 border border-white/10 hover:border-[var(--color-gold-500)]/50 transition-colors"
            >
              <div className="flex text-[var(--color-gold-500)] mb-6">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-[var(--color-silver-400)] text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
              <h4 className="text-white font-serif">{review.name}</h4>
              <p className="text-[var(--color-silver-600)] text-xs mt-1">Cliente Verificado</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
