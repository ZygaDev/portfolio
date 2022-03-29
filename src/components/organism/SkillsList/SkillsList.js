import React from 'react';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import SkillsListItem from 'components/molecules/SkillsListItem/SkillsListItem';
import { skills } from 'data/skills';
import { TitleItem } from 'components/atoms/Title/Title';
import { StyledList, Wrapper, UpRight } from './SkillsList.styled';

const SkillsList = () => {
	return (
		<Wrapper name='skills' id='skills'>
			<StyledList>
				{skills.map((skillsData) => (
					<SkillsListItem key={skillsData.name} skillsData={skillsData}></SkillsListItem>
				))}
			</StyledList>

			<TitleItem>
				{' '}
				<UpRight>
					<span className='rotate'>My</span>
					<span> Toolbox</span>
				</UpRight>
			</TitleItem>
		</Wrapper>
	);
};

SkillsList.propTypes = {
	skillsData: PropTypes.shape(UserShape),
};

export default SkillsList;
