var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text:{
        type: String, 
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

// var newToDo = new Todo({
//     text: 'Cook Dinner'
// });

// newToDo.save().then(function(doc){
//     console.log('Saved todo', doc);
// } ), (function(error){
//     Console.log('Unable to save ToDo');
// });

// var newToDo_Again = new Todo({
//     text: 'Cook Dinner Again',
//     completed: false,
//     completedAt: 123
// });


// newToDo_Again.save().then(function(doc){
//     console.log('Saved todo_again', doc);
// }), (function(error){
//     console.log('Unable to save Todo Again', error);
// });

module.exports={Todo};