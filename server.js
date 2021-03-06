var Festival = require('./client/src/models/festival.js')

var FestivalQuery = require('./db/festival_query.js');
var query = new FestivalQuery();

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//hand routing to controllers
app.use(require("./controllers/index"));

//setup static files
app.use(express.static("client/build"));

//run node.js

app.listen(3000, function () {
  console.log( " listening on 3000" );
})
