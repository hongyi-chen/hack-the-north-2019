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


var getdAirport = (city)=>{

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

		this.dAirports = res.body.endpoints.city[0].related_airports;
	});

};

var getuAirport = (city)=>{

	var req = unirest("GET", "https://apidojo-hipmunk-v1.p.rapidapi.com/locations/search");
	var res = "";

	req.query({
		"query": city
	});

	req.headers({
		"x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
		"x-rapidapi-key": "H2UDq7RLvwmshHfBkCvhlahcfGHMp15dKKAjsnxVGuIC0XMzSH"
	});


	req.end(function (res) {
		if (res.error) throw new Error(res.error);

		res = res.body.endpoints.city[0].related_airports;
	});

	return res;

};

var getFlights = (dAirports,uAirports, clas, date, people)=>{

	console.log('getflights',dAirports,date);

	var req = unirest("GET", "https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session");

	req.query({
		"from0": dAirports,
		"to0": uAirports,
		"date0": date,
		"pax": people,
		"cabin": clas
	});

	req.headers({
		"x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
		"x-rapidapi-key": "H2UDq7RLvwmshHfBkCvhlahcfGHMp15dKKAjsnxVGuIC0XMzSH"
	});


	req.end(function (res) {
		if (res.error) throw new Error(res.error);
		var result = res.body.itins;
		console.log(result);
		var flights = {};

		for(var key in result){
			var flight = {
				price: result[key].price
			};
			for (var k in result[key].booking_urls){
				flight['url'] = k;
			}
			bookFlights(flight['url'], key, clas,date);
			flights[key]=flight;
		}


		console.log("flights",flights);
	});

};

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
		"x-rapidapi-key": "H2UDq7RLvwmshHfBkCvhlahcfGHMp15dKKAjsnxVGuIC0XMzSH"
	});


	req.end(function (res) {
		if (res.error) throw new Error(res.error);

		console.log(res.body);
	});
}

app.post('/searchFlights', function (req, res){
	var departureCity = req.body.departureCity;
	var clas = req.body.clas;
	var uniCity = req.body.uniCity;
	var date = req.body.date;
	var people = req.body.people;
	var dAirports, uAirports;


	//departure airports

	var drequest = unirest("GET", "https://apidojo-hipmunk-v1.p.rapidapi.com/locations/search");

	drequest.query({
		"query": departureCity
	});

	drequest.headers({
		"x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
		"x-rapidapi-key": "H2UDq7RLvwmshHfBkCvhlahcfGHMp15dKKAjsnxVGuIC0XMzSH"
	});


	drequest.end(function (res) {
		if (res.error) throw new Error(res.error);

		dAirports = res.body.endpoints.city[0].related_airports;

		if(uAirports) var flights = getFlights(dAirports, uAirports,clas,date,people);
	});


	//uni airports

	var urequest = unirest("GET", "https://apidojo-hipmunk-v1.p.rapidapi.com/locations/search");

	urequest.query({
		"query": uniCity
	});

	urequest.headers({
		"x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
		"x-rapidapi-key": "H2UDq7RLvwmshHfBkCvhlahcfGHMp15dKKAjsnxVGuIC0XMzSH"
	});


	urequest.end(function (res) {
		if (res.error) throw new Error(res.error);

		uAirports = res.body.endpoints.city[0].related_airports;

		if(dAirports) var flights = getFlights(dAirports, uAirports,clas,date,people);

	});

	res.send(200);

});

app.post('/hotels', function (req, res){
	res.send(200);
});




const port = process.env.API_PORT || 4000;

const server = app.listen(port, function(){
	console.log('Listening on port ' + port);
});