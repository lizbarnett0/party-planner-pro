import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AlcoholicDrinks = () => {
	const [alcoholicDrinks, setAlcoholicDrinks] = useState();

	useEffect(() => {
		const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`;

		fetch(drinkUrl)
			.then((res) => res.json())
			.then((res) => {
				setAlcoholicDrinks(res.drinks);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!alcoholicDrinks) {
		return null;
	}
	return (
		<div>
			<h1>Alcoholic Drinks</h1>
			{alcoholicDrinks.map((drink) => {
				return (
					<div key={drink.idDrink}>
						<img src={drink.strDrinkThumb}></img>
						<h1>
							<Link to={`/drinks/alcoholic/${drink.idDrink}`}>
								{drink.strDrink}
							</Link>
						</h1>
					</div>
				);
			})}
		</div>
	);
};


export default AlcoholicDrinks;