var express = require('express')
var app = express()
app.get('/', function (req, res) {
   res.send('This is a Sample Example for Express.js ')
})
app.listen(8080) 
