billSplitter.controller('totalController', function($scope, $location, Users, Items){
  $scope.splitters = Users.splitters;

  $scope.routeToPerson = function() {
    $location.path('/' + $scope.splitters[this.$index].name);
  }

})