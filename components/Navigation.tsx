import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { useTransition } from '../context/TransitionContext';

const NAV_ITEMS: NavItem[] = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#services' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { startTransition } = useTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    startTransition(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-neutral-900/90 backdrop-blur-md border-neutral-800 py-4'
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className="relative group"
        >
          <span className="font-serif text-2xl font-bold tracking-widest text-white group-hover:text-gold-400 transition-colors">
            AETHER
          </span>
          <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-neutral-950 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 transform ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="font-serif text-3xl text-white hover:text-gold-400 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};