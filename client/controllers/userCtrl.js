app.controller("userController", function($scope, $cookies, userFactory){
	$scope.user = $cookies.get('cur_user');
	console.log($scope.user)
	$scope.createUser = function(){ 
		userFactory.createUser($scope.newuser)	
	}
	userFactory.index(function(returndata){ //variable declaring to store information when runs the index(info that comes from back end)
		var arr = [];
		for(var i = 0; i < returndata.length; i++){
			arr.push(returndata[i].name);
		}
		$scope.allusers = arr;
	})
	$scope.addWish = function(){
		userFactory.addWish($scope.wish);
	}
	
	userFactory.wishes(function(returndata){
		$scope.allwishes = returndata;
	})
	


})