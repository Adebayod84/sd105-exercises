const addPromise = (val) => {
  return new Promise((resolve, reject) => {
    console.log(val)
    resolve(val);
  });
}

addPromise(10)
.then((val) => {
  throw(val)
  console.log(++val);
  return val;
})
.then((val) => {
  console.log(++val);
  return val;
})
.then((val) => {
  console.log(++val);
  return val;
})
.then((val) => {
  console.log(++val);
  return val;
})
.catch((val) => {
  throw('it is broken')
  console.log(val)
})