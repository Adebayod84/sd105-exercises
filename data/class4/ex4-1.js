//https://jsonplaceholder.typicode.com/

const userListElement = document.getElementById('user-list');

const getUsers = () => {
  return new Promise((resolve, reject) => {
    const userRequest = new XMLHttpRequest();

    userRequest.addEventListener('readystatechange', () => {
      if(userRequest.readyState === 4 && userRequest.status ==200) {
        resolve(JSON.parse(userRequest.responseText));
      } else if(userRequest.readyState === 4) {
        reject('something went wrong');
      }
    });

  userRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
    userRequest.send();
  })
}

const getUsersTodos = (userId) => {
  return new Promise((resolve, reject) => {
    const userRequest = new XMLHttpRequest();

    userRequest.addEventListener('readystatechange', () => {
      if(userRequest.readyState === 4 && userRequest.status ==200) {
        resolve(JSON.parse(userRequest.responseText));
      } else if(userRequest.readyState === 4) {
        reject('something went wrong');
      }
    });

  userRequest.open('GET', `https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    userRequest.send();
  })
}

const createUserList = userData => {
  userData.forEach(user => {
    userListElement.insertAdjacentHTML('beforeend', 
    `<li data-user-id = ${user.id}>${user.name}</li>`)
  });
}
const createTodoList = todos => {
  const todoList = document.createElement('UL');
  todoList.classList.add('open');
  todos.forEach(todo => {
    todoList.insertAdjacentHTML('beforeend', `<li>${todo.title}</li>`)
  })
  return todoList
}

const closeLists = () => {
  document.querySelectorAll('.open').forEach(element => {
    element.innerHTML = '';
    element.classList.remove('open');
  });
}

getUsers()
.then(userData => {
  createUserList(userData);
});

userListElement.addEventListener('click', e => {
  if (e.target.nodeName === 'LI') {
    const currentUserElement = e.target
    getUsersTodos(currentUserElement.dataset.userId)
    .then(todos => createTodoList(todos))
    .then(todoList => {
      currentUserElement.appendChild(todoList);
    })
  }

})