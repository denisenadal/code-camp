angular.module('resumaker').service('restservice',function($location,$http,$httpParamSerializer,$rootScope, $cookies){
	console.log('rest service loading');

	//init vars
	var currentUser = null;
	var loggedIn = false;

	var getLoginStatus = function(){return loggedIn;}
	var getCurrentUser = function(){return currentUser;}

	//function to 'auth' users
	var getUser = function(email,password,success){
		if(email && password ){
			console.log("recieved email & pass: "+email);
			$http({
				method:"GET",
				url:" http://camp.dovahcorp.com/api.php/users?filter=$email,eq,"+email+"&transform=1"
			}).then(
				function(response){
					currentUser = response.data.users[0];
					loggedIn =  currentUser.uid;
					console.log(response.data.users);
					$rootScope.$broadcast("loginOccured");
					console.log("logged in currentUser:", currentUser);
					success();

				},
				function(err){
					console.log(err);
					alert("can't find your account; make a new one?");
				}
			);//end promises
		}
	};//end loadUser


	var createUser = function(user){

	}

	var getEverything = function(uid, success, fail){
		$http({
			method:"GET",
			url:"http://camp.dovahcorp.com/api.php/users?include=education,skills,cru_link,company,role&filter=id,eq,"+uid
		}).then(
		function(response){
			var details = response.data;
			delete details.users;
			for(var key in details){
				if(details.hasOwnProperty(key)){
					delete details[key].relations;
				}
			}
			success(details);
			console.log("response");
		},
		function(err){
			fail(err);
		});
	};

	return {
		"loggedIn": loggedIn,
		"getUser":getUser,
		"getLoginStatus": getLoginStatus,
		"getCurrentUser":getCurrentUser,
		"getEverything":getEverything
	};
});
