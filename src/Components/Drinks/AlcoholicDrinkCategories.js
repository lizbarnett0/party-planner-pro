import React from 'react';
import { Link } from 'react-router-dom';
import Bourbon from '../../imgs/bourbon.jpeg'
import Champagne from '../../imgs/champagne.jpeg'
import Cognac from'../../imgs/cognac.jpeg'
import Gin from '../../imgs/gin.jpeg'
import Rum from '../../imgs/rum.jpeg'
import Scotch from '../../imgs/scotch.jpeg'
import Tequila from '../../imgs/tequila.jpeg'
import Vodka from '../../imgs/vodka.jpeg'


const AlcoholicDrinkCategories = () => {
	return (
		<div className='container'>
			<div className='alc'>
				<Link to='/drinks/alcoholic/bourbon'>
					<h1>Bourbon</h1>
					<img className='alc-drink-img' src={Bourbon} alt='bourbon' />
				</Link>
			</div>
			<div className='alc'>
				<Link to='/drinks/alcoholic/champagne'>
					<h1>Champagne</h1>
					<img className='alc-drink-img' src={Champagne} alt='champagne' />
				</Link>
			</div>
			<div className='alc'>
				<Link to='/drinks/alcoholic/cognac'>
					<h1>Cognac</h1>
					<img className='alc-drink-img' src={Cognac} alt='cognac' />
				</Link>
			</div>

			<div className='alc'>
				<Link to='/drinks/alcoholic/gin'>
					<h1>Gin</h1>
					<img className='alc-drink-img' src={Gin} alt='gin' />
				</Link>
			</div>
			<div className='alc'>
				<Link to='/drinks/alcoholic/rum'>
					<h1>Rum</h1>
					<img className='alc-drink-img' src={Rum} alt='rum' />
				</Link>
			</div>
			<div className='alc'>
				<Link to='/drinks/alcoholic/scotch'>
					<h1>Scotch</h1>
					<img className='alc-drink-img' src={Scotch} alt='scotch' />
				</Link>
			</div>
			<div className='alc'>
				<Link to='/drinks/alcoholic/tequila'>
					<h1>Tequila</h1>
					<img className='alc-drink-img' src={Tequila} alt='tequila' />
				</Link>
			</div>
			<div className='alc'>
				<Link to='/drinks/alcoholic/vodka'>
					<h1>Vodka</h1>
					<img className='alc-drink-img' src={Vodka} alt='vodka' />
				</Link>
			</div>
		</div>
	);
};

export default AlcoholicDrinkCategories;
