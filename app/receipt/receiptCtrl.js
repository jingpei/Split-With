billSplitter.controller('receiptController', function ($scope, Users) {
  $scope.items = [];
  console.log(Users);

  $scope.addItem = function (item) {
    $scope.items.push(item);
    $scope.item = {};
  }

  $scope.clickChecker = function () {
    console.dir(this)
  }
  
});