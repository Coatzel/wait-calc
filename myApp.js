var app = angular.module("myApp", [])

app.controller("myCtrl", [
    '$scope',
    function($scope) {
        console.log("Test");

        $scope.tiptotal = 0;
        $scope.count = 0;

        $scope.addTotal = function() {
            $scope.subtotal = $scope.meal + ($scope.meal * ($scope.tax / 100));
            $scope.tip = $scope.meal * ($scope.tippercent / 100);
            $scope.total = $scope.subtotal + $scope.tip;

            $scope.tiptotal = $scope.tiptotal + $scope.tip;
            $scope.count = $scope.count + 1;

            $scope.atpm = $scope.tiptotal / $scope.count;
        }

        $scope.reset = function() {
            $scope.meal = null;
            $scope.tax = null;
            $scope.tippercent = null;
        }

        $scope.earnReset = function() {
            $scope.subtotal = 0;
            $scope.tip = 0;
            $scope.total = 0;
            $scope.tiptotal = 0;
            $scope.count = 0;
            $scope.atpm = 0;
        }

    }
]);
