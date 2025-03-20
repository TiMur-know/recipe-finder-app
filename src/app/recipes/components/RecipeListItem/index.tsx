import { useRouter } from "next/navigation";

type Recipe = {
	id: number;
	title: string;
	image: string;
	imageType: string;
}
interface RecipeItemProps {
	recipe: Recipe;
}
const RecipeListItem = ({ recipe }: RecipeItemProps) => {
	const router = useRouter();
	const onClickCard = () => {
		router.push(`/recipes/${recipe.id}`);
	}
	return (
		<div onClick={onClickCard} className="cursor-pointer transform transition-transform hover:scale-105 ">
			<div className="w-70 rounded overflow-hidden shadow-lg m-2 bg-white">
				<img className="w-full h-48 object-fit" src={recipe.image} alt={recipe.title} />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2 text-gray-800">{recipe.title}</div>
				</div>
			</div>
		</div>
	);
}
export default RecipeListItem;