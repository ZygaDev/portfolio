import React from 'react';
import { informations } from 'data/data';
import { Wrapper, AvatarRound } from './Header.styled';
import { ReactComponent as Avatar } from 'assets/icons/avatar.svg';
import { TitleItem, TitleItemTyping } from 'components/atoms/Title/Title';
import { TypingAnimation } from 'providers/typing';
import Layer from 'components/atoms/Layer/Layer';
const Header = () => {
	return (
		<>
			<Layer></Layer>

			<Wrapper id='header'>
				{' '}
				<AvatarRound>
					<Avatar></Avatar>
				</AvatarRound>
				{informations.map((item, i) => (
					<TitleItem key={item.name}>{item.name}</TitleItem>
				))}
				<TitleItemTyping>
					I'm
					<TypingAnimation></TypingAnimation>
				</TitleItemTyping>
			</Wrapper>
		</>
	);
};

Header.propTypes = {};

export default Header;
