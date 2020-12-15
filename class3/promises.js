let success = true;


const getStuff = new Promise((resolve, reject) => {
  const data = 'The promise was resolved'
  if(success) {
  resolve(data);
  } else {
  reject('error message: The promise was rejected.');
  }
});


getStuff.then(message => console.log(message)
,message => { console.log(message);
});

// myPromise.then(resolvearg, rejectarg)


// to illustrate the pending status
// let completed = true;

// let learnJS = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (completed) {
//       resolve('I have completed learning JS.');
//     } else {
//       reject("I haven't completed learning JS pageYOffset.")
//     }
//   }, 6 * 1000);
// });