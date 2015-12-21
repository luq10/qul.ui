(function () {
    'use strict';

    angular.module('qul.ui', [
        'ui.router',
        'templates'
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
                });

            $urlRouterProvider.otherwise('/tabs');
        });
}());
