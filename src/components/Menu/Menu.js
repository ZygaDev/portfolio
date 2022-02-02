import React from 'react';
import { Nav } from 'react-bootstrap';
import { informations } from 'data/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faIdCardAlt,
	faFileCode,
	faEnvelope,
	faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

class Menu extends React.Component {
	render() {
		return (
			<>
				{informations.map((item, i) => (
					<div className='menuVertical' key={i}>
						<Nav.Link eventKey='disabled' disabled>
							<span>
								{item.greetings}
								<span className='pink'>!</span>
							</span>
						</Nav.Link>
						<Nav defaultActiveKey='/home' className='flex-column'>
							<Nav.Link eventKey='link-1' href='#header'>
								<FontAwesomeIcon icon={faHome} /> Home
							</Nav.Link>
							<Nav.Link eventKey='link-2' href='#info'>
								{' '}
								<FontAwesomeIcon icon={faInfoCircle} /> About
							</Nav.Link>
							<Nav.Link eventKey='link-3' href='#skills'>
								{' '}
								<FontAwesomeIcon icon={faFileCode} /> Skills
							</Nav.Link>
							<Nav.Link eventKey='link-4' href='#resume'>
								<FontAwesomeIcon icon={faIdCardAlt} /> Portfolio
							</Nav.Link>
							<Nav.Link eventKey='link-5' href='#contact'>
								<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Contact
							</Nav.Link>
						</Nav>
						<Nav.Link eventKey='disabled' disabled>
							{item.created}
						</Nav.Link>
					</div>
				))}
			</>
		);
	}
}

Menu.propTypes = {};

export default Menu;
