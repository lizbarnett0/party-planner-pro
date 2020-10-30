import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './drinks.scss';

const DrinkRecipe = ({ match, favorites, setFavorites }) => {
	const [recipe, setRecipe] = useState();
	const [redirect, setRedirect] = useState();

	useEffect(() => {
		const recipeUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;

		fetch(recipeUrl)
			.then((res) => res.json())
			.then((res) => {
				setRecipe(res.drinks[0]);
			})

			.catch(console.error);
	}, []);

	if (!recipe) {
		return null;
	}

	const handleClick = (event) => {
		event.preventDefault();
		setFavorites([
			...favorites,
			{
				title: recipe.strDrink,
				image: recipe.strDrinkThumb,
				id: recipe.idDrink,
				category:
					recipe.strAlcoholic === 'Non alcoholic'
						? 'nonalcoholic'
						: 'alcoholic',
				type: 'drink',
			},
		]);
		setRedirect(true);
	};

	if (redirect) {
		return <Redirect to='/Favorites' />;
	}

	return (
		<div className='recipe-container'>
			<h1>{recipe.strDrink}</h1>
			<img
				className='drink-img-recipe'
				src={recipe.strDrinkThumb}
				alt={recipe.strDrink}></img>
			<h3>Ingredients</h3>
			<ul>
				{recipe.strIngredient1 && (
					<li>
						{recipe.strMeasure1} {recipe.strIngredient1}
					</li>
				)}
				{recipe.strIngredient2 && (
					<li>
						{recipe.strMeasure2} {recipe.strIngredient2}
					</li>
				)}
				{recipe.strIngredient3 && (
					<li>
						{recipe.strMeasure3} {recipe.strIngredient3}
					</li>
				)}
				{recipe.strIngredient4 && (
					<li>
						{recipe.strMeasure4} {recipe.strIngredient4}
					</li>
				)}
				{recipe.strIngredient5 && (
					<li>
						{recipe.strMeasure5} {recipe.strIngredient5}
					</li>
				)}
				{recipe.strIngredient6 && (
					<li>
						{recipe.strMeasure6} {recipe.strIngredient6}
					</li>
				)}
			</ul>
			<h3>Instructions</h3>
			<p>{recipe.strInstructions}</p>
			<div className='button-div'>
				<button onClick={handleClick}>Add to Favorites</button>
				{console.log(recipe)}
			</div>
		</div>
	);
};

export default DrinkRecipe;
