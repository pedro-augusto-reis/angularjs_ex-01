angular.module("uiAccordion",[]);

// possibilita "carregar" o conteudo antes do view/accordion.html para separar a necessidade de um apontamento fisico;
angular.module("uiAccordion").run(function($templateCache){
    $templateCache.put("view/accordions.html", '<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>');
});

angular.module("uiAccordion").directive("uiAccordions", function () {
    return {
        controller: function ($scope, $element, $attrs) {
            var accordions = [];

            this.registerAccordion = function (accordion) {
                accordions.push(accordion);
            };

            this.closeAll = function () {
                accordions.forEach(function (accordion) {
                    accordion.isOpened = false;
                });
            }
        }
    };
});

angular.module("uiAccordion").directive("uiAccordion", function () {
    return {
        templateUrl: "view/accordions.html",
        transclude: true,
        scope: {
            title: "@"
        },
        require: "^uiAccordions",
        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAccordion(scope);
            scope.open = function () {
                var estado = scope.isOpened;
                ctrl.closeAll();
                if (estado ? scope.isOpened = false : scope.isOpened = true);
            };
        }
    };
});