import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './header.scss';

const Header = () => {
	return (
		<div>
			<header>
				<Navbar collapseOnSelect expand='lg'>
					<Link to='/'>
						<h2>PartyPlannerPro</h2>
					</Link>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='justify-content-end' style={{ width: '100%' }}>
							<Link to='/Favorites'>Favorites</Link>
							<Link to='/Testimonials'>Testimonials</Link>
							<Link to='/About'>About</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		</div>
	);
};

export default Header;
