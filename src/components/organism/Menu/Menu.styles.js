import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	position: fixed;
	opacity: ${(props) => (props.clicked ? '100%' : '0%')};
	top: ${(props) => (props.clicked ? '0%' : '-100%')};
	transition: 0.3s ease-in-out;
	z-index: 9999;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.blue};
	.pink {
		color: ${({ theme }) => theme.colors.pink};
	}
`;

export const Item = styled.div`
	width: 100%;
	margin-bottom: 30px;
	span {
		font-size: ${({ theme }) => theme.fontSize.l};
		color: ${({ theme }) => theme.colors.white};
		text-align: center;
		margin-right: 20px;
		font-weight: bold;
	}
`;
export const Copy = styled.div`
	width: 100%;
	margin-bottom: 30px;
	span {
		font-size: ${({ theme }) => theme.fontSize.s};
		color: ${({ theme }) => theme.colors.white};
		text-align: center;
		margin-right: 20px;
		font-weight: bold;
	}
`;

const activeClassName = 'active';

export const StyledLink = styled(Link)`
	font-weight: bold;
	text-decoration: none;
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme }) => theme.colors.white};
	text-align: left;
	position: relative;
	padding: 15px 0;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&.${activeClassName} {
		&::after {
			opacity: 1;
		}
	}
	&::after {
		opacity: 0;
		transition: opacity 0.4s ease-in-out;
		content: '';
		position: absolute;
		width: 49%;
		height: 3px;
		top: 100%;
		transform: translate(-50%, -50%);
		right: 0px;
		background-color: ${({ theme }) => theme.colors.pink};
	}
`;

const pinkicon = 'pink-icon';
export const Icon = styled(FontAwesomeIcon).attrs({ pinkicon })`
	color: ${({ theme }) => theme.colors.pink};
	padding-right: 5%;
	width: 40px;
	height: 100%;
`;

export const MenuLabel = styled.label`
	background-color: ${({ theme }) => theme.colors.blueNeon};
	position: fixed;
	top: 20px;
	left: 20px;
	border-radius: 50%;
	height: 7rem;
	width: 7rem;
	cursor: pointer;
	z-index: 99999;
	text-align: center;
`;

export const Icons = styled.span`
	position: relative;
	background-color: ${(props) => (props.clicked ? 'transparent' : 'white')};
	width: 3rem;
	height: 2px;
	display: inline-block;
	margin-top: 3.5rem;
	transition: all 0.3s;
	&::before,
	&::after {
		content: '';
		background-color: ${({ theme }) => theme.colors.white};
		width: 3rem;
		height: 2px;
		display: inline-block;
		position: absolute;
		left: 0;
		transition: all 0.3s;
	}
	&::before {
		top: ${(props) => (props.clicked ? '0' : '-0.8rem')};
		transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
	}
	&::after {
		top: ${(props) => (props.clicked ? '0' : '0.8rem')};
		transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
	}
	${MenuLabel}:hover &::before {
		top: ${(props) => (props.clicked ? '0' : '-1rem')};
	}
	${MenuLabel}:hover &::after {
		top: ${(props) => (props.clicked ? '0' : '1rem')};
	}
`;
