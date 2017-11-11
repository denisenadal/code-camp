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

	angular.element('.add-repeater').click(function(){
		fieldRepeater(this);
	});

	function fieldRepeater(clicked){
		var type = angular.element(clicked).attr('id').slice(4);
		console.log(type);
		var lastEntry = angular.element('.'+type+'-set').last();
		console.log(lastEntry);
		var num = lastEntry.attr('id').replace(/^\D+/g,'');
		console.log(lastEntry.attr('id'));
		num = parseInt(num);
		console.log("old numis: "+num);
		var newID = type+(num+1);
		console.log(newID);
		var newEntry = angular.element('#'+type+'0').clone(true,true).attr('id',newID);
		newEntry.html(function(){
			return angular.element(this).html().replace(new RegExp(type+0, "g"), type+(num+1) );
		});
		newEntry.insertAfter(lastEntry).show();
	}

});
