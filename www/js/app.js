// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.operations', {
      url: '/operations',
      views: {
        'tab-operations': {
          templateUrl: 'templates/tab-operations.html',
          controller: 'OperationsCtrl'
        }
      }
    })
    .state('tab.operation-detail', {
      url: '/operation/:operationId',
      views: {
        'tab-operations': {
            templateUrl: 'templates/tab-operation.html',
            controller: 'OperationDetailCtrl'
        }
      }
    })

    .state('tab.romains', {
      url: '/romains',
      views: {
        'tab-romains': {
          templateUrl: 'templates/tab-romains.html',
          controller: 'RomainsCtrl'
        }
      }
    })

    .state('tab.romain-lire', {
      url: '/romain/lire',
      views: {
          'tab-romains': {
              templateUrl: 'templates/tab-romain-lire.html',
              controller: 'RomainLireCtrl'
          }
      }
    })

    .state('tab.romain-ecrire', {
      url: '/romain/ecrire',
      views: {
          'tab-romains': {
              templateUrl: 'templates/tab-romain-ecrire.html',
              controller: 'RomainEcrireCtrl'
          }
      }
    })

    .state('tab.romain-detail', {
      url: '/romain/:romainId',
      views: {
          'tab-romains': {
              templateUrl: 'templates/tab-romain.html',
              controller: 'RomainDetailCtrl'
          }
      }
    })


  ;


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

