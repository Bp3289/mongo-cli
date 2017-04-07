var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
// 	var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");

// 	var searchRestaurant = prompt("Search restaurants you big dummy:");

// 	collection.find({name:searchRestaurant}).forEach(function(docs){
// 		console.log(docs);
// 	});


	// mongo.connect(url, function(err, db){
	// var collection = db.collection('restaurants');

	// var newName = prompt('design your own restaurant, what will you call it?');


	// var newRest = (newName);

	// collection.insert({name:newRest});



// });

mongo.connect(url, function(err, db){
var collection = db.collection('restaurants');

var updateRest = prompt('Which restaurant do you want to update?');

var newName = prompt('What name will replace the old name?');
var newStreet = prompt('What will the new street be?');
var newZip = prompt('What will be the new zipcode?');
var newYelp = prompt('What will be the new yelp rating?');



collection.update(

	{name: updateRest}, 

	{$set: {name: newName,
		address:{
			street: newStreet,
			zipcode: newZip
		},
		yelp: newYelp,
	
}});

});

