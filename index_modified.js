const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let todos = [
  { id: 1, text: "Buy groceries", done: false },
  { id: 2, text: "Do laundry", done: true },
];
app.get("/api/todos", (req, res) => {
  res.send(todos);
});
app.get("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    res.send(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});
app.post("/api/todos", (req, res) => {
  const { text, done } = req.body;
  const id = todos.length + 1;
  const todo = { id, text, done };
  todos.push(todo);
  res.send(todo);
});
app.put("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const { text, done } = req.body;
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.text = text || todo.text;
    todo.done = done || todo.done;
    res.send(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});
app.delete("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.send(`Todo with id ${id} has been deleted`);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// The modified code adds support for CRUD (Create, Read, Update, Delete) operations on a collection of todo items. The todos array serves as an in-memory data store for the collection, and the REST API provides endpoints for manipulating the collection through HTTP requests.

// The new endpoints are as follows:

// GET /api/todos - Returns the entire collection of todo items
// GET /api/todos/:id - Returns a single todo item with the specified ID
// POST /api/todos - Creates a new todo item with the provided text and done status
// PUT /api/todos/:id - Updates the text and/or done status of an existing todo item with the specified ID
// DELETE /api/todos/:id - Deletes the todo item with the specified ID
// When a GET request is made to the /api/todos endpoint, the server responds with the entire todos array. When a GET request is made to the /api/todos/:id endpoint, the server responds with the todo item that matches the specified ID, or a 404 error if no such item exists.

// When a POST request is made to the /api/todos endpoint, a new todo item is created with the provided text and done status, assigned an ID, and added to the todos array. The server then responds with the newly created todo item.

// When a PUT request is made to the /api/todos/:id endpoint, the server updates the text and/or done status of the todo item with the specified ID, or responds with a 404 error if no such item exists. The server then responds with the updated todo item.

// When a DELETE request is made to the /api/todos/:id endpoint, the server deletes the todo item with the specified ID from the todos array and responds with a message indicating that the deletion was successful.
