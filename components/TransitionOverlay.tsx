import React from 'react';
import { useTransition } from '../context/TransitionContext';

export const TransitionOverlay: React.FC = () => {
  const { transitionState } = useTransition();

  // CSS classes based on state
  // We use a "Curtain" effect: slides up from bottom to cover, then slides up to reveal.
  
  let translateClass = 'translate-y-full'; // Default: hidden below
  
  if (transitionState === 'covering') {
    translateClass = 'translate-y-0'; // Slide up to cover
  } else if (transitionState === 'covered') {
    translateClass = 'translate-y-0'; // Stay covered
  } else if (transitionState === 'revealing') {
    translateClass = '-translate-y-full'; // Slide up to reveal (move out top)
  } else if (transitionState === 'idle') {
    translateClass = 'translate-y-full'; // Reset to bottom (requires handling transition property to avoid sliding back down visibly if we want to reuse it, or we toggle class)
    // Actually, to reset for next time without animation, we might need a key or distinct logic. 
    // Simpler approach for "Up and Out": 
    // 1. Idle: translate-y-full (bottom)
    // 2. Covering: transition to translate-y-0
    // 3. Revealing: transition to -translate-y-full (top)
    // 4. Idle (Reset): instantly jump to translate-y-full (no transition)
  }

  // To handle the reset without animation, we disable transition when state is 'idle' and we were just 'revealing'.
  // But a simpler visual trick: alternating transitions or just using 'covering' -> 'revealing'.
  // Let's refine:
  // We use a fixed overlay.
  
  const isIdle = transitionState === 'idle';
  const isMoving = transitionState === 'covering' || transitionState === 'revealing';

  return (
    <div 
      className={`fixed inset-0 z-[100] pointer-events-none flex flex-col justify-center items-center overflow-hidden`}
    >
      {/* The Black Curtain */}
      <div 
        className={`absolute inset-0 bg-neutral-950 transition-transform ease-[cubic-bezier(0.87,0,0.13,1)] duration-1000 ${
           // Special handling to reset position instantly when idle
           transitionState === 'idle' ? 'translate-y-[105%] duration-0' : 
           transitionState === 'covering' || transitionState === 'covered' ? 'translate-y-0' : 
           '-translate-y-[105%]'
        }`}
      >
        {/* Decorative elements inside the curtain */}
        <div className="absolute inset-0 flex items-center justify-center">
             <div className={`transition-all duration-700 delay-300 ${transitionState === 'covering' || transitionState === 'covered' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <h2 className="font-serif text-4xl md:text-6xl text-white tracking-widest relative">
                  AETHER
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-[1px] bg-gold-400"></span>
                </h2>
             </div>
        </div>
      </div>
    </div>
  );
};