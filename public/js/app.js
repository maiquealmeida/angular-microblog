'use strict';

// Declare app level module which depends on filters, and services

var module = angular.module('mblogApp', [
  'mblogApp.controllers',
  'mblogApp.filters',
  'mblogApp.services',
  'mblogApp.directives',
  'ui.bootstrap',
  'firebase'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home',
      controller: 'welcomeCtrl'
    }).
    when('/login', {
      templateUrl: 'partials/login'
    }).
    when('/register',{
      templateUrl: 'partials/register',
      controller: 'registerCtrl'
    }).
    when('/about', {
      templateUrl: 'partials/about'
    }).
    when('/post', {
      templateUrl: 'partials/post'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
