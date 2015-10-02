(function() {
  'use strict';

  angular.module('item.service', ['ngStorage'])

      .factory('Items', function ($localStorage, $ionicLoading) {
        var items = $localStorage.shopperItems;

        return {
          set: function (i) {
            items = i;
          },
          all: function () {
            return items || [];
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
            items.splice(items.indexOf(item), 1);
          },
          get: function (itemId) {
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
