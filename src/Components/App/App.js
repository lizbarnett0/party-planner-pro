import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './app.scss'

import Header from '../Header/Header';
import Home from '../Home/Home';
import Favorites from '../Favorites/Favorites';
import About from '../About/About';
import Testimonials from '../Testimonials/Testimonials';

import DishCategories from '../Dishes/DishCategories';
import Dishes from '../Dishes/Dishes';
import Recipe from '../Dishes/Recipe';

import DrinkCategories from '../Drinks/DrinkCategories';
import AlcoholicDrinkCategories from '../Drinks/AlcoholicDrinkCategories';
import AlcoholTypes from '../Drinks/AlcoholTypes';
import NonAlcoholicDrinks from '../Drinks/NonAlcoholicDrinks';
import DrinkRecipe from '../Drinks/DrinkRecipe';

import DialogueCategories from '../Dialogue/DialogueCategories';
import Dialogue from '../Dialogue/Dialogue';

function App() {
	const [dishCategories, setDishCategories] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [dishes, setDishes] = useState([])

	return (
		<div className='App'>
			<Header />
			<Route
				exact
				path='/Favorites'
				render={() => <Favorites favorites={favorites} />}
			/>
			<Route exact path='/About' render={() => <About />} />
			<Route exact path='/Testimonials' render={() => <Testimonials />} />
			<Route exact path='/' render={() => <Home />} />
			<main>
				<Route
					exact
					path='/dishes'
					render={() => (
						<DishCategories
							dishCategories={dishCategories}
							setDishCategories={setDishCategories}
						/>
					)}
				/>
				<Route
					exact
					path='/dishes/:category'
					render={(routerProps) => {
						return (
							<Dishes
								dishes={dishes}
								setDishes={setDishes}
								match={routerProps.match}
							/>
						);
					}}
				/>
				<Route
					exact
					path='/dishes/:category/:id'
					render={(routerProps) => {
						return (
							<Recipe
								match={routerProps.match}
								favorites={favorites}
								setFavorites={setFavorites}
							/>
						);
					}}
				/>

				<Route exact path='/drinks' render={() => <DrinkCategories />} />

				<Route
					exact
					path='/drinks/alcoholic'
					render={() => <AlcoholicDrinkCategories />}
				/>
				<Route
					exact
					path='/drinks/alcoholic/:alcohol'
					render={(routerProps) => {
						return <AlcoholTypes match={routerProps.match} />;
					}}
				/>

				<Route
					exact
					path='/drinks/:category/:alcohol/:id'
					render={(routerProps) => {
						return (
							<DrinkRecipe
								match={routerProps.match}
								favorites={favorites}
								setFavorites={setFavorites}
							/>
						);
					}}
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
						return (
							<DrinkRecipe
								match={routerProps.match}
								favorites={favorites}
								setFavorites={setFavorites}
							/>
						);
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
				<p>&copy; 2020 Lucky Lizard Technologies</p>
			</footer>
		</div>
	);
}

export default App;
