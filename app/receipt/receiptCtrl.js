billSplitter.controller('receiptController', function ($scope, Users) {
  $scope.items = [];
  $scope.splitters = Users.splitters;
  $scope.toggle = 1;

  $scope.addItem = function (item) {
    $scope.items.push(item);
    $scope.item = {};
  }

  $scope.clickChecker = function () {
    $scope.toggle++;
  }

  $scope.assignPerson = function() {
  }
  
});