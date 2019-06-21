var express = require('express');
var path = require('path')
var open = require('open')

var port = 3000
var app = express();

app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, err => err ? console.log(err) : open('http://localhost:' + port))
// lt--port 3000

/**
 * checkout 'BrowserSync
 * Localtunnel `lt --port 3000`, `lt --port 3000 --subdomain marsha`
 * now `now`
 */