import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { informations as infoData } from 'data/data';
import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import Info from 'components/Info/Info';

import Skills from 'components/Skills/Skills';
import Resume from 'components/Resume/Resume';

const mockAPI = (success) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (infoData) {
				resolve([...infoData]);
			} else {
				reject({ message: 'Error' });
			}
		});
	});
};
const Root = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setLoadingState] = useState([]);

	useEffect(() => {
		setLoadingState(true);
		mockAPI()
			.then((data) => {
				setLoadingState(false);
				setUsers(data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Container fluid>
			<Row>
				<Col sm={3}>
					<Menu></Menu>
				</Col>
				<Col sm={9} className='movingSection'>
					<Header></Header>

					<Info></Info>
					<Skills></Skills>
					<Resume></Resume>
				</Col>
			</Row>
		</Container>
	);
};
export default Root;
