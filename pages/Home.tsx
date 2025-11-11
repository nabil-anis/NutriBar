import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  return (
    <div className="bg-stone-50 dark:bg-stone-900">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <img src="https://images.unsplash.com/photo-1558013649-05c3b9993325?q=80&w=1920&auto=format&fit=crop" alt="A collection of delicious NutriBars" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 p-6">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-serif font-bold">Nourishment, refined.</h1>
            <p className="mt-4 text-xl max-w-2xl mx-auto text-stone-200">
              Healthy food can be thoughtful, affordable, and beautiful. Discover the quiet care of NutriBar.
            </p>
            <Link to="/builder" className="mt-8 inline-block bg-[#8A9A5B] text-white py-3 px-8 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-lg">
              Craft Your Own Bar
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img src="https://images.unsplash.com/photo-1610421623101-236b231a415a?q=80&w=800&auto=format&fit=crop" alt="Hands holding a freshly made NutriBar" className="rounded-2xl shadow-xl w-full h-auto object-cover"/>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-100">Our Simple Promise</h2>
            <p className="mt-6 text-lg text-stone-600 dark:text-stone-300">
              NutriBar began as a promise from a team of students: that healthy food can be thoughtful, affordable, and beautiful. Every recipe balances taste with science, accessibility with dignity.
            </p>
            <Link to="/about" className="mt-8 inline-block text-[#8A9A5B] font-semibold text-lg group">
              Read Our Full Story
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#8A9A5B]"></span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Highlight Section */}
      <section className="py-20 md:py-32 bg-stone-100 dark:bg-stone-950">
        <div className="container mx-auto px-6">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
                 <h2 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-100">Made for Your Day</h2>
                 <p className="mt-6 text-lg text-stone-600 dark:text-stone-300">
                    We offer two purposeful forms to fit your lifestyle, from everyday resilience to a quick, nutritious breakfast.
                 </p>
            </AnimatedSection>

            <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <AnimatedSection delay={200}>
                    <div className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-lg text-center h-full flex flex-col">
                        <img src="https://images.unsplash.com/photo-1625792444003-68f765355a15?q=80&w=400&auto=format&fit=crop" alt="The Daily NutriBar" className="rounded-lg mb-6"/>
                        <h3 className="text-2xl font-serif font-semibold text-stone-900 dark:text-stone-100">The Daily Bar</h3>
                        <p className="mt-2 text-stone-600 dark:text-stone-300 flex-grow">A ₨20 bar for everyday resilience, packed with essential vitamins and protein.</p>
                        <Link to="/products" className="mt-6 inline-block bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 py-2 px-6 rounded-full font-semibold hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors">Learn More</Link>
                    </div>
                </AnimatedSection>
                 <AnimatedSection delay={400}>
                    <div className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-lg text-center h-full flex flex-col">
                        <img src="https://images.unsplash.com/photo-1621939512613-2099350de508?q=80&w=400&auto=format&fit=crop" alt="The Breakfast NutriBar" className="rounded-lg mb-6"/>
                        <h3 className="text-2xl font-serif font-semibold text-stone-900 dark:text-stone-100">The Breakfast Bar</h3>
                        <p className="mt-2 text-stone-600 dark:text-stone-300 flex-grow">A 300-calorie bar built to replace a rushed breakfast and fuel your morning.</p>
                        <Link to="/products" className="mt-6 inline-block bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 py-2 px-6 rounded-full font-semibold hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors">Learn More</Link>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;