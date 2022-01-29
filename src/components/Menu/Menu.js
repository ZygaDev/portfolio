import React from 'react';
import { Nav } from 'react-bootstrap';
import { informations } from 'data/data';
import TypeAnimation from 'react-type-animation';

const Menu = (props) => {
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
						<Nav.Link href='/home'>Home</Nav.Link>
						<Nav.Link eventKey='link-1'>Skills</Nav.Link>
						<Nav.Link eventKey='link-2'>Resume</Nav.Link>
						<Nav.Link eventKey='link-2'>Contact</Nav.Link>
					</Nav>
					<Nav.Link eventKey='disabled' disabled>
						{item.created}
					</Nav.Link>
				</div>
			))}
		</>
	);
};

Menu.propTypes = {};

export default Menu;
