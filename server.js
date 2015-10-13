//=================== SETUP ====================
var port = 8080;
var environment = 'dev';

var express = require('express')();
var bodyParser = require('body-parser');
var connectionConfiguration = require('./knexfile.js'); //has to be named knexfile
var pg = require('knex')(connectionConfiguration[environment]);

//============== CONFIGURATION =================
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