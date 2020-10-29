import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DrinkCategories = () => {
	return (
		<div className='drink-categories'>
			<div className="alc">
				<Link to='/drinks/alcoholic'>
					<h1>Alcoholic Drinks</h1>
				</Link>
			</div>
			<div className="nonalc">
				<Link to='/drinks/nonalcoholic'>
					<h1>Non-Alcoholic Drinks</h1>
				</Link>
			</div>
			
		</div>
	);
};
export default DrinkCategories;
