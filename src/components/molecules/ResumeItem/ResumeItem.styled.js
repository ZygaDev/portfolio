import styled from 'styled-components';

export const BlocksItem = styled.div`
	background: #09407e;
	border-radius: 6px;
	box-shadow: 0 4px 30px rgb(0 0 0 / 50%);
	height: 100%;
	width: 30rem;
	z-index: 5;
	@media (max-width: 330px) {
		display: none;
	}
	&:nth-child(2) {
		transform: translate(-10%, -15%);
	}
	&:nth-child(3) {
		transform: translate(0%, -20%);
	}
`;

export const BlockHead = styled.div`
	align-items: center;
	display: grid;
	grid-template-columns: 36px auto 36px;
	svg {
		margin: 10px;
		color: ${({ theme }) => theme.colors.blueLight};
		height: 2rem;
	}
	span {
		font-weight: 900;
		text-align: center;
		color: ${({ theme }) => theme.colors.white};
		letter-spacing: 1.57px;
		font-size: ${({ theme }) => theme.fontSize.s};
	}
`;

export const BlockBody = styled.div`
	color: ${({ theme }) => theme.colors.white};
	margin: 0 10px 10px;
	text-align: left;
	span {
		font-size: ${({ theme }) => theme.fontSize.s};
	}
	font-size: ${({ theme }) => theme.fontSize.m};
	.c-w {
		color: ${({ theme }) => theme.colors.white};
	}
	.c-p {
		color: ${({ theme }) => theme.colors.pink};
	}
	.fw {
		font-weight: bold;
	}
	.line-3 {
		&:after {
			content: '';
			width: 0.5rem;
			height: 2rem;
			background: ${({ theme }) => theme.colors.pink};
			display: block;
			animation: cursor-blink 1.5s steps(2) infinite;
		}
	}
	@keyframes cursor-blink {
		0% {
			opacity: 0;
		}
	}
`;
