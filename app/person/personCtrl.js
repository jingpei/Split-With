billSplitter.controller('personController', function($scope, $routeParams, Users){
  $scope.splitters = Users.splitters;
  $scope.name = $routeParams.selected_person;
  $scope.subtotal = 0; 

  for(var i = 0; i < $scope.splitters.length; i++){
    if($scope.splitters[i].name === $scope.name){
      $scope.person = $scope.splitters[i];
    }
  }

  for(var i = 0; i < $scope.person.purchased.length; i++){
    $scope.subtotal += parseFloat($scope.person.purchased[i].price);
  }

  console.log($scope.total);
  
})