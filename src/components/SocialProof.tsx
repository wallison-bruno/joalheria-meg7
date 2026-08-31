import { Star, ShieldCheck, Gem } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-[var(--color-gold-500)]">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-white font-serif text-xl mb-3">Garantia Vitalícia</h3>
            <p className="text-[var(--color-silver-500)] text-sm">Autenticidade da Prata 925 e manutenção especializada garantida.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-[var(--color-gold-500)]">
              <Gem size={32} />
            </div>
            <h3 className="text-white font-serif text-xl mb-3">Cravação Perfeita</h3>
            <p className="text-[var(--color-silver-500)] text-sm">Zircônias e pedras preciosas com cravação manual de alta precisão.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-[var(--color-gold-500)]">
              <Star size={32} />
            </div>
            <h3 className="text-white font-serif text-xl mb-3">Exclusividade</h3>
            <p className="text-[var(--color-silver-500)] text-sm">Design proprietário e coleções em edições limitadas.</p>
          </div>
        </div>

        {/* Reviews */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Experiência Meg7</h2>
          <p className="text-[var(--color-silver-400)]">O que nossos clientes dizem sobre nós</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white/5 p-8 border border-white/10 hover:border-[var(--color-gold-500)]/50 transition-colors">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
