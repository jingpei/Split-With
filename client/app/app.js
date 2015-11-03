var billSplitter = angular.module('billSplitter', ['ngRoute'])

billSplitter.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/people/splitters.html',
      controller: 'splittersController'
    })
    .when('/receipt', {
      templateUrl: 'app/receipt/receipt.html',
      controller: 'receiptController'
    })
    .when('/splitItems', {
      templateUrl: 'app/receipt/splitItems.html',
      controller: 'receiptController'
    })
    .when('/bill', {
      templateUrl: 'app/bill/bill.html',
      controller: 'receiptController'
    })
    .when('/total', {
      templateUrl: 'app/total/total.html',
      controller: 'totalController'
    })
    .when('/:selected_person', {
      templateUrl: 'app/person/person.html',
      controller: 'personController'
    })
});

billSplitter.factory('Users', function () {
  return {};
})

billSplitter.factory('Items', function() {
  return {
    items: [],
    billTotal: 0
  };
})