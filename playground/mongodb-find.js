//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
var user = {name: 'Gagneet', age: 27};

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(error, db){

if(error){
    return console.log("Unable to connect to the MongoDB server");
}
else{
    console.log("Connected to MongoDb Server");
}

// db.collection('Todos').find({completed: false}).toArray().then(function(docs){
//    console.log("Todos:" + JSON.stringify(docs, undefined, 2));
// }, function(error){
//     console.log("Unable to fetch the data" + error);
// });

// db.collection('Todos').find({_id: new ObjectID('5e09a358a784ea112c0b8a28')}).toArray().then(function(docs){
//    console.log("Todos:" + JSON.stringify(docs, undefined, 2));
// }, function(error){
//     console.log("Unable to fetch the data" + error);
// });

// db.collection('Todos').find().count().then(function(count){
//    console.log("Todos Documents count:" + count);
// }, function(error){
//     console.log("Unable to fetch the data" + error);
// });

db.collection('Users').find({name: 'Gagneet'}).toArray().then(function(docs){
    console.log("Todo Documents:" + JSON.stringify(docs, undefined, 2));
 }, function(error){
     console.log("Unable to fetch the data" + error);
 });

//db.close();
});