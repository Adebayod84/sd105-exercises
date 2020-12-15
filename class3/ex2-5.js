const promArray = ['A', 'B', 'C', 'D', 'E', 'F'].map(val => {
  return new Promise((resolve, reject) => {
    const time = Math.random() * 3000
    setTimeout(() => {
      resolve(val)
    }, time);
  })
})

Promise.all(promArray)
.then(val => console.log(val));
