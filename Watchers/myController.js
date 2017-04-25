var app = angular.module("myApp" ,[]);

app.controller("myCtrl",["$scope",function($scope){
	$scope.a = 1;
	$scope.b = 2;
	$scope.c = 4;
	console.log("Inside of controller");

	$scope.$watch('c',function(newValue, oldValue){
			if(newValue != oldValue){
				Console.log("C updated to "+newValue);
			}
	});

}]);



