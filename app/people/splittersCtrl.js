billSplitter.controller('splittersController', function ($scope, $location, Users) {
  $scope.users = Users
  $scope.users.splitters = [];

  $scope.addUser = function(name){
    var user = {};
    user['name'] = name;
    $scope.users.splitters.push(user);
    $scope.name = "";
  }

  $scope.shareData = function(){
    $location.path('/receipt');
  }
});