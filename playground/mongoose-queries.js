const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5e0af376469c84d4324bd0c2ss';
if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}
Todo.find({
    _id: id
}).then(function(todos){
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then(function(todo){
    if(!todo){
        console.log("Id not found");
    }
    else{
    console.log('Todo', todo);
    }
});

Todo.findById("5e0af376469c84d4324bd0c2").then(function(todo){
    console.log(todo);
}).catch(function(error){
    console.log(error);
});

User.findById("5e0af78b42347fc02323aca6").then(function(user){
    if(!user){
        console.log("Id not found");
    }
    else{
        console.log('User', user);
    }
}).catch(function(error){
    console.log(error);
})