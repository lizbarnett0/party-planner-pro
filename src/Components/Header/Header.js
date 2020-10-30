import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

const Header = () => {
    return (
			<div>
				<header>
					<Link to='/'>
						<h1>PartyPlannerPro</h1>
					</Link>
					<nav>
						<Link to='/Favorites'>Favorites</Link>
						<Link to='/Testimonials'>Testimonials</Link>
						<Link to='/About'>About</Link>
					</nav>
				</header>
			</div>
		);
};

export default Header;