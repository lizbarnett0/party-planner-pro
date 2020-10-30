import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites }) => {
		return (
		<div>
			<h1>Favorites</h1>
			<div className='dish-container'>
				{favorites.map((favorite) => {
					return (
						<div key={favorite.title}>
							<div>
								{(favorite.type === 'food') ? (
									<Link to={`/dishes/${favorite.category}/${favorite.id}`}>
										<img src={favorite.image} alt={favorite.title} />
										<h3>{favorite.title}</h3>
									</Link>
								) : (
									<Link to={`/drinks/${favorite.category}/${favorite.id}`}>
										<img src={favorite.image} alt={favorite.title} />
										<h3>{favorite.title}</h3>
									</Link>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Favorites;
