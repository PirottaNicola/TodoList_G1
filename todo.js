let todos = [] // list of todo elements to display

// check if todos is in local storage and take it
// if not, set it to empty array
window.onload = () => {
  if (todos === null) {
    localStorage.setItem('todos', [])
  } else {
    todos = localStorage.getItem('todos')
  }
}

// add todo to list
const addTodo = (todo) => {
  todos.push(todo)
  localStorage.setItem('todos', todos)
}

// create todo element
const createToDoElement = (todo) => {
  const li = document.createElement('li')
  li.innerHTML = todo
  return li
}

// when pressing button, add todo to list
const button = document.querySelector('button')
button.addEventListener('click', () => {
  const input = document.querySelector('input')
  const todo = input.value
  addTodo(todo)
})
