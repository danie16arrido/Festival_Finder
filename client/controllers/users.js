var express = require("express");
var usersRouter = express.Router();

var UsersQuery = require('../../db/user_query.js');
var queryUsers = new UsersQuery();

//users INDEX
usersRouter.get('/', function( req, res ) {
  queryUsers.all( function ( users ) {
    res.json( users );
  })
});

//users' festivals
usersRouter.get('/:userid', function( req, res ) {
  //toDo check that id does not exists already
  queryUsers.userFestivals( req.params.userid, function ( festivals ) {
    res.json( festivals );
  })
});

//add festival to user's favourites CREATE
usersRouter.post("/:userId", function(req,res) {
  var newFestival = req.body;
  queryUsers.add( req.params.userId , newFestival, function( festival ) {
    res.json( festival );
  })
});

//delete festival from user's favourites DELETE
usersRouter.delete("/:userId/:festivalId", function ( req, res ) {
  queryUsers.delete( req.params.userId, req.params.festivalId, function ( docs ) {
    res.json( docs );
  })
});


module.exports = usersRouter;
