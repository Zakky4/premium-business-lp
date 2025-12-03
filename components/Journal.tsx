import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { JournalItem } from '../types';

const ARTICLES: JournalItem[] = [
  {
    id: 1,
    date: "Oct 12, 2023",
    category: "Market Theory",
    title: "The Silence of Luxury: Why Noise is the Enemy of Value",
    image: "https://images.unsplash.com/photo-1445583934509-410a623087fc?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    date: "Sep 28, 2023",
    category: "Design",
    title: "Architecting the Invisible: User Experience in 2025",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop"
  },
  {
    id: 3,
    date: "Sep 15, 2023",
    category: "Intelligence",
    title: "AI as the New Creative Director",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
  }
];

export const Journal: React.FC = () => {
  return (
    <section id="journal" className="py-32 bg-neutral-925 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
             <div>
                <span className="text-gold-400 text-xs tracking-[0.3em] uppercase block mb-4">Journal</span>
                <h2 className="font-serif text-4xl md:text-5xl">Strategic Insights</h2>
             </div>
             <a href="#" className="hidden md:block text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">
               View All Articles
             </a>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, index) => (
            <RevealOnScroll key={article.id} delay={index * 150} width="100%">
              <article className="group cursor-pointer">
                <div className="overflow-hidden mb-6 relative aspect-[3/4] md:aspect-[4/3]">
                  <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-neutral-500">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 bg-gold-400 rounded-full"></span>
                    <span className="text-gold-400">{article.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl leading-tight group-hover:text-gold-300 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <a href="#" className="inline-block pt-4 text-[10px] uppercase tracking-[0.2em] border-b border-transparent group-hover:border-white/50 transition-all">
                    Read Article
                  </a>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">
             View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};