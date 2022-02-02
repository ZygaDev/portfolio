document.addEventListener('mousemove', parallax);
function parallax(e) {
	this.querySelectorAll('.layer').forEach((layer) => {
		const speed = layer.getAttribute('data-speed');
		const x = (window.innerWidth - e.pageX * speed) / 100;
		const y = (window.innerWidth - e.pageY * speed) / 100;
		layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
	});
}

var observer = new IntersectionObserver(
	function (entries) {
		if (entries[0].isIntersecting === true) {
			const counters = document.querySelectorAll('.count');
			// Main function
			for (let n of counters) {
				const updateCount = () => {
					const target = +n.getAttribute('data-target');
					const count = +n.innerText;
					const speed = 10; // change animation speed here
					const inc = target / speed;
					if (count < target) {
						n.innerText = Math.ceil(count + inc);
						setTimeout(updateCount, 1);
					} else {
						n.innerText = target;
					}
				};
				updateCount();
			}
		} else {
		}
	},
	{ threshold: [1] }
);

observer.observe(document.querySelector('#counter'));
