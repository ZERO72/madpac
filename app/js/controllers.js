'use strict';

/* Controllers */

var madpacControllers = angular.module('madpacControllers', []);

madpacControllers.controller('MadpacListCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $http) {
    $http.get('http://149.210.155.99/~madpac/development_3/api/get_posts/?page=' + $routeParams.pageIndex).success(function(data) {
      $scope.posts = data.posts;
    });

    $scope.orderProp = 'title';
  }]);

madpacControllers.controller('MadpacDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('http://149.210.155.99/~madpac/development_3/api/get_post/?id=' + $routeParams.postId).success(function(data) {
      $scope.post = data.post;
    });
  }]);