const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());


const port = process.env.API_PORT || 4000;

const server = app.listen(port, function(){
 console.log('Listening on port ' + port);
});