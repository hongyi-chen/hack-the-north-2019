const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	axios = require('axios');


const app = express();
app.use(cors());


app.post('/signup', function (req, res){
	axios.post('http://accentour-final-platinum.uedpnpkwfs.us-east-2.elasticbeanstalk.com/create_user?username'
		+req.body.us2ername).then((res)=>{
			console.log(res);
		});
	
	return res.json();
});

app.post('/login', function (req, res) {
	console.log(req.body);
  	return res.json();
});

app.post('/searchTours', function (req,res){
	var uniDestination = req.body.uniDestination;
	var visitSeason = req.body.visitSeason;
	var amountTravellers = req.body.amountTravellers;

	axios.get('http://accentour-final-platinum.uedpnpkwfs.us-east-2.elasticbeanstalk.com/get_all_tours')
	.then((result)=>{
		result = result.data;
		var matches = [];
		for(var k of result){
			var tour = k;
			if(tour.UniversityName==uniDestination && tour.Season==visitSeason && tour.AvailableSize >= amountTravellers){
				matches.push(tour);
			}
    	}
		console.log(matches);
		return res.json(matches);
	});
});


var bookFlights = (url, key, clas, date)=>{

	axios.get("https://apidojo-hipmunk-v1.p.rapidapi.com/flights/book", {
		params: {
			"cabin": clas,
			"booking_url": url,
			"itin": key,
			"date0": date,
		},
		headers: {
			"x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
			"x-rapidapi-key": process.env.RAPIDAPI_KEY
		}
	}).then((res) => {
		console.log(res.data);
	}).catch((err) => {
		console.error(err);
	});
}

app.post('/loadAirports', function (req, res){

	var departureCity = "California";

	console.log(req.body);

	axios.get("https://apidojo-hipmunk-v1.p.rapidapi.com/locations/search", {
		params: {
			"query": departureCity
		},
		headers: {
			"x-rapidapi-host": "apidojo-hipmunk-v1.p.rapidapi.com",
			"x-rapidapi-key": process.env.RAPIDAPI_KEY
		}
	}).then((result) => {
		var data = result.data;
		if(data.endpoints && data.endpoints.city[0]){
			return res.json({airports: data.endpoints.city[0].related_airports});
		}else{
			return res.json({airports: 'error'});
		}
	}).catch((err) => {
		console.error(err);
		return res.json({airports: 'error'});
	});
});


const port = process.env.API_PORT || 4000;

const server = app.listen(port, function(){
	console.log('Listening on port ' + port);
});