import { useState } from 'react';
export const useMove = () => {
	const [state, setState] = useState({ x: 0, y: 0 });
	const pic = document.querySelectorAll('.layer');

	const handleMouseMove = (e) => {
		e.persist();
		setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
		pic.forEach((e) => {
			const speed = e.getAttribute('speed');
			const x2 = (window.innerWidth - state.x * speed) / 100;
			const y2 = (window.innerWidth - state.y * speed) / 100;
			const move = `translateX(${x2}px) translateY(${y2}px)`;
			e.style.transform = move;
		});
	};

	return { handleMouseMove };
};
