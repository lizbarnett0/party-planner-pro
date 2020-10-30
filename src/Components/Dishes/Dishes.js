import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './dishes.scss'

const Dishes = ({ match, dishes, setDishes }) => {
	
	useEffect(() => {
		const category = match.params.category;
		const dishUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

		fetch(dishUrl)
			.then((res) => res.json())
			.then((res) => {
                setDishes(res.meals);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!dishes) {
		return null;
	}

	return (
		<div>
			<h1>{match.params.category} Dishes</h1>
			<div className='dish-container'>
				{dishes.map((dish) => {
					return (
						<div key={dish.idMeal}>
							<div>
								<Link to={`/dishes/${match.params.category}/${dish.idMeal}`}>
									<img src={dish.strMealThumb} alt={dish.idMeal} />
									<h3>{dish.strMeal}</h3>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Dishes;
