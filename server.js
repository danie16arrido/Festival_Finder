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

app.get("/topFestivals", function(req, res) {
  MongoClient.connect("mongodb://localhost:27017/top_festivals_site", function(err,db) {
    db.collection("festivals").find().toArray(function(err,docs) {
      res.json(docs);
      db.close();
    })
  })

})

app.listen(3000, function () {
  console.log( " listening on 3000" );
})