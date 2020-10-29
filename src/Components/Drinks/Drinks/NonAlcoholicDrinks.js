import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NonAlcoholicDrinks = () => {
	const [nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState();

	useEffect(() => {
		const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;

		fetch(drinkUrl)
			.then((res) => res.json())
			.then((res) => {
				setNonAlcoholicDrinks(res.drinks);
				console.log(res.drinks);
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
							<img className='drink-img' src={drink.strDrinkThumb}></img>
							<h1>
								<Link to={`/drinks/nonalcoholic/${drink.idDrink}`}>
									{drink.strDrink}
								</Link>
							</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NonAlcoholicDrinks;
