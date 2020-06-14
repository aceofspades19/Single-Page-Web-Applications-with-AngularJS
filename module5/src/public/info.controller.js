(function () {
    "use strict";
    
    angular.module('public')
    .controller('InfoController', InfoController);
    
    InfoController.$inject = ['MenuService', 'info'];
    function InfoController(MenuService, info) {
      var $ctrl = this;
    
      if (info) {
        $ctrl.info = info;
        MenuService.getMenuItem(info.food)
        .then(function (response) {
            $ctrl.menuItem = response;
        });
        
      }
    };
    
    })();
    