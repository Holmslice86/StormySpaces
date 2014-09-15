(function () {

    "use strict";

    stormySpaces.controller("homeController", ["$window", homeController]);

    function homeController($window) {

        var vm = this;
        var _answer = "Yes";

        var _panels = [
        {
            panelHeader: "Creative Design",
            panelBody: "We are very creative!"
        },
        {
            panelHeader: "Cutting Edge Technology",
            panelBody: "We use cutting edge tech!"

        },
        {
            panelHeader: "With a Personal Touch",
            panelBody: "We treat all of our customers as if they were family"
        }
        ];


        var floatingNav = document.getElementById("floatingNav");
        var navDistanceFromTop = 500;
        var isNavFixed = false;
        angular.element($window).bind("scroll", function () {

            var windowTop = $window.pageYOffset;
            var shouldBeFixed = windowTop > navDistanceFromTop;

            if (shouldBeFixed && !isNavFixed) {
                floatingNav.style.position({
                    position: 'fixed',
                    top: 0
                });
            } else {

            }

        });


        vm.Answer = _answer;
        vm.Panels = _panels;
    }

})();