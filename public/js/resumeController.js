angular.module('resumaker').controller('resumeController',function($scope,$location,$rootScope,restservice){
	console.log('resume controller loading');
	$scope.loggedIn = restservice.getLoginStatus();
	$scope.currentUser =  restservice.getCurrentUser();
	console.log($scope.currentUser);

	$scope.getDetails = function(){
		console.log("getDetails is trying");
		restservice.getEverything($scope.currentUser.uid, function(response){
			console.log(response);
			$scope.userDetails = response;
		},
		function(err){
			console.log(err);
			$scope.userDetails = false;
		});
	};
	if($scope.currentUser){
		$scope.getDetails();
	}

	angular.element('#builder .button').click(function(){
		angular.element('#builder .button').removeClass('is-outlined');
		angular.element(this).addClass('is-outlined');
	});

	angular.element('#builder .res-template').click(function(){
		var resType = angular.element(this).attr("data-temp");
		angular.element('#print-res').prepend('<link rel="stylesheet" href="css/resume-'+resType+'.css">');

		angular.element('#builder').removeClass('invalid');
		var color = angular.element('#builder .button.is-outlined').attr('value');
		console.log("color:"+color);
		angular.element('#print-res .stripe, #print-res .initials' ).addClass('is-'+color);
		angular.element('#print-res h2, #print-res h1').addClass('has-text-'+color);

	});


});
