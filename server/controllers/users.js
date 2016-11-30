var mongoose = require('mongoose');
var User = mongoose.model('User');
var Wish = mongoose.model('Wish');

module.exports = (function(){
	return{
		createUser: function(req, res){
			var user = new User(req.body);
			user.save(function(err){
				if(err){
					res.json({status: false});
				}
				else{
					res.json(user)
				}
			})
		},
		index: function(req, res){
			var user = User.find({}, function(err, result){
				if(err){
					console.log("error")
				}
				else{
					res.json(result);
				}
			})
		},
		addWish: function(req, res){
			// console.log(req.body);
			// console.log(req.params.username);
			User.findOne({name: req.params.username}, function(err, creator){ //params comes from routes not factory bc factory passing the username to routes
				if(err){
					console.log('could not find user');
				}
				else {
					User.findOne({name: req.body.joiner}, function(err, joiner){
						if(err){ //coming from form that has property of joiner
							console.log('could not find joiner');
						}
						else {
							var wish = new Wish({title: req.body.title, description: req.body.description, wish_creator: creator._id})
							wish.save(function(err, result){
								if(err){
									console.log('could not save wish');
								}
								else {
									creator.wish_list.push(wish);
									console.log(wish);
									res.json(result);
								}
							});
						}
					});
				}
			});
		},
		wishes: function(req, res){
			var wish = Wish.find({}).populate('wish_creator').exec(function(err, result){
				if(err){
					console.log(err);
				}
				else{
					res.json(result);
				}
			})
				
		},
		userWishes: function(req, res){
			Wish.find({ $or: [ {wish_creator: req.params.id}, { wish_joiner: req.params.id} ] }	).populate('wish_creator').exec(function(err, result){
				if(err){
					console.log(err);
				}
				else{
					res.json(result);
				}
			})
		}


	}
})();