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

app.post('/tourinfo', function (req,res){c
    var allTours = 'hello';
    axios.get('http://accentour-final-platinum.uedpnpkwfs.us-east-2.elasticbeanstalk.com/get_all_tours')
    .then((result)=>{
		allTours;
    });
    return res.json(allTours);
});

var bookFlights = (url, key, clas, date)=>{

	var req = unirest("GET", "https://apidojo-hipmunk-v1.p.rapidapi.com/flights/book");

	req.query({
		"cabin": clas,
		"booking_url": url,
		"itin": key,
		"date0": date,
	});

	req.headers({
		"x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
		"x-rapidapi-key": "e600a8145cmsh66979272cf4564cp151f8bjsne7364342f99b"
	});


	req.end(function (res) {
		if (res.error) throw new Error(res.error);

		console.log(res.body);
	});
}

app.post('/loadAirports', function (req, res){

	var departureCity = req.body.departureCity;

	var drequest = unirest("GET", "https://apidojo-hipmunk-v1.p.rapidapi.com/locations/search");

	drequest.query({
		"query": departureCity
	});

	drequest.headers({
		"x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
		"x-rapidapi-key": "e600a8145cmsh66979272cf4564cp151f8bjsne7364342f99b"
	});


	drequest.end(function (result) {
		if (result.error) throw new Error(result.error);
		if(result.body.endpoints.city[0]){
			return res.json({airports: result.body.endpoints.city[0].related_airports});
		}else{
			return res.json({airports: 'error'});
		}
	});
});

app.post('/searchFlights', function (req, res){
	var departureCity = req.body.departureCity;
	var clas = req.body.clas;
	var uniAirport = req.body.uniAirport;
	var date = req.body.date;
	var people = req.body.people;
	var dAirports, uAirports;

	console.log('search flights');

	res.send(200);

});

app.post('/hotels', function (req, res){
	res.send(200);
});


const port = process.env.API_PORT || 4000;

const server = app.listen(port, function(){
	console.log('Listening on port ' + port);
});