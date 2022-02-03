import React from 'react';
import { Nav } from 'react-bootstrap';
import { informations } from 'data/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faIdCardAlt, faFileCode, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
function menu(params) {
	let btn = document.querySelector('.menu');
	let menuV = document.querySelector('.menuVertical');
	btn.classList.toggle('opened');
	menuV.classList.toggle('opened');
	btn.setAttribute('aria-expanded', btn.classList.contains('opened'));
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});

class Menu extends React.Component {
	render() {
		return (
			<>
				{' '}
				<button className='menu' onClick={menu} aria-label='Main Menu'>
					<svg width='100' height='100' viewBox='0 0 100 100'>
						<path
							className='line line1'
							d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
						/>
						<path className='line line2' d='M 20,50 H 80' />
						<path
							className='line line3'
							d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
						/>
					</svg>
				</button>
				{informations.map((item, i) => (
					<div className='menuVertical' key={i}>
						<Nav.Link eventKey='disabled' disabled>
							<span>
								{item.greetings}
								<span className='pink'>!</span>
							</span>
						</Nav.Link>
						<Nav defaultActiveKey='/home' className='flex-column'>
							<Nav.Link onClick={menu} eventKey='link-1' href='#header'>
								<FontAwesomeIcon icon={faHome} />{' '}
								<span className='nav_name'>Home</span>
							</Nav.Link>
							<Nav.Link onClick={menu} eventKey='link-2' href='#info'>
								{' '}
								<FontAwesomeIcon icon={faInfoCircle} />{' '}
								<span className='nav_name'>About</span>
							</Nav.Link>
							<Nav.Link onClick={menu} eventKey='link-3' href='#skills'>
								{' '}
								<FontAwesomeIcon icon={faFileCode} />{' '}
								<span className='nav_name'>Skills</span>
							</Nav.Link>
							<Nav.Link onClick={menu} eventKey='link-4' href='#resume'>
								<FontAwesomeIcon icon={faIdCardAlt} />
								<span className='nav_name'> Portfolio</span>
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
