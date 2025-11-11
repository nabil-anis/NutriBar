
export interface Ingredient {
  id: string;
  name: string;
  pricePerKg: number;
  caloriesPer100g: number;
  protein: number;
  carbs: number;
  fats: number;
  vitamins: string;
  minerals: string;
  imageUrl: string;
}

export type Recipe = {
  [ingredientId: string]: number;
};

export type Theme = 'light' | 'dark';
