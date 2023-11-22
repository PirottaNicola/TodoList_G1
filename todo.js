let todos = [] // list of todo elements to display
const list = document.querySelector('ul') // list of todo elements to display

//* Functions
const updateLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const render = () => {
  list.innerHTML = ''
  todos.forEach((todo) => {
    const li = document.createElement('li')
    li.innerHTML = todo
    list.appendChild(li)
  })
}

const addTodo = (todo) => {
  if (todo === '' || todo === null || todo === undefined) {
    console.log('todo is empty')
  } else {
    todos.push(todo)
    updateLocalStorage()
    render()
  }
}

const removeTodo = (todo) => {
  todos = todos.filter((t) => t !== todo)
  updateLocalStorage()
  render()
}

const getTodos = () => {
  const todos = localStorage.getItem('todos')
  if (todos) {
    return JSON.parse(todos)
  } else {
    return []
  }
}

//* Event listeners
document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault()
  const todo = document.querySelector('input').value
  addTodo(todo)
  document.querySelector('input').value = ''
})

list.addEventListener('click', (e) => {
  removeTodo(e.target.innerHTML) // removes todo from list (all todos with content (kinda makes sense))
})

//* Initial render
todos = getTodos()
render()
