import express from 'express';
import config from './config';
import DataApi from './DataApi';

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

app.get('/user/:id', (req, res) => {
    var id = req.params.id;
    res.send(DataApi.getUser(id));
});

app.get('/point/:id', (req, res) => {
    var id = req.params.id;
    res.send(DataApi.getUser(id)); /*test*/
});

app.get('/user/points/:id', (req, res) => {
    var id = req.params.id;
    res.send(DataApi.getUserPoint(id));
});

app.listen(config.port, function listenHandler() {
    console.info(`Running on ${config.port}...`);
});
