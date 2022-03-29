import styled from 'styled-components';

export const Button = styled.button`
	padding: 4px 20px;
	margin: 15px 0;
	font-size: ${({ theme }) => theme.fontSize.m};
	background-color: ${({ theme }) => theme.colors.blueLight};
	border-radius: 2px;
	border: 2px solid ${({ theme }) => theme.colors.blueLight};
	color: ${({ theme }) => theme.colors.white};
	transition: color 250ms linear;

	&:hover {
		background-color: ${({ theme }) => theme.colors.blueLighten};
		/* font-weight: bold; */
		border: 2px solid ${({ theme }) => theme.colors.white};
	}
`;
