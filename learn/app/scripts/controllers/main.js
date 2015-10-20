'use strict';

/**
 * @ngdoc function
 * @name learnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnApp
 */
angular.module('learnApp')
.controller("MainCtrl", ['$scope','$http', function($scope, $http) { 
	$http.get('scripts/resources.json').success (function(data){ 
		$scope.resources = data; 
		console.log(data);
	}); 
}] ); 
