var app = angular.modulef('myApp',[]);

app.controller("myCtrl",['$scope', function($scope){

}]);
// for transclusion without cb function
app.directive('message', function(){
	return{
		templateUrl : 'msg.htm',
		transclude : true,
		controller : function($scope, $element, $attrs,$transclude){
			$element.find('#innerPanel').append($transclude());
			$element.find('#innerPanel2').append(transEL);// cann't call second pannel bcox reusing the already created transclude instance		
		}
	}
});

// for transclusion with cb function
app.directive('message2', function(){
	return{
		templateUrl : 'msg.htm',
		transclude : true,
		controller : function($scope, $element, $attrs,$transclude){
			$transclude(function(transEL){
				$element.find('#innerPanel').append(transEL);		
			});
// we can call this function multiple times for diff panels
// each time u call this fn u get clone of this 'transEL' element 			
			$transclude(function(transEL){
				$element.find('#innerPanel2').append(transEL);		
			});
		}
	}
});