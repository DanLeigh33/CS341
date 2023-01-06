const express = require('express');
const app = express();
const conDB = require('./db/connect.js');
const bodyParser = require('body-parser');
const port = 80;

conDB.connectDB();

app.use(bodyParser.json());
//gets the routes module from the routes
app.use('/', require('./routes'));


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})