var FestivalQuery = require('./db/festival_query.js');
var query = new FestivalQuery();

var express = require('express');
var app = express();

app.use(express.static("client/build"));

var MongoClient = require("mongodb").MongoClient;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function( req, res) {
  res.sendFile(__dirname + "/client/build/index.html")
})


app.get("/topFestivals", function(req,res){
  query.all(function(festivals) {
  res.json(festivals);
  })
})

app.listen(3000, function () {
  console.log( " listening on 3000" );
})