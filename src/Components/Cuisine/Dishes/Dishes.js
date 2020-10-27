import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dishes = ({ match, cuisineCategories, setCuisineCategories }) => {
	useEffect(() => {
		const category = match.params.category;
		const dishUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

		fetch(dishUrl)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.meals);
				let newCuisineCategories = res.meals;
				setCuisineCategories(newCuisineCategories);
				console.log(cuisineCategories);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<h1>{match.params.category} Dishes</h1>
			<div className='category-list'>
				{cuisineCategories.map((dish) => {
					return (
						<div key={dish.strMeal}>
							<img src={dish.strMealThumb}></img>
							<h1>
								<Link
									to={`cuisine/${match.params.category}/dish.strMealThumb}`}>
									{dish.strMeal}
								</Link>
							</h1>
						</div>
					);
				})}
			</div>
			;
		</div>
	);
};

export default Dishes;
