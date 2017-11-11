angular.module('resumaker').controller('resumeController',function($scope,$location,$rootScope,restservice){
	console.log('resume controller loading');
	$scope.loggedIn = restservice.getLoginStatus();
	$scope.currentUser =  restservice.getCurrentUser();
	console.log($scope.currentUser);

	$scope.getDetails = function(){
		console.log("getDetails is tring");
		restservice.getEverything($scope.currentUser.uid, function(response){
			console.log(response);
			//dosomething
		},
		function(err){
			console.log(err);
			return false;
		});
	};
	$scope.userDetails = $scope.getDetails();


		// for(var y = 0; y < rows.length; y++){
		//     thing = {};
		//     for(var i = 0; i < columns.length; i++){
		//         thing[columns[i]] = rows[y][i];
		//     }
		//     newarray.push(thing)
		// }


});
