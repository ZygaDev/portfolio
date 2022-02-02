import React from 'react';
import { informations } from 'data/data';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ReactComponent as Avatar } from 'assets/icons/avatar.svg';
import { ReactComponent as Seven } from 'assets/icons/7 (1).svg';
import { ReactComponent as Two } from 'assets/icons/2 (1).svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
class Info extends React.Component {
	render() {
		return (
			<>
				{informations.map((item, i) => (
					<Container fluid className='Info' id='info' key={i}>
						<Two className='layer' data-speed='-2'></Two>
						<Seven
							className='layer'
							data-speed='
						-5'
						></Seven>
						<Row className='layer'>
							<Col sm={4}>
								<h2>About me</h2>
								<div className='avatar'>
									<Avatar></Avatar>
								</div>
							</Col>
							<Col sm={8}>
								<div className='box'>
									<FontAwesomeIcon
										icon={faQuoteLeft}
										className='fas fa2'
									></FontAwesomeIcon>

									<div className='text'>
										<FontAwesomeIcon
											icon={faQuoteRight}
											className='fas fa1'
										></FontAwesomeIcon>
										<div>
											<p>{item.about}</p>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				))}
			</>
		);
	}
}

export default Info;
