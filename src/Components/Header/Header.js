import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
			<div>
				<header>
					<h1>PartyPlannerPro</h1>
					<nav>
						<Link to='/'>Home</Link>
						<Link to='/About'>About</Link>
						<Link to='/Testimonials'>Testimonials</Link>
					</nav>
				</header>
			</div>
		);
};

export default Header;