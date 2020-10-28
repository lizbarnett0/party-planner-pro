import React from 'react';
import { Link } from 'react-router-dom';

const DishCategories = ({ dishCategories }) => {
	let dishList = dishCategories.map((category) => {
		return (
			<div className='card-category' key={category.idCategory}>
				<img src={category.strCategoryThumb} />

				<Link to={`/dishes/${category.strCategory}`}>
					<div className='card-title'>{category.strCategory}</div>
				</Link>
			</div>
		);
	});
	return <div className='container'>{dishList}</div>;
};

export default DishCategories;
