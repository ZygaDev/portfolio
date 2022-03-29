import styled from 'styled-components';

export const Wrapper = styled.div`
	z-index: 2;
	height: 100vh;
	position: absolute;
	top: 0;
	width: 100vw;
	margin-left: AUTO;
	overflow: hidden;
	svg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
