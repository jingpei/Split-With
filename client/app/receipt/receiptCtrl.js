billSplitter.controller('receiptController', function ($scope, $location, Users, Items) {
  $scope.items = Items.items;
  $scope.billTotal = Items.billTotal;
  console.log('Bill total: ' + $scope.billTotal);
  $scope.addedUsers = [];
  $scope.splitters = Users.splitters;
  $scope.assignedDish = {};
  $scope.noTaxTip = true;
  $scope.toggle = 1;
  $scope.taxTotal = 0;
  $scope.tipPercent = 0;
  $scope.addMenuItem = false;

  console.log($scope.splitters);

  $scope.addItem = function (item) {
    console.log("ITEM IS:");
    console.log(item);
    $scope.items.push(item);
    Items.billTotal += parseFloat(item.price);
    // item.selected = "";
    $scope.item = {};
    $scope.addMenuItem = false;
  }

  $scope.calculateTipTax = function (bill) {
    $scope.taxTotal = bill.tax;
    $scope.tipPercent = bill.tip;
    $scope.noTaxTip = false;
    $scope.bill = {};
  }

  $scope.clickChecker = function () {
    $scope.toggle++;
    $scope.assignedDish = $scope.items[this.$index];
    $scope.assignedDish.itemIndex = this.$index;
    $scope.items[this.$index].selected = "selected";
    $scope.currentIndex = this.$index;
  }

  $scope.addPerson = function () {
    if($scope.splitters[this.$index].selected === "selected"){
      $scope.splitters[this.$index].selected = "";
    } else {
      $scope.splitters[this.$index].selected = "selected";
    }
  }

  $scope.toggleInputs = function () {
    $scope.addMenuItem = true;
  }

  $scope.assignPerson = function () {
    //loop through all people, check if their selected is set to true
    //increment count of those splitting it
    var count = 0;
    var splitAmong = [];

    for(var i = 0; i < $scope.splitters.length; i++){
      console.log('Checking: ' + $scope.splitters[i].name);
      console.log('Selected property: ' + $scope.splitters[i].selected);
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
    // //then remove the divided item
    // $scope.items.splice([$scope.assignedDish['itemIndex']], 1);
    $('#check_' + $scope.currentIndex).addClass('assignedSplitters');
  }

  $scope.finishBill = function () {
    $location.path('/bill');
  }

  $scope.splitBill = function () {
    $location.path('/splitItems');
  }

  $scope.exit = function () {
    console.log("Toggled")
    $scope.toggle++;
  }

  $scope.viewTotals = function () {
    //before routing, calculate tax + tip totals for everyone
    //calculate tax percent
    // var taxPercent = $scope.taxTotal / $scope.billTotal;
    var taxPercent = $scope.taxTotal / Items.billTotal;
    var tipPercent = $scope.tipPercent / 100;
    for(var i = 0; i < $scope.splitters.length; i++){
      $scope.splitters[i].tax = ($scope.splitters[i].subtotal * taxPercent).toFixed(2);
      $scope.splitters[i].tip = ($scope.splitters[i].subtotal * tipPercent).toFixed(2);
      $scope.splitters[i].total = (parseFloat($scope.splitters[i].subtotal) + parseFloat($scope.splitters[i].tax) + parseFloat($scope.splitters[i].tip)).toFixed(2);
    }
    $location.path('/total');
  }
  
});