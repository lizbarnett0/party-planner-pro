import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dishes = ({ match, cuisineCategories, setCuisineCategories }) => {
	
	useEffect(() => {
		const category = match.params.category;
		const dishUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

		fetch(dishUrl)
			.then((res) => res.json())
			.then((res) => {
				let newCuisineCategories = res.meals;
                setCuisineCategories(newCuisineCategories);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<h1>{match.params.category} Dishes</h1>
				{cuisineCategories.map((dish) => {
					return (
						<div key={dish.idMeal}>
							<img src={dish.strMealThumb}></img>
							<h1>
								<Link to={`/cuisine/${match.params.category}/${dish.idMeal}`}>
								{dish.strMeal}
								</Link>
							</h1>
						</div>
					);
				})}
			</div>
	);
};

export default Dishes;
