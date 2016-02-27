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

    .state('tabs.listcaba', {
      url: '/listcaba',
      views: {
        'listcaba-tab': {
          templateUrl: 'templates/listCaba.html',
          controller: 'ListCabaController'
        }
      }
    })

    .state('tabs.detailCaba', {
      url: '/listcaba/:aId',
      views: {
        'listcaba-tab': {
          templateUrl: 'templates/detailCaba.html',
          controller: 'ListCabaController'
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
    .state('tabs.info', {
      url: '/informacion',
      views: {
        'info-tab': {
          templateUrl: 'templates/informacion.html'
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

        var deviceInformation = ionic.Platform.device();

        var isWebView = ionic.Platform.isWebView();
        var isIPad = ionic.Platform.isIPad();
        var isIOS = ionic.Platform.isIOS();
        var isAndroid = ionic.Platform.isAndroid();
        var isWindowsPhone = ionic.Platform.isWindowsPhone();

        var currentPlatform = ionic.Platform.platform();
        var currentPlatformVersion = ionic.Platform.version();

        // ionic.Platform.exitApp(); // stops the app
        $scope.isAndroid = isAndroid;
        $scope.multas = data.multas;

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
      var deviceInformation = ionic.Platform.device();

      var isWebView = ionic.Platform.isWebView();
      var isIPad = ionic.Platform.isIPad();
      var isIOS = ionic.Platform.isIOS();
      var isAndroid = ionic.Platform.isAndroid();
      var isWindowsPhone = ionic.Platform.isWindowsPhone();

      var currentPlatform = ionic.Platform.platform();
      var currentPlatformVersion = ionic.Platform.version();

      //ionic.Platform.exitApp(); // stops the app
      $scope.isAndroid = isAndroid;

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
    }])

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: '<b>Valor U.F <b>',
       template: ' 1 U.F = 1 Litro.Nafta Alto Octanaje = $15,40'
     });
     alertPopup.then(function(res) {
       console.log('Usted consultó el valor de U.F. de R.A.');
     });
   };
    $scope.showAlertCaba = function() {
     var alertPopup = $ionicPopup.alert({
       title: '<b>Valor U.F </b> (C.A.B.A.)',
       template: ' 1 U.F = 1/2 Litro Nafta Alto Octanaje = $7,70'
     });
     alertPopup.then(function(res) {
       console.log('Usted consultó el valor de U.F. de C.A.B.A.');
     });
   };
})




.controller('ListCabaController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
      $http.get('js/data.json').success(function(data) {
      $scope.caba = data.caba;
      $scope.whichartist = $state.params.aId;
      $scope.data = {showDelete: false, showReorder: false};
      var deviceInformation = ionic.Platform.device();

      var isWebView = ionic.Platform.isWebView();
      var isIPad = ionic.Platform.isIPad();
      var isIOS = ionic.Platform.isIOS();
      var isAndroid = ionic.Platform.isAndroid();
      var isWindowsPhone = ionic.Platform.isWindowsPhone();

      var currentPlatform = ionic.Platform.platform();
      var currentPlatformVersion = ionic.Platform.version();

      $scope.isAndroid = isAndroid;

      $scope.onItemDelete = function(item) {
        $scope.caba.splice($scope.caba.indexOf(item), 1);
      };

      $scope.doRefresh = function() {
        $http.get('js/data.json').success(function(data) {
          $scope.caba = data;
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      $scope.toggleStar = function(item) {
        item.star = !item.star;
      };

      $scope.moveItem = function(item, fromIndex, toIndex) {
        $scope.caba.splice(fromIndex, 1);
        $scope.caba.splice(toIndex, 0, item);
      };
    });
    }]);
