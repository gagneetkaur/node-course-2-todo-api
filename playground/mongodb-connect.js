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

//Insert new Doc into Users (name, age, location)
// db.collection('Users'). insertOne({
//  name: 'Gagneet',
//  age: 27,
//  location: 'New Delhi' 
// }, function(error, result){
// if(error){
//     return console.log('Unable to insert todo', error);
// }
// console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
// });

db.close();
});