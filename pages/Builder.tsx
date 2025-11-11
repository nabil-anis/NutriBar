import React, { useState, useMemo } from 'react';
import { INGREDIENTS, MAX_WEIGHT_G } from '../constants';
import { Recipe } from '../types';
import AnimatedSection from '../components/AnimatedSection';

const Builder: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>({});

  const handleQuantityChange = (ingredientId: string, value: string) => {
    const quantity = parseInt(value, 10);
    setRecipe(prev => {
      const newRecipe = { ...prev };
      if (isNaN(quantity) || quantity <= 0) {
        delete newRecipe[ingredientId];
      } else {
        newRecipe[ingredientId] = Math.min(quantity, MAX_WEIGHT_G);
      }
      return newRecipe;
    });
  };

  const { totalWeight, totalCost, totalCalories, totalProtein, totalCarbs, totalFats } = useMemo(() => {
    let weight = 0, cost = 0, calories = 0, protein = 0, carbs = 0, fats = 0;

    for (const ingredientId in recipe) {
      const ingredient = INGREDIENTS.find(i => i.id === ingredientId);
      const quantity = recipe[ingredientId];
      if (ingredient && quantity > 0) {
        weight += quantity;
        cost += (ingredient.pricePerKg / 1000) * quantity;
        calories += (ingredient.caloriesPer100g / 100) * quantity;
        protein += (ingredient.protein / 100) * quantity;
        carbs += (ingredient.carbs / 100) * quantity;
        fats += (ingredient.fats / 100) * quantity;
      }
    }
    return { totalWeight: weight, totalCost: cost, totalCalories: calories, totalProtein: protein, totalCarbs: carbs, totalFats: fats };
  }, [recipe]);

  const isOverweight = totalWeight > MAX_WEIGHT_G;

  return (
    <section id="builder" className="py-20 md:py-32 bg-stone-50 dark:bg-stone-900">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-100">Your Ingredients. Your Bar.</h2>
          <p className="mt-6 text-lg text-stone-600 dark:text-stone-300">
            Craft a bar that’s uniquely yours. Select from our wholesome ingredients and adjust the quantities to create your perfect nutritional blend.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {INGREDIENTS.map((ingredient, index) => (
              <AnimatedSection key={ingredient.id} delay={index * 50}>
                <div className="flex items-center space-x-4">
                  <img src={ingredient.imageUrl} alt={ingredient.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2">
                        <label htmlFor={ingredient.id} className="block font-medium text-stone-800 dark:text-stone-200">{ingredient.name}</label>
                        <div className="relative group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-stone-400 dark:text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <div className="absolute bottom-full mb-2 w-64 bg-white dark:bg-stone-800 p-3 rounded-lg shadow-xl border border-stone-200 dark:border-stone-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 text-xs">
                                <h5 className="font-bold text-stone-900 dark:text-stone-100">Nutrition per 100g</h5>
                                <p className="text-stone-600 dark:text-stone-300">Protein: {ingredient.protein}g, Carbs: {ingredient.carbs}g, Fats: {ingredient.fats}g</p>
                                <p className="text-stone-600 dark:text-stone-300 mt-1"><span className="font-semibold text-stone-700 dark:text-stone-200">Vitamins:</span> {ingredient.vitamins}</p>
                                <p className="text-stone-600 dark:text-stone-300"><span className="font-semibold text-stone-700 dark:text-stone-200">Minerals:</span> {ingredient.minerals}</p>
                            </div>
                        </div>
                    </div>
                    <input
                      type="number"
                      id={ingredient.id}
                      min="0"
                      max={MAX_WEIGHT_G}
                      placeholder="grams"
                      value={recipe[ingredient.id] || ''}
                      onChange={(e) => handleQuantityChange(ingredient.id, e.target.value)}
                      className="mt-1 w-full px-4 py-2 bg-stone-100 dark:bg-stone-800 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B] text-stone-900 dark:text-white"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="lg:col-span-1">
            <AnimatedSection className="sticky top-28" delay={INGREDIENTS.length * 50}>
              <div className="bg-white/50 dark:bg-stone-800/50 backdrop-blur-lg border border-stone-200 dark:border-stone-700 p-8 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-serif text-stone-900 dark:text-stone-100">Your Custom Bar</h3>
                
                <div className="mt-6 space-y-2">
                    <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-2">
                      <div className="bg-[#8A9A5B] h-2 rounded-full transition-all duration-500" style={{ width: `${Math.min((totalWeight / MAX_WEIGHT_G) * 100, 100)}%` }}></div>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-stone-500 dark:text-stone-400">
                      <span>Weight: {totalWeight.toFixed(0)}g / {MAX_WEIGHT_G}g</span>
                    </div>
                     {isOverweight && ( <p className="pt-2 text-sm text-red-500 font-semibold">Warning: Total weight exceeds {MAX_WEIGHT_G}g limit.</p> )}
                </div>

                <div className="mt-8 border-t border-stone-200 dark:border-stone-700 pt-6 space-y-3">
                  <div className="flex justify-between items-baseline"><span className="text-lg text-stone-600 dark:text-stone-300">Cost:</span><span className="text-2xl font-semibold text-stone-900 dark:text-stone-100">₨{totalCost.toFixed(2)}</span></div>
                  <div className="flex justify-between items-baseline"><span className="text-lg text-stone-600 dark:text-stone-300">Calories:</span><span className="text-2xl font-semibold text-stone-900 dark:text-stone-100">{totalCalories.toFixed(0)} kcal</span></div>
                </div>

                <div className="mt-4 border-t border-stone-200 dark:border-stone-700 pt-4 space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-stone-500 dark:text-stone-400">Protein:</span><span className="font-medium text-stone-800 dark:text-stone-200">{totalProtein.toFixed(1)}g</span></div>
                    <div className="flex justify-between"><span className="text-stone-500 dark:text-stone-400">Carbs:</span><span className="font-medium text-stone-800 dark:text-stone-200">{totalCarbs.toFixed(1)}g</span></div>
                    <div className="flex justify-between"><span className="text-stone-500 dark:text-stone-400">Fats:</span><span className="font-medium text-stone-800 dark:text-stone-200">{totalFats.toFixed(1)}g</span></div>
                </div>

                <button disabled={isOverweight || totalWeight === 0} className="mt-8 w-full bg-[#8A9A5B] text-white py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[#7d8c53] disabled:bg-stone-400 dark:disabled:bg-stone-600 disabled:cursor-not-allowed transform hover:scale-105">
                  Build My Bar 🍫
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Builder;