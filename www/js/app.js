// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'templates/home.html'
        }
      }
    })

    .state('tabs.list', {
      url: '/list',
      views: {
        'list-tab': {
          templateUrl: 'templates/list.html',
          controller: 'ListController'
        }
      }
    })

    .state('tabs.detail', {
      url: '/list/:aId',
      views: {
        'list-tab': {
          templateUrl: 'templates/detail.html',
          controller: 'ListController'
        }
      }
    })

    .state('tabs.multa', {
      url: '/multa',
      views: {
        'multa-tab': {
          templateUrl: 'templates/multa.html',
          controller: 'MultasController'
        }
      }
    })
    .state('multas', {
      url: '/multas',
      views: {
        'multas-tab': {
          templateUrl: 'templates/multas.html',
          controller: 'MultasController'
        }
      }
    })
    .state('tabs.contacto', {
      url: '/contacto',
      views: {
        'contacto-tab': {
          templateUrl: 'templates/contacto.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/home');
})

.controller('MultasController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
      $http.get('js/data.json').success(function(data) {
      $scope.multas = data.multas;

      $scope.onItemDelete = function(index, item) {
        $scope.multas[index].schedule.splice($scope.multas[index].schedule.indexOf(item), 1);
      };

      $scope.doRefresh = function() {
        $http.get('js/data.json').success(function(data) {
          $scope.multas = data.multas;
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      $scope.toggleStar = function(item) {
        item.star = !item.star;
      };

    });
    }])

    .controller('ListController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
      $http.get('js/data.json').success(function(data) {
      $scope.tips = data.tips;
      $scope.whichartist = $state.params.aId;
      $scope.data = {showDelete: false, showReorder: false};

      $scope.onItemDelete = function(item) {
        $scope.tips.splice($scope.tips.indexOf(item), 1);
      };

      $scope.doRefresh = function() {
        $http.get('js/data.json').success(function(data) {
          $scope.tips = data;
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      $scope.toggleStar = function(item) {
        item.star = !item.star;
      };

      $scope.moveItem = function(item, fromIndex, toIndex) {
        $scope.tips.splice(fromIndex, 1);
        $scope.tips.splice(toIndex, 0, item);
      };
    });
    }]);
