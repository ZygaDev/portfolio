import styled from 'styled-components';

export const Card = styled.div`
	max-width: 15rem;
	color: ${({ theme }) => theme.colors.white};
	padding: 1.5rem;
	background-color: ${({ theme }) => theme.colors.blueLighten};
	pointer-events: auto;
	transform: scale(1);
	opacity: 1;
	transition: all 150ms ease-in-out;
	display: flex;
	flex-direction: column;
	i {
		font-size: 13.5rem;
		padding-bottom: 20px;
		width: 30%;
		transition: all 0.2s ease-in-out;
	}

	&:nth-child(even) {
		transform: translateY(8px);
	}

	&:nth-child(n) {
		transform: rotate(-5deg);
	}
`;
