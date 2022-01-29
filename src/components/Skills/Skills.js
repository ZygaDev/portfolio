import React, { useState, useEffect } from 'react';
import { skills as skillData } from 'data/data';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
			<Container className='Skills'>
				<Row>
					<Col>
						<em>Skills</em>

						<h2>My Toolbox & Things I Can Do</h2>
					</Col>
					<Col className='w-50'>
						{users.map((item, i) => (
							<i key={i} className={item.url}></i>
						))}{' '}
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default Skills;
