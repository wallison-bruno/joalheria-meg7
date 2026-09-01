import Image from "next/image";
import Link from "next/link";

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

export default function CollectionsGrid() {
  return (
    <section id="colecoes" className="py-24 bg-[var(--background)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Nossas Coleções</h2>
          <p className="text-[var(--color-silver-400)] max-w-xl mx-auto">
            Descubra as peças que eternizam momentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative h-[400px] overflow-hidden cursor-pointer"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-2xl text-white mb-1">{cat.title}</h3>
                <p className="text-[var(--color-gold-400)] text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {cat.desc}
                </p>
                <div className="w-0 h-[1px] bg-[var(--color-silver-500)] group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/catalogo" className="inline-block border-b border-[var(--color-gold-500)] text-[var(--color-gold-500)] pb-1 text-sm tracking-widest uppercase hover:text-white hover:border-white transition-colors">
            Ver Catálogo Completo
          </Link>
        </div>
      </div>
    </section>
  );
}
