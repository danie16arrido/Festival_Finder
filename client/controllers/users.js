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


module.exports = usersRouter;
