import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

interface WelcomeProps {
  onEnter: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onEnter }) => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center p-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1920&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center text-white z-10">
        <AnimatedSection>
          <h1 className="text-6xl md:text-8xl font-serif font-extrabold tracking-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
            NutriBar
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <p className="mt-4 text-xl md:text-2xl text-stone-200" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
            Nourishment, refined.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={600}>
          <button
            onClick={onEnter}
            className="mt-12 px-10 py-4 bg-[#8A9A5B] text-white text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:bg-[#7d8c53] hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#8A9A5B]/50"
          >
            Discover
          </button>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Welcome;