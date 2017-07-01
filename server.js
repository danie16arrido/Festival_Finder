var Festival = require('./client/src/models/festival.js')

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

app.get("/festivals", function(req,res){
  query.all(function(festivals) {
  res.json(festivals);
  })
})

app.post("/festivals", function(req,res) {

  var newFestival = new Festival(
  {
    title: req.body.title,
    description: req.body.description,
    type: req.body.type,
    start: req.body.start,
    end: req.body.end,
    country: req.body.country,
    latlng: req.body.latlng
  })

  query.add(newFestival, function(festivals) {
    res.json(festivals);
  })
})

app.get("/festivals/:id", function(req,res) {

  query.all(function(festivals) {
  res.json(festivals[req.params.id]);
  })
})

app.listen(3000, function () {
  console.log( " listening on 3000" );
})