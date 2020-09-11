const express = require('express');
const path = require('path');

const app = express();

const user = require('./controller');

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(user);

module.exports = app;
