import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import DishLogo from '../../imgs/dish.png';
import DrinkLogo from '../../imgs/drink.png';
import DialogueLogo from '../../imgs/dialogue.png';

const Home = () => {
	return (
		<div className='home'>
			<div>
				<Card>
					<Card.Img variant='top' src={DishLogo} />
					<Card.Body>
						<Card.Title>Dishes</Card.Title>
						<Card.Text>Dazzle the tastebuds of your guests.</Card.Text>
						<Link to='/dishes'>
							<Button variant='primary'>Dishes</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' src={DrinkLogo} />
					<Card.Body>
						<Card.Title>Drinks</Card.Title>
						<Card.Text>Craft a delicious cocktail or non-alcoholic drink.</Card.Text>
						<Link to='/drinks'>
							<Button variant='primary'>Drinks</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' src={DialogueLogo} />
					<Card.Body>
						<Card.Title>Dialogue</Card.Title>
						<Card.Text>Keep the conversations flowing.</Card.Text>
						<Link to='/dialogue'>
							<Button variant='primary'>Dialogue</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default Home;
