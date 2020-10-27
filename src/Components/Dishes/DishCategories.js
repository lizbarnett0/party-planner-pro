import React from 'react';
import { Link } from 'react-router-dom';

const DishCategories = ({ dishCategories }) => {
	let dishList = dishCategories.map((category) => {
		return (
			<div key={category.idCategory}>
				<Link to={`/dishes/${category.strCategory}`}>
					<div className='card-category'>
						<div className='card-image-category'>
							<img src={category.strCategoryThumb}></img>
						</div>
						<div className='card-title-category'>
							<h1>{category.strCategory}</h1>
						</div>
					</div>
				</Link>
			</div>
		);
	});
	return <div className='container'>{dishList}</div>;
};

export default DishCategories;
