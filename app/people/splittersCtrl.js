billSplitter.controller('splittersController', function ($scope, $location, Users) {
  $scope.users = Users
  $scope.users.splitters = [];

  $scope.addUser = function(name){
    var user = {};
    user['name'] = name;
    user['purchased'] = [];
    user['selected'] = false;
    user['tip'] = 0;
    user['tax'] = 0;
    $scope.users.splitters.push(user);
    $scope.name = "";
  }

  $scope.shareData = function(){
    $location.path('/receipt');
  }
});