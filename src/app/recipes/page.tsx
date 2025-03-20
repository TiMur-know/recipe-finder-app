import RecipesList from "./components/RecipesList";

const RecipesPage = async () => {
  return (
    <div >
      <h1 className="text-2xl font-bold text-center ">Recipes</h1>
      <RecipesList  />
    </div>
  );
}
export default RecipesPage;