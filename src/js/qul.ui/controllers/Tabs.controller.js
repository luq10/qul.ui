(function () {
    'use strict';

    /**
     * Main view when user is not login
     */
    angular.module('qul.ui')
        .controller('TabsController', function ($scope) {
            $scope.foo      = foo;
            $scope.openTab  = openTab;

            /**
             *
             */
            function foo(){
                console.log('foo');
            }

            /**
             *
             * @param paneTitle
             */
            function openTab(paneTitle){
                $scope.example.open(paneTitle);
            }
        });
}());
