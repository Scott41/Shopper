(function() {
  'use strict';

  angular.module('setDefaultItems.service', ['ngResource'])

      .factory('DefaultItems', ['$resource', function($resource) {
        return $resource('json/defaultItems.json');
      }]);

})();
