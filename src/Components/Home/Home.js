import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import CuisineLogo from '../../imgs/cuisine.png';
import CocktailLogo from '../../imgs/cocktail.png';
import ConversationLogo from '../../imgs/conversation.png';

const Home = () => {
	return (
		<div className='home'>
			<div>
				<Card>
					<Card.Img variant='top' src={CuisineLogo} />
					<Card.Body>
						<Card.Title>Cuisine</Card.Title>
						<Card.Text>Dazzle the tastebuds of your guests.</Card.Text>
						<Link to='/cuisine'>
							<Button variant='primary'>Cuisine</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' src={CocktailLogo} />
					<Card.Body>
						<Card.Title>Cocktails</Card.Title>
						<Card.Text>Craft the cocktail of your dreams.</Card.Text>
						<Link to='/cocktails'>
							<Button variant='primary'>Cocktails</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' src={ConversationLogo} />
					<Card.Body>
						<Card.Title>Conversations</Card.Title>
						<Card.Text>Keep the conversations flowing.</Card.Text>
						<Link to='/conversations'>
							<Button variant='primary'>Conversations</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default Home;
