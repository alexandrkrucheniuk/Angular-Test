var express = require('express');
var app = express(); // create our app w/ express
var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

mongoose.connect('mongodb://localhost:27017/dolist'); // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride());


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");


// mongoose models
var Todo = mongoose.model('dolist', {
    text: String,
    done: Boolean
});


// api ---------------------------------------------------------------------

app.get('/api/todos', function (req, res) {
    Todo.find(function (err, todos) {
        if (err)
            res.send(err);
        res.json(todos);
    });
});

app.post('/api/todos', function (req, res) {
    Todo.create({
        text: req.body.text,
        done: false
    }, function (err, todo) {
        if (err)
            res.send(err);
        Todo.find(function (err, todos) {
            if (err)
                res.send(err);
            res.json(todos);
        });
    });
});

app.delete('/api/todos/:todo_id', function (req, res) {
    Todo.remove({
        _id: req.params.todo_id
    }, function (err, todo) {
        if (err)
            res.send(err);
        Todo.find(function (err, todos) {
            if (err)
                res.send(err);
            res.json(todos);
        });
    });
});

app.put('/api/todos/:todo_id', function (req, res) {
    Todo.update({
        _id: req.params.todo_id
    }, {$set: {done: true}}, function (err, todo) {
        if (err)
            res.send(err);
        Todo.find(function (err, todos) {
            if (err)
                res.send(err);
            res.json(todos);
        });
    });
});
