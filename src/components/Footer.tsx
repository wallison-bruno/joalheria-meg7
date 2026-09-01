import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060608] pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="font-serif text-2xl tracking-widest text-white mb-6">
              <span className="font-bold tracking-[0.2em]">MEG7</span>
              <span className="block text-[9px] tracking-[0.35em] text-[var(--color-silver-400)] uppercase mt-1">Prata 925</span>
            </div>
            <p className="text-[var(--color-silver-400)] text-sm leading-relaxed mb-6">
              A mais alta expressão de sofisticação e qualidade em joias de prata, eternizando momentos únicos com excelência.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Telefone" className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-[var(--color-silver-400)] hover:text-[var(--color-gold-400)] hover:border-[var(--color-gold-500)]/40 transition-all"><Phone size={18} /></a>
              <a href="#" aria-label="E-mail" className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-[var(--color-silver-400)] hover:text-[var(--color-gold-400)] hover:border-[var(--color-gold-500)]/40 transition-all"><Mail size={18} /></a>
              <a href="#" aria-label="Localização" className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-[var(--color-silver-400)] hover:text-[var(--color-gold-400)] hover:border-[var(--color-gold-500)]/40 transition-all"><MapPin size={18} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-serif tracking-wider mb-6 text-base">A Joalheria</h4>
            <ul className="space-y-3.5 text-sm text-[var(--color-silver-400)]">
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Nossas Lojas</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">A Arte da Manufatura</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-serif tracking-wider mb-6 text-base">Atendimento</h4>
            <ul className="space-y-3.5 text-sm text-[var(--color-silver-400)]">
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Garantia Vitalícia</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif tracking-wider mb-6 text-base">Newsletter VIP</h4>
            <p className="text-[var(--color-silver-400)] text-sm mb-4 leading-relaxed">
              Receba em primeira mão lançamentos exclusivos e convites para eventos privados.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Seu e-mail principal" 
                className="bg-[#111115] border border-white/10 px-4 py-3 text-sm text-white placeholder-[var(--color-silver-600)] focus:outline-none focus:border-[var(--color-gold-500)] transition-colors rounded-xs"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-[var(--color-gold-400)] via-[var(--color-gold-500)] to-[var(--color-gold-600)] hover:brightness-110 text-[#08080a] font-bold text-xs py-3.5 tracking-[0.25em] uppercase transition-all shadow-sm rounded-xs"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-silver-500)]">
          <p>&copy; {new Date().getFullYear()} Joalheria Meg7. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
