import React from 'react';
import { Link } from 'react-router-dom';
import Bourbon from '../../imgs/bourbon.jpeg';
import Champagne from '../../imgs/champagne.jpeg';
import Cognac from '../../imgs/cognac.jpeg';
import Gin from '../../imgs/gin.jpeg';
import Rum from '../../imgs/rum.jpeg';
import Scotch from '../../imgs/scotch.jpeg';
import Tequila from '../../imgs/tequila.jpeg';
import Vodka from '../../imgs/vodka.jpeg';

const AlcoholicDrinkCategories = () => {
	return (
		<div>
			<h1>Alcoholic Drink Categories</h1>
			<div className='container'>
				<div className='alc'>
					<Link to='/drinks/alcoholic/bourbon'>
						<img className='alc-drink-img' src={Bourbon} alt='bourbon' />
						<h3>Bourbon</h3>
					</Link>
				</div>
				<div className='alc'>
					<Link to='/drinks/alcoholic/champagne'>
						<img className='alc-drink-img' src={Champagne} alt='champagne' />
						<h3>Champagne</h3>
					</Link>
				</div>
				<div className='alc'>
					<Link to='/drinks/alcoholic/cognac'>
						<img className='alc-drink-img' src={Cognac} alt='cognac' />
						<h3>Cognac</h3>
					</Link>
				</div>
				<div className='alc'>
					<Link to='/drinks/alcoholic/gin'>
						<img className='alc-drink-img' src={Gin} alt='gin' />
						<h3>Gin</h3>
					</Link>
				</div>
				<div className='alc'>
					<Link to='/drinks/alcoholic/rum'>
						<img className='alc-drink-img' src={Rum} alt='rum' />
						<h3>Rum</h3>
					</Link>
				</div>
				<div className='alc'>
					<Link to='/drinks/alcoholic/scotch'>
						<img className='alc-drink-img' src={Scotch} alt='scotch' />
						<h3>Scotch</h3>
					</Link>
				</div>
				<div className='alc'>
					<Link to='/drinks/alcoholic/tequila'>
						<img className='alc-drink-img' src={Tequila} alt='tequila' />
						<h3>Tequila</h3>
					</Link>
				</div>
				<div className='alc'>
					<Link to='/drinks/alcoholic/vodka'>
						<img className='alc-drink-img' src={Vodka} alt='vodka' />
						<h3>Vodka</h3>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AlcoholicDrinkCategories;
