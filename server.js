//=================== SETUP ====================
var express = require('express')();
var bodyParser = require('body-parser');
var con = require('./config/connection.js');
var pg = require('knex')(con);

//============== Configuration =================
var port = 8080;
express.use(bodyParser.urlencoded({extended: true}));
express.use(bodyParser.json());

//=================== ROUTES ===================
require('./routes/routes.js')(express, pg);

//================ LISTENING ===================
express.listen(port, function() {
    console.log("==============================================");
    console.log("	         SERVER ONLINE!");
    console.log("==============================================");
    console.log("Listening to port: " + port );
    console.log("==============================================");
});