import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './drinks.scss';

const NonAlcoholicDrinks = () => {
	const [nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState();

	useEffect(() => {
		const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;

		fetch(drinkUrl)
			.then((res) => res.json())
			.then((res) => {
				setNonAlcoholicDrinks(res.drinks);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

    if (!nonAlcoholicDrinks) {
			return null;
		}

	return (
		<div>
			<h1>Non-Alcoholic Drinks</h1>
			<div className='container'>
				{nonAlcoholicDrinks.map((drink) => {
					return (
						<div key={drink.idDrink}>
							<Link to={`/drinks/nonalcoholic/${drink.idDrink}`}>
								<img
									className='drink-img'
									src={drink.strDrinkThumb}
									alt={drink.strDrink}
								/>
								<h3>{drink.strDrink}</h3>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NonAlcoholicDrinks;
