import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
			<div>
				<header>
					<Link to='/'>
						<h1>PartyPlannerPro</h1>
					</Link>
					<nav>
						<Link to='/About'>About</Link>
						<Link to='/Testimonials'>Testimonials</Link>
					</nav>
				</header>
			</div>
		);
};

export default Header;