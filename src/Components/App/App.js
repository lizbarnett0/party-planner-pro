import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Home/Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Testimonials from '../Testimonials/Testimonials';

import DishCategories from '../Dishes/DishCategories';
import Dishes from '../Dishes/Dishes/Dishes';
import Recipe from '../Dishes/Dishes/Recipe/Recipe';

import DrinkCategories from '../Drinks/DrinkCategories';
import AlcoholicDrinks from '../Drinks/Drinks/AlcoholicDrinks';
import NonAlcoholicDrinks from '../Drinks/Drinks/NonAlcoholicDrinks';
import DrinkRecipe from '../Drinks/DrinkRecipe/DrinkRecipe';

import DialogueCategories from '../Dialogue/DialogueCategories';
import Dialogue from '../Dialogue/Dialogue';

function App() {
	const [dishCategories, setDishCategories] = useState([]);

	const dishCategoriesUrl = `https://www.themealdb.com/api/json/v1/1/categories.php`;

	const getDishCategories = () => {
		fetch(dishCategoriesUrl)
			.then((res) => res.json())
			.then((res) => {
				setDishCategories(res.categories);
			});
	};

	useEffect(() => {
		getDishCategories();
	}, []);

	return (
		<div className='App'>
			<Header />
			<Route exact path='/About' render={() => <About />} />
			<Route exact path='/Testimonials' render={() => <Testimonials />} />
			<Route exact path='/' render={() => <Home />} />
			<main>
				<Route
					exact
					path='/dishes'
					render={() => <DishCategories dishCategories={dishCategories} />}
				/>
				<Route
					exact
					path='/dishes/:category'
					render={(routerProps) => {
						return (
							<Dishes
								dishCategories={dishCategories}
								setDishCategories={setDishCategories}
								match={routerProps.match}
							/>
						);
					}}
				/>
				<Route
					exact
					path='/dishes/:category/:id'
					render={(routerProps) => {
						return <Recipe match={routerProps.match} />;
					}}
				/>

				<Route exact path='/drinks' render={() => <DrinkCategories />} />

				<Route
					exact
					path='/drinks/alcoholic'
					render={() => <AlcoholicDrinks />}
				/>

				<Route
					exact
					path='/drinks/nonalcoholic'
					render={() => <NonAlcoholicDrinks />}
				/>
				<Route
					exact
					path='/drinks/:category/:id'
					render={(routerProps) => {
						return <DrinkRecipe match={routerProps.match} />;
					}}
				/>
				<Route exact path='/dialogue' render={() => <DialogueCategories />} />

				<Route
					exact
					path='/dialogue/:category'
					render={(routerProps) => {
						return <Dialogue match={routerProps.match} />;
					}}
				/>
			</main>
			<footer>
				<p>&copy;2020 Lucky Lizard Productions</p>
			</footer>
		</div>
	);
}

export default App;
