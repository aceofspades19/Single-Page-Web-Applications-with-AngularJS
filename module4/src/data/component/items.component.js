(function() {
  'use strict';

  angular.module('data')
    .component('items', {
      templateUrl: 'src/data/template/item-list.template.html',
      bindings: {
        items: '<'
      }
    });
})();
