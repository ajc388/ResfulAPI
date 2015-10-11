module.exports = function (app, pg) {
	//Includes all routes for a single import
	require('./todo.js')(app, pg);
}