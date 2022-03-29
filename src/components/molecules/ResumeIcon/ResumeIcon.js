import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { TitleItem } from 'components/atoms/Title/Title';
import { Icons } from './ResumeIcon.styled';
const ResumeIcon = () => {
	return (
		<>
			<TitleItem>Let's talk!</TitleItem>
			<Icons>
				{' '}
				<a href='https://github.com/ZygaDev/'>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href='https://www.facebook.com/AmandaZygmanska'>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
				<a href='https://www.linkedin.com/in/azygmanska/'>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a href='mailto:amandazygmanska@gmail.com'>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</Icons>

			<TitleItem>Or check my resume:</TitleItem>
			<Icons>
				<a href='/resume.pdf' className='res'>
					<span>ENG</span> <FontAwesomeIcon icon={faFile} />
				</a>
				<a href='/cv.pdf' className='res'>
					<span>PL</span> <FontAwesomeIcon icon={faFile} />
				</a>
			</Icons>
		</>
	);
};

export default ResumeIcon;
