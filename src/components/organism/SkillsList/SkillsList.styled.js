import { Card } from 'components/molecules/SkillsListItem/SkillsItem.styled';
import styled from 'styled-components';

export const StyledList = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 1rem;
	pointer-events: none;
	@media (max-width: 1000px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 330px) {
		grid-template-columns: repeat(2, 1fr);
	}
	&:hover {
		> ${Card} {
			&:hover {
				transform: scale(1.15);
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
				z-index: 10;
				i {
					color: ${({ theme }) => theme.colors.blue};
					transform: scale(1.1);
				}
			}
			&:not(:hover) {
				opacity: 0.5;
			}
		}
	}
`;

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	@media (max-width: 1000px) {
		flex-direction: column-reverse;
		height: auto;
	}
`;

export const UpRight = styled.div`
	writing-mode: vertical-lr;
	span {
		font-size: ${({ theme }) => theme.fontSize.xl};
		letter-spacing: 4px;
		text-align: center;
		&.rotate {
			transform: rotate(180deg);
			display: block;
		}
	}
`;
