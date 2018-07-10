'use strict'

require('dotenv').config();

const express = require('express');
const path = require('path');
const routes = require('./routes/index')
const bodyParser = require('body-parser');

const app = express();

const queries = require ('./db/queries');

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
