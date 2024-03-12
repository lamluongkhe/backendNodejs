const express = require('express')
const app = express()
const port = 8080
var router = require('./apiRouter.js')




// app.get('/', (req, res) => {
//   res.send('Hello World! Khe neee')
// })

app.use('/api',router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})