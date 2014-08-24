(function () {

    "use strict";

    stormySpaces.controller("cloudController", ["$animate",cloudController]);

    function cloudController($animate) {
        var vm = this;

        vm.DrawRectangle = _drawRectangle;

        function _drawRectangle() {
            var cloud = document.getElementById("cloud");
            var context = cloud.getContext("2d");
            context.fillRect(50, 25, 150, 100);
        }

    }

})();