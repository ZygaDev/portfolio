import React from 'react';
import PropTypes from 'prop-types';
import { skills } from 'data/data';
import SkillsItem from 'components/SkillsItem/SkillsItem';

const Skills = (props) => {
	return (
		<>
			<h2>My skills</h2>
			{skills.map((skillsData) => (
				<SkillsItem skillsData={skillsData}></SkillsItem>
			))}
		</>
	);
};

Skills.propTypes = {};

export default Skills;
