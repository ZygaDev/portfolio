import React, { useState, useEffect } from 'react';
import { skills as skillData } from 'data/data';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as Three } from 'assets/icons/3 (1).svg';
import { ReactComponent as Four } from 'assets/icons/4 (1).svg';
const mockAPI = (success) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (skillData) {
				resolve([...skillData]);
			} else {
				reject({ message: 'Error' });
			}
		});
	});
};

const Skills = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		mockAPI()
			.then((data) => {
				setUsers(data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<Container fluid className='Skills' id='skills'>
				<Three className='layer' data-speed='-7'></Three>
				<Four className='layer' data-speed='2'></Four>
				<Row>
					<Col sm={10}>
						<div className='container'>
							<div className='cards'>
								{users.map((item, i) => (
									<div className='card ' key={i}>
										<i className={item.url}></i>
									</div>
								))}{' '}
							</div>
						</div>
					</Col>{' '}
					<Col sm={2}>
						<h2 className='rotate'>My</h2>
						<h2> Toolbox</h2>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default Skills;
