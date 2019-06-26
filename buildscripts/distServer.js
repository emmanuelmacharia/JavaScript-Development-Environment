
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
const port = 3000;
const app = express();

app.use(compression());

app.use(express.static('dist'))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.get('/users', (req, res) => {
	res.json([
		{
			"id": 1, "firstName": "Chester", "lastName": "Bennington", "email": "chester@linkinpark.com"
		}, {
			"id": 2, "firstName": "mike", "lastName": "shinoda", "email": "shinoda@linkinpark.com"
		},
		{
			"id": 3, "firstName": "Joe", "lastName": "Han", "email": "Joehan@linkinpark.com"
		}
	])
})


/* eslint-disable no-console */
app.listen(port, err => err ? console.log(err) : open('http://localhost:' + port))
// lt--port 3000

/**
 * checkout 'BrowserSync
 * Localtunnel `lt --port 3000`, `lt --port 3000 --subdomain marsha`
 * now `now`
 */