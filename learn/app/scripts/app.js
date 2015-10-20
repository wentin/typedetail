'use strict';

/**
 * @ngdoc overview
 * @name learnApp
 * @description
 * # learnApp
 *
 * Main module of the application.
 */
angular
  .module('learnApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
