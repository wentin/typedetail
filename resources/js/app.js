var app = angular.module("resourcesApp", []);
app.controller("MainCtrl", ['$scope','$http', function($scope, $http) { 
	$http.get('js/resources.json').success (function(data){ 
		$scope.resources = data; 
	}); 
	$("body").keydown(function(e) {
		if(e.keyCode == 37) {
			if ($('.prev')[0]) {
				$('.prev')[0].click();
			}
		}
		else if(e.keyCode == 39) { 
			if ($('.next')[0]) {
				$('.next')[0].click();
			}
		}
	});
}] ); 
