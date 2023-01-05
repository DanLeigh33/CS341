//routers map URLs to functions, requires express module and stores it in a variable

const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Britt Barnes');
});

module.exports = routes;