app.controller('wishController', function($scope, $http, $routeParams, userFactory){
	console.log($routeParams.id)
	userFactory.userWishes($routeParams.id, function(returndata){
		$scope.userwishes = returndata;
		console.log(returndata)
	})
})