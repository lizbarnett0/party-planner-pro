import React from 'react';
import { Link } from 'react-router-dom';

const Cuisine = ({ cuisineCategories }) => {
	let list = cuisineCategories.map((category) => {
				return (
					<div key={category.idCategory}>
						<Link to={`/cuisine/${category.strCategory}`}>
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
			})
		return <div className='container'>{list}</div>;
	}

export default Cuisine;
