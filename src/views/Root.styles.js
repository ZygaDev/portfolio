import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	background-color: ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.blue};
	position: relative;
	overflow: hidden;
	margin-left: AUTO;
`;
