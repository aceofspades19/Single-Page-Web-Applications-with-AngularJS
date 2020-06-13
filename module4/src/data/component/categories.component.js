(function() {
  'use strict';

  angular.module('data')
    .component('categories', {
      templateUrl: 'src/data/template/category-list.template.html',
      bindings: {
        items: '<'
      }
    });
})();
