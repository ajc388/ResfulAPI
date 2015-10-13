exports.up = function(knex, Promise) {
  	return Promise.all([
		knex.schema.createTable('todo', function(table) {
	        table.increments('id').primary();
	        table.string('text');
	        table.boolean('complete');
       	})
	])
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('todo')
	])
};