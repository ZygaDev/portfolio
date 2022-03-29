import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	@media (max-width: 1000px) {
		flex-direction: column;
		height: auto;
	}
	@media (max-width: 330px) {
		flex-direction: column-reverse;
	}
`;

export const StyledResumeItem = styled.div`
	display: flex;
	position: relative;
	height: 90vh;
	flex-direction: column;
	justify-content: space-evenly;
	@media (max-width: 1000px) {
		height: auto;
	}
`;
