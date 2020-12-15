const checkRandomNum = (randomNum) => {
  return new Promise((resolve, reject) => {
    if (randomNum > 10) {
      resolve(`Positive message ${randomNum}`)

    } else {
      reject(`Negative message ${randomNum}`)
    }

  })
}

// checkRandomNum(Math.random() * 20)
checkRandomNum(5)
.then(resolve_msg => console.log(resolve_msg))
.catch(reject_msg => console.log(reject_msg))

checkRandomNum(15)
.then(resolve_msg => console.log(resolve_msg))
.catch(reject_msg => console.log(reject_msg))