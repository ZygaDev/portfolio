import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;400;700&display=swap');
html {
	box-sizing: border-box;
}
*,
*::after,
*::before {
	font-size: 62.5%;
	box-sizing: inherit;
}
body {
	font-family: 'Work Sans', sans-serif;
margin:0;
}
html {
	scroll-behavior: smooth;
}

`;
