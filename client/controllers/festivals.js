var express = require("express");
var festivalsRouter = express.Router();

var FestivalsQuery = require('../../db/festival_query.js');
var query = new FestivalsQuery();

//constructor
var Festival = require('../src/models/festival.js')

//festival INDEX
festivalsRouter.get('/', function( req, res ) {
  query.all( function ( festivals ) {
    res.json( festivals );
  })
});

//festival SHOW
festivalsRouter.get("/:id", function(req,res) {
  query.all( function( festivals ) {
  res.json( festivals[req.params.id] );
  })
});

//festival CREATE
festivalsRouter.post("/", function(req,res) {

  var newFestival = new Festival(
  {
    title: req.body.title,
    description: req.body.description,
    type: req.body.type,
    start: req.body.start,
    end: req.body.end,
    country: req.body.country,
    position: req.body.position
  })

  query.add(newFestival, function(festivals) {
    res.json(festivals);
  })
})


module.exports = festivalsRouter;
