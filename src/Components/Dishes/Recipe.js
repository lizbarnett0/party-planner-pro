import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './dishes.scss';

const Recipe = ({ match, favorites, setFavorites }) => {
	const [recipe, setRecipe] = useState();
	const [redirect, setRedirect] = useState();

	useEffect(() => {
		const recipeUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;

		fetch(recipeUrl)
			.then((res) => res.json())
			.then((res) => {
				setRecipe(res.meals[0]);
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
				title: recipe.strMeal,
				image: recipe.strMealThumb,
				id: recipe.idMeal,
				category: recipe.strCategory,
				type: 'food',
			},
		]);
		setRedirect(true);
	};

	if (redirect) {
		return <Redirect to='/Favorites' />;
	}

	return (
		<div className='recipe-container'>
			<h1>{recipe.strMeal}</h1>
			<div className='recipe-img'>
				<img src={recipe.strMealThumb} alt={recipe.strMeal} />
			</div>
			<h2>Ingredients</h2>
			<div>
				{recipe.strIngredient1 && (
					<p>
						{recipe.strMeasure1} {recipe.strIngredient1}
					</p>
				)}
				{recipe.strIngredient2 && (
					<p>
						{recipe.strMeasure2} {recipe.strIngredient2}
					</p>
				)}
				{recipe.strIngredient3 && (
					<p>
						{recipe.strMeasure3} {recipe.strIngredient3}
					</p>
				)}
				{recipe.strIngredient4 && (
					<p>
						{recipe.strMeasure4} {recipe.strIngredient4}
					</p>
				)}
				{recipe.strIngredient5 && (
					<p>
						{recipe.strMeasure5} {recipe.strIngredient5}
					</p>
				)}
				{recipe.strIngredient6 && (
					<p>
						{recipe.strMeasure6} {recipe.strIngredient6}
					</p>
				)}
				{recipe.strIngredient7 && (
					<p>
						{recipe.strMeasure7} {recipe.strIngredient7}
					</p>
				)}
				{recipe.strIngredient8 && (
					<p>
						{recipe.strMeasure8} {recipe.strIngredient8}
					</p>
				)}
				{recipe.strIngredient9 && (
					<p>
						{recipe.strMeasure9} {recipe.strIngredient9}
					</p>
				)}
				{recipe.strIngredient10 && (
					<p>
						{recipe.strMeasure10} {recipe.strIngredient10}
					</p>
				)}
				{recipe.strIngredient11 && (
					<p>
						{recipe.strMeasure11} {recipe.strIngredient11}
					</p>
				)}
				{recipe.strIngredient12 && (
					<p>
						{recipe.strMeasure12} {recipe.strIngredient12}
					</p>
				)}
				{recipe.strIngredient13 && (
					<p>
						{recipe.strMeasure13} {recipe.strIngredient13}
					</p>
				)}
				{recipe.strIngredient14 && (
					<p>
						{recipe.strMeasure14} {recipe.strIngredient14}
					</p>
				)}
				{recipe.strIngredient15 && (
					<p>
						{recipe.strMeasure15} {recipe.strIngredient15}
					</p>
				)}
				{recipe.strIngredient16 && (
					<p>
						{recipe.strMeasure16} {recipe.strIngredient16}
					</p>
				)}
				{recipe.strIngredient17 && (
					<p>
						{recipe.strMeasure17} {recipe.strIngredient17}
					</p>
				)}
				{recipe.strIngredient18 && (
					<p>
						{recipe.strMeasure18} {recipe.strIngredient18}
					</p>
				)}
				{recipe.strIngredient14 && (
					<p>
						{recipe.strMeasure19} {recipe.strIngredient19}
					</p>
				)}
				{recipe.strIngredient20 && (
					<p>
						{recipe.strMeasure20} {recipe.strIngredient20}
					</p>
				)}
			</div>
			<h2>Instructions</h2>
			<p>{recipe.strInstructions}</p>
			<div>
				{recipe.strSource && (
					<a href={recipe.strSource}>Link to Original Recipe</a>
				)}
			</div>
			<div className='button-div'>
				<button onClick={handleClick}>Add to Favorites</button>
			</div>
		</div>
	);
};
export default Recipe;
