const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	axios = require('axios')
	unirest = require("unirest");


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


var getcity = (city: city)=>{

	var req = unirest("GET", "https://apidojo-hipmunk-v1.p.rapidapi.com/locations/search");

	req.query({
		"query": city
	});

	req.headers({
		"x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
		"x-rapidapi-key": "H2UDq7RLvwmshHfBkCvhlahcfGHMp15dKKAjsnxVGuIC0XMzSH"
	});


	req.end(function (res) {
		if (res.error) throw new Error(res.error);

		console.log(res.body);
	});

};


var getFlights = ()=>{

	var request = unirest("GET", "https://apidojo-hipmunk-v1.p.rapidapi.com/flights/book");

	request.query({
		"children": "0",
		"infants_lap": "0",
		"pax": "1",
		"seniors": "0",
		"to0": "YYC",
		"from0": "YYZ",
		"date0": "Oct 27 2019",
		"country": "US",
		"cabin": "Business",
		"booking_url": "eYs397q",
		"itin": "f3593555f4d88acd407552a73e04214f"
	});

	request.headers({
		"x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
		"x-rapidapi-key": "H2UDq7RLvwmshHfBkCvhlahcfGHMp15dKKAjsnxVGuIC0XMzSH"
	});

	var finalRes = null;

	request.end(function (result) {
		if (result.error) throw new Error(result.error);
		return result.body;
	});

};

app.post('/searchFlights', function (req, res){
	var departureCity = this.req.body.departureCity;
	var clas = this.req.body.class;
	var uniCity = this.req.body.uniCity;
	var date = this.req.body.date;



	

	return res.json({result:finalRes});
});

app.post('/hotels', function (req, res){
	res.send(200);
});




const port = process.env.API_PORT || 4000;

const server = app.listen(port, function(){
	console.log('Listening on port ' + port);
});