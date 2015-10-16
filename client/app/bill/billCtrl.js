billSplitter.controller('billController', function ($scope, $location, Users, Items) {
  $scope.items = Items.items;
  $scope.billTotal = Items.billTotal;
  $scope.splitters = Users.splitters;
  $scope.noTaxTip = true;
  $scope.taxTotal = 0;
  $scope.tipPercent = 0;

  $scope.calculateTipTax = function (bill) {
    $scope.taxTotal = bill.tax;
    $scope.tipPercent = bill.tip;
    $scope.noTaxTip = false;
    $scope.bill = {};
  }

  $scope.viewTotals = function () {
    //before routing, calculate tax + tip totals for everyone
    //calculate tax percent
    var taxPercent = $scope.taxTotal / $scope.billTotal;
    var tipPercent = $scope.tipPercent / 100;
    for(var i = 0; i < $scope.splitters.length; i++){
      $scope.splitters[i].tax = ($scope.splitters[i].subtotal * taxPercent).toFixed(2);
      $scope.splitters[i].tip = ($scope.splitters[i].subtotal * tipPercent).toFixed(2);
      $scope.splitters[i].total = (parseFloat($scope.splitters[i].subtotal) + parseFloat($scope.splitters[i].tax) + parseFloat($scope.splitters[i].tip)).toFixed(2);
    }
    $location.path('/total');
  }
});