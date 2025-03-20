'use client'

import { getRecipeFromServer } from '@/app/components/api/getRecipeFromServer';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";

interface Ingredient {
  original: string;
}

interface Recipe {
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: Ingredient[];
  summary: string;
}

const RecipeDetailPage = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      const getRecipe = await getRecipeFromServer({ recipeId: Number(params.id) });
      console.log(getRecipe);
      setRecipe(getRecipe);
    };

    fetchRecipe();
  }, [params.id]);

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{recipe?.title}</h1>
      <img className="w-full h-auto mb-4 border border-gray-300 rounded-lg" src={recipe?.image} alt={recipe?.title} />

      <div className="mb-4">
        <p className="text-lg">Ready in: {recipe?.readyInMinutes} minutes</p>
        <p className="text-lg">Servings: {recipe?.servings}</p>
        <p className="text-lg">Ingredient Count: {recipe?.extendedIngredients?.length}</p>
      </div>
      <div className="mb-4 border-t border-gray-300 pt-4">
        <h3 className="text-xl font-semibold mb-2">Summary</h3>
        <p className="text-lg" dangerouslySetInnerHTML={{ __html: recipe?.summary }}></p>
      </div>
      <div className="mb-4 border-t border-gray-300 pt-4">
        <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside">
          {recipe?.extendedIngredients?.map((ingredient, index) => (
            <li key={index} className="mb-1">{ingredient.original}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipeDetailPage;