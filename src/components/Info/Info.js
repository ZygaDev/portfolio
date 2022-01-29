import React from 'react';
import { informations } from 'data/data';
import { Container, Row, Col, Button } from 'react-bootstrap';
const Header = (props) => {
	return (
		<>
			{informations.map((item, i) => (
				<Container className='Info'>
					<Row>
						<Col>
							<em>About me</em>
							<h3>{item.aboutTitle}</h3>
						</Col>
						<Col>
							<p key={i}>{item.about}</p>
						</Col>
					</Row>
				</Container>
			))}
		</>
	);
};

export default Header;
