"use server"

interface RecipesParams {
	query: string;
	cuisine: string;
	maxReadyTime: number;
}

export async function getRecipesFromServer(params: RecipesParams) {
	const { query, cuisine, maxReadyTime } = params;
	console.log(params);
	try {
		const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxReadyTime}&number=20&apiKey=${process.env.API_KEY}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Error fetching recipes from server:", error);
		throw error;
	}
}