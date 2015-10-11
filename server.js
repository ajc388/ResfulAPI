//=================== SETUP ====================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var con = require('./config/connection.js');
var pg = require('knex')(con);

//============== Configuration =================
var port = 8080;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//=================== ROUTES ===================
require('./routes/routes.js')(app, pg);

//================ LISTENING ===================
app.listen(port, function() {
    console.log("==============================================");
    console.log("	         SERVER ONLINE!");
    console.log("==============================================");
    console.log("Listening to port: " + port );
    console.log("==============================================");
});