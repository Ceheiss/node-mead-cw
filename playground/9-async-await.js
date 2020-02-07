const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  // await operator is used with a promise
  const sum = await add(1, 3);
  console.log("We are done 1")
  const sum2 = await add(sum, 3);
  console.log("We are done 2")
  const sum3 = await add(sum2, 3);
  console.log(sum3 + " == should be 10");
};

const doChainedWork = () => {
  add(1, 3)
    .then(sum => add(sum, 3))
    .then(sum2 => add(sum2, 3))
    .then(finalSum => console.log(finalSum + " == should also be 10 in chained"))
    .catch(err => console.log(err));
};

doWork();
doChainedWork();
