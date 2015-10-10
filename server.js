var express = require('express');
var port = 8080;
var app = express();
var pg = require('pg');

app.use(express.bodyParser())

var connectionString = 'postgres://localhost:5432/todo';
var client = new pg.Client(connectionString);

app.post('/api/v1/todos', function(req, res) {
    var results = [];

    // Grab data from http request
    var data = {text: req.body.text, complete: false};

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        } else {
	        // SQL Query > Insert Data
	        client.query("INSERT INTO items(text, complete) values($1, $2)", [data.text, data.complete]);

	        // SQL sQuery > Select Data
	        var query = client.query("SELECT * FROM items ORDER BY id ASC");

	        // Stream results back one row at a time
	        query.on('row', function(row) {
	            results.push(row);
	        });

	        // After all data is returned, close connection and return results
	        query.on('end', function() {
	            done();
	            return res.json(results);
	        });
	    }
    });
});

app.listen(port, function() {
    console.log("==============================================");
    console.log("	         SERVER ONLINE!");
    console.log("==============================================");
    console.log("Listening to port: " + port );
    console.log("==============================================");
});