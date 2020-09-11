const express = require('express');
const path = require('path');

const app = express();

const login = require('./routes');

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(login);

module.exports = app;
