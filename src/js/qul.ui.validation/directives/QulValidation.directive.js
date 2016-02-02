(function () {
    'use strict';

    angular.module('qul.ui.validation')
        .directive('qulValidation', function ($parse, $templateRequest, $compile, Validation) {
            return {
                restrict: 'A',
                require: [
                    '^form',
                    '^?qulValidationMessages'
                ],

                scope: true,

                link: function (scope, element, attrs, controllers) {
                    var formController      = controllers[0];
                    var validationMessages  = controllers[1];

                    var name        = attrs.name;

                    scope.errorMessage  = '';

                    /**
                     * Initialize
                     */
                    (function(){
                        // Append 'validation-error' template
                        getTemplate()
                            .then(function(template){
                                appendTemplate(element.parent(), template);
                            });

                        // Watch submit of form
                        scope.$watch(function(){
                            return formController.$submitted;
                        }, function(isSubmitted){
                            if(false === isSubmitted){
                                return;
                            }

                            validate();
                        });

                        // Watch valid of filed
                        scope.$watch(function(){
                            return Validation.getFirstErrorType(formController[name]);
                        }, function(){
                            if(false === formController.$submitted){
                                return;
                            }

                            validate();
                        });
                    }());

                    /**
                     *
                     * @returns {Promise}
                     */
                    function getTemplate(){
                        return $templateRequest('qul.ui.validation/views/elements/qul-validation-error.html');
                    }

                    /**
                     *
                     * @param element
                     * @param template
                     */
                    function appendTemplate(element, template){
                        var elem = angular.element(template);

                        element.append(elem);
                        $compile(elem)(scope);
                    }


                    /**
                     * Valid form - get error message
                     */
                    function validate(){
                        var messages    = (null !== validationMessages) ? validationMessages.getMessages() : undefined;

                        scope.errorMessage = Validation.getFirstErrorValidationMessage(formController[name], messages);
                    }
                }
            }
        });
}());
