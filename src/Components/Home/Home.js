import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import MealLogo from '../../imgs/meal.png'
import CocktailLogo from '../../imgs/cocktail.png';
import ConversationLogo from '../../imgs/conversation.png'

const Home = () => {
	return (
		<div className="home">
			<div>
				<Card>
					<Card.Img variant='top' src={MealLogo} />
					<Card.Body>
						<Card.Title>Comestibles</Card.Title>
						<Card.Text>
							Dazzle the tastebuds of your guests.
						</Card.Text>
						<Button variant='primary'>Comestibles</Button>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' src={CocktailLogo} />
					<Card.Body>
						<Card.Title>Cocktails</Card.Title>
						<Card.Text>
							Craft the cocktail of your dreams.
						</Card.Text>
						<Button variant='primary'>Cocktails</Button>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' src={ConversationLogo} />
					<Card.Body>
						<Card.Title>Conversations</Card.Title>
						<Card.Text>
							Keep the conversations flowing.
						</Card.Text>
						<Button variant='primary'>Conversations</Button>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default Home;
