'use strict';

// Declare app level module which depends on filters, and services

var module = angular.module('mblogApp', [
  'mblogApp.controllers',
  'mblogApp.filters',
  'mblogApp.services',
  'mblogApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home',
      controller: 'WelcomeCtrl'
    }).
    when('/login', {
      templateUrl: 'partials/login'
    }).
    when('/register',{
      templateUrl: 'partials/register'
    }).
    when('/about', {
      templateUrl: 'partials/about'
    }).
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
