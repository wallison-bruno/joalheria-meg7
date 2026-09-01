"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/40"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--color-silver-300)] hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-gold-500)]"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium tracking-wide text-[var(--color-silver-300)] hover:text-[var(--color-gold-400)] transition-colors">Início</Link>
            <Link href="/catalogo" className="text-sm font-medium tracking-wide text-[var(--color-silver-300)] hover:text-[var(--color-gold-400)] transition-colors">Catálogo</Link>
            <Link href="/#manufatura" className="text-sm font-medium tracking-wide text-[var(--color-silver-300)] hover:text-[var(--color-gold-400)] transition-colors">A Arte</Link>
            <Link href="/#depoimentos" className="text-sm font-medium tracking-wide text-[var(--color-silver-300)] hover:text-[var(--color-gold-400)] transition-colors">Garantia</Link>
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl tracking-widest text-white text-center">
            <Link href="/" className="block group transition-colors">
              <span className="font-bold tracking-[0.2em] group-hover:text-[var(--color-gold-400)] transition-colors">MEG7</span>
              <span className="block text-[9px] tracking-[0.35em] text-[var(--color-silver-400)] uppercase mt-0.5 group-hover:text-[var(--color-gold-300)] transition-colors">Prata 925</span>
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              className="text-[var(--color-silver-300)] hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-gold-500)] rounded-full p-1"
              aria-label="Buscar joias"
            >
              <Search size={20} />
            </button>
            <button 
              className="text-[var(--color-silver-300)] hover:text-white transition-colors relative focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-gold-500)] rounded-full p-1"
              aria-label="Sacola de compras"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[var(--color-gold-400)] to-[var(--color-gold-600)] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#08080a] flex flex-col pt-6 px-6"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="font-serif text-xl tracking-widest text-white">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-bold hover:text-[var(--color-gold-400)] transition-colors">MEG7</span>
                </Link>
              </div>
              <button
                className="text-[var(--color-silver-400)] hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 font-serif text-2xl text-[var(--color-silver-300)] mt-8">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-gold-400)] transition-colors">Início</Link>
              <Link href="/catalogo" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-gold-400)] transition-colors">Catálogo</Link>
              <Link href="/#manufatura" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-gold-400)] transition-colors">A Arte</Link>
              <Link href="/#depoimentos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-gold-400)] transition-colors">Garantia</Link>
            </nav>
            
            <div className="mt-auto pb-12 flex justify-center border-t border-white/10 pt-8">
               <span className="text-xs text-[var(--color-silver-500)] tracking-[0.25em] uppercase">ALTA JOALHERIA EM PRATA 925</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
