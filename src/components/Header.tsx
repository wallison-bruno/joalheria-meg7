"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--color-silver-400)] hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#colecoes" className="text-sm text-[var(--color-silver-400)] hover:text-[var(--color-gold-500)] transition-colors">Coleções</a>
          <a href="#manufatura" className="text-sm text-[var(--color-silver-400)] hover:text-[var(--color-gold-500)] transition-colors">A Arte</a>
          <a href="#depoimentos" className="text-sm text-[var(--color-silver-400)] hover:text-[var(--color-gold-500)] transition-colors">Garantia</a>
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl tracking-widest text-white text-center">
          <span className="font-bold">MEG7</span>
          <span className="block text-[10px] tracking-[0.3em] text-[var(--color-silver-400)] uppercase mt-1">Prata 925</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-[var(--color-silver-400)] hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="text-[var(--color-silver-400)] hover:text-white transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-[var(--color-gold-500)] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black flex flex-col pt-6 px-6"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="font-serif text-xl tracking-widest text-white">
                <span className="font-bold">MEG7</span>
              </div>
              <button
                className="text-[var(--color-silver-400)] hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 font-serif text-2xl text-[var(--color-silver-400)]">
              <a href="#colecoes" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-gold-500)] transition-colors">Coleções</a>
              <a href="#manufatura" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-gold-500)] transition-colors">A Arte da Manufatura</a>
              <a href="#depoimentos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-gold-500)] transition-colors">Garantia & Depoimentos</a>
            </nav>
            
            <div className="mt-auto pb-12 flex justify-center border-t border-white/10 pt-8">
               <span className="text-xs text-[var(--color-silver-600)] tracking-widest">ALTA JOALHERIA EM PRATA 925</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
