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

//festival SHOW - filter by festival ID
festivalsRouter.get("/:id", function( req,res ) {
  query.findByID(req.params.id, function( festival ) {
    res.json( festival );
  })
});

//festival SHOW - filter by festival Country
festivalsRouter.get("/country/:country", function(req,res) {
  query.findByCountry(req.params.country, function(festival) {
    console.log(festival);
    res.json(festival);
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
  });

  query.add(newFestival, function( festival ) {
    res.json( festival );
  })
});

// festival UPDATE
festivalsRouter.put("/:id", function( req,res ) {
  query.update(req.params.id, req.body, function( docs ) {
    res.json( docs )
  })
});

//festival DELETE
festivalsRouter.delete("/:id", function ( req, res ) {
  query.delete( req.params.id, function ( docs ) {
    res.json( docs );
  })
})

module.exports = festivalsRouter;
