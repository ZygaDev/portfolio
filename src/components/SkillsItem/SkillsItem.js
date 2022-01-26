import React from 'react';
import PropTypes from 'prop-types';

const SkillsItem = ({ skillsData: { name, value } }) => {
	return (
		<div>
			{name}
			{value}
		</div>
	);
};

SkillsItem.propTypes = {};

export default SkillsItem;
