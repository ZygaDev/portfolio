import styled from 'styled-components';
import { Element } from 'react-scroll';

export const AvatarRound = styled.div`
	border-radius: 100px;
	height: 200px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.blueLighten};
	border: 5px solid ${({ theme }) => theme.colors.blue};
	width: 200px;
	margin: 0 auto;
	z-index: 9;
	position: relative;
	svg {
		max-height: 400px;
		left: -110px;
		position: relative;
		top: 30px;
	}
`;
export const Box = styled.div`
	background-color: transparent;
	border-radius: 3px;
	color: ${({ theme }) => theme.colors.white};
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	height: 300px;
	transform-style: preserve-3d;
	perspective: 2000px;
	transition: 0.4s;
	text-align: center;
	@media (max-width: 330px) {
		width: 90vw;
		height: 400px;
	}

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: transparent;
		border-top: 20px solid ${({ theme }) => theme.colors.white};
		border-left: 20px solid ${({ theme }) => theme.colors.white};
		box-sizing: border-box;
	}
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-bottom: 20px solid ${({ theme }) => theme.colors.white};
		border-right: 20px solid ${({ theme }) => theme.colors.white};
		box-sizing: border-box;
	}
	.fas {
		font-size: ${({ theme }) => theme.fontSize.m};
		height: 50px;
		width: 50px;
		line-height: 50px !important;
		background-color: ${({ theme }) => theme.colors.white};
		color: ${({ theme }) => theme.colors.blueLighten};
	}
	.fa2 {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 1;
	}
	.text {
		position: absolute;
		top: 30px;
		left: -30px;
		width: calc(100% + 60px);
		height: calc(100% - 60px);
		background-color: ${({ theme }) => theme.colors.blueLighten};
		border-radius: 3px;
		transition: 0.4s;
		.fa1 {
			position: absolute;
			top: 0;
			left: 0;
		}
		div {
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			text-align: center;
			width: 100%;
			padding: 30px 60px;
			line-height: 1.5;
			box-sizing: border-box;
			h3 {
				font-size: ${({ theme }) => theme.fontSize.l};
				margin-bottom: 5px;
			}
			p {
				font-size: ${({ theme }) => theme.fontSize.s};
			}
		}
	}
`;

export const Wrapper = styled(Element)`
	position: relative;
	width: 100%;
	height: 70vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	@media (max-width: 1000px) {
		flex-direction: column;
		height: 100vh;
	}
	@media (max-width: 330px) {
		height: 100%;
		min-height: 1000px;
		justify-content: space-around;
	}
	&:hover {
		${AvatarRound} {
			svg {
				top: -40px;
				transition: all 0.2s ease-in-out;
			}
		}
		${Box} {
			.text {
				transform: rotateY(20deg) skewY(-3deg);
			}
			transform: translate(-50%, -50%) rotateY(-20deg) skewY(3deg);
		}
	}
`;

export const Item = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Counter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	height: 30vh;
	color: ${({ theme }) => theme.colors.blueLighten};
	@media (max-width: 1000px) {
		display: none;
	}

	${Item} {
		&:hover {
			color: ${({ theme }) => theme.colors.white};
		}
		svg {
			width: 5rem;
			height: auto;
		}
		.count {
			font-size: ${({ theme }) => theme.fontSize.l};
		}
		p {
			font-size: ${({ theme }) => theme.fontSize.s};
		}
	}
`;
