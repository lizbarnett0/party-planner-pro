import React from 'react';
import FoodCategory from '../FoodCategory/FoodCategory';

const Comestibles = ({ foodCategories }) => {
	return ( 
		<div className='category-list'>
			{foodCategories.map((category) => {
				return (
					<div key={category.idCategory}>
						<h1>{category.strCategory}</h1>
						<img src={category.strCategoryThumb}></img>
					</div>
				);
			})}
		</div>
	);
};

export default Comestibles;
