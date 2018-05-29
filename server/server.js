var mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User', {
    username: {
        type: String,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    password: {
        type: String,
        minlength: 1,
        trim: true
    }
})

var newUser = new User({
    email: 'martin.foldyna@me.com'
})

//var newTodo = new Todo({
//    text: '  Make it tmrw ',
//});

newUser.save().then((doc) => {
    console.log('New user created', JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save user.', e);
});
//
//newTodo.save().then((doc) => {
//    console.log('Saved todo', JSON.stringify(doc, undefined, 2));
//}, (e) => {
//    console.log('Unable to save todo.', e);
//});