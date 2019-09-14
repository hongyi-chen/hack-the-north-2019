const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	axios = require('axios');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.post('/signup', function (req, res){
	axios.post('http://accentour-final-platinum.uedpnpkwfs.us-east-2.elasticbeanstalk.com/create_user?username'
		+req.body.username).then((res)=>{
			console.log(res);
		});
	
	res.send(200);
});

app.post('/login', function (req, res) {
	console.log(req.body);
  	res.send(200);
});

app.post('/book', function (req, res){
	res.send(200);
});

app.post('/flights', function (req, res){
	res.send(200);
});

app.post('/hotels', function (req, res){
	res.send(200);
});




const port = process.env.API_PORT || 4000;

const server = app.listen(port, function(){
	console.log('Listening on port ' + port);
});