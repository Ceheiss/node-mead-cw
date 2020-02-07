require("../src/db/mongoose");
const User = require("../src/models/user");

const _id = "5e3c40967631ce18e2d3523e";

User.findByIdAndUpdate(_id, { name: "Pablazao" })
  .then(user => {
    console.log("User is: " + user)
    // important to return a promise so we can keep the chain going
    return User.countDocuments({ name: "Pablazao" });
  })
  .then(result => console.log(result + " salio bien hermanito"))
  .catch(err => console.log(err));
