const doWorkCallback = (callback) => {
  setTimeout(() => {
    //callback('This is my error', undefined)
    callback(undefined, [1,2,3,4,5])
  },2000)
}

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  } else {
    return console.log(result);
  }
})
















// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const delayedAdd = (firstNum, secondNum, callback) => {
//   setTimeout(() => callback(firstNum + secondNum), 2000)
// }

// delayedAdd(1, 4, (sum) => {
//   console.log(sum) // Should print: 5
// })

