import React from 'react';
import { informations } from 'data/data';
import { Wrapper, Item, AvatarRound, Box, Counter } from './About.styled';
import { ReactComponent as Avatar } from 'assets/icons/avatar.svg';
import { TitleItem } from 'components/atoms/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faCoffee, faCode, faShoppingCart, faCouch } from '@fortawesome/free-solid-svg-icons';

const About = ({ testRef }) => {
	return (
		<>
			{informations.map((item, i) => (
				<Wrapper key={item.aboutTitle} id='about' name='about'>
					<Item>
						<TitleItem>{item.aboutTitle}</TitleItem>
						<AvatarRound>
							<Avatar></Avatar>
						</AvatarRound>
					</Item>
					<Item key={item.about}>
						<Box>
							<FontAwesomeIcon
								icon={faQuoteLeft}
								className='fas fa2'
							></FontAwesomeIcon>

							<div className='text'>
								<FontAwesomeIcon
									icon={faQuoteRight}
									className='fas fa1'
								></FontAwesomeIcon>
								<div>
									<p>{item.about}</p>
								</div>
							</div>
						</Box>
					</Item>
				</Wrapper>
			))}
			<Counter key={Counter}>
				<Item>
					<FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
					<div className='count' data-target='523'>
						523
					</div>
					<p>Cups of coffee</p>
				</Item>
				<Item>
					<FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
					<div className='count' data-target='15'>
						15
					</div>
					<p>Website Complete</p>
				</Item>
				<Item>
					{' '}
					<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
					<div className='count' data-target='10'>
						10
					</div>
					<p>Online Shops Complete</p>
				</Item>
				<Item>
					{' '}
					<FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
					<div className='count' data-target='440'>
						440
					</div>
					<p>Hours of watching 'Friends'</p>
				</Item>
			</Counter>
		</>
	);
};

export default About;
