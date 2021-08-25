const serverless = require('serverless-http')
const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send('Hey !!!!')
})

module.exports.handler = serverless(app)
