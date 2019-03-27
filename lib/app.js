var express = require('express');
var config = require('./config');
var DataApi = require('./DataApi');

var {data} = require('./data/data');
DataApi.init(data);

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.render('index');
});

app.get('/users', (req, res) => {
    res.send(DataApi.getUsers());
});

app.get('/points', (req, res) => {
    res.send(DataApi.getPoints());
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
