// this is an object
const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("There was a problem");
    // resolve([1,2,3,4,5])
  }, 2000);
});

// result function only gets executed if things go well
doWorkPromise
  .then(result => {
    return console.log(result);
  })
  .catch(error => console.log(error));

// Second Example
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// below is an example of promise chaining
add(1, 2)
  .then(result => {
    return add(result, 3);
  })
  .then(result => add(result, 3))
  .then(result => console.log(result))
  .catch(err => console.error(err));
