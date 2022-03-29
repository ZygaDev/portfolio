import React, { useState } from 'react';

import { Item, Copy, Wrapper, MenuLabel, Icons, StyledLink } from './Menu.styles';
import { informations } from 'data/data';
import { Icon } from './Menu.styles';
import { faHome, faIdCardAlt, faFileCode, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-scroll';
const Menu = () => {
	const [click, isClick] = useState(false);
	const handleClick = () => isClick(!click);
	const closeMenu = () => isClick(false);

	return (
		<>
			<MenuLabel htmlFor='navi-toggle' onClick={handleClick}>
				<Icons clicked={click}>&nbsp;</Icons>
			</MenuLabel>
			<Wrapper clicked={click}>
				{informations.map((item, i) => (
					<Item key={item.greetings}>
						<span>
							{item.greetings}
							<span className='pink'>!</span>
						</span>
					</Item>
				))}

				<Item>
					<StyledLink
						to='header'
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						onClick={closeMenu}
					>
						<Icon icon={faHome} />
						Home
					</StyledLink>
					<StyledLink
						to='about'
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						onClick={closeMenu}
					>
						<Icon icon={faInfoCircle} />
						About
					</StyledLink>

					<StyledLink
						to='skills'
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						onClick={closeMenu}
					>
						<Icon icon={faFileCode} />
						Skills
					</StyledLink>
					<StyledLink
						to='resume'
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						onClick={closeMenu}
					>
						<Icon icon={faIdCardAlt} />
						Resume
					</StyledLink>
				</Item>
				<Copy>
					<span>© 2022 Created by Amanda ✨</span>
				</Copy>
			</Wrapper>
		</>
	);
};

export default Menu;
