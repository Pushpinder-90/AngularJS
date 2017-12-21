var app =  angular.module('myApp',[ngRoute]);


app.config(['$routeProvider', function(){
  $routeProvider
  .when('/' ,{
  	template : 'msg01.html',
  	controller : '<strong>Default root</strong>',
  	caseInsensitiveMatch : true // by default ngRoutes are case Sensitive so to make case insensitive use
  })
  .when('/first-msg' ,{
  	template : 'msg01.html',
  	controller : 'message1',
  	caseInsensitiveMatch : true
  })
  .when('/second-msg' ,{
  	template : 'msg02.html',
  	controller : 'message2',
  	caseInsensitiveMatch : true
  })
  .when('/third-msg' ,{
  	redirectTo :"/second-msg" // to redirect to another location
  	/*OR or behalf of certain condition
  	redirectTo : function(){
  		alert("Sorry not implemented yet ! taing u to first msg now ");
  		return '/first-msg';
  	}*/
  })
  .otherwise({
  	template :'<strong>No content is available</strong>'
  })
}]);



app.controller('message1',['$scope',function(){
  $scope.a = 20;
  $scope.b = 40;

}]);

app.controller('message2',['$scope',function(){
  $scope.c = 60;
  $scope.d = 90;

}]);



