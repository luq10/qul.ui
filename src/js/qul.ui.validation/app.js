(function () {
    'use strict';

    angular.module('qul.ui.validation', [
        'templates'
    ])
        .config(function(ValidationProvider){
            ValidationProvider.setMessages({
                required: 'Must be filled'
            });
        });
}());
