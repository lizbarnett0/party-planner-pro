import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './dishes.scss'

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
			<div className='container'>
				{dishCategories.map((dish) => {
					return (
						<div className='card-category' key={dish.idMeal}>
							<h3>
								<Link to={`/dishes/${match.params.category}/${dish.idMeal}`}>
									<div>{dish.strMeal}</div>
								</Link>
							</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Dishes;
