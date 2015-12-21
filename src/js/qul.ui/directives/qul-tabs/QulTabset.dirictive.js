(function () {
    'use strict';

    angular.module('qul.ui')
        .directive('qulTabset', function () {
            return {
                restrict:    'E',
                templateUrl: 'views/elements/qul-tabs/qul-tabset.html',
                transclude: true,
                replace: true,
                scope: {
                    name: '@'
                },

                controller: function($scope){
                    var _private = {
                        /**
                         *
                         * @param {Number} index
                         */
                        open: function(index){
                            _private.closeOpened();

                            $scope.activeIndex                  = index;
                            $scope.tabs[index].scope.isActive   = true;
                        },

                        /**
                         *
                         * @param {Number} index
                         */
                        close: function(index){
                            $scope.activeIndex                  = null;
                            $scope.tabs[index].scope.isActive   = false;
                        },

                        /**
                         *
                         */
                        closeOpened: function(){
                            if(null === $scope.activeIndex){
                                // Not opened now
                                return;
                            }

                            _private.close($scope.activeIndex);
                        },

                        /**
                         *
                         * @param {String} title
                         * @returns {Number|null}
                         */
                        getIndex: function(title){
                            var tabs = $scope.tabs;
                            var tab;

                            for(var i = 0, ilen = tabs.length; i < ilen; i++){
                                tab = tabs[i];

                                if(tab.title == title){
                                    return i;
                                }
                            }

                            return null;
                        }
                    };

                    /**
                     *
                     * @param {String} title
                     * @param {Object} scope
                     */
                    this.addTab = function(title, scope){
                        $scope.tabs.push({
                            title: title,
                            scope: scope
                        });
                    };

                    /**
                     *
                     * @param {String|Number} handler
                     */
                    this.open = function(handler){
                        var index;

                        if(typeof handler === 'string'){
                            index = _private.getIndex(handler);
                        }
                        else{
                            index = handler;
                        }

                        _private.open(index);
                    };

                    /**
                     *
                     * @param {String|Number} handler
                     */
                    this.close = function(handler){
                        var index;

                        if(typeof handler === 'string'){
                            index = _private.getIndex(handler);
                        }
                        else{
                            index = handler;
                        }

                        _private.close(index);
                    };

                    $scope.tabs         = [];
                    $scope.activeIndex  = null;

                    $scope.open         = _private.open;

                    /**
                     *
                     */
                    (function(){
                        if(!$scope.name){
                            return;
                        }

                        $scope.$parent[$scope.name] = {
                            open:   this.open,
                            close:  this.close
                        };
                    }.call(this));
                }
            }
        });
}());
