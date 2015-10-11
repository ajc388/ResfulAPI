module.exports = function(app, pg) {
	//Insert statement using KNEX
	//TODO: make into a transaction for practice
	app.post('/api/v1/todos', function(req, res) {
	    pg('items').insert({
	    	text: req.body.text,
	    	complete: req.body.complete
	    })
	    .then(function(data) {
			return res.status(777).json({'success' : data});	
		})
		.catch(function(err) {
			console.log(err);
		 	return res.status(500).json({'error' : err});
		});
	});

	//Get statement using KNEX
	app.get('/api/v1/todos', function(req, res) {
	    pg('items').select('text', 'complete')
		.then(function(data) {
			return res.status(777).json({'success' : data});
		})
		.catch(function(err) {
			console.log(err);
		 	return res.status(500).json({'error' : err});
		});
	});

	//Update statement using KNEX
	app.put('/api/v1/todos/:id', function(req, res) {
	    pg('items')
	    .where('id', req.params.id)
	    .update({
	    	text: req.body.text,
	    	complete: req.body.complete 
	    })
	    .then(function(data) {
	    	return res.status(777).json({'success': data});
	    })
	    .catch(function(err) {
	    	console.log(err);
	    	return res.status(500).json({'error': err})
	    });
	});

	//Delete statement using KNEX
	app.delete('/api/v1/todos/:id', function(req, res) {
	    pg('items')
	    .where('id', req.params.id)
	    .del()
	    .then(function(data) {
	    	return res.status(777).json({'success': data});
	    })
	    .catch(function(err) {
	    	console.log(err);
	    	return res.status(500).json({'error': err})
	    });
	});
};