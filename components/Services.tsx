import React, { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    number: "01",
    title: "Brand Sovereignty",
    description: "We don't just build brands; we construct empires. By defining the immutable core of your business, we create identities that command authority and withstand market volatility.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    tags: ["Identity", "Positioning", "Voice"]
  },
  {
    id: 2,
    number: "02",
    title: "Digital Architecture",
    description: "Transcending templates. We engineer bespoke digital environments that serve as the grand stages for your business, optimizing for both aesthetic awe and conversion velocity.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    tags: ["Web Design", "Development", "UX/UI"]
  },
  {
    id: 3,
    number: "03",
    title: "Market Intelligence",
    description: "Leveraging proprietary AI algorithms and human intuition to predict cultural shifts before they happen, positioning you at the forefront of the zeitgeist.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["Analysis", "Forecasting", "Strategy"]
  },
  {
    id: 4,
    number: "04",
    title: "Elite Concierge",
    description: "A dedicated service layer for our most exclusive partners, providing 24/7 strategic counsel and crisis management.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    tags: ["Advisory", "Management", "Access"]
  }
];

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1);

  return (
    <section id="services" className="py-32 bg-neutral-950 text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-white/10">
            <div>
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase block mb-4">Capabilities</span>
              <h2 className="font-serif text-4xl md:text-6xl">Curated Expertise</h2>
            </div>
            <p className="text-neutral-500 text-sm max-w-xs mt-6 md:mt-0 text-right">
              Comprehensive solutions for the modern enterprise.
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* List Area */}
          <div className="lg:w-1/2 z-10">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                className={`group py-12 border-b border-white/10 cursor-pointer transition-all duration-500 ${activeService === service.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-3xl md:text-4xl font-serif transition-transform duration-500 group-hover:translate-x-4">
                    {service.title}
                  </h3>
                  <span className="text-xs font-mono text-gold-400">{service.number}</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${activeService === service.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <p className="text-neutral-400 font-light leading-relaxed mb-6 max-w-md">
                     {service.description}
                   </p>
                   <div className="flex gap-4">
                     {service.tags.map(tag => (
                       <span key={tag} className="text-[10px] uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full text-white/60">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Image Area */}
          <div className="hidden lg:block lg:w-1/2 relative h-[600px]">
            <div className="sticky top-32 w-full h-full">
              {SERVICES.map((service) => (
                <div 
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    activeService === service.id 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale brightness-75 contrast-125"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 mix-blend-multiply"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};