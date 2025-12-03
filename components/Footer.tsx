import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 pt-32 pb-12 border-t border-neutral-900 text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-5">
             <h2 className="font-serif text-3xl mb-8">AETHER</h2>
             <p className="text-neutral-500 font-light leading-relaxed max-w-sm">
               Forging the future of business through the synthesis of data, strategy, and design.
             </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 mb-6">Sitemap</h4>
            <ul className="space-y-4">
              <li><a href="#philosophy" className="text-sm text-neutral-400 hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#journal" className="text-sm text-neutral-400 hover:text-white transition-colors">Journal</a></li>
              <li><a href="#contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 mb-6">Social</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-neutral-900 pt-12">
          <h1 className="text-[12vw] leading-none font-serif text-neutral-900 select-none pointer-events-none">
            AETHER
          </h1>
          <p className="text-xs text-neutral-600 uppercase tracking-widest mb-4 md:mb-8">
            © 2024 Aether Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};