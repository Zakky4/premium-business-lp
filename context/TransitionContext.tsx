import React, { createContext, useContext, useState, useCallback } from 'react';

interface TransitionContextType {
  isTransitioning: boolean;
  startTransition: (targetId: string) => void;
  transitionState: 'idle' | 'covering' | 'covered' | 'revealing';
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transitionState, setTransitionState] = useState<'idle' | 'covering' | 'covered' | 'revealing'>('idle');
  const [targetId, setTargetId] = useState<string | null>(null);

  const startTransition = useCallback((id: string) => {
    if (transitionState !== 'idle') return;

    // 1. Start Covering
    setTargetId(id);
    setTransitionState('covering');

    // 2. Wait for cover animation to finish (e.g., 800ms)
    setTimeout(() => {
      setTransitionState('covered');

      // 3. Perform the scroll/navigation while covered
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' }); // Instant jump
      } else if (id === '#') {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }

      // 4. Slight pause for dramatic effect
      setTimeout(() => {
        setTransitionState('revealing');

        // 5. Finish revealing
        setTimeout(() => {
          setTransitionState('idle');
          setTargetId(null);
        }, 800); // Reveal animation duration
      }, 400); 

    }, 800); // Cover animation duration
  }, [transitionState]);

  return (
    <TransitionContext.Provider value={{ isTransitioning: transitionState !== 'idle', startTransition, transitionState }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};