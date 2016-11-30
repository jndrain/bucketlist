var user = require('./../controllers/users.js');

module.exports = function(app){
	app.post('/createUser', function(req, res){
		user.createUser(req, res);
	})
	app.get('/dashboard', function(req, res){
		user.index(req, res);		
	})
	app.post('/addwish/:username', function(req, res){
		user.addWish(req, res);
	})
	app.get('/wishes', function(req, res){
		user.wishes(req, res)
	})
	app.get('/userwishes/:id', function(req, res){
		user.userWishes(req, res)
	})
}