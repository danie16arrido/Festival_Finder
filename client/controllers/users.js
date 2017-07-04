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


module.exports = usersRouter;
