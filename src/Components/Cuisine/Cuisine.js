import React from 'react';
import { Link } from 'react-router-dom';

const Cuisine = ({ cuisineCategories }) => {
	return ( 
		<div className='category-list'>
			{cuisineCategories.map((category) => {
				return (
					<div key={category.idCategory}>
						<img src={category.strCategoryThumb}></img>
						<h1>
							<Link to={`cuisine/${category.strCategory}`}>
								{category.strCategory}
							</Link>
						</h1>
					</div>
				);
			})}
		</div>
	);
};

export default Cuisine;
