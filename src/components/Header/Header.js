import React, { useState } from 'react';
import { informations } from 'data/data';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ReactComponent as Avatar } from 'assets/icons/avatar.svg';
import { ReactComponent as One } from 'assets/icons/1 (1).svg';
import { ReactComponent as Two } from 'assets/icons/2 (1).svg';
import { ReactComponent as Three } from 'assets/icons/3 (1).svg';
import { ReactComponent as Four } from 'assets/icons/4 (1).svg';
import { ReactComponent as Five } from 'assets/icons/5 (1).svg';
import { ReactComponent as Seven } from 'assets/icons/7 (1).svg';
import { ReactComponent as Eight } from 'assets/icons/8.svg';
import Typical from 'react-typical';

class Header extends React.Component {
	render() {
		return (
			<>
				{informations.map((item, i) => (
					<Container fluid className='header' key={i} id='header'>
						<One className='layer' data-speed='2'></One>
						<Two className='layer' data-speed='5'></Two>
						<Three className='layer' data-speed='-2'></Three>
						<Four className='layer' data-speed='-7'></Four>
						<Five className='layer' data-speed='6'></Five>
						<Seven className='layer' data-speed='-9'></Seven>
						<Eight className='layer' data-speed='-9'></Eight>
						<Row className='layer'>
							<Col className='Avatar'>
								<Avatar></Avatar>
							</Col>
							<Col>
								<h1>
									<strong>{item.name}</strong>
								</h1>
							</Col>
							<Col>
								<h1 className='typing'>
									I'm
									<Typical
										steps={[
											' Master of Engineering',
											1000,
											' Frontend developer',
											1000,
											' Web developer',
											1000,
										]}
										loop={10}
										wrapper='span'
									/>
								</h1>
							</Col>
							<Col>
								<Button variant='primary' size='lg'>
									<a href='#social'> {item.button}</a>
								</Button>{' '}
							</Col>
							<Col> </Col>
						</Row>
					</Container>
				))}
			</>
		);
	}
}

export default Header;
