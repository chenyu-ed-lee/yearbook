var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './client')));
// require('./config/mongoose.js');
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
// require('./config/route.js')(app);

app.listen(8000, function() {
	console.log('Yearbook on port: 8000');
})