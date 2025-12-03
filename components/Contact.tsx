import React, { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { ContactFormState, LoadingState } from '../types';
import { generateInquiryResponse } from '../services/geminiService';

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({ name: '', email: '', message: '' });
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingState(LoadingState.LOADING);
    
    // Simulate network delay for UX
    setTimeout(async () => {
      try {
        const response = await generateInquiryResponse(form.name, form.message);
        setAiResponse(response);
        setLoadingState(LoadingState.SUCCESS);
      } catch (err) {
        setLoadingState(LoadingState.ERROR);
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-40 bg-neutral-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-neutral-900/20 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/3">
             <RevealOnScroll>
                <span className="text-gold-400 text-xs tracking-[0.3em] uppercase block mb-6">Contact</span>
                <h2 className="font-serif text-5xl md:text-6xl text-white mb-8">Begin the <br/> Dialogue</h2>
                <p className="text-neutral-400 font-light leading-relaxed mb-12">
                   We are currently accepting new partnerships for Q4 2024. Please provide a brief overview of your vision.
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-neutral-600 mb-1">Email</span>
                    <a href="mailto:concierge@aether.com" className="text-white hover:text-gold-400 transition-colors">concierge@aether.com</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-neutral-600 mb-1">Office</span>
                    <span className="text-white">Tokyo, Minato-ku</span>
                  </div>
                </div>
             </RevealOnScroll>
          </div>

          <div className="lg:w-2/3">
            <RevealOnScroll delay={200} width="100%">
              {loadingState === LoadingState.SUCCESS ? (
                <div className="bg-neutral-900/30 p-12 border border-white/5 animate-fade-in-up">
                  <div className="w-16 h-16 border border-gold-400 rounded-full flex items-center justify-center mb-8">
                    <span className="text-gold-400 text-2xl font-serif">A</span>
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-6">Inquiry Acknowledged</h3>
                  <div className="border-l-2 border-gold-400 pl-6 py-2 mb-8">
                    <p className="text-neutral-300 italic font-serif leading-relaxed text-lg">
                      "{aiResponse}"
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setLoadingState(LoadingState.IDLE);
                      setForm({ name: '', email: '', message: '' });
                      setAiResponse(null);
                    }}
                    className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative group">
                      <input 
                        type="text" 
                        required
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors font-light text-lg placeholder-transparent"
                        placeholder="Name"
                        id="name"
                      />
                      <label 
                        htmlFor="name" 
                        className={`absolute left-0 transition-all duration-300 pointer-events-none text-xs uppercase tracking-widest ${
                          activeField === 'name' || form.name ? '-top-4 text-gold-400' : 'top-5 text-neutral-500'
                        }`}
                      >
                        Name
                      </label>
                    </div>
                    
                    <div className="relative group">
                      <input 
                        type="email" 
                        required
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors font-light text-lg placeholder-transparent"
                        placeholder="Email"
                        id="email"
                      />
                      <label 
                        htmlFor="email" 
                        className={`absolute left-0 transition-all duration-300 pointer-events-none text-xs uppercase tracking-widest ${
                          activeField === 'email' || form.email ? '-top-4 text-gold-400' : 'top-5 text-neutral-500'
                        }`}
                      >
                        Email
                      </label>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <textarea 
                      required
                      rows={1}
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors font-light text-lg resize-none placeholder-transparent"
                      placeholder="Message"
                      id="message"
                    />
                     <label 
                        htmlFor="message" 
                        className={`absolute left-0 transition-all duration-300 pointer-events-none text-xs uppercase tracking-widest ${
                          activeField === 'message' || form.message ? '-top-4 text-gold-400' : 'top-5 text-neutral-500'
                        }`}
                      >
                        Details regarding your inquiry
                      </label>
                  </div>

                  <div className="pt-8">
                    <button 
                      type="submit" 
                      disabled={loadingState === LoadingState.LOADING}
                      className="group relative inline-flex items-center justify-start overflow-hidden px-8 py-4 border border-white/20 hover:border-white/40 transition-colors w-full md:w-auto"
                    >
                      <span className={`relative z-10 text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${loadingState === LoadingState.LOADING ? 'text-neutral-400' : 'text-white group-hover:text-neutral-900'}`}>
                        {loadingState === LoadingState.LOADING ? 'Processing Request...' : 'Submit Inquiry'}
                      </span>
                      <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                    </button>
                  </div>
                </form>
              )}
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};