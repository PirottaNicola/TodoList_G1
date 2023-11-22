let todos = [] // list of todo elements to display
let todosInLocalStorage = localStorage.getItem('todos') // todos in local storage onload

//* when page loads, load todos from local storage
window.addEventListener('load', () => {
  loadTodos()
})

// add todo to list
const addTodo = (todo) => {
  // add todo to todos
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
}

//* get from local storage, create todo elements, append to list
const loadTodos = () => {
  // if todosInLocalStorage is null, set to empty array
  todos = JSON.parse(todosInLocalStorage) || []
  // create todo elements
  const todoElements = todos.map((todo) => createToDoElement(todo))
  // append todo elements to list
  const list = document.querySelector('ul')
  todoElements.forEach((todoElement) => list.appendChild(todoElement))
}

//* create todo element
const createToDoElement = (todo) => {
  const li = document.createElement('li')
  li.innerHTML = todo
  return li
}

const addTodoElement = (todo) => {
  const todoElement = createToDoElement(todo)
  const list = document.querySelector('ul')
  list.appendChild(todoElement)
}

//* when pressing button, add todo to list
const button = document.querySelector('button')
button.addEventListener('click', () => {
  const input = document.querySelector('input')
  const todo = input.value
  addTodo(todo)
  addTodoElement(todo)
})
