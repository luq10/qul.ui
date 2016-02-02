(function () {
    'use strict';

    angular.module('qul.ui', [
        'ui.router',
        'templates',

        'qul.ui.tabs',
        'qul.ui.validation'
    ])

        // Configure UI router.
        .config(function ($stateProvider, $urlRouterProvider) {
            // Preview of GUI.
            $stateProvider
                .state('gui', {
                    abstract: true,
                    template: '<ui-view/>',
                    url:      ''
                })
                .state('gui.tabs', {
                    url:         '/tabs',
                    templateUrl: 'views/pages/tabs.html',
                    controller:  'TabsController'
                })
                .state('gui.validation', {
                    url:         '/validation',
                    templateUrl: 'views/pages/validation.html',
                    controller:  'ValidationController'
                });

            $urlRouterProvider.otherwise('/tabs');
        });
}());
