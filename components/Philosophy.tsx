import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-40 bg-neutral-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-32">
          
          {/* Visual Content - Sticky on desktop */}
          <div className="lg:w-5/12 lg:sticky lg:top-32">
             <RevealOnScroll width="100%">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1964&auto=format&fit=crop" 
                    alt="Abstract Form" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Text */}
                  <div className="absolute bottom-8 left-8 right-8 z-10">
                     <p className="font-serif text-3xl italic text-white/90">"Simplicity is the ultimate sophistication."</p>
                  </div>
                </div>
             </RevealOnScroll>
          </div>

          {/* Text Content */}
          <div className="lg:w-6/12 pt-12">
            <RevealOnScroll>
              <h2 className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gold-400"></span>
                Ethos
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-12 text-white">
                Beauty in <br />
                <span className="text-neutral-500">Calculated</span> <br />
                Precision.
              </h3>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="space-y-8 text-neutral-400 font-light text-lg leading-loose border-l border-neutral-800 pl-8">
                <p>
                  In an era defined by noise, AETHER curates silence. In a market flooded with chaos, we engineer clarity. We exist at the intersection where data-driven strategy meets aesthetic perfection.
                </p>
                <p>
                  We believe that true luxury is not about excess, but about the absence of the unnecessary. Our approach removes the friction between your brand and its audience, leaving only pure, resonant connection.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
               <div className="grid grid-cols-2 gap-12 mt-20">
                 <div>
                   <h4 className="font-serif text-5xl text-white mb-2">12<span className="text-gold-400 text-3xl">+</span></h4>
                   <p className="text-xs uppercase tracking-widest text-neutral-600">Years of Excellence</p>
                 </div>
                 <div>
                   <h4 className="font-serif text-5xl text-white mb-2">40<span className="text-gold-400 text-3xl">+</span></h4>
                   <p className="text-xs uppercase tracking-widest text-neutral-600">International Awards</p>
                 </div>
               </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};