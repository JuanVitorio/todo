//Elementos ------------------------------------------------------------

const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#todo-form')
const cancelEditbtn = document.querySelector('#cancel-edit-btn')

let oldInputValue//essa variável serve pra guardar o antigo título. Isso vai servir pra edição mais futuramente

//Funções -------------------------------------------------------------

const saveTodo = (text) =>{

  //essa função vai criar os elementos e adicionar. Ela vai ser chamada no evento (1)

  const todo = document.createElement("div")
  todo.classList.add("todo") //isso adicionar a classe ao elemento que foi criado, nesse caso a div

  const todoTittle = document.createElement("h3")
  todoTittle.innerText = text //innerText serve pra substituir um texto da tela por algo
  todo.appendChild(todoTittle) 
  
  // o appendChild serve pra adicionar o elemento ao html, porque você criou ele com o createElement, mas ele ainda precisa ser adicionado.

  const doneBtn = document.createElement('button')
  doneBtn.classList.add('finish-todo')
  doneBtn.innerHTML = '<i class = "fa-solid fa-check"></i>'
  todo.appendChild(doneBtn)

  const editBtn = document.createElement('button')
  editBtn.classList.add('edit-todo')
  editBtn.innerHTML = '<i class = "fa-solid fa-pen"></i>'
  todo.appendChild(editBtn)

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('remove-todo')
  deleteBtn.innerHTML = '<i class = "fa-solid fa-xmark"></i>'
  todo.appendChild(deleteBtn)

  todoList.appendChild(todo)

  todoInput.value = '' //isso vai deixar o input vazio depois de adicionar algo
  todoInput.focus() //isso vai deixar o input em foco de novo depois de adicionar algo
}

const toggleForms = () =>{ 
  
  //essa função serve pra esconder os elementos quando o usuário for editar, isso deixa a interface mais clean pra melhor uso

  editForm.classList.toggle('hide')
  todoForm.classList.toggle('hide')
  todoList.classList.toggle('hide')
}


const updateTodo = (text) =>{
  const todos = document.querySelectorAll('todo')

todos.forEach((todo) =>{
  let todoTittle = todo.querySelector('h3')
})

}



//Eventos -------------------------------------------------



//(1)
todoForm.addEventListener('submit', (e) =>{

  e.preventDefault() //isso é pra o formulário não enviar, ou seja, ele só fica no front, não vai pro back

  const inputValue = todoInput.value

  if(inputValue){
    saveTodo(inputValue)
  }
})



//(2)
document.addEventListener('click', (e) =>{ //evento pra quando algum botão for clicado

  const targetEl = e.target //vai verificar qual o botão alvo
  const parentEl = targetEl.closest("div") //ele vai procurar a div mais próxima
  let todoTittle

  if(parentEl && parentEl.querySelector('h3')){
    todoTittle = parentEl.querySelector('h3').innerText
  }

// esses if's verificam qual a classe que o botão possue

//verificar tarefa
  if(targetEl.classList.contains("finish-todo")){ 

    parentEl.classList.toggle('done') //o toggle é pra o botão não ficar adicionando a classe. Então se já tiver a classe, ele tira
  }

  //remover tarefa
  if(targetEl.classList.contains("remove-todo")){
    parentEl.remove() //o remove obviamente deleta o elemento pai (parentEl)
  }

  //editar tarefa
  if(targetEl.classList.contains("edit-todo")){

    toggleForms()

    editInput.value = todoTittle
    oldInputValue = todoTittle
  }
})

//(3)
cancelEditbtn.addEventListener('click', (e) =>{
  e.preventDefault()

  toggleForms()
})


editForm.addEventListener('click', (e) =>{
  e.preventDefault()

  const editInputValue = editInput.value

  if(editInputValue){
    updateTodo(editInputValue)



  }

})
