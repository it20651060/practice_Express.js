const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Here, you're requiring the express and body-parser modules, and creating a new Express application instance. You're also setting the port number for your server to run on.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//These lines of code tell your Express application to use the Body Parser middleware, which will parse incoming request bodies in either URL-encoded or JSON format.

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/user", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  res.send(users);
});
app.post("/api/user", (req, res) => {
  const { name } = req.body;
  const user = { id: 3, name };
  res.send(user);
});

//These are your route handlers, which define how your server should respond to incoming requests.

// The first route handler responds to a GET request to the root URL (/) by sending a "Hello World!" message back to the client.

// The second route handler responds to a GET request to the /api/user URL by sending an array of user objects back to the client.

// The third route handler responds to a POST request to the /api/user URL by creating a new user object based on the name property in the request body, and sending that object back to the client.

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Finally, this code starts your Express application and listens for incoming requests on the specified port.

// Now that you've created your basic Express.js REST API, you can start testing it using a tool like Postman or curl.
