
exports.up = function(knex, Promise) {
  	return Promise.all([
  		knex.schema.dropTable('todo'),
		knex.schema.createTable('items', function(table) {
	        table.increments('id').primary();
	        table.string('text');
	        table.boolean('complete');
       	})
	])
};

exports.down = function(knex, Promise) {
	  knex.schema.dropTable('todo')		
};
