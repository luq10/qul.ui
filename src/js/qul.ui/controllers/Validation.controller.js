(function () {
    'use strict';

    angular.module('qul.ui')
        .controller('ValidationController', function ($scope) {
            $scope.isRequired = false;

            $scope.send1 = send1;
            $scope.send2 = send2;

            function send1(form, data){
                if(form.$invalid){
                    return;
                }

                alert('send');
            }

            function send2(form, data){
                form.input2.$setValidity('unique', false);

                if(form.$invalid){
                    return;
                }

                alert('send');
            }
        });
}());
