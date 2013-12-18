'use strict';

var app = angular.module('santech-engine', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', { templateUrl: 'partials/home.html', controller: HomeCtrl })
		.when('/publications', { templateUrl: 'partials/publications.html', controller: PublicationsCtrl })
		.otherwise('/');

	$locationProvider.html5Mode(true);

}]);//end config