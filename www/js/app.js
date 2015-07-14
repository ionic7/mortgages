// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('starter', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('1', {
      name: '1',
      url: '/',
      templateUrl: '1.html',
      controller: 'SignInCtrl'
    })
    .state('2', {
      name: '2',
      url: '/',
      templateUrl: '2.html',
      controller: 'SignInCtrl'
    })
    .state('3', {
      name: '3',
      url: '/',
      templateUrl: '3.html',
      controller: 'SignInCtrl'
    })
    .state('4', {
      name: '4',
      url: '/',
      templateUrl: '4.html',
      controller: 'SignInCtrl'
    })
    .state('5', {
      name: '5',
      url: '/',
      templateUrl: '5.html',
      controller: 'SignInCtrl'
    })
    .state('6', {
      name: '6',
      url: '/',
      templateUrl: '6.html',
      controller: 'navCtrl'
    })
    .state('7', {
      name: '7',
      url: '/',
      templateUrl: '7.html',
      controller: 'SignInCtrl'
    })
    .state('7a', {
      name: '7a',
      url: '/',
      templateUrl: '7a.html',
      controller: 'SignInCtrl'
    });

  $urlRouterProvider.otherwise('/');
});

app.controller('SignInCtrl', function($scope, $state,$ionicSideMenuDelegate) {

  var firstInc = 125000;
  var secondInc = 10000;
  var thirdInc = 35;

  $scope.create = function() {
    $state.go('2');
  };

  $scope.next = function() {
    $state.go('3');
  };

  $scope.nextPage = function() {
    $state.go('4');
  };

  $scope.fifthPage = function() {
    $state.go('5');
  };

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.$root.enableRight = true;

  $scope.console1 = {}; // To store the value of the first input box in Script 5 and use it in script 7
  $scope.console3 = {}; // To store the value of the  third input box in Script 5 and use it in script 7

  $scope.console1.value1 = "£120000";
  $scope.console3.value2 = "35";

   // button to increment and decrement the value of first input box
  $scope.inc1 = function(data1) {
    firstInc = data1+firstInc;
    $scope.console1.value1 = "£"+firstInc;
    scope.counter = 1;
  };

  // button to increment and decrement the value of second input box
  $scope.inc2 = function(data2) {
    secondInc = data2+secondInc;
    $scope.console2 = "£"+secondInc;
  };

  // button to increment and decrement the value of third input box
  $scope.inc3 = function(data3) {
    thirdInc = data3+thirdInc;
    $scope.console3 = thirdInc+" Years";
  };

  $scope.result1 = $scope.console1.value1;     // NOT WORKING..Objective is to store the final result of first input box
  $scope.result2 = $scope.console3.value2;    //NOT WORKING..Objective is to store the final result of third input box

  $scope.sixthPage = function() {
    $state.go('6');
    if($scope.counter==1) {
      // able to get the desired value here inside a function
      $scope.result1 = $scope.console1.value1 ;
    } else {
    }
  };

  $scope.sidePage = function() {
    $state.go('7a');
  };

});

app.controller('MapCtrl', function($scope,$state) {

  $scope.fifthPage = function() {
    $state.go('5');
  };

  google.maps.event.addDomListener(window, 'load', function(){
    var myLatlng = new google.maps.LatLng(37.30000, -120.4833);
    var mapOptions = {
      center:myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP };
    var map = new google.maps.Map(document.getElementById("map"),mapOptions);
    $scope.map = map;
  });
});

app.controller('navCtrl', function($scope, $state) {
  setTimeout(function(){
    $state.go('7');
      //do what you need here
  }, 5000);
});
