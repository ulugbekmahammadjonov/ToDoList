const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener('click' , addTodo)
todoList.addEventListener('click', deleteCheck)


function addTodo(e){
    e.preventDefault()
    //  div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')


    const completedButton=document.createElement('button')
    completedButton.innerHTML='<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
   
    //  li
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item')
   
    if(todoInput.value==''){
        todoInput=none
    }
    newTodo.textContent=todoInput.value
    
    todoDiv.appendChild(newTodo)
    // trash
    const trashButton=document.createElement('button')
    trashButton.innerHTML='<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    // append tolist
    todoList.appendChild(todoDiv)
    // clearInputvalue
    todoInput.value=''

}

function deleteCheck(e){
    const item=e.target;
    if(item.classList[0]==='trash-btn' || item.classList[0]==='fas fa-trash'){
        item.parentElement.remove()
    }
    

    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle('completed')
        

    }
    
}


