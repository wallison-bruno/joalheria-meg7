import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="font-serif text-2xl tracking-widest text-white mb-6">
              <span className="font-bold">MEG7</span>
              <span className="block text-[10px] tracking-[0.3em] text-[var(--color-silver-400)] uppercase mt-1">Prata 925</span>
            </div>
            <p className="text-[var(--color-silver-500)] text-sm leading-relaxed mb-6">
              A mais alta expressão de sofisticação e qualidade em joias de prata, eternizando momentos únicos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[var(--color-silver-500)] hover:text-white transition-colors"><Phone size={20} /></a>
              <a href="#" className="text-[var(--color-silver-500)] hover:text-white transition-colors"><Mail size={20} /></a>
              <a href="#" className="text-[var(--color-silver-500)] hover:text-white transition-colors"><MapPin size={20} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-serif tracking-wider mb-6">A Joalheria</h4>
            <ul className="space-y-4 text-sm text-[var(--color-silver-500)]">
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Nossas Lojas</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">A Arte da Manufatura</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-serif tracking-wider mb-6">Atendimento</h4>
            <ul className="space-y-4 text-sm text-[var(--color-silver-500)]">
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Garantia</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold-400)] transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif tracking-wider mb-6">Newsletter VIP</h4>
            <p className="text-[var(--color-silver-500)] text-sm mb-4">
              Receba lançamentos exclusivos e convites para eventos privados.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Seu endereço de e-mail" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--color-gold-500)] transition-colors"
              />
              <button 
                type="submit" 
                className="bg-[var(--color-silver-400)] hover:bg-white text-black font-semibold text-sm py-3 tracking-wider uppercase transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-silver-600)]">
          <p>&copy; {new Date().getFullYear()} Joalheria Meg7. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
