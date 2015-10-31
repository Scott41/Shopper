(function() {
  'use strict';

  angular.module('item.service', [])

      .factory('Items', function ($localStorage, $ionicLoading, $http, $q) {
        return {
          // set: function (i) {
          //   items = i;
          // },
          getDefaultItems: function() {
            var deferred = $q.defer();
            $ionicLoading.show();
            $http.get('json/defaultItems.json').success(function (data) {
              deferred.resolve(data);
              $ionicLoading.hide();
            });
            return deferred.promise;
          },
          all: function () {
            return $localStorage.shopperItems || [];
          },
          add: function (name) {
            var newItem = {
              "name": name,
              "id": name.toLowerCase(),
              "lastBought": "",
              "timesBought": 0,
              "aisle": "",
              "selected": true
            };
            $localStorage.shopperItems.push(newItem);
          },
          update: function (item, name) {

          },
          remove: function (item) {
            var items = $localStorage.shopperItems;
            items.splice(items.indexOf(item), 1);
          },
          get: function (itemId) {
            var items = $localStorage.shopperItems;
            for (var i = 0; i < items.length; i++) {
              if (items[i].id == itemId) {
                return items[i];
              }
            }
            return null;
          }
        };
      });
})();
