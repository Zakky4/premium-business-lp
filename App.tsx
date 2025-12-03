import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Journal } from './components/Journal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TransitionProvider } from './context/TransitionContext';
import { TransitionOverlay } from './components/TransitionOverlay';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500/30 selection:text-gold-200">
      <Navigation />
      <TransitionOverlay />
      
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Journal />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <TransitionProvider>
      <AppContent />
    </TransitionProvider>
  );
};

export default App;