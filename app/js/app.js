'use strict';

/* App Module */
var madpacApp = angular.module('madpacApp', [
  'ngRoute',
  'madpacControllers'
]);

madpacApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index/:pageIndex', {
        templateUrl: 'partials/post-list.html',
        controller: 'MadpacListCtrl'
      }).
      when('/index/:postId', {
        templateUrl: 'partials/post-detail.html',
        controller: 'MadpacDetailCtrl'
      }).
      otherwise({
        redirectTo: '/index'
      });
  }]);