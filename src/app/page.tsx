import SearchForm from "./components/SearchForm";

export default function Home() {
  return (
    <div className="ml-5 mr-5 p-4 bg-gray-100 min-h-screen">
      <SearchForm />
      <h1 className="text-4xl font-bold text-center my-4">Welcome to the Recipes App!</h1>
      <p className="text-lg text-center mb-6">Discover a variety of recipes from around the world. Use the search form above to find your favorite recipes.</p>

    </div>
  );
}
