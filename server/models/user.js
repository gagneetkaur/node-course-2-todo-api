var mongoose = require('mongoose');

var User = mongoose.model('User', {
    Email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    Email: 'newUser@gmail.com'
});


newUser.save().then(function(doc){
    console.log('Saved user', doc);
}), (function(error){
    console.log('Unable to save User Again', error);
}); 

module.exports={User};