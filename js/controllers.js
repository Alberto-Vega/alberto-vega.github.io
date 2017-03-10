'use strict';
/* Controllers */
var myPortfolioApp = angular.module('myPortfolioApp', []);

myPortfolioApp.controller('itemControllers', function ($scope){
    $scope.apps = [
        { 'name':'SwiftQwizz',
    'description': "Coolest app ever"},
        {'name': 'San Carlos',
    'description': "Touristic app for san carlos"}
    ];
});
