import React from 'react';
import MenuItem from 'components/MenuItem/MenuItem';
import { informations } from 'data/data';

const Menu = (props) => {
	return (
		<>
			{informations.map((informationsData) => (
				<MenuItem informationsData={informationsData}></MenuItem>
			))}
		</>
	);
};

Menu.propTypes = {};

export default Menu;
