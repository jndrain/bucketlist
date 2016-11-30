app.factory('userFactory', function($http, $cookies, $location){
	var factory = {};
	factory.createUser = function(user){
		$http.post('/createUser', user).then(function(returndata){ 
		if(returndata.data){
			$cookies.put('cur_user', returndata.data.name);
			$location.url('/dashboard')
		}
		
		else{
			alert('Something went wrong. Please make sure your name is unique.')
		}
	});
}
	factory.index = function(cb){ 
		$http.get('/dashboard').then(function(returndata){
			cb(returndata.data)
		});
	}
	factory.addWish = function(newwish){
		$http.post('/addwish/' + $cookies.get('cur_user'), newwish).then(function(returndata){
			//why nothing else here, what's happening with returndata?
		})
	}
	factory.wishes = function(cb){
		$http.get('/wishes').then(function(returnwish){ //goes to route first and then gets directed by its method?
			cb(returnwish.data); //how does this guy work
		})
		
	}
	factory.userWishes = function(userid, cb){
		$http.get('/userwishes/' + userid).then(function(returndata){
			console.log(returndata.data);
			// console.log(returndata, typeof returndata, 'returndata')
			cb(returndata.data);
		})
	}
	

	return factory;

});