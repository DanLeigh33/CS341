//routers map URLs to functions, requires express module and stores it in a variable

const routes = require('express').Router();

routes.use('/contacts', require('./contacts.js'))

module.exports = routes;