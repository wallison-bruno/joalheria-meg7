import Image from "next/image";

export default function Editorial() {
  return (
    <section id="manufatura" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="/images/logo-3d.jpg"
                alt="MEG 7 Prata 925"
                fill
                className="object-contain drop-shadow-2xl"
              />
              {/* Soft glow behind the logo */}
              <div className="absolute inset-0 bg-[var(--color-gold-500)]/10 blur-[100px] -z-10 rounded-full"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-5xl text-white">
              A Arte da <span className="text-[var(--color-silver-400)] italic">Manufatura</span>
            </h2>
            <div className="w-12 h-[2px] bg-[var(--color-gold-500)] mx-auto lg:mx-0"></div>
            <p className="text-[var(--color-silver-400)] text-lg leading-relaxed">
              Cada joia da Joalheria Meg7 é forjada com a pureza inigualável da Prata 925. 
              Nosso processo artesanal une técnicas milenares com o design contemporâneo para 
              criar peças que resistem ao teste do tempo.
            </p>
            <p className="text-[var(--color-silver-500)] text-base leading-relaxed">
              As linhas fluidas, o polimento espelhado e os detalhes em zircônias e diamantes 
              cuidadosamente cravados tornam cada anel, colar e brinco uma obra de arte exclusiva. 
              O selo <span className="text-white font-semibold">MEG 7</span> representa nossa 
              garantia máxima de excelência e autenticidade.
            </p>
            <div className="pt-4">
              <button className="px-8 py-4 border border-[var(--color-silver-500)] text-white hover:bg-[var(--color-silver-500)] hover:text-black font-semibold tracking-wider text-sm transition-colors">
                Nossa História
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
