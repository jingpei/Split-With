billSplitter.controller('totalController', function($scope, $location, Users, Items){
  $scope.splitters = Users.splitters;
  $scope.total = 0;

  $scope.routeToPerson = function() {
    $location.path('/' + $scope.splitters[this.$index].name);
  }

  for(var i = 0; i < $scope.splitters.length; i++){
    $scope.total += parseFloat($scope.splitters[i].total);
  }

  $scope.total.toFixed(2);
  var stringTotal = String($scope.total).substring(0,5);
  var reparsed = parseFloat(stringTotal);
  $scope.total = reparsed;

})