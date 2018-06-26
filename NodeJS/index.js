const express = require('express');
const bodyParser = require('body-parser');


const {mongoose} = require('./db.js');
var ProductContoller = require('./controllers/ProductController.js');

var app = express();
app.use(bodyParser.json());

app.listen(4000, () => console.log('server started at hell'));

app.use('/products', ProductContoller);