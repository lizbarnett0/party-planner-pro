import React from 'react';
import { Link } from 'react-router-dom';
import AlcoholPic from '../../imgs/alcoholic.jpg'
import NonAlcoholPic from '../../imgs/nonalcoholic.jpg';
import './drinks.scss';

const DrinkCategories = () => {
	return (
		<div>
			<h1>Drink Categories</h1>
			<div className='drink-category-container'>
				<div className='alc'>
					<Link to='/drinks/alcoholic'>
						<img src={AlcoholPic} alt='alcohol' />
						<h3>Alcoholic</h3>
					</Link>
				</div>
				<div className='nonalc'>
					<Link to='/drinks/nonalcoholic'>
						<img src={NonAlcoholPic} alt='nonalcohol' />
						<h3>Non-Alcoholic</h3>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default DrinkCategories;
