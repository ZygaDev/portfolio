import React from 'react';
import Typical from 'react-typical';

export const TypingAnimation = React.memo(
	() => {
		return (
			<Typical
				steps={[
					' Master of Engineering',
					1000,
					' Frontend developer',
					1000,
					' Web developer',
					1000,
				]}
				loop={10}
				wrapper='span'
			/>
		);
	},
	(props, prevProp) => true
);
