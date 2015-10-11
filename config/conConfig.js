module.exports = {
    client : 'pg',
	connection: {
   		host     : 'localhost:5432',
	    user     : 'postgres',
	    password : 'xUbuntu1337!',
	    database : 'todo'
	},
    pool {
    	min : '1',
    	max : '10'
    }
};