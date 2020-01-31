// Object property shorthand

const name = "Andrew"
const userAge = 27

const user = {
  name: name,
  age: userAge,
  location: 'Philadelphia'
}

// if variable has the same name as the property we can do it like this:

const secondUser = {
  name,
  userAge,
  location: "Some place"
}

// Object destructuring
// Useful when you have an object and you are trying to access properties from it

const product = {
  label: "red notebook",
  price: 3,
  stock: 201,
  salePrice: 201
}

// We want to extract the properties into variables
// Here I extract label and price
const { label, price } = product;

// You can also rename the variable
const { label:newLabelName} = product;
console.log(newLabelName);

// You can also add defaults in case the property is not in the object
// Sice Stock exists, it prints 201 (not 33), since rating doesn't exist, it prints 5 (not undefined)
const { stock = 33, rating = 5} = product;
console.log(rating);
console.log(stock);


const transaction1 = (type, myProduct) => {
}

// If we know the argument is an object I can destructure it inline
const transaction2 = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction2('order', product);