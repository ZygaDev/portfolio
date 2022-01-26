import React from 'react';

const MenuItem = ({ informationsData: { greetings } }) => {
	return (
		<div>
			<nav>{greetings}</nav>
			<ul>
				<li>Home</li>
				<li>Info</li>
				<li>Skills</li>
				<li>Resume</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};

MenuItem.propTypes = {};

export default MenuItem;
