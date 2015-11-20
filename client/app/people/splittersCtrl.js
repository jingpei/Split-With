billSplitter.controller('splittersController', function ($scope, $location, Users) {
  $scope.users = Users
  $scope.users.splitters = [];

  $scope.addUser = function(name){
    var user = {};
    user['name'] = name;
    user['purchased'] = [];
    user['selected'] = "";
    user['subtotal'] = 0;
    user['total'] = 0;
    user['tip'] = 0;
    user['tax'] = 0;
    $scope.users.splitters.push(user);
    $scope.name = "";
    $('#addFriend').focusout();
    $('input').focus();
  }

  $scope.shareData = function(){
    $location.path('/receipt');
  }
});