
import express from 'express'
import path from 'path'
import open from 'open'

const port = 3000
const app = express();

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