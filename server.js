// Creating express server
const express = require('express')
const app = express()

// routes to run on web browser
app.get('/', (req, res) => {
  res.send('Amit is that you')
})

app.listen(3000, () =>{
    console.log('Server is running on port 3000')
}) 