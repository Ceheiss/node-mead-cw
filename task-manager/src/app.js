const express = require("express");
const app = express();
require("./db/mongoose.js");
const User = require("./models/user.js");
const Task = require("./models/task.js");

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Reached Home</h1>");
});

app.get("/users", (req, res) => {
  User.find({})
    .then(users => {
      res.send(users);
    })
    .catch(err => res.status(500).send(err));
});

app.get("/users/:id", (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then(user => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.send(user);
    })
    .catch(err => res.status(500).send(err));
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then(tasks => {
      res.send(tasks);
    })
    .catch(err => res.status(500).send(err));
});

app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;
  Task.findById(_id)
    .then(task => {
      if (!task) {
        return res.status(404).send("Task not found");
      } else {
        res.send(task);
      }
    })
    .catch(err => res.status(500).send(err));
});

app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(result => {
      res.status(201).send(`User added: ${result}`);
    })
    .catch(err => res.status(400).send(`We have some problems: ${err}`));
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(result => res.status(201).send(result))
    .catch(err => res.status(400).send(`Error: ${err}`));
});

app.listen(port, () => console.log(`Serving Tasks App in port ${port}`));
