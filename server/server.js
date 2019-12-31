var express = require('express');
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
        res.status(400).send(e);
    })
})

app.listen(3000, function(){
    console.log("Started on Port 3000");
});




