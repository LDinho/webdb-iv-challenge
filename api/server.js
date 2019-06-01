const express = require('express');

const server = express();

const middleware = require('./config/middleware');

// import routers
const {
  dishesRouter,
  recipesRouter
} = require('./routes');

middleware(server); // third-party middleware

server.use(express.json());

// routers
server.use("/api/dishes", dishesRouter);
server.use("/api/recipes", recipesRouter);

server.get('/', (req, res) => {
  res.send(`<p>Database Recipes</p>`)
});

module.exports = server;
