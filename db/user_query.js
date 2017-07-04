var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var UserQuery = function() {
  this.url = "mongodb://localhost:27017/festival_finder";
  this.collection = "users";
}

UserQuery.prototype = {
  all: function ( onQueryFinished ) {
    MongoClient.connect( this.url,function( err,db ) {
      if( err ) return;
      var collection = db.collection( this.collection );
      collection.find().toArray(function( err,docs ) {
        if ( err ) return;
        onQueryFinished( docs );
      });
    }.bind( this ));
  },

  userFestivals: function( userIDtoFind, onQueryFinished ){
    MongoClient.connect( this.url,function( err,db ) {
      if ( db ) {
        var collection = db.collection( this.collection );
        collection.findOne({ "_id": ObjectId( userIDtoFind )}, function( err, docs) {
          if ( docs ) {
            onQueryFinished( docs.myFestivals );
          }
        })
      }
    }.bind( this ))
  },

  add: function( userId, festivalToAdd, onQueryFinished ){
    MongoClient.connect(this.url,function( err, db ) {
      if ( db ) {
        var collection = db.collection( this.collection );
        collection.update( {"_id": ObjectId(userId) }, {$push: { myFestivals: festivalToAdd } } );
        collection.find({"_id": ObjectId(userId) }).toArray(function( err,docs ) {
          if ( docs ) {
            onQueryFinished( docs );
          }
        })
      }
    }.bind( this ))
  }

}

module.exports = UserQuery;
