import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Avatar } from 'assets/avatar.svg';
const InfoItem = ({ informationsData: { about } }) => {
	return (
		<div>
			<h2>About me</h2>
			{about}
			<Avatar></Avatar>
		</div>
	);
};

InfoItem.propTypes = {};

export default InfoItem;
