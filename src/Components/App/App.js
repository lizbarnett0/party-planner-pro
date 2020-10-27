import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Home/Header/Header';
import Home from '../Home/Home';

import Cuisine from '../Cuisine/Cuisine';
import Dishes from '../Cuisine/Dishes/Dishes';

import Cocktails from '../Cocktails/Cocktails';
import Conversations from '../Conversations/Conversations';

function App() {
	const [cuisineCategories, setCuisineCategories] = useState([]);
	//const [drinkCategories, setDrinkCategories] = useState([]);
	//const [convoCategories, setConvocategories] = useState([]);

	const cuisineCategoriesUrl = `https://www.themealdb.com/api/json/v1/1/categories.php`;
	const cocktailCategoriesUrl = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

	const getCuisineCategories = () => {
		fetch(cuisineCategoriesUrl)
			.then((res) => res.json())
			.then((res) => {
				setCuisineCategories(res.categories);
			});
	};

	useEffect(() => {
		getCuisineCategories();
	}, []);

	return (
		<div className='App'>
			<Header />
			<Route exact path='/' render={() => <Home />} />
			<main>
				<Route
					path='/cuisine'
					render={() => <Cuisine cuisineCategories={cuisineCategories} />}
				/>
				<Route
					path='/cuisine/:category'
					render={(routerProps) => {
						return (
							<Dishes
								cuisineCategories={cuisineCategories}
								setCuisineCategories={setCuisineCategories}
								match={routerProps.match}
							/>
						);
					}}
				/>

				<Route path='/cocktails' render={() => <Cocktails />} />
			</main>
			<Route path='/conversations' render={() => <Conversations />} />
			<footer>
				<p>&copy;2020 LCR Labs</p>
			</footer>
		</div>
	);
}

export default App;
