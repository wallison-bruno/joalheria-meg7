import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

// Mock data for the catalog
const products = [
  {
    id: 1,
    name: "Anel Solitário Diamante",
    category: "Anéis",
    price: 3450.00,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Colar Ponto de Luz",
    category: "Colares",
    price: 1890.00,
    image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Aliança Eternidade Ouro",
    category: "Alianças",
    price: 5600.00,
    image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Brinco Gota Safira",
    category: "Brincos",
    price: 2750.00,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Anel Esmeralda Imperial",
    category: "Anéis",
    price: 8900.00,
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Gargantilha Pérola Clássica",
    category: "Colares",
    price: 2100.00,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Par de Alianças Prata 925",
    category: "Alianças",
    price: 850.00,
    image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Brinco Argola Ouro Branco",
    category: "Brincos",
    price: 1540.00,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
  }
];

const categories = ["Todas", "Anéis", "Colares", "Brincos", "Alianças"];

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col">
      <Header />

      {/* Hero Catalog */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-black">
        <div className="container mx-auto text-center mt-12 mb-8">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Nossa Coleção
          </h1>
          <p className="text-[var(--color-silver-400)] max-w-2xl mx-auto text-lg leading-relaxed">
            Explore nossa seleção exclusiva de joias em Prata 925. 
            Cada peça é uma obra de arte pensada para destacar a sua essência.
          </p>
          <div className="w-16 h-[1px] bg-[var(--color-gold-500)] mx-auto mt-12"></div>
        </div>
      </section>

      {/* Main Catalog Content */}
      <section className="py-16 px-4 md:px-8 flex-grow">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32">
              <h2 className="font-serif text-xl text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4">
                Filtros
              </h2>
              
              <div className="mb-8">
                <h3 className="text-[var(--color-gold-500)] text-xs uppercase tracking-widest mb-4 font-semibold">
                  Categorias
                </h3>
                <ul className="space-y-3">
                  {categories.map((cat, idx) => (
                    <li key={idx}>
                      <button className={`text-sm hover:text-white transition-colors flex items-center gap-2 ${idx === 0 ? 'text-white' : 'text-[var(--color-silver-500)]'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-[var(--color-gold-500)]' : 'bg-transparent border border-[var(--color-silver-600)]'}`}></span>
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[var(--color-gold-500)] text-xs uppercase tracking-widest mb-4 font-semibold">
                  Preço
                </h3>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer text-sm text-[var(--color-silver-500)] hover:text-white transition-colors">
                    <input type="checkbox" className="accent-[var(--color-gold-500)]" />
                    Até R$ 1.000
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer text-sm text-[var(--color-silver-500)] hover:text-white transition-colors">
                    <input type="checkbox" className="accent-[var(--color-gold-500)]" />
                    R$ 1.000 - R$ 3.000
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer text-sm text-[var(--color-silver-500)] hover:text-white transition-colors">
                    <input type="checkbox" className="accent-[var(--color-gold-500)]" />
                    Acima de R$ 3.000
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
              <span className="text-[var(--color-silver-500)] text-sm">
                Exibindo {products.length} produtos
              </span>
              <select className="bg-transparent border border-white/20 text-white text-sm px-4 py-2 outline-none focus:border-[var(--color-gold-500)] rounded-sm cursor-pointer">
                <option value="recent">Lançamentos</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
            
            {/* Pagination Placeholder */}
            <div className="mt-16 flex justify-center gap-2">
              <button className="w-10 h-10 border border-[var(--color-gold-500)] text-[var(--color-gold-500)] hover:bg-[var(--color-gold-500)] hover:text-white transition-colors flex items-center justify-center rounded-sm">
                1
              </button>
              <button className="w-10 h-10 border border-white/20 text-[var(--color-silver-400)] hover:border-white hover:text-white transition-colors flex items-center justify-center rounded-sm">
                2
              </button>
              <button className="w-10 h-10 border border-white/20 text-[var(--color-silver-400)] hover:border-white hover:text-white transition-colors flex items-center justify-center rounded-sm">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
