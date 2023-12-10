//importing modules
const express = require('express')

//assigning variable apps
const app = express()

//set up port
const port = 3000

//route handler
app.get('/', (req, res) => {
    const message = 'Hello, welcome to the Hydrovative API! 👋';
    console.log('Index route accessed');
    res.send('Hello There!')
  })

//port listening
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
