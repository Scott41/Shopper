(function() {
  'use strict';

  angular.module('app', ['ionic', 'dash.controller', 'list.controller', 'shelf.controller', 'item.service'])

      .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

          }
          if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
          }
        });
      })

      .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tab', {
              url: '/tab',
              abstract: true,
              templateUrl: '../views/tabs.html'
            })
            .state('tab.dash', {
              url: '/dash',
              views: {
                'tab-dash': {
                  templateUrl: '../views/tab-dash.html',
                  controller: 'DashController'
                }
              }
            })

            .state('tab.list', {
              url: '/list',
              views: {
                'tab-list': {
                  templateUrl: '../views/tab-list.html',
                  controller: 'ListController'
                }
              }
            })

            .state('tab.shelf', {
              url: '/shelf',
              views: {
                'tab-shelf': {
                  templateUrl: '../views/tab-shelf.html',
                  controller: 'ShelfController'
                }
              }
            });

        $urlRouterProvider.otherwise('/tab/dash');

      });
})();