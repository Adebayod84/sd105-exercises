new Promise((resolve, reject) => {
  throw new Error('Error message');
})
.then(message=> console.log('Then: ', message))
.catch(message=> console.log('catch: ', message))