import styled from 'styled-components';

export const TitleItem = styled.h2`
	font-size: ${({ theme }) => theme.fontSize.xxl};
	z-index: 9;
	position: relative;
	font-weight: bold;
	@media (max-width: 1000px) {
		text-align: center;
	}
`;

export const TitleItemTyping = styled.h1`
	height: 120px;
	font-size: ${({ theme }) => theme.fontSize.xxl};
	z-index: 9;
	position: relative;
	@media (max-width: 1000px) {
		text-align: center;
	}
	span {
		font-size: ${({ theme }) => theme.fontSize.xxl};
	}
`;
