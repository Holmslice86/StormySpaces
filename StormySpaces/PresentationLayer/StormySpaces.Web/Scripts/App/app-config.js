(function () {
    "use strict";
    var _baseUrl = "";

    stormySpaces.value("appSettings", {
        BaseUrl: _baseUrl,
        Title: "Stormy Spaces"
    });

    stormySpaces.config(["$routeProvider", appConfig]);

    function appConfig($routeProvider) {

        $routeProvider.when("/", {
            templateUrl: _baseUrl + "../Scripts/App/Views/Cloud.html",
            controller: "cloudController as vm"
        });
    }

})();