const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//gets the routes module from the routes
app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})