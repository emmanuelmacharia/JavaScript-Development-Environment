
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'; //eslint-disable-line

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.get('/users', (req, res) => {
	res.json([
		{
			"id":1, "firstname": "Chester", "lastname": "Bennington", "email": "chester@linkinpark.com"
		},{
			"id":2, "firstname": "mike", "lastname":"shinoda", "email":"shinoda@linkinpark.com"},
		{
			"id":3, "firstname":"Joe", "lastname": "Han", "email": "Joehan@linkinpark.com"
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