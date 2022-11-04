var express = require('express')
var app = express()
app.get('/', function (req, res) {
   res.send('<h1>program for multiple get function</h1>')
})
app.get('/welcome/', function (req, res) {
   res.send('Welcome to node express.js.')
})
app.get('/hello/', function (req, res) {
   res.send('hello page.')
})
app.get('/bye/', function (req, res) {
   res.send('bye page.')
})
app.get('/thank/', function (req, res) {
   res.send('Thank you page.')
})
app.listen(8080, function(){
    console.log('Listening on port 8080...')
})
