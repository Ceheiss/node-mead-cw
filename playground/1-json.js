const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const data = JSON.parse(dataBuffer.toString());

data.name = "Cristobal";
data.age = 31;

const dataJSON = JSON.stringify(data);

fs.writeFileSync('1-json.json', dataJSON);


// const book = {
//   author: 'J.R.R. Tolkien',
//   title: 'Lord of the Rings'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data =  JSON.parse(dataJSON);



// const againObjectBook = JSON.parse(bookJSON);
// console.log(book, typeof book);
// console.log(bookJSON, typeof bookJSON);
// console.log(againObjectBook, typeof againObjectBook);