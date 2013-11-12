'use strict';

angular.module('navSider', []).controller('navSiderCtrl', ["$scope", function ($scope) {
    $scope.siders = [

        {
            name: "test1",
            href: "test1",
            secondary: []
        }
        ,

        {
            name: "test1",
            href: "test1",
            secondary: []
        }
        ,

        {
            name: "test1",
            href: "test1",
            secondary: []
        }
        ,

        {
            name: "test1",
            href: "href",
            secondary: [
                {
                    name: "test1",
                    href: "test1"

                },
                {
                    name: "test1",
                    href: "test2"
                },
                {
                    name: "test1",
                    href: "test3"
                }
            ]
        }

    ];
}]);
