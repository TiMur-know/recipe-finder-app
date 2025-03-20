"use client";
import { getRecipesFromServer } from "@/app/components/api/getRecipesFromServer";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import RecipeListItem from "../RecipeListItem";

const ListRecipies = () => {
	const [recipeList, setRecipeList] = useState([
		{
			"id": 716429,
			"title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
			"image": "https://img.spoonacular.com/recipes/716429-312x231.jpg",
			"imageType": "jpg",
		},
		{
			"id": 715538,
			"title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
			"image": "https://img.spoonacular.com/recipes/715538-312x231.jpg",
			"imageType": "jpg",
		}
	]);
	const searchParams = useSearchParams();
	const query = searchParams.get('query');
	const cuisine = searchParams.get('cuisine');
	const maxReadyTime = searchParams.get('maxReadyTime');
	console.log(query, cuisine, maxReadyTime);
	useEffect(() => {
		const fetchRecipes = async () => {

				const params = { query, cuisine, maxReadyTime: Number(maxReadyTime) };
				try {
					const data = await getRecipesFromServer(params);
					setRecipeList(data.results);
				} catch (error) {
					console.error("Error fetching recipes:", error);
				}
				console.log(params)
			
		};
		fetchRecipes();
		console.log(recipeList);

	}, [query, cuisine, maxReadyTime]);

	return (
		<div className="flex flex-wrap m-2">
			{recipeList.length > 0 ? (
				recipeList.map((recipe) => (
					<RecipeListItem key={recipe.id} recipe={recipe} />
				))
			) : (
				<p className="text-red-500">No recipes found.</p>
			)}
		</div>
	);
};

export default ListRecipies;
