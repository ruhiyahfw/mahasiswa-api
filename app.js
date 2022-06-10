const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mahasiswaRoutes = require('./routes/mahasiswa');
app.use('/mahasiswa', mahasiswaRoutes);

module.exports = app;