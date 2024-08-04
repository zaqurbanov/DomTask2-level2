

const todoListWrap = document.querySelector('.todoListWrap');
const todoForm  = document.querySelector('.todoForm');
const todoInput = document.querySelector('.todoInput');
const todoList = [];

const startTask1Todo = ()=>{
    todoForm.addEventListener('submit',addTodoList)
    // renderTodo()


}
const addTodoList = (e)=>{
    e.preventDefault();
    const newTodo = todoInput.value;
    todoList.push(newTodo)
    renderTodo()
    todoInput.value = ""
    
}

const renderTodo = ()=>{
    todoListWrap.innerHTML = ""
    todoList.forEach((todo,index)=>{
    const todoRow= createTodoRow(todo,index);
    todoListWrap.appendChild(todoRow)
    })


}

const removeTodo = (e)=>{
    const id = e.target.parentElement.id.split("-")[1]
    todoList.splice(id,1)
    renderTodo()
}
const createTodoRow=(text,index)=>{

    const li = document.createElement('li');
    li.id = `id-${index}`
    const p = document.createElement('p');
    p.textContent = text;

    const icon = document.createElement('i');
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash-can");

    icon.addEventListener('click',removeTodo)


    li.appendChild(p)
    li.appendChild(icon)

    return li

}
export default startTask1Todo