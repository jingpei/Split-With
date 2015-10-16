billSplitter.controller('personController', function($scope, $location, $routeParams, Users){
  $scope.splitters = Users.splitters;
  $scope.name = $routeParams.selected_person;

  for(var i = 0; i < $scope.splitters.length; i++){
    if($scope.splitters[i].name === $scope.name){
      $scope.person = $scope.splitters[i];
    }
  }

  $scope.allTotals = function () {
    $location.path('/total');
  }

  console.log($scope.total);
  
})