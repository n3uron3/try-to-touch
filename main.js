(() => {
	let box = document.getElementById('box')
	let moveRand = () => box.style.transform = `translate(${Math.random()*500}px, ${Math.random()*500}px)`
	box.addEventListener('mouseover', () => moveRand() )
	box.addEventListener('dblclick', () => alert('You won!'))
})();
