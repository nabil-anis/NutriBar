import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Products: React.FC = () => {
  const products = [
    {
      name: 'The Daily Bar',
      price: '₨20',
      description: 'The perfect daily supplement for sustained energy and resilience. Compact, affordable, and packed with essential nutrients to keep you going.',
      image: 'https://images.unsplash.com/photo-1567332338923-2072f20e4453?q=80&w=600&auto=format&fit=crop',
      calories: 'Approx. 150 kcal',
      features: ['High in Protein', 'Rich in Vitamins', 'Affordable Nutrition']
    },
    {
      name: 'The Breakfast Bar',
      price: 'Contact for pricing',
      description: 'A complete meal replacement for those busy mornings. This 300-calorie bar provides a balanced mix of protein, carbs, and healthy fats.',
      image: 'https://images.unsplash.com/photo-1609575482329-81b2d8613c1c?q=80&w=600&auto=format&fit=crop',
      calories: '300 kcal',
      features: ['Meal Replacement', 'Sustained Energy Release', 'Wholesome Ingredients']
    }
  ];

  return (
    <div className="py-20 md:py-32 bg-stone-100 dark:bg-stone-950">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 dark:text-stone-100">
            Our Purposeful Bars
          </h1>
          <p className="mt-6 text-lg text-stone-600 dark:text-stone-300">
            Thoughtfully designed for your different needs, from a daily boost to a full breakfast on the go.
          </p>
        </AnimatedSection>
        
        <div className="space-y-20">
          {products.map((product, index) => (
            <AnimatedSection key={product.name} delay={index * 200 + 200}>
              <div className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                  <img src={product.image} alt={product.name} className="rounded-2xl shadow-xl"/>
                </div>
                <div className={index % 2 !== 0 ? 'md:col-start-1' : ''}>
                  <h2 className="text-4xl font-serif text-stone-900 dark:text-stone-100">{product.name}</h2>
                  <p className="text-2xl font-semibold text-[#8A9A5B] mt-2">{product.price}</p>
                  <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">{product.description}</p>
                  <ul className="mt-6 space-y-2">
                    {product.features.map(feature => (
                       <li key={feature} className="flex items-center">
                        <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-stone-700 dark:text-stone-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                   <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">{product.calories}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;