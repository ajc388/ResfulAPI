//=================== SETUP ====================
var express = require('express');
var database = ('./config/database.js');
var port = 8080;
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');

//============== Configuration =================
new pg.Client(database.url)
app.use(bodyParser.json());

//=================== ROUTES ===================
require('./app/routes.js');

app.listen(port, function() {
    console.log("==============================================");
    console.log("	         SERVER ONLINE!");
    console.log("==============================================");
    console.log("Listening to port: " + port );
    console.log("==============================================");
});