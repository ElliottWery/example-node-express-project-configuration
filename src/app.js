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
    const name = req.query.name;
  
    const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
    res.send(content);
  };

  app.use((err, req, res, next) => {
    console.error(err);
    res.send(err);
  });

app.get("/hello", sayHello);
app.get("/say/:greeting", saySomething);
app.use(morgan("dev"));

module.exports = app;
