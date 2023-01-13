const express = require('express');
const app = express();
const conDB = require('./db/connect.js');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

conDB.connectDB();

app.use(bodyParser.json());
//gets the routes module from the routes
app.use((req, res,  next) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})
app.use('/', require('./routes'));


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})