import React from 'react';
import Header from '../components/organism/Header/Header';
import About from '../components/organism/About/About';
import SkillsList from 'components/organism/SkillsList/SkillsList';
import Resume from '../components/organism/Resume/Resume';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Menu from 'components/organism/Menu/Menu';

const Root = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			<Menu />
			<Wrapper>
				<Header></Header>
				<About></About>
				<SkillsList></SkillsList>
				<Resume></Resume>
			</Wrapper>
		</ThemeProvider>
	);
};
export default Root;
