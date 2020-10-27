import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Cuisine from '../Cuisine/Cuisine';
import Cocktails from '../Cocktails/Cocktails';
import Conversations from '../Conversations/Conversations';

function App() {
	const [cuisineCategories, setCuisineCategories] = useState([]);
	//const [drinks, setDrinks] = useState([]);
	//const [convos, setConvos] = useState([]);

	const foodUrl = `https://www.themealdb.com/api/json/v1/1/categories.php`;

	const getCuisineCategories = () => {
		fetch(foodUrl)
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
			<Route exact exact path='/' render={() => <Home />} />
			<Route
				path='/comestibles'
				render={() => <Cuisine cuisineCategories={cuisineCategories} />}
			/>
			<Route path='/cocktails' render={() => <Cocktails />} />
			<Route path='/conversations' render={() => <Conversations />} />
			<footer>
				<p>&copy;2020 LCR Labs</p>
			</footer>
		</div>
	);
}

export default App;
