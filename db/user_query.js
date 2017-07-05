var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var FestivalsQuery = require('./festival_query.js');
var queryFestivals = new FestivalsQuery();


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
            var ids = docs.myFestivals.map(function(festival){
              return ObjectId(festival.id)
            })
            queryFestivals.findManyById(ids, onQueryFinished)
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
            onQueryFinished( docs.myFestivals);
          }
        })
      }
    }.bind( this ))
  },

  delete: function ( userId, festivalToDelete, onQueryFinished ) {
    MongoClient.connect( this.url, function ( err, db ) {
      if( db ){
        var collection = db.collection( this.collection );
        collection.update( {"_id": ObjectId(userId) }, {$pull: { myFestivals: { id: festivalToDelete } } } );
        collection.find( {"_id": ObjectId( userId ) }).toArray(function( err,docs ) {
          if ( docs ) {
            onQueryFinished( docs );
          }
        })
      }
    }.bind( this ))
  }
}

module.exports = UserQuery;
