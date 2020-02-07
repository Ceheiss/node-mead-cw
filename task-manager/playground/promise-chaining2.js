require("../src/db/mongoose");
const Task = require("../src/models/task");

// remove a task by id
// print the number of tasks

Task.countDocuments({ completed: true })
  .then(completed => {
    console.log(`We have ${completed} completed tasks`);
    return Task.findByIdAndDelete("5e3c356e97625206302ab068");
  })
  .then(deleted => {
    console.log(`Crap, ${deleted} con deleted...`);
    return Task.countDocuments({ completed: true });
  })
  .then(count => console.log(`Now we have ${count} completed tasks...`))
  .catch(err => console.error(err));
