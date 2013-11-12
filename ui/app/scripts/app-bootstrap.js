'use strict';

angular.module("controllers", ['appMgr', 'navBar', 'sectionHeader', 'navSider']);
angular.module("services", []);
angular.module("directives", []);
angular.module("common", ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui', 'ui.bootstrap']);

angular.module("uiApp", ["controllers", "services", "directives", "common"]);

angular.module("uiApp").config(["$routeProvider", function ($routeProvider) {

    }])
    .run(["$location", function ($location) {

    }]);