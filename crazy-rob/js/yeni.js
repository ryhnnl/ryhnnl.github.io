const $$ = document.querySelectorAll.bind(document)

$$('nav a').forEach((element) => {
	element.addEventListener('click', () => {
		document
			.getElementsByClassName('active')[0]
			.classList.remove('active')
		element.classList.add('active')
	})
})
