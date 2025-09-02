import { toDo } from './toDo';

export default (project) => {
  const form = document.querySelector('#add-todo-form');
  let container = document.querySelector('.container');
  let toDos = document.createElement('div');
  toDos.classList.add('toDos');
  printTodo(project.list[0], toDos);
  container.appendChild(toDos);

  function printTodo(todo, div) {
    let toDoDiv = document.createElement('div');
    toDoDiv.classList.add('to-do-div');
    for (const [key, value] of Object.entries(todo)) {
      const p = document.createElement('p');
      p.textContent = `${key}: ${value}`;
      toDoDiv.appendChild(p);
    }
    div.appendChild(toDoDiv);
  }
  let addBtn = document.createElement('button');
  addBtn.classList.add('add-button');
  addBtn.textContent = 'add todo';
  container.appendChild(addBtn);
  addBtn.addEventListener('click', () => {
      form.style.display = "block"
    });
  
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let newTodo = toDo(
      formData.get(`name`),
      formData.get('description'),
      formData.get('location'),
      formData.get('due-date'),
      formData.get('priority')
    );
    
    printTodo(newTodo, toDos);
    form.style.display = 'none';
    form.reset();
  });
  
};