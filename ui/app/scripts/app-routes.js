angular.module("uiApp").config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when('/', {

    }).when('/test', {

        })
        .otherwise({
            redirectTo: "/"
        });
}]);