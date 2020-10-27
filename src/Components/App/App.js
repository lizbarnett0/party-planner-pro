import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Meals from '../Meals/Meals'
import Cocktails from '../Cocktails/Cocktails'
import Conversations from '../Conversations/Conversations';



function App() {
	return (
		<div className='App'>
			<Header />
			<Route exact path='/' render={() => <Home />} />
			<Route path='/meals' render={() => <Meals />} />
			<Route path='/cocktails' render={() => <Cocktails />} />
			<Route path='/conversations' render={() => <Conversations />} />
			<footer>
				<p>&copy;2020 LCR Labs</p>
			</footer>
		</div>
	);
}

export default App;
