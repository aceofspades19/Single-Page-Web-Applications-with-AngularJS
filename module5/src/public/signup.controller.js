(function () {
    var myApp = angular.module('public');
    myApp.controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'InfoService'];
    function SignUpController(MenuService, InfoService) {
        var reg = this;
        reg.invalidFavourite = false;
        reg.user = {}; 
        reg.user.food = "";
        reg.user.firstName = "";
        reg.user.lastName = "";
        reg.user.email = "";
        reg.user.phone = "";

        reg.showMsg=false;
        reg.submit = function () {
            MenuService.getMenuItem(reg.user.food)
            .then(function (response) {
                if(response === undefined || response.length == 0)
                    reg.invalidFavourite = true;
                else 
                reg.invalidFavourite = false;
            });
            InfoService.saveUserDetail(reg.user);
        };

        reg.validateFood = function () {
            MenuService.getMenuItem(reg.user.food)
                .then(function (response) {
                    if(!response || response.length == 0 )
                        reg.invalidFavourite = true;
                    else 
                    reg.invalidFavourite = false;
                });
        };
    };
})();