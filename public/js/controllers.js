'use strict';

/* Controllers */

angular.module('mblogApp.controllers', ['mblogApp.services', 'firebase']).
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
  controller('welcomeCtrl', function($scope) {
    //
  }).
  controller('registerCtrl', function($scope, angularFireAuth){
    var ref = new Firebase('https://edward-g.firebaseio.com');
    angularFireAuth.initialize(ref, {scope: $scope, name: "user"});

  }).
  controller('makePostCtrl', function($scope, posts){
    $scope.open = function(){
      $scope.openStatus = true;
    };

    $scope.close = function(){
      $scope.openStatus = false;
    };

    $scope.post = function(){
      console.log($scope.user, $scope.text, Date.now());
      posts.push($scope.user, $scope.text);
      $scope.close();
    };

    $scope.opts = {
      backdropFade: true,
      dialogFade: true
    };
  }).
  controller('showPostCtrl', function($scope, posts){
    $scope.posts = posts.get();
  });
