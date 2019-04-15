const express = require('express');
const app = express();
const mongoose = require('mongoose');
const product = require('./routes/product');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/crud', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/product', product);

app.listen(3000);