var app =  angular.module("myApp",[]);

app.controller("mhyCtrl",[$scope , calcService, function(){
  $scope.a = 10;
  $scope.b = 10;
  $scope.getSum = function(){
    calcService.getSum($scope.a, $scope.b, function(result){
          $scope.sum = result;
    }) ;
  };
}]);


app.service("calcService",function(){
  this.getSum = function(a,b,cb){    // cb here call back funtion
    var s =  parseInt(a) +parseInt(b);
    cb(s);
  };
}));
