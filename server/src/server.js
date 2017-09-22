import express from 'express'

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const PORT_NUM = 3000
app.listen(PORT_NUM, function () {
  console.log(`Example app listening on http://localhost:${3000}`)
})
