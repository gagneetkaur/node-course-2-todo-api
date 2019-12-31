var express = require('express');
const {ObjectID} = require('mongodb');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', function(req, res){
   var todo = new Todo({
    text: req.body.text
   });


todo.save().then(function(doc){
    res.send(doc);
}, function(error){
    res.status(400).send(error);
});
});

app.get('/todos', function(req, res){
    Todo.find().then(function(todos){
        res.send({todos});
    }, function(error){
        res.status(400).send(error);
    })
})


app.get('/todos/:id', function(req, res){
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send();
    }
    else{
        Todo.findById(id).then(function(todo){
            res.send({todo});
        }, function(error){
            res.send(400).send();
        });
    }
});


app.listen(3000, function(){
    console.log("Started on Port 3000");
});




