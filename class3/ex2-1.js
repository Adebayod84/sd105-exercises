new Promise ((resolve, reject) => {
  setTimeout(reject('Promise rejected'), 2000)
})
.then(msg => console.log(msg), msg => console.log(msg))