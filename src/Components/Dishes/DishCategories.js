import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './dishes.scss';

const DishCategories = ({ dishCategories, setDishCategories }) => {
	useEffect(() => {
		const dishCategoriesUrl = `https://www.themealdb.com/api/json/v1/1/categories.php`;

		fetch(dishCategoriesUrl)
			.then((res) => res.json())
			.then((res) => {
				setDishCategories(res.categories);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!dishCategories) {
		return null;
	}

	return (
		<div>
			<h1>Dish Categories</h1>
			<div className='dish-container'>
				{dishCategories.map((category) => {
					return (
						<div key={category.idCategory}>
							<div>
								<Link to={`/dishes/${category.strCategory}`}>
									<img
										src={category.strCategoryThumb}
										alt={category.strCategory}
									/>
									<p className='dish-card-title'>{category.strCategory}</p>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DishCategories;
