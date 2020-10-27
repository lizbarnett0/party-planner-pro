import React, { useState, useEffect } from 'react';

const Recipe = ({match}) => {
    const [recipe, setRecipe] = useState({});
    

	const recipeUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;

	const getRecipe = () => {
		fetch(recipeUrl)
			.then((res) => res.json())
			.then((res) => {
				setRecipe(res);
			});
	};

	useEffect(() => {
		getRecipe();
	}, []);

	return (
		<div>

			<div>Recipe Here</div>
            <p>{recipe.meals[0].strMeal}</p>
		</div>
	);
};
export default Recipe;
