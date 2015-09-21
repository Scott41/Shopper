(function() {
  'use strict';

  angular.module('item.service', ['ngStorage'])

      .factory('Items', function ($localStorage, $http) {
        var items;

        if ($localStorage.shopperItems == null || undefined) {
          $http.get('json/defaultItems.json').success(function(data) {
            $localStorage.shopperItems = data;
            items = $localStorage.shopperItems;
          });
        } else {
          items = $localStorage.shopperItems;
        }

        return {
          all: function () {
            return items;
          },
          remove: function (item) {
            items.splice(items.indexOf(item), 1);
          },
          get: function (itemId) {
            for (var i = 0; i < items.length; i++) {
              if (items[i].id === parseInt(itemId)) {
                return items[i];
              }
            }
            return null;
          }
        };
      });
})();