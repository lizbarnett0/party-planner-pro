import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
	return (
		<>
			<div>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant='top' src='holder.js/100px180' />
					<Card.Body>
						<Card.Title>Meals</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go to Meals</Button>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant='top' src='holder.js/100px180' />
					<Card.Body>
						<Card.Title>Cocktails</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go to Meals</Button>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant='top' src='holder.js/100px180' />
					<Card.Body>
						<Card.Title>Conversation Starters</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go to Meals</Button>
					</Card.Body>
				</Card>
			</div>
		</>
	);
};

export default Home;
