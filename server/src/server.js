import express from 'express'

const app = express()

app.get('/', function (req, res) {
  res.send('Server works')
})

const PORT_NUM = 3000
app.listen(PORT_NUM, function () {
  console.log(`App listening on http://localhost:${3000}`)
})
