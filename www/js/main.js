'use strict';

var app = angular.module('santech-engine', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', { templateUrl: 'partials/home.html', controller: HomeCtrl })
		.when('/publications', { templateUrl: 'partials/publications.html', controller: PublicationsCtrl })
		.otherwise('/');

	$locationProvider.html5Mode(true);

}]);//end config

//Probably temporary service for inserting data in session storage - HTML5
app.factory('SessionService', function(){
	return {
		get: function(key){

			//Check first if the browser has sessionStorage
			if(Modernizr.sessionstorage){
				return sessionStorage.getItem(key) ;
			}

		},
		set: function(key, value){

			//Check first if the browser has sessionStorage
			if(Modernizr.sessionstorage){
				return sessionStorage.setItem(key, value) ;
			}

		},
		unset: function(key){

			//Check first if the browser has sessionStorage
			if(Modernizr.sessionstorage){
				return sessionStorage.removeItem(key) ;
			}

		}
	}
})