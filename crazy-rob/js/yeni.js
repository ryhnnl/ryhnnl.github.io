const $$ = document.querySelectorAll.bind(document)
const $ = document.querySelector.bind(document)

$$('nav a').forEach((element) => {
	element.addEventListener('click', () => {
		document
			.getElementsByClassName('active')[0]
			.classList.remove('active')
		element.classList.add('active')
		if ($('nav.show')) {
			$('nav.show').classList.toggle('show')
		}
	})
})

$('nav button.menu').addEventListener('click', () => {
	$('nav').classList.toggle('show')
})
