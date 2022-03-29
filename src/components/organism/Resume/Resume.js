import React from 'react';

import { Wrapper, StyledResumeItem } from './Resume.styled';
import ResumeItem from 'components/molecules/ResumeItem/ResumeItem';
import ResumeIcon from 'components/molecules/ResumeIcon/ResumeIcon';

const Resume = () => {
	return (
		<Wrapper id='resume' name='resume'>
			<StyledResumeItem>
				<ResumeItem></ResumeItem>
			</StyledResumeItem>
			<StyledResumeItem>
				<ResumeIcon></ResumeIcon>
			</StyledResumeItem>
		</Wrapper>
	);
};

export default Resume;
