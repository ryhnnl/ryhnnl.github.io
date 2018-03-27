const $ = document.querySelector.bind(document)

window.addEventListener('scroll', () => {
	if (window.scrollY < 550) {
		$('nav').classList.remove('black')
	} else {
		$('nav').classList.add('black')
	}
})
