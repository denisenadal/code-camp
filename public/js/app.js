var resumeApp = angular.module('resumaker',['ngRoute','ngCookies']);
resumeApp.config( function($httpProvider, $routeProvider){
	$httpProvider.defaults.withCredentials = true;
	$routeProvider
		.when('/',{
			templateUrl: 'pages/dashboard.html',
			controller: 'dashController'
		 })
		.when('/resume',{
			templateUrl: 'pages/resume.html',
			controller: 'resumeController'
		})
		.when('/me',{
			templateUrl: 'pages/profile.html',
			controller: 'profileController'
		})
		.otherwise({redirectTo:'/'});

		console.log("ap loading");
});
