const express = require('express')
const app = express()
const expressWs = require('express-ws')
const websocket = require('./websocket')

expressWs(app)

app.use(express.static('public'))
app.use('/websocket', websocket)
app.get('*', (req, res) => {})
app.listen(3100, () => {
  console.log('server is listening on port 3100')
})
