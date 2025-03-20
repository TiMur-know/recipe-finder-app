'use client'
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from "react";

const SearchForm = () => {
	const cuisine = ["Select Value", "Italian", "Mexican", "Chinese"];
	const [searchValue, setSearchValue] = useState<string>('');
	const [prepTime, setPrepTime] = useState<string>('');
	const [selectedCuisine, setSelectedCuisine] = useState<string>('Select Value');

	const onSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value);
		setSelectedCuisine(e.target.value);
	}

	const onPrepTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPrepTime(e.target.value);
	}

	const isNextButtonDisabled = !searchValue && !prepTime && selectedCuisine === 'Select Value';

	const clearFilters = () => {
		setSearchValue('');
		setPrepTime('');
		setSelectedCuisine('Select Value');
	}
	const router = useRouter();
	const onClickNext = () => {
		const params = new URLSearchParams();
		if (searchValue) params.append('query', searchValue);
		if (prepTime) params.append('maxReadyTime', prepTime);
		if (selectedCuisine && selectedCuisine !== 'Select Value') params.append('cuisine', selectedCuisine);
		router.push(`/recipes?${params.toString()}`);
	}

	return (
		<div className="p-4 bg-blue-100 rounded-lg shadow-md m-2">
			<input
				type="text"
				placeholder="Search..."
				className="w-full p-2 mb-4 border border-gray-300 rounded bg-orange-50 h-10"
				value={searchValue}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
			/>
			<div className="w-full flex border-gray-300">
				<select
					className="w-1/2 p-2 mb-4 border border-gray-300 rounded m-2 bg-orange-50 h-10"
					onChange={onSelectionChange}
					value={selectedCuisine}
				>
					{cuisine.map((item, index) => (
						<option key={index} value={item}>
							{item}
						</option>
					))}
				</select>
				<input
					type="text"
					placeholder="Enter max preparation time (minutes)"
					className="w-1/2 p-2 mb-4 border border-gray-300 rounded m-2 bg-orange-50 h-10"
					value={prepTime}
					onChange={onPrepTimeChange}
				/>
				<button
					className={`w-32 m-2 rounded h-10 ${isNextButtonDisabled ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
					disabled={isNextButtonDisabled}
					onClick={onClickNext}
				>
					Next
				</button>
				<button
					className="w-20 m-2 bg-red-500 text-white rounded h-10"
					onClick={clearFilters}
				>
					X
				</button>
			</div>
		</div>
	)
}
export default SearchForm;