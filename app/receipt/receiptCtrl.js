billSplitter.controller('receiptController', function ($scope, $location, Users, Items) {
  $scope.items = Items.items;
  $scope.billTotal = 0;
  $scope.addedUsers = [];
  $scope.splitters = Users.splitters;
  $scope.assignedDish = {};
  $scope.toggle = 1;
  $scope.taxTotal = 0;
  $scope.tipPercent = 0;

  console.log($scope.splitters);

  $scope.addItem = function (item) {
    $scope.items.push(item);
    $scope.billTotal += parseFloat(item.price);
    $scope.item = {};
  }

  $scope.calculateTipTax = function (bill) {
    $scope.taxTotal = bill.tip;
    $scope.tipPercent = bill.tax;
    $scope.bill = {};
  }

  $scope.clickChecker = function () {
    $scope.toggle++;
    $scope.assignedDish = $scope.items[this.$index];
    $scope.assignedDish.itemIndex = this.$index;
  }

  $scope.addPerson = function () {
    if($scope.splitters[this.$index].selected === "selected"){
      $scope.splitters[this.$index].selected = "";
    } else {
      $scope.splitters[this.$index].selected = "selected";
    }
  }

  $scope.assignPerson = function () {
    //loop through all people, check if their selected is set to true
    //increment count of those splitting it
    var count = 0;
    var splitAmong = [];
        
    for(var i = 0; i < $scope.splitters.length; i++){
      if($scope.splitters[i].selected === "selected"){
        count++;
        splitAmong.push(i);
        $scope.splitters[i].selected = "";
      }
    }

    var assignedDish = {
      dish: $scope.assignedDish.description,
      price: (parseFloat($scope.assignedDish.price * parseFloat($scope.assignedDish.quantity))/count).toFixed(2)
    };

    for(var i = 0; i < splitAmong.length; i++){
      var index = splitAmong[i];
      $scope.splitters[index].purchased.push(assignedDish);
      $scope.splitters[index].subtotal += parseFloat(assignedDish.price);
    }

    //then untoggle
    $scope.toggle++;
    //then remove the divided item
    $scope.items.splice([$scope.assignedDish['itemIndex']], 1);
  }

  $scope.viewTotals = function () {
    //before routing, calculate tax + tip totals for everyone
    //calculate tax percent
    var taxPercent = $scope.taxTotal / $scope.billTotal;
    var tipPercent = $scope.tipPercent / 100;
    console.log(taxPercent);
    for(var i = 0; i < $scope.splitters.length; i++){
      $scope.splitters[i].tax = $scope.splitters[i].subtotal * taxPercent;
      $scope.splitters[i].tip = $scope.splitters[i].subtotal * tip;
      $scope.splitters[i].total = $scope.splitters[i].subtotal + $scope.splitters[i].tax + $scope.splitters[i].tip;
    }
    $location.path('/total');
  }
  
});