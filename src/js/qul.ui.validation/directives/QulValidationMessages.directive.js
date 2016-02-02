(function () {
    'use strict';

    angular.module('qul.ui.validation')
        .directive('qulValidationMessages', function ($parse) {
            return {
                restrict: 'A',
                require: 'form',

                link: function(scope, element, attrs){
                    scope.messages = $parse(attrs.qulValidationMessages)(scope);
                },

                controller: function ($scope) {
                    /**
                     * Get validator messages
                     *
                     * @returns {Object}
                     */
                    this.getMessages = function(){
                        return $scope.messages;
                    };
                }
            }
        });
}());
