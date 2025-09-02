import { toDo } from './toDo';

export default (project) => {
  let container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
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
    let newTodo = toDo(
      'go to bank',
      'get money',
      'bank',
      'tomorrow',
      'high',
      false
    );
    project.list.push(newTodo);
    printTodo(project.list[1], toDos);
  });
};
