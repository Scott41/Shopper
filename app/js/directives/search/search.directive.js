angular
.module('search.directive', [])
.controller('SearchController', ['$scope', '$state', function($scope, $state) {

}])
.directive('listSearch', function() {
  return {
    restrict: 'EA',
    templateUrl: 'js/directives/search/search.directive.html'
    // link: function (scope, element, attrs) {
    // 
    // }
  };
});
