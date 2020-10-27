import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DrinkCategories = () => {
	return (
		<div className='home'>
			<div>
				<Card>
					<Card.Img variant='top' />
					<Card.Body>
						<Card.Title>Alcoholic Drinks</Card.Title>
						<Card.Text>BLAH BLAH.</Card.Text>
						<Link to='/drinks/alcoholic'>
							<Button variant='primary'>Alcoholic Drinks</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' />
					<Card.Body>
						<Card.Title>Non-Alcoholic Drinks</Card.Title>
						<Card.Text>BLAH BLAH.</Card.Text>
						<Link to='/drinks/nonalcoholic'>
							<Button variant='primary'>Non-Alcoholic Drinks</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};
export default DrinkCategories;
