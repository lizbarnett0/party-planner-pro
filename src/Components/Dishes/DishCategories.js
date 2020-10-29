import React from 'react';
import { Link } from 'react-router-dom';
import './dishes.scss'


const DishCategories = ({ dishCategories }) => {
	let dishList = dishCategories.map((category) => {
		return (
			<div key={category.idCategory}>
				<Link to={`/dishes/${category.strCategory}`}>
					<img src={category.strCategoryThumb} alt={category.strCategory} />
					<p className='dish-card-title'>{category.strCategory}</p>
				</Link>
			</div>
		);
	});
	return (
		<div>
		<h1>Dish Categories</h1>
	<div className='dish-container'>{dishList}</div>
	</div>
	);
};

export default DishCategories;
