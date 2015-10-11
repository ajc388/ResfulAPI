module.exports = function(app, pg) {
	//Insert statement using KNEX
	//TODO: make into a transaction for practice
	app.post('/api/v1/todos', function(req, res) {
	    pg('items').insert({
	    	text: req.body.text,
	    	complete: req.body.complete
	    })
	    .then(function(rows) {
			return res.status(777).json(rows);	
		})
		.catch(function(err) {
		 	return res.status(500).json(err);
		});
	});

	//Get statement using KNEX
	app.get('/api/v1/todos', function(req, res) {
	    pg('items').select('text', 'complete')
		.then(function(rows) {
			return res.status(777).json(rows);
		})
		.catch(function(err) {
		 	return res.status(500).json(err);
		});
	});

	// app.put('/api/v1/todos/:todo_id', function(req, res) {
	//     var results = [];

	//     // Grab data from the URL parameters
	//     var id = req.params.todo_id;

	//     // Grab data from http request
	//     var data = {text: req.body.text, complete: req.body.complete};

	//     // Get a Postgres client from the connection pool
	//     pg.connect(database.url, function(err, client, done) {
	//         // Handle connection errors
	//         if(err) {
	//           done();
	//           console.log(err);
	//           return res.status(500).send(json({ success: false, data: err}));
	//         }

	//         // SQL Query > Update Data
	//         client.query("UPDATE items SET text=($1), complete=($2) WHERE id=($3)", [data.text, data.complete, id]);

	//         // SQL Query > Select Data
	//         var query = client.query("SELECT * FROM items ORDER BY id ASC");

	//         // Stream results back one row at a time
	//         query.on('row', function(row) {
	//             results.push(row);
	//         });

	//         // After all data is returned, close connection and return results
	//         query.on('end', function() {
	//             done();
	//             return res.json(results);
	//         });
	//     });
	// });

	// app.delete('/api/v1/todos/:todo_id', function(req, res) {
	//     var results = [];

	//     // Grab data from the URL parameters
	//     var id = req.params.todo_id;


	//     // Get a Postgres client from the connection pool
	//     pg.connect(database.url, function(err, client, done) {
	//         // Handle connection errors
	//         if(err) {
	//           done();
	//           console.log(err);
	//           return res.status(500).json({ success: false, data: err});
	//         }

	//         // SQL Query > Delete Data
	//         client.query("DELETE FROM items WHERE id=($1)", [id]);

	//         // SQL Query > Select Data
	//         var query = client.query("SELECT * FROM items ORDER BY id ASC");

	//         // Stream results back one row at a time
	//         query.on('row', function(row) {
	//             results.push(row);
	//         });

	//         // After all data is returned, close connection and return results
	//         query.on('end', function() {
	//             done();
	//             return res.json(results);
	//         });
	//     });
	// });
};