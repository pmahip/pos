// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const router = express.Router();
const mongoose=require('mongoose');
// Get our API routes
//const api = require('./server/routes/api');
const productmaster = require('./server/routes/productmaster');
const category = require('./server/routes/category');

const port = 5000;

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

mongoose.Promise = global.Promise;
var mongoURI = "mongodb://localhost:27017/pos";
// var MongoDB = mongoose.connect(mongoURI).connection;
// MongoDB.on('error', function(err) { console.log(err.message); });
// MongoDB.once('open', function() {
//   console.log("mongodb connection open");
// });

mongoose.connect(mongoURI, { useMongoClient: true }, function (ignore, connection) {
  connection.onOpen()
}).then(() => {
  console.log('connected')
})
.catch(console.error)


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set our api routes
//app.use('/api', api);
app.use('/api', productmaster);
app.use('/api', category);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port,function(){
    console.log("Server running on localhost:"+ port);
});