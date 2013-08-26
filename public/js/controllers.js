'use strict';

/* Controllers */

angular.module('mblogApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!'
    });

  }).
  controller('WelcomeCtrl', function($scope) {
    //
  }).
  controller('makePostCtrl', function($scope){
    $scope.open = function(){
      $scope.openStatus = true;
    };

    $scope.close = function(){
      $scope.openStatus = false;
    };

    $scope.post = function(){

    };

    $scope.opts = {
      backdropFade: true,
      dialogFade: true
    };
  }).
  controller('showPostCtrl', function($scope){
      
  });
