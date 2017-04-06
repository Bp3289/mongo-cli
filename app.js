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


	mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');

	var newName = prompt('design your own restaurant, what will you call it?');


	var newRest = (newName);

	collection.insert({name:newRest});



});



