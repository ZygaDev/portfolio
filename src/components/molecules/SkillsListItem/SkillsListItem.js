import React from 'react';
import { Card } from './SkillsItem.styled';
import PropTypes from 'prop-types';
import { UserShape } from 'types';

const SkillsListItem = ({ skillsData: { url, name } }) => {
	return (
		<>
			<Card>
				<i className={url}></i>
			</Card>
		</>
	);
};
SkillsListItem.propTypes = {
	skillsData: PropTypes.shape(UserShape),
};
export default SkillsListItem;
