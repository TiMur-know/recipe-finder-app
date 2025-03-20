"use server"

interface RecipesParams {
	query?: string;
	cuisine?: string;
	maxReadyTime?: number;
}

export async function getRecipesFromServer(params: RecipesParams) {
	const { query, cuisine, maxReadyTime } = params;
	console.log(params);
	try {
		const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
		url.searchParams.append('apiKey', process.env.API_KEY || '');
		if (query) url.searchParams.append('query', query);
		if (cuisine) url.searchParams.append('cuisine', cuisine);
		if (maxReadyTime) url.searchParams.append('maxReadyTime', maxReadyTime.toString());
		

		const res = await fetch(url.toString());
		const data = await res.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Error fetching recipes from server:", error);
		throw error;
	}
}