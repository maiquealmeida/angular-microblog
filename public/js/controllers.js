'use strict';

/* Controllers */

angular.module('mblogApp.controllers', ['mblogApp.services']).
  controller('welcomeCtrl', function($scope) {
    
  }).
  controller('makePostCtrl', function($scope, $location, posts){
  	$scope.close = function(){
      $location.path('/');
    };

    $scope.makePost = function(){
      posts.push($scope.user, $scope.text);
      $location.path('/');
    };

  }).
  controller('showPostCtrl', function($scope, posts){
    $scope.posts = posts.get();
  }).
  controller('registerCtrl', ['angularFire', function($scope){

  }]);
