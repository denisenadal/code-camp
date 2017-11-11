angular.module('resumaker').controller('resumeController',function($scope,$location,$rootScope,restservice){
	console.log('resume controller loading');
	$scope.loggedIn = restservice.getLoginStatus();
	$scope.currentUser =  restservice.getCurrentUser();
	console.log($scope.currentUser);

	$scope.getDetails = function(){
		console.log("getDetails is tring");
		restservice.getEverything($scope.currentUser.uid, function(response){
			console.log(response);
			$scope.userDetails = response;
		},
		function(err){
			console.log(err);
			$scope.userDetails = false;
		});
	};
	 $scope.getDetails();

});
