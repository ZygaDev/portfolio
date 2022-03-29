import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (max-width: 330px) {
		height: auto;
	}
`;

export const AvatarRound = styled.div`
	border-radius: 100px;
	height: 200px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.white};
	border: 5px solid ${({ theme }) => theme.colors.blue};
	width: 200px;
	margin: 0 auto;
	z-index: 9;
	position: relative;
	svg {
		max-height: 400px;
		left: -110px;
		position: relative;
		top: -40px;
	}
`;
