import React, { useState, useEffect } from 'react';
import './drinks.scss';

const DrinkRecipe = ({ match }) => {
	const [drinkRecipe, setDrinkRecipe] = useState();

	useEffect(() => {
		const recipeUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;

		fetch(recipeUrl)
			.then((res) => res.json())
			.then((res) => {
				setDrinkRecipe(res.drinks[0]);
				console.log(res.drinks[0]);
			})

			.catch(console.error);
	}, [match.params.id]);

	if (!drinkRecipe) {
		return null;
	}
	return (
		<div className='recipe-container'>
			<h1>{drinkRecipe.strDrink}</h1>
			<img
				className='drink-img-recipe'
				src={drinkRecipe.strDrinkThumb}
				alt={drinkRecipe.strDrink}></img>
			<h3>Ingredients</h3>
			<ul>
				{drinkRecipe.strIngredient1 && (
					<li>
						{drinkRecipe.strMeasure1} {drinkRecipe.strIngredient1}
					</li>
				)}
				{drinkRecipe.strIngredient2 && (
					<li>
						{drinkRecipe.strMeasure2} {drinkRecipe.strIngredient2}
					</li>
				)}
				{drinkRecipe.strIngredient3 && (
					<li>
						{drinkRecipe.strMeasure3} {drinkRecipe.strIngredient3}
					</li>
				)}
				{drinkRecipe.strIngredient4 && (
					<li>
						{drinkRecipe.strMeasure4} {drinkRecipe.strIngredient4}
					</li>
				)}
				{drinkRecipe.strIngredient5 && (
					<li>
						{drinkRecipe.strMeasure5} {drinkRecipe.strIngredient5}
					</li>
				)}
				{drinkRecipe.strIngredient6 && (
					<li>
						{drinkRecipe.strMeasure6} {drinkRecipe.strIngredient6}
					</li>
				)}
			</ul>
			<h3>Instructions</h3>
			<p>{drinkRecipe.strInstructions}</p>
			{drinkRecipe.strSource && (
				<a href={drinkRecipe.strSource}>Link to Original Recipe</a>
			)}
		</div>
	);
};

export default DrinkRecipe;
