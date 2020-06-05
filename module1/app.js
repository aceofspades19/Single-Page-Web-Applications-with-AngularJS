(function() {
    'use strict'; 
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", function($scope){
        $scope.message=""; 
        $scope.lunchmenu=""; 

        $scope.CheckItems = function(){
            var numitems = $scope.lunchmenu.split(",").length; 
            if($scope.lunchmenu == ""){
                $scope.message = "Please enter data first"
            } else if(numitems <= 3){
                $scope.message = "Enjoy!";
            } else if(numitems > 3){
                $scope.message = "Too much!";
            }
        };
    });


})();

