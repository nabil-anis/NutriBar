import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

// Icons for the philosophy section
const ThoughtfulIcon = () => (
  <svg className="h-12 w-12 text-[#8A9A5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const AffordableIcon = () => (
  <svg className="h-12 w-12 text-[#8A9A5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8h6m-5 4h4m5 6H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2z" />
  </svg>
);
const QualityIcon = () => (
  <svg className="h-12 w-12 text-[#8A9A5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M17 3l4 4M3 17l4 4m10.606-14.606l-1.414 1.414M6.343 6.343L4.929 4.929m12.728 12.728l-1.414-1.414M6.343 17.657l-1.414 1.414" />
  </svg>
);


const About: React.FC = () => {
  return (
    <div className="bg-stone-50 dark:bg-stone-900">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-stone-100 dark:bg-stone-950">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 dark:text-stone-100">
              From a Simple Idea <br/> to a Shared Promise.
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto text-stone-600 dark:text-stone-300">
              NutriBar is more than just a nutrition bar; it's a belief in quiet care, made accessible for everyone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-100">Our Core Philosophy</h2>
                <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
                    We're guided by three simple principles in everything we create.
                </p>
            </AnimatedSection>
            <div className="mt-16 grid md:grid-cols-3 gap-12 text-center">
                <AnimatedSection delay={200}>
                    <div className="flex justify-center"><ThoughtfulIcon /></div>
                    <h3 className="mt-4 text-2xl font-semibold font-serif text-stone-800 dark:text-stone-200">Thoughtful</h3>
                    <p className="mt-2 text-stone-600 dark:text-stone-400">Every recipe balances taste with science, designed for the nutritional needs of both children and elders.</p>
                </AnimatedSection>
                <AnimatedSection delay={300}>
                    <div className="flex justify-center"><AffordableIcon /></div>
                    <h3 className="mt-4 text-2xl font-semibold font-serif text-stone-800 dark:text-stone-200">Affordable</h3>
                    <p className="mt-2 text-stone-600 dark:text-stone-400">Good health shouldn't be a luxury. We're committed to making nutritious food accessible to all communities.</p>
                </AnimatedSection>
                <AnimatedSection delay={400}>
                    <div className="flex justify-center"><QualityIcon /></div>
                    <h3 className="mt-4 text-2xl font-semibold font-serif text-stone-800 dark:text-stone-200">Beautiful</h3>
                    <p className="mt-2 text-stone-600 dark:text-stone-400">We believe in food that not only nourishes the body but also feels like a gift—something worth sharing.</p>
                </AnimatedSection>
            </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-20 md:py-24 bg-white dark:bg-stone-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <AnimatedSection>
                <img 
                  src="https://images.unsplash.com/photo-1549457223-269e88ec7e34?q=80&w=800&auto=format&fit=crop" 
                  alt="A variety of wholesome ingredients" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
             </AnimatedSection>
             <AnimatedSection delay={200}>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-100">The Beginning</h2>
                 <p className="mt-6 text-lg text-stone-600 dark:text-stone-300">
                  NutriBar began as a project by a team of students who saw a gap: the space between a quick, unhealthy snack and an expensive, inaccessible health bar. The goal was to create something that served both a grandparent and a grandchild with equal care.
                </p>
                <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
                  This led to our two signature products: a ₨20 daily bar for everyday resilience, and a 300-calorie bar built to replace a rushed breakfast.
                </p>
             </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Made for Everyone Section */}
       <section className="py-20 md:py-24 bg-stone-100 dark:bg-stone-950">
         <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection delay={200} className="lg:order-last">
                 <img 
                   src="https://images.unsplash.com/photo-1596527885992-d576a0859c29?q=80&w=800&auto=format&fit=crop" 
                   alt="Hands sharing a nutrition bar" 
                   className="rounded-2xl shadow-xl w-full h-auto object-cover"
                 />
              </AnimatedSection>
              <AnimatedSection className="lg:order-first">
                 <h2 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-100">Quiet Care</h2>
                  <p className="mt-6 text-lg text-stone-600 dark:text-stone-300">
                    NutriBar is our answer to busy mornings and long afternoons. It’s a portable source of strength that looks and feels like something you'd be proud to share. It's not about loud marketing or miracle claims; it's about providing consistent, reliable, and dignified nourishment.
                  </p>
                  <p className="mt-6 text-xl font-semibold text-stone-800 dark:text-stone-200 italic">
                    Made by students. Made for everyone.
                  </p>
              </AnimatedSection>
           </div>
         </div>
       </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 text-center">
          <div className="container mx-auto px-6">
              <AnimatedSection>
                  <h2 className="text-3xl md:text-4xl font-serif text-stone-900 dark:text-stone-100">Join Our Journey</h2>
                  <p className="mt-4 text-lg max-w-2xl mx-auto text-stone-600 dark:text-stone-300">Explore our products or get creative and build a bar that's uniquely yours.</p>
                  <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                      <Link to="/products" className="inline-block bg-[#8A9A5B] text-white py-3 px-8 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
                          See Our Bars
                      </Link>
                      <Link to="/builder" className="inline-block bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 py-3 px-8 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-stone-300 dark:hover:bg-stone-600 w-full sm:w-auto">
                          Craft Your Own
                      </Link>
                  </div>
              </AnimatedSection>
          </div>
      </section>

    </div>
  );
};

export default About;