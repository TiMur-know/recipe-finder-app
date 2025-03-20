"use server"

interface RecipeParams {
	recipeId: number;
}

export async function getRecipeFromServer(params: RecipeParams) {
	const { recipeId } = params;
	try {
		const res = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.API_KEY}`);
		const data = await res.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Error fetching recipe from server:", error);
		throw error;
	}
}