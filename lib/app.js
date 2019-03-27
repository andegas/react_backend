var express = require('express');
var config = require('./config');

var {data} = require('./data/testData');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.render('index');
});

app.get('/users', (req, res) => {
    res.send(data); /*test*/
});

app.get('/points', (req, res) => {
    res.send(data); /*test*/
});

app.get('/user/{id}', (req, res) => {
    res.send(data); /*test*/
});

app.get('/points/{userId}', (req, res) => {
    res.send(data); /*test*/
});

app.get('/point/{id}', (req, res) => {
    res.send(data); /*test*/
});

app.listen(config.port, function listenHandler() {
    console.info(`Running on ${config.port}...`);
});
