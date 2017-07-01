var express = require("express");
var festivalsRouter = express.Router();

var FestivalsQuery = require('../../db/festival_query.js');
var query = new FestivalsQuery();

//country index
festivalsRouter.get('/', function(req, res) {
  query.all( function ( festivals ) {
    res.json( festivals );
  })
});



module.exports = festivalsRouter;
