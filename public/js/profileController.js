angular.module('resumaker').controller('profileController',function($scope,$location,$rootScope,restservice){
	console.log('profile controller loading');
	$scope.loggedIn = restservice.getLoginStatus();
	$scope.user = restservice.getCurrentUser();

	$scope.modUser = function(){
		//get stuff from the form;
		//format for tables
		//if currentUser send PUT
		//else send POST
	};

});
