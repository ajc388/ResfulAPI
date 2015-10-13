//Includes all routes to make for a single import 
//Makes for a pretty server.js page
module.exports = function (app, pg) {
	require('./todo.js')(app, pg);
}