new Promise((resolve, reject) => {
  const randomNum = Math.random();
  if (randomNum > 0.5) {
    resolve("Positive message!")
  } else {
    reject("Negative message")
  }
})
.then((resolve_msg) => console.log(resolve_msg))
.catch((reject_msg) => console.log(reject_msg))