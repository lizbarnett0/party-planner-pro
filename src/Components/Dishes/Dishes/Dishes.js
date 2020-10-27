import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dishes = ({ match, dishCategories, setDishCategories }) => {
	
	useEffect(() => {
		const category = match.params.category;
		const dishUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

		fetch(dishUrl)
			.then((res) => res.json())
			.then((res) => {
                setDishCategories(res.meals);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<h1>{match.params.category} Dishes</h1>
				{dishCategories.map((dish) => {
					return (
						<div key={dish.idMeal}>
							<img src={dish.strMealThumb}></img>
							<h1>
								<Link to={`/dishes/${match.params.category}/${dish.idMeal}`}>
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
