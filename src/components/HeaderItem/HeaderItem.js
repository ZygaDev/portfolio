import React from 'react';
import PropTypes from 'prop-types';

const HeaderItem = ({ informationsData: { name, description } }) => {
	return (
		<div>
			<h1> {name}</h1>
			<h3>{description}</h3>
			<button>Contact me!</button>
		</div>
	);
};

HeaderItem.propTypes = {
	informationsData: PropTypes.shape({
		name: PropTypes.string,
		description: PropTypes.string,
	}),
};

export default HeaderItem;
