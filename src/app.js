const express = require("express");
const morgan = require("morgan");

const app = express();

const sayHello = (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const content = name ? `Hello, ${name}!` : "Hello!";
    res.send(content);
  };

  const saySomething = (req, res) => {
    const greeting = req.params.greeting;
    const content = `${greeting}!`;
    res.send(content);
  };
  
app.get("/say/:greeting", saySomething);
app.use(morgan("dev"));
app.get("/hello", sayHello);

module.exports = app;
