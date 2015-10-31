/* global angular */
(function() {
  'use strict';

  angular.module('app', ['ionic', 'ngStorage', 'tabsSwipable.directive', 'ngTouch', 'ngAnimate',
  'search.directive', 'ng-mfb', 'dash.controller', 'list.controller',
  'shelf.controller', 'itemDetail.controller', 'item.service'])

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
            StatusBar.overlaysWebView(true);
            StatusBar.styleBlackTranslucent();
          }
        });
      })
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
              url: '/tab',
              abstract: true,
              templateUrl: 'views/tabs.html'
            })
            .state('tab.dash', {
              url: '/dash',
              cache: false,
              views: {
                'tab-dash': {
                  templateUrl: 'views/tab-dash.html',
                  controller: 'DashController'
                }
              },
              resolve: {
                defaultItems: function ($localStorage, Items) {
                  if (!$localStorage.shopperItems || angular.equals({}, $localStorage.shopperItems)) {
                    return Items.getDefaultItems();
                  } else {
                    return [];
                  }
                }
              }
            })
            .state('tab.list', {
              url: '/list',
              cache: false,
              views: {
                'tab-list': {
                  templateUrl: 'views/tab-list.html',
                  controller: 'ListController'
                }
              }
            })
            .state('tab.shelf', {
              url: '/shelf',
              cache: true,
              views: {
                'tab-shelf': {
                  templateUrl: 'views/tab-shelf.html',
                  controller: 'ShelfController'
                }
              }
            })
            .state('tab.item-detail', {
               url: '/shelf/:id',
               views: {
                 'tab-shelf': {
                   templateUrl: 'views/item-detail.html',
                   controller: 'ItemDetailController'
                 }
               }

            });
        $urlRouterProvider.otherwise('/tab/dash');
      })
      .constant('$ionicLoadingConfig', {
          template: '<ion-spinner class="spinner-positive" icon="bubbles"></ion-spinner>',
          noBackdrop: true
      });
})();
