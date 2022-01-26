import React from 'react';
import { informations } from 'data/data';
import HeaderItem from 'components/HeaderItem/HeaderItem';

const Header = (props) => {
	return (
		<div>
			{informations.map((informationsData) => (
				<HeaderItem informationsData={informationsData}></HeaderItem>
			))}
		</div>
	);
};

export default Header;
