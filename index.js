const form = document.querySelector('form')
const input = document.querySelector('#task')
const ul = document.querySelector('ul')

const listItem = () => {
	let li = document.createElement('li')
	li.textContent = input.value
	ul.appendChild(li)
}

const clearInput = () => {
	input.value = ''
}


form.addEventListener('submit', (e) => {

	
	listItem()
	clearInput()
	
	e.preventDefault()
})

