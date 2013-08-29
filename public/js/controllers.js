'use strict';

/* Controllers */

angular.module('mblogApp.controllers', ['mblogApp.services']).
  controller('welcomeCtrl', function($scope) {
    
  }).
  controller('makePostCtrl', ['posts',function($scope, posts){
      posts.push($scope.user, $scope.text);

  }]).
  controller('showPostCtrl', ['posts', function($scope, posts){
    $scope.posts = posts.get();
  }]);
