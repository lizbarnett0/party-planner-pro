import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './drinks.scss';
import Axios from 'axios'

const DrinkRecipe = ({ match, favorites, setFavorites }) => {
	const [recipe, setRecipe] = useState();
	const [redirect, setRedirect] = useState();

	useEffect(() => {
		const recipeUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;

		fetch(recipeUrl)
			.then((res) => res.json())
			.then((res) => {
				setRecipe(res.drinks);
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
				title: recipe[0].strDrink,
				image: recipe[0].strDrinkThumb,
				id: recipe[0].idDrink,
				category:
					recipe[0].strAlcoholic === 'Non alcoholic'
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
			<h1>{recipe[0].strDrink}</h1>
			<div className='drink-img-recipe-div'>
			<img
				className='drink-img-recipe'
				src={recipe[0].strDrinkThumb}
				alt={recipe[0].strDrink}></img>
			</div>
			<h2>Ingredients</h2>
			<div>
				{recipe[0].strIngredient1 && (
					<p>
						{recipe[0].strMeasure1} {recipe[0].strIngredient1}
					</p>
				)}
				{recipe[0].strIngredient2 && (
					<p>
						{recipe[0].strMeasure2} {recipe[0].strIngredient2}
					</p>
				)}
				{recipe[0].strIngredient3 && (
					<p>
						{recipe[0].strMeasure3} {recipe[0].strIngredient3}
					</p>
				)}
				{recipe[0].strIngredient4 && (
					<p>
						{recipe[0].strMeasure4} {recipe[0].strIngredient4}
					</p>
				)}
				{recipe[0].strIngredient5 && (
					<p>
						{recipe[0].strMeasure5} {recipe[0].strIngredient5}
					</p>
				)}
				{recipe[0].strIngredient6 && (
					<p>
						{recipe[0].strMeasure6} {recipe[0].strIngredient6}
					</p>
				)}
			</div>
			<h2>Instructions</h2>
			<p>{recipe[0].strInstructions}</p>
			<div className='button-div'>
				<button onClick={handleClick}>Add to Favorites</button>
			</div>
		</div>
	);
};

export default DrinkRecipe;
