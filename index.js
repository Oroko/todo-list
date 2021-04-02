
// This is the array that will hold the todolist items
let todoItems = [] 

// This function will create a new todo object
// based on the text that was entered in the text input
// and push it into the 'todoItems' array


const addTodo = (text) => {
	const todo = {
		text,
		completed: false,
		priority: ['Highest','High', 'Medium', 'Low'],
		id: Date.now()
	}

	todoItems.push(todo);
	console.log(todoItems)
}

// select the form
const form = document.querySelector('form')






// Add a submit Event listener
form.addEventListener('submit', (e) => {

	// prevent page from refresh on form submission
	e.preventDefault()

	// select the text input 
	const input = document.querySelector('#task')

	// Get the value of the text and remove whitespace
	const text = input.value.trim();


	if (text !== '') {
		addTodo(text);
	}
	input.value = ''
	input.focus();


	
})

