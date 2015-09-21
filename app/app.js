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
});

billSplitter.factory('Users', function () {
  return {};
})