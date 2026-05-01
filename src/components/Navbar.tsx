import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/images/logo.png.jpeg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Products', href: '/#products' },
    { name: 'Why Us', href: '/#why-us' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`px-2 py-1 flex items-center gap-1.5 rounded-lg transition-colors ${isScrolled ? 'bg-transparent' : 'bg-white/95'} shadow-sm`}>
            <img 
              src={logoImg} 
              alt="PFE Logo" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-pfe-light ${
                isScrolled ? 'text-pfe-dark' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            className="flex items-center gap-2 bg-pfe-light text-white px-6 py-2.5 rounded-full hover:bg-pfe-dark transition-colors shadow-lg shadow-blue-100 font-semibold uppercase tracking-wider text-sm"
          >
            <Phone size={16} /> Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 -mr-2 ${isScrolled ? 'text-pfe-dark' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl flex flex-col py-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 border-b border-gray-100 text-pfe-dark font-medium active:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <div className="p-6">
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-pfe-light text-white px-5 py-3 rounded hover:bg-pfe-dark transition-colors font-medium"
              >
                <Phone size={18} /> Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
