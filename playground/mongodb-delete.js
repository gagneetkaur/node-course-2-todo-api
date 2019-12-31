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
//deleteMany

db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(function(error, result){
    if(error){
        return console.log("Error in deletion", error);
    }
    else{
        console.log(result);
    }

});

//deleteOne

db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(function(error, result){
    if(error){
        return console.log("Error in deletion", error);
    }
    else{
        console.log(result);
    }

});


//find One and Delete
db.collection('Todos').findOneAndDelete({completed: false}).then(function(result){
    console.log("The deleted document:" + result);
}, function(error){
    console.log("Unable to fetch the data" + error);
});

//find many and Delete

db.collection('Users').deleteMany({name: "Gagneet"}).then(function(result){
    console.log("The deleted document:" + result);
}, function(error){
    console.log("Unable to fetch the data" + error);
});

//find One and Delete
db.collection('Users').findOneAndDelete({_id: new ObjectID("5e09a9b21fe55e0ec834dfa3")}).then(function(result){
    console.log("The deleted document:" + result);
}, function(error){
    console.log("Unable to fetch the data" + error);
});

db.collection('Users').find({name: 'Gagneet'}).toArray().then(function(docs){
    console.log("Todo Documents:" + JSON.stringify(docs, undefined, 2));
 }, function(error){
     console.log("Unable to fetch the data" + error);
 });

//db.close();
});