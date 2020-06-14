(function () {
    "use strict";

    angular.module('common')
        .service('InfoService', InfoService);

    function InfoService() {
        var service = this;

        service.saveUserDetail = function (userInfo) {
            service.userInfo = userInfo;
        };
        service.getUserDetails = function () {
            return service.userInfo;
        };
    };

})();  