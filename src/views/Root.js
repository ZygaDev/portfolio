import React from 'react';
import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import Info from 'components/Info/Info';
import Skills from 'components/Skills/Skills';
import Resume from 'components/Resume/Resume';
import Contact from 'components/Contact/Contact';
const Root = (props) => {
	return (
		<>
			<Menu></Menu>
			<Header></Header>
			<Info></Info>
			<Skills></Skills>
			<Resume></Resume>
			<Contact></Contact>
		</>
	);
};

export default Root;
