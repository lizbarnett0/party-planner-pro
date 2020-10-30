import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './drinks.scss';

const AlcoholTypes = ({ match }) => {
	const [alcoholTypes, setAlcoholTypes] = useState();

	useEffect(() => {
		const alcoholTypeUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${match.params.alcohol}`;

		fetch(alcoholTypeUrl)
			.then((res) => res.json())
			.then((res) => {
				setAlcoholTypes(res.drinks);
				console.log(res.drinks);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [match.params.alcohol]);

	if (!alcoholTypes) {
		return null;
	}
	return (
		<div>
			<h1>
				{match.params.alcohol.charAt(0).toUpperCase() +
					match.params.alcohol.slice(1)}{' '}
				Drinks
			</h1>

			<div className='container'>
				{alcoholTypes.map((type) => {
					return (
						<div key={type.idDrink}>
							<img
								className='drink-img'
								src={type.strDrinkThumb}
								alt={type.strDrink}></img>
							<h1>
								<Link
									to={`/drinks/alcoholic/${match.params.alcohol}/${type.idDrink}`}>
									{type.strDrink}
								</Link>
							</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
};



export default AlcoholTypes;
