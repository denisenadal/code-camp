angular.module('resumaker').controller('dashController',function($scope,$location,$rootScope,restservice){
	console.log('dash controller loading');
	$scope.loggedIn = restservice.getLoginStatus();
	$scope.currentUser =  restservice.getCurrentUser();

	$scope.loadUser = function(email, password,action){
		if($scope.action == "login"){
			restservice.getUser($scope.email,$scope.password,function(){
				$scope.currentUser = restservice.getCurrentUser();
				$scope.loggedIn =restservice.getLoginStatus();
				console.log($scope);

			});
		}
		else{
			$location.url('/me');
		}
	};

	$scope.$on("loginOccured",function(){
		console.log("loginOccured ");
		$scope.currentUser = restservice.getCurrentUser();
		$scope.loggedIn = restservice.getLoginStatus();
	});
});
