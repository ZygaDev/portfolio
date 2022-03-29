import styled from 'styled-components';

export const Icons = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
	gap: 1rem;
	pointer-events: none;

	&:hover {
		> svg {
			&:hover {
				animation: icon3d 200ms infinite;
				cursor: pointer;
				.c-p {
					animation: icon3d 200ms infinite;
				}
			}
		}
	}
	a {
		text-align: center;
		svg {
			padding: 1rem;
			animation: icon3d 200ms 10;
			color: ${({ theme }) => theme.colors.white};
			height: 7rem;
			z-index: 9;
			pointer-events: all;
			&:hover {
				animation: icon3d 200ms infinite;
				cursor: pointer;
			}
		}
		&:nth-child(-n + 2) {
			text-align: left;
		}

		&.res {
			width: min-content;
			height: 100%;
			position: relative;
			span {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				font-size: 2rem;
				font-weight: bold;
				color: ${({ theme }) => theme.colors.blue};
				z-index: 99999;
			}
		}
	}
	@keyframes icon3d {
		0% {
			filter: drop-shadow(0px 3px 3px ${({ theme }) => theme.colors.pink});
			color: ${({ theme }) => theme.colors.blueLight};
		}
		100% {
			filter: drop-shadow(5px 4px 3px ${({ theme }) => theme.colors.pink});
			color: ${({ theme }) => theme.colors.blueLight};
		}
	}
`;
