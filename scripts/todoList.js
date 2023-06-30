const todoList = [{
  name: "Make dinner",
  dueDate: '2023-4-7',
},
{name: "Wash dishes",
  dueDate: '2023-5-8'
}];

renderTodoList();

function renderTodoList() {
  let todoListHtml = '';

  todoList.forEach(function(todoItem, index) {
    const { name, dueDate } = todoItem;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${index}, 1);
      renderTodoList();
    " class="delete-todo-btn">Delete</button>
    `;
    todoListHtml += html;
  });

  // for (let i = 0; i < todoList.length; i++) {
  //   const todoItem = todoList[i];
  //   const { name, dueDate } = todoItem;
  //   const html = `
  //   <div>${name}</div>
  //   <div>${dueDate}</div>
  //   <button onclick="
  //     todoList.splice(${i}, 1);
  //     renderTodoList();
  //   " class="delete-todo-btn">Delete</button>
  //   `;
  //   todoListHtml += html;
  // }

  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
  }


function addTodo() {
  const inputElement = document.querySelector('.js-todo-input');
  const dateElement = document.querySelector('.js-date-input');

  const dueDate = dateElement.value;
  const name = inputElement.value;

  todoList.push({name, dueDate});

  inputElement.value = '';
  dateElement.value = '';

  renderTodoList();
}

