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

const createUserList = userData => {
  userData.forEach(user => {
    userListElement.insertAdjacentElement('beforeend', 
    `<li data-user-id = ${user.id}>${user.name}</li>`)
  });
}
getUsers()
.then(userData => {
  createUserList(userData);
});
