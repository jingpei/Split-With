billSplitter.controller('receiptController', function ($scope, Users) {
  $scope.items = [];
  $scope.addedUsers = [];
  $scope.splitters = Users.splitters;
  $scope.assignedDish = {};
  $scope.toggle = 1;

  $scope.addItem = function (item) {
    $scope.items.push(item);
    $scope.item = {};
  }

  $scope.calculateTipTax = function() {

  }

  $scope.clickChecker = function () {
    $scope.toggle++;
    $scope.assignedDish = $scope.items[this.$index];
    $scope.assignedDish.itemIndex = this.$index;
  }

  $scope.addPerson = function () {
    if($scope.splitters[this.$index].selected === true){
      $scope.splitters[this.$index].selected = false;
    } else {
      $scope.splitters[this.$index].selected = true;
    }
  }

  $scope.assignPerson = function() {
    //loop through all people, check if their selected is set to true
    //increment count of those splitting it
    var count = 0;
    var splitAmong = [];
    
    console.log($scope.items);
    for(var i = 0; i < $scope.splitters.length; i++){
      if($scope.splitters[i].selected === true){
        count++;
        splitAmong.push(i);
      }
    }

    var assignedDish = {
      dish: $scope.assignedDish.description,
      price: parseInt($scope.assignedDish.price * parseInt($scope.assignedDish.quantity))/count
    };


    for(var i = 0; i < splitAmong.length; i++){
      var index = splitAmong[i];
      $scope.splitters[index].purchased.push(assignedDish);
    }

    //then untoggle
    $scope.toggle++;
    //then remove the divided item
    $scope.items.splice([$scope.assignedDish['itemIndex']], 1);
    console.log($scope.items);
    console.log($scope.splitters)
  }
  
});