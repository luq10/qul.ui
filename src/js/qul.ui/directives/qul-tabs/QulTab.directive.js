(function () {
    'use strict';

    angular.module('qul.ui')
        .directive('qulTab', function () {
            return {
                restrict: 'E',
                require: '^qulTabset',
                templateUrl: 'views/elements/qul-tabs/qul-tab.html',
                transclude: true,
                replace: true,
                scope: {},

                link: function (scope, element, attrs, TabsetCtr) {
                    scope.isOpen = false;

                    // Initialization
                    (function(){
                        TabsetCtr.addTab(attrs.title, scope);

                        if(attrs.active){
                            TabsetCtr.open(attrs.title);
                        }
                    }());
                }
            }
        });
}());
