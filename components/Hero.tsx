import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-neutral-950/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Architecture"
          className="w-full h-full object-cover animate-slow-zoom opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full container mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-7xl">
          <div className="overflow-hidden mb-4">
             <p className="text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
               Global Strategic Consultancy
             </p>
          </div>
          
          <div className="space-y-0">
            <div className="overflow-hidden">
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.9] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Architects of
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.9] italic opacity-90 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                Perception
              </h1>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-start md:items-end justify-between border-t border-white/10 pt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-md">
              AETHER operates at the bleeding edge of business strategy and aesthetic precision, crafting legacies for the world's most visionary brands.
            </p>
            
            <a 
              href="#contact"
              className="mt-8 md:mt-0 group flex items-center gap-4 text-white hover:text-gold-400 transition-colors duration-300"
            >
              <span className="text-xs uppercase tracking-[0.2em]">Initiate Project</span>
              <span className="w-12 h-[1px] bg-white group-hover:bg-gold-400 transition-colors duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};